import React from 'react';


import AppointmentsCalendarCard from './AppointmentsCalendarCard';
import TodaysAppointmentsCard from './TodaysAppointmentsCard';
import NextAppointmentCard from './NextAppointmentCard';

import './MainPageGroup.css';

const MainPageGroup = props => {


    return (
        <div className="main__wrapper">
            <div className="main-page-group__info">
                <h1><span className="main-page-group__info-emoji">👋</span> Welcome, Niko</h1>
                <p>Here you can find today's appointemnts</p>
            </div>
            <div className="main-page-group__container">
                <div className='main-page-group__container-left'>
                    <NextAppointmentCard appointments={props.appointments}/>
                    <TodaysAppointmentsCard appointments={props.appointments} />
                </div>
                <AppointmentsCalendarCard appointments={props.appointments} />


            </div>
        </div>

    );
};

export default MainPageGroup;
