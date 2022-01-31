import React from 'react';


import PatientCard from './PatientCard';
import MeasurementsCard from './MeasurementsCard';
import PatientAppointmentsCard from './PatientAppointmentsCard';
import GraphsCard from './GraphsCard';

import './PatientGroup.css';

const PatientGroup = props => {


    return (
        <div className="main__wrapper">
            <div className="patient-group__info">
                <h1>Patient information</h1>
                <p>Check informations about your patients</p>
            </div>
            <div className="patient-group__container">
                <PatientAppointmentsCard appointments={props.patient.appointmentsList} />
                <MeasurementsCard measurements={props.patient.measurementsList} />
                <PatientCard patient={props.patient} editable={true} />
            </div>
            <GraphsCard measurements={props.patient.measurementsList}/>
        </div>

    );
};

export default PatientGroup;
