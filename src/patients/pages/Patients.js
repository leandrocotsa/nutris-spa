import React, { useEffect, useState } from 'react';
import { useHttpClient } from '../../shared/hooks/http-hook';

import PatientsList from '../components/PatientsList';

const Patients = () => {


  const [loadedPatients, setLoadedPatients] = useState();

  const { isLoading, error, sendRequest, clearError } = useHttpClient();



  useEffect(() => {
    const fetchAppointments = async () => { //not a good practice to turn useEffect into async so this is the way to go

      try {
        const responseData = await sendRequest(
          'http://localhost:8080/patients',
          'GET', null,
          {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtakBnbWFpbC5jb20iLCJhdWQiOiJST0xFX05VVFJJVElPTklTVCIsImV4cCI6MTY1NDM1NjA0NiwiaWF0IjoxNjQ1NzE2MDQ2LCJqdGkiOiIxIn0.fPi-lfPU8PN4aSitBAVHKH4Y_j1dVvf5fmCk8UtaEZKRPZDiNiJpfEjLIzRRk0Oy86R9uE6bVOKZZBDKFCg5DA'
          }
        );
        setLoadedPatients(responseData);
      } catch (err) {

      }
    };
    fetchAppointments();

    //first fetch with all appointments
    //set dos appointments no current
    //props que faz fazer fetch de tudo ou so dos de hoje?
  }, [sendRequest]);


  const patientDeletedHandler = (patientId) => {
    setLoadedPatients(prevPatients => {
      prevPatients.filter(patient => patient.id !== patientId);
    })
  }




  const USERS = [
    {
      id: 'u1',
      name: 'Nikocado Avocado',
      weightGoal: '80',
      currentWeight: '98',
      weightDif: '-2',
      birthDate: '25/04/1998',
      lastAppointment: '22/09/2020',
      image:
        'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
      id: 'u2',
      name: 'Nikocado Avocado',
      weightGoal: '80',
      currentWeight: '98',
      weightDif: '+1',
      birthDate: '25/04/1998',
      lastAppointment: '22/09/2020',
      image:
        'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
      id: 'u3',
      name: 'Nikocado Avocado',
      weightGoal: '80',
      currentWeight: '98',
      weightDif: '-2',
      birthDate: '25/04/1998',
      lastAppointment: '22/09/2020',
      image:
        'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
      id: 'u4',
      name: 'Nikocado Avocado',
      weightGoal: '80',
      currentWeight: '98',
      weightDif: '+2',
      birthDate: '25/04/1998',
      lastAppointment: '22/09/2020',
      image:
        'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
      id: 'u5',
      name: 'Nikocado Avocado',
      weightGoal: '80',
      currentWeight: '98',
      weightDif: '-2',
      birthDate: '25/04/1998',
      lastAppointment: '22/09/2020',
      image:
        'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
      id: 'u6',
      name: 'Nikocado Avocado',
      weightGoal: '80',
      currentWeight: '98',
      weightDif: '-2',
      birthDate: '25/04/1998',
      lastAppointment: '22/09/2020',
      image:
        'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
      id: 'u7',
      name: 'Nikocado Avocado',
      weightGoal: '80',
      currentWeight: '98',
      weightDif: '-2',
      birthDate: '25/04/1998',
      lastAppointment: '22/09/2020',
      image:
        'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
      id: 'u8',
      name: 'Nikocado Avocado',
      weightGoal: '80',
      currentWeight: '98',
      weightDif: '-2',
      birthDate: '25/04/1998',
      lastAppointment: '22/09/2020',
      image:
        'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
      id: 'u9',
      name: 'Nikocado Avocado',
      weightGoal: '80',
      currentWeight: '98',
      weightDif: '-2',
      birthDate: '25/04/1998',
      lastAppointment: '22/09/2020',
      image:
        'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    }
  ];




  return (

    <div className="main__wrapper">
      <div className="patients-list__info">
        <h1>Patients</h1>
        <p>Check all your patients</p>
      </div>
      

      <PatientsList patients={loadedPatients} isLoading={isLoading} onDelete={patientDeletedHandler} />

    </div>
  );
};

export default Patients;
