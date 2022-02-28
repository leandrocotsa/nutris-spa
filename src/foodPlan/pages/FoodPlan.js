import { Loader } from '@mantine/core';
import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../shared/context/auth-context';
import { useHttpClient } from '../../shared/hooks/http-hook';

import FoodPlanGroup from '../components/FoodPlanGroup';

const FoodPlan = () => {


  const location = useLocation();
  const { patient } = location.state;

  const [loadedAliments, setLoadedAliments] = useState();

  const { isLoading, sendRequest } = useHttpClient();

  const auth = useContext(AuthContext);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const responseData = await sendRequest(
          'http://localhost:8080/aliments/',
          'GET', null,
          {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + auth.token
          }
        );
        setLoadedAliments(responseData);
      } catch (err) {

      }
    };
    fetchAppointments();

  }, [auth.token, sendRequest]);


  return (

    <div className="main__wrapper">
      <div className="food-plan-group__info">
        <h1>Food plan of {patient.firstName + ' ' + patient.lastName}</h1>
        <p>Create complete food plans</p>
      </div>

      {!isLoading && loadedAliments
        ?
        <FoodPlanGroup patient={patient} aliments={loadedAliments} />
        :
        <div className='empty-warning'>
          <Loader color="teal" size="sm" variant="dots" />
        </div>}

    </div>
  );
};

export default FoodPlan;
