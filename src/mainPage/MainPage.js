import React, { useContext, useEffect, useState } from 'react';
import ErrorModal from '../shared/components/FormElements/ErrorModal';
import WarningModal from '../shared/components/FormElements/WarningModal';
import { AuthContext } from '../shared/context/auth-context';
import { useHttpClient } from '../shared/hooks/http-hook';
import AppointmentsCalendarCard from './components/AppointmentsCalendarCard';

import MainPageGroup from './components/MainPageGroup';
import NextAppointmentCard from './components/NextAppointmentCard';
import TodaysAppointmentsCard from './components/TodaysAppointmentsCard';

import './MainPage.css';

const MainPage = () => {
    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    const [loadedAppointments, setLoadedAppointments] = useState();

    const [opened, setOpened] = useState(false);


    const auth = useContext(AuthContext);




    useEffect(() => {
        const fetchAppointments = async () => { //not a good practice to turn useEffect into async so this is the way to go

            try {
                const responseData = await sendRequest(
                    'http://localhost:8080/appointments',
                    'GET', null,
                    {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + auth.token
                    }
                );

                setLoadedAppointments(responseData);
            } catch (err) {
                setOpened(true);
            }
        };
        fetchAppointments();
    }, [auth.token, sendRequest]);

    const appointmentDeletedHandler = (appointmentId) => {
        setLoadedAppointments(prevAppointments => {
            prevAppointments.filter(appointment => appointment.id !== appointmentId);
        })
    }



    return (

        <React.Fragment>

            <ErrorModal
                opened={opened}
                onClose={() => {
                    setOpened(false)
                }}
                error={error}
            />

            <div className="main__wrapper">
                <div className="main-page-group__info">
                    <h1><span className="main-page-group__info-emoji">👋</span> Welcome, Niko</h1>
                    <p>Here you can find today's appointments</p>
                </div>
                <div className="main-page-group__container">
                    <div className='main-page-group__container-left'>
                        {!isLoading && loadedAppointments &&
                            <React.Fragment>
                                <NextAppointmentCard appointments={loadedAppointments} />
                                <TodaysAppointmentsCard appointments={loadedAppointments} onDelete={appointmentDeletedHandler} />
                            </React.Fragment>
                        }

                    </div>
                    {!isLoading && loadedAppointments &&
                        <AppointmentsCalendarCard appointments={loadedAppointments} />
                    }


                </div>
            </div>

        </React.Fragment>

    );
};

export default MainPage;
