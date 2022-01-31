import React from 'react';

import FoodPlanGroup from '../components/FoodPlanGroup';

const FoodPlan = () => {

    const patientData =
  {
    "id": 2,
    "fullName": "Nikocado Avocado",
    "birthDate": "1998-01-01",
    "phoneNumber": "912345678",
    "sex": "Male",
    "profilePicture": null,
    "familyNumber": 0,
    "maritalStatus": "string",
    "email": "niko@gmail.com",
    "anamnesis": {
      "healthProblems": "string",
      "medication": "string",
      "healthBackground": "string",
      "reasonAppointment": "string",
      "minimalWeight": 70.0,
      "maximumWeight": 100.0,
      "desiredWeight": 75.0,
      "height": 170,
      "activityQuotient": 0.0,
      "allergies": "string",
      "intestinalTransit": "string",
      "urineColor": "string",
      "waterConsumption": "string",
      "coffee": "string",
      "refrigerants": "string",
      "weekendExceptions": "string",
      "knowsCooking": true,
      "wakeUpHour": "string",
      "bedHour": "string",
      "dailyMealsSummary": "string"
    },
    "macroNutrients": {
      "idealWeight": 65.30000000000001,
      "vet": 0.0,
      "metBasalRefWeight": 3146.3862500000005,
      "metBasalCurrentWeight": 7629.2300000000005,
      "proteins": 190.73075000000003,
      "fat": 127.15383333333335,
      "hydrates": 476.82687500000003
    },
    "appointmentsList": [
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
      }
    ]
  };
  

  return <FoodPlanGroup patient={patientData} />;
};

export default FoodPlan;
