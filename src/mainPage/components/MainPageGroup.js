import React, { useEffect, useState } from 'react';


import AppointmentsCalendarCard from './AppointmentsCalendarCard';
import TodaysAppointmentsCard from './TodaysAppointmentsCard';
import NextAppointmentCard from './NextAppointmentCard';

import './MainPageGroup.css';
import { useHttpClient } from '../../shared/hooks/http-hook';

const MainPageGroup = props => {

    const { isLoading, sendRequest } = useHttpClient();

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
