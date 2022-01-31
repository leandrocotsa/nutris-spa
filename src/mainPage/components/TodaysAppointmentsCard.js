import React from 'react';

import Card from '../../shared/components/UIElements/Card';

import { AppointmentsTable } from '../../appointments/components/AppointmentsTable';




import './TodaysAppointmentsCard.css';


const TodaysAppointmentsCard = props => {






    if (props.appointments.length === 0) {
        return (
            <div className="center">
                <h2>No patients found.</h2>
            </div>
        );
    }


    return (


        <Card className="todays-appointments-card">
            <div className="todays-appointments-card-header">
                <h2>Today's appointments</h2>
            </div>

            <div className='todays-appointments-card__container'>

                <AppointmentsTable appointments={props.appointments} patientName={true} endDate={true}/>

            </div>

        </Card>

    );
};

export default TodaysAppointmentsCard;
