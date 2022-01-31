import React from 'react';

import Card from '../../../shared/components/UIElements/Card';

import { AppointmentsTable } from '../../../appointments/components/AppointmentsTable';



import './PatientAppointmentsCard.css';

const PatientAppointmentsCard = props => {



    if (props.appointments.length === 0) {
        return (
            <div className="center">
                <h2>No patients found.</h2>
            </div>
        );
    }

    return (

        <Card className="appointments-card">

            <h2>Appointments</h2>

            <div className='appointments-card__container'>

                <AppointmentsTable appointments={props.appointments} patientName={false} endDate={false}/>


            </div>

        </Card>
    );
};

export default PatientAppointmentsCard;
