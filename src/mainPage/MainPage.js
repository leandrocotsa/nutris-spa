import React, { useEffect, useState } from 'react';
import { useHttpClient } from '../shared/hooks/http-hook';
import AppointmentsCalendarCard from './components/AppointmentsCalendarCard';

import MainPageGroup from './components/MainPageGroup';
import NextAppointmentCard from './components/NextAppointmentCard';
import TodaysAppointmentsCard from './components/TodaysAppointmentsCard';

import './MainPage.css';

const MainPage = () => {
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
                        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtakBnbWFpbC5jb20iLCJhdWQiOiJST0xFX05VVFJJVElPTklTVCIsImV4cCI6MTY1NDM1NjA0NiwiaWF0IjoxNjQ1NzE2MDQ2LCJqdGkiOiIxIn0.fPi-lfPU8PN4aSitBAVHKH4Y_j1dVvf5fmCk8UtaEZKRPZDiNiJpfEjLIzRRk0Oy86R9uE6bVOKZZBDKFCg5DA'
                    }
                );
                console.log("requested data")
                setLoadedAppointments(responseData);
            } catch (err) {

            }
        };
        fetchAppointments();
    }, [sendRequest]);

    const appointmentDeletedHandler = (appointmentId) => {
      setLoadedAppointments(prevAppointments => {
        prevAppointments.filter(appointment => appointment.id !== appointmentId);
      })
    }



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
                            <TodaysAppointmentsCard appointments={loadedAppointments} onDelete={appointmentDeletedHandler}  />
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

export default MainPage;
