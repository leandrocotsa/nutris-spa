import React from 'react';

import Card from '../../../shared/components/UIElements/Card';

import { AppointmentsTable } from '../../../appointments/components/AppointmentsTable';



import './PatientAppointmentsCard.css';

const PatientAppointmentsCard = props => {





    return (

        <Card className="appointments-card">

            <h2>Appointments</h2>

            <div className='appointments-card__container'>

                <AppointmentsTable appointments={props.appointments} patientName={false} endDate={false} type={false}/>


            </div>

        </Card>
    );
};

export default PatientAppointmentsCard;
