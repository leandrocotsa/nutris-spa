import React from 'react';

import MainPageGroup from './components/MainPageGroup';

const MainPage = () => {
  const APPS = [
    {
      "id": 1,
      "startDate": "2021-11-05T12:00:00.000Z",
      "endDate": "2021-11-05T13:00:00.000Z",
      "patientName": "Ana",
      "patientId": 2,
      "nutritionistName": "Diana Costa",
      "nutritionistId": 1,
      "state": "COMPLETED",
      "type": "FIRST",
      "notes": "string"
    },
    {
      "id": 2,
      "startDate": "2021-11-06T13:00:00.000Z",
      "endDate": "2021-11-06T14:00:00.000Z",
      "patientName": "Ana",
      "patientId": 2,
      "nutritionistName": "Diana Costa",
      "nutritionistId": 1,
      "state": "SCHEDULED",
      "type": "FIRST",
      "notes": "string"
    },       {
      "id": 3,
      "startDate": "2022-01-27T10:00:00.000Z",
      "endDate": "2022-01-27T12:00:00.000Z",
      "patientName": "Ana",
      "patientId": 2,
      "nutritionistName": "Diana Costa",
      "nutritionistId": 1,
      "state": "COMPLETED",
      "type": "FIRST",
      "notes": "string"
    }
  ];

  return <MainPageGroup appointments={APPS} />;
};

export default MainPage;
