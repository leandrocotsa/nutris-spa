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

  const [loadedPlan, setLoadedPlan] = useState();

  const { isLoading, sendRequest } = useHttpClient();

  const auth = useContext(AuthContext);

  useEffect(() => {
    const fetchAliments = async () => {
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
    fetchAliments();

  }, [auth.token, sendRequest]);




  useEffect(() => {
    if(patient.hasFoodplan) {
    const fetchFoodPlan = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:8080/patients/${patient.id}/plan`,
          'GET', null,
          {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + auth.token
          }
        );
        setLoadedPlan(responseData);
      } catch (err) {

      }
    };
    fetchFoodPlan();
  }
    

  }, [auth.token, patient.id, sendRequest]);


  return (

    <div className="main__wrapper">
      <div className="food-plan-group__info">
        <h1>Food plan of {patient.firstName + ' ' + patient.lastName}</h1>
        <p>Create complete food plans</p>
      </div>

      {!isLoading && loadedAliments
        ?
        <FoodPlanGroup patient={patient} aliments={loadedAliments} plan={loadedPlan}/>
        :
        <div className='empty-warning'>
          <Loader color="teal" size="sm" variant="dots" />
        </div>}

    </div>
  );
};

export default FoodPlan;
