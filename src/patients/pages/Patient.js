import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useHttpClient } from '../../shared/hooks/http-hook';
import GraphsCard from '../components/singlePatient/GraphsCard';
import MeasurementsCard from '../components/singlePatient/MeasurementsCard';
import PatientAppointmentsCard from '../components/singlePatient/PatientAppointmentsCard';
import PatientCard from '../components/singlePatient/PatientCard';

import PatientGroup from '../components/singlePatient/PatientGroup';

import { Loader } from '@mantine/core';


const Patient = () => {

  const patientId = useParams().patientId;

  const [loadedPatient, setLoadedPatient] = useState();

  const { isLoading, error, sendRequest, clearError } = useHttpClient();







  useEffect(() => {
    const fetchAppointments = async () => { //not a good practice to turn useEffect into async so this is the way to go

      try {
        const responseData = await sendRequest(
          'http://localhost:8080/patients/' + patientId,
          'GET', null,
          {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtakBnbWFpbC5jb20iLCJhdWQiOiJST0xFX05VVFJJVElPTklTVCIsImV4cCI6MTY1NDM1NjA0NiwiaWF0IjoxNjQ1NzE2MDQ2LCJqdGkiOiIxIn0.fPi-lfPU8PN4aSitBAVHKH4Y_j1dVvf5fmCk8UtaEZKRPZDiNiJpfEjLIzRRk0Oy86R9uE6bVOKZZBDKFCg5DA'
          }
        );
        setLoadedPatient(responseData);
      } catch (err) {

      }
    };
    fetchAppointments();

    //first fetch with all appointments
    //set dos appointments no current
    //props que faz fazer fetch de tudo ou so dos de hoje?
  }, [sendRequest]);

  



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
            <MeasurementsCard measurements={loadedPatient.measurementsList} />
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