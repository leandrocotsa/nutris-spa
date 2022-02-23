import React, { useEffect, useState } from 'react';


import AppointmentsCalendarCard from './AppointmentsCalendarCard';
import TodaysAppointmentsCard from './TodaysAppointmentsCard';
import NextAppointmentCard from './NextAppointmentCard';

import './MainPageGroup.css';
import { useHttpClient } from '../../shared/hooks/http-hook';

const MainPageGroup = props => {

    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    const [loadedAppointments, setLoadedAppointments] = useState();


    useEffect(() => {
        const fetchAppointments = async () => { //not a good practice to turn useEffect into async so this is the way to go

            try {
                const responseData = await sendRequest(
                    'http://localhost:8080/appointments',
                    'GET', null,
                    {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtakBnbWFpbC5jb20iLCJhdWQiOiJST0xFX05VVFJJVElPTklTVCIsImV4cCI6MTY0NTcxNTg0MCwiaWF0IjoxNjM3MDc1ODQwLCJqdGkiOiIxIn0.Hj9vs2H_BWjFnQax6x51dqtK4io3_oHpZc57R0OZuYaDCKEyidtZfSXS1SREupJTNl3nWZznA69Al6JaWJDK-w'
                    }
                );
                console.log("requested data")
                setLoadedAppointments(responseData);
            } catch (err) {

            }
        };
        fetchAppointments();
    }, [sendRequest]);



    return (
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
                            <TodaysAppointmentsCard appointments={loadedAppointments} />
                        </React.Fragment>
                    }

                </div>
                {!isLoading && loadedAppointments &&
                    <AppointmentsCalendarCard appointments={loadedAppointments} />
                }


            </div>
        </div>

    );
};

export default MainPageGroup;
