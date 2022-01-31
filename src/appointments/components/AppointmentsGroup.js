import React from 'react';

import AllAppointmentsCard from './AllAppointmentsCard';

import './AppointmentsGroup.css';

const AppointmentsGroup = props => {


    return (
        <div className="main__wrapper">
            <div className="appointment-group__info">
                <h1>Appointments</h1>
                <p>Check informations about your appointments</p>
            </div>
            <div className="appointment-group__container">
                <div className='appointment-group__container-left'>
                    <AllAppointmentsCard appointments={props.appointments} />
                </div>



            </div>
        </div>

    );
};

export default AppointmentsGroup;
