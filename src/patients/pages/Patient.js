import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useHttpClient } from '../../shared/hooks/http-hook';
import GraphsCard from '../components/singlePatient/GraphsCard';
import MeasurementsCard from '../components/singlePatient/MeasurementsCard';
import PatientAppointmentsCard from '../components/singlePatient/PatientAppointmentsCard';
import PatientCard from '../components/singlePatient/PatientCard';


import { Loader } from '@mantine/core';
import { AuthContext } from '../../shared/context/auth-context';


import './Patient.css';

const Patient = () => {

  const patientId = useParams().patientId;

  const [loadedPatient, setLoadedPatient] = useState();

  const { isLoading, sendRequest } = useHttpClient();

  const auth = useContext(AuthContext);







  useEffect(() => {
    const fetchAppointments = async () => { //not a good practice to turn useEffect into async so this is the way to go

      try {
        const responseData = await sendRequest(
          'http://localhost:8080/patients/' + patientId,
          'GET', null,
          {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + auth.token
          }
        );
        setLoadedPatient(responseData);
      } catch (err) {

      }
    };
    fetchAppointments();

  }, [auth.token, patientId, sendRequest]);

  



  return (
    <div className="main__wrapper">
      <div className="patient-group__info">
        <h1>Patient information</h1>
        <p>Check all details about your patient</p>
      </div>

      {!isLoading && loadedPatient ?
        <React.Fragment>
          <div className="patient-group__container">
            <PatientAppointmentsCard appointments={loadedPatient.appointmentsList} />
            <MeasurementsCard measurements={loadedPatient.measurementsList} patientId={loadedPatient.id} editable/>
            <PatientCard patient={loadedPatient} editable={true} />
          </div>
          <GraphsCard measurements={loadedPatient.measurementsList} />

        </React.Fragment>
        :
        <div className='empty-warning'>
          <Loader color="teal" size="sm" variant="dots" />
        </div>
      }


    </div>

  );
};

export default Patient;