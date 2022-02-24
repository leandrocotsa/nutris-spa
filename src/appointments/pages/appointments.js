import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../shared/context/auth-context';
import { useHttpClient } from '../../shared/hooks/http-hook';
import AllAppointmentsCard from '../components/AllAppointmentsCard';




import './Appointments.css';

const Appointments = () => {



  const [loadedAppointments, setLoadedAppointments] = useState();

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const auth = useContext(AuthContext);



  useEffect(() => {
    const fetchAppointments = async () => { //not a good practice to turn useEffect into async so this is the way to go

      try {
        const responseData = await sendRequest(
          'http://localhost:8080/appointments',
          'GET', null,
          {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + auth.token
          }
        );
        setLoadedAppointments(responseData);
      } catch (err) {

      }
    };
    fetchAppointments();

    //first fetch with all appointments
    //set dos appointments no current
    //props que faz fazer fetch de tudo ou so dos de hoje?
  }, [sendRequest]);


  const appointmentDeletedHandler = (appointmentId) => {
    setLoadedAppointments(prevAppointments => {
      prevAppointments.filter(appointment => appointment.id !== appointmentId);
    })
  }




  return (

    <div className="main__wrapper">
      <div className="appointment-group__info">
        <h1>Appointments</h1>
        <p>Check information about your appointments</p>
      </div>
      <div className="appointment-group__container">
        <div className='appointment-group__container-left'>

            <AllAppointmentsCard appointments={loadedAppointments} isLoading={isLoading} onDelete={appointmentDeletedHandler} />
      

        </div>
      </div>
    </div>

  );
};

export default Appointments;
