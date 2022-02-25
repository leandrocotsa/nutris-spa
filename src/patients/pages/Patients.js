import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../shared/context/auth-context';
import { useHttpClient } from '../../shared/hooks/http-hook';

import PatientsList from '../components/PatientsList';

const Patients = () => {


  const [loadedPatients, setLoadedPatients] = useState();

  const { isLoading, sendRequest } = useHttpClient();

  const auth = useContext(AuthContext);



  useEffect(() => {
    const fetchAppointments = async () => { //not a good practice to turn useEffect into async so this is the way to go

      try {
        const responseData = await sendRequest(
          'http://localhost:8080/patients',
          'GET', null,
          {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + auth.token
          }
        );
        setLoadedPatients(responseData);
      } catch (err) {

      }
    };
    fetchAppointments();


  }, [auth.token, sendRequest]);


  const patientDeletedHandler = (patientId) => {
    setLoadedPatients(prevPatients => {
      prevPatients.filter(patient => patient.id !== patientId);
    })
  }









  return (

    <div className="main__wrapper">
      <div className="patients-list__info">
        <h1>Patients</h1>
        <p>Check all your patients</p>
      </div>

      {!isLoading && loadedPatients &&

        <PatientsList patients={loadedPatients} isLoading={isLoading} onDelete={patientDeletedHandler} />

      }




    </div>
  );
};

export default Patients;
