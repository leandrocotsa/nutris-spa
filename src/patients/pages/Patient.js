import React from 'react';
import { useParams } from 'react-router-dom';

import PatientGroup from '../components/singlePatient/PatientGroup';


const Patient = () => {

  const patientId = useParams().patientId;

  const patientData =
  {
    "id": 2,
    "firstName": "Nikocado",
    "lastName": "Avocado",
    "birthDate": "01/01/1998",
    "phoneNumber": "912345678",
    "sex": "Male",
    "profilePicture": null,
    "familyNumber": 0,
    "maritalStatus": "Married",
    "email": "niko@gmail.com",
    "anamnesis": {
      "healthProblems": "None",
      "medication": "Benuron",
      "healthBackground": "Cancro",
      "reasonAppointment": "Quer ficar grosso",
      "minimalWeight": 70.0,
      "maximumWeight": 100.0,
      "desiredWeight": 75.0,
      "height": 170,
      "activityQuotient": 1.12,
      "allergies": "None",
      "intestinalTransit": "Normal",
      "urineColor": "#f20c0c",
      "waterConsumption": "1L per day",
      "coffee": "Never",
      "refrigerants": "Every day",
      "weekendExceptions": "Always mac",
      "knowsCooking": "yes",
      "wakeUpHour": "10:00",
      "bedHour": "22:00",
      "dailyMealsSummary": "Come rissois quase todos os dias e é viciado em coca cola portanto bebe em todas as refeições."
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
    ],
    "measurementsList": [
      {
        "id": 1,
        "date": "2021-11-04",
        "weight": 100.0,
        "imc": 6.0,
        "fatMassPerc": 20.0,
        "kgLeanMass": 20.0,
        "waterPerc": 3.0,
        "basalMetabolism": 5,
        "visceralFat": 5,
        "boneMass": 20.0,
        "bodyAge": 28,
        "waistPerimeter": 2.0,
        "hipPerimeter": 10.0,
        "chestPerimeter": 30.0,
        "others": "string"
      },{
        "id": 2,
        "date": "2022-11-04",
        "weight": 92.0,
        "imc": 6.0,
        "fatMassPerc": 16.0,
        "kgLeanMass": 20.0,
        "waterPerc": 3.0,
        "basalMetabolism": 5,
        "visceralFat": 5,
        "boneMass": 20.0,
        "bodyAge": 28,
        "waistPerimeter": 2.0,
        "hipPerimeter": 10.0,
        "chestPerimeter": 30.0,
        "others": "string"
      },{
        "id": 3,
        "date": "2023-11-04",
        "weight": 88.0,
        "imc": 6.0,
        "fatMassPerc": 20.0,
        "kgLeanMass": 17.0,
        "waterPerc": 3.0,
        "basalMetabolism": 5,
        "visceralFat": 5,
        "boneMass": 20.0,
        "bodyAge": 28,
        "waistPerimeter": 2.0,
        "hipPerimeter": 10.0,
        "chestPerimeter": 30.0,
        "others": "string"
      },
      {
        "id": 4,
        "date": "2024-11-04",
        "weight": 90.0,
        "imc": 6.0,
        "fatMassPerc": 20.0,
        "kgLeanMass": 19.0,
        "waterPerc": 3.0,
        "basalMetabolism": 5,
        "visceralFat": 5,
        "boneMass": 20.0,
        "bodyAge": 28,
        "waistPerimeter": 2.0,
        "hipPerimeter": 10.0,
        "chestPerimeter": 30.0,
        "others": "string"
      },{
        "id": 5,
        "date": "2025-11-04",
        "weight": 93.0,
        "imc": 6.0,
        "fatMassPerc": 20.0,
        "kgLeanMass": 20.0,
        "waterPerc": 3.0,
        "basalMetabolism": 5,
        "visceralFat": 5,
        "boneMass": 20.0,
        "bodyAge": 28,
        "waistPerimeter": 2.0,
        "hipPerimeter": 10.0,
        "chestPerimeter": 30.0,
        "others": "string"
      }
    ]
  };

  return (
      <PatientGroup patient={patientData} />
  )
};

export default Patient;