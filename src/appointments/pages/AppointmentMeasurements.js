import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

import { Button, Radio, RadioGroup, TextInput, Divider, Select, NumberInput, Loader } from '@mantine/core';


import OngoingAppointmentForm from '../components/OngoingAppointmentForm';

import './AppointmentMeasurements.css';
import PatientCard from '../../patients/components/singlePatient/PatientCard';
import MeasurementsCard from '../../patients/components/singlePatient/MeasurementsCard';
import Card from '../../shared/components/UIElements/Card';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { useForm } from '@mantine/hooks';

import { BsCheckCircleFill } from 'react-icons/bs';
import { useNotifications } from '@mantine/notifications';
import { AuthContext } from '../../shared/context/auth-context';


const AppointmentMeasurements = (props) => {


  //fetch do patient e por num state
  const appointmentId = useParams().appointmentId;

  const [searchParams, setSearchParams] = useSearchParams();
  const patientId = searchParams.get("patient");


  const [loadedPatient, setLoadedPatient] = useState();

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const navigate = useNavigate();

  const notifications = useNotifications();

  const auth = useContext(AuthContext);

  useEffect(() => {


    const fetchPatient = async () => { //not a good practice to turn useEffect into async so this is the way to go

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
    fetchPatient();



    //first fetch with all appointments
    //set dos appointments no current
    //props que faz fazer fetch de tudo ou so dos de hoje?
  }, [patientId, sendRequest]);



  const form = useForm({
    initialValues: {
      basalMetabolism: '',
      bodyAge: '',
      boneMass: '',
      chestPerimeter: '',
      date: '',
      fatMassPerc: '',
      hipPerimeter: '',
      imc: '',
      kgLeanMass: '',
      others: '',
      visceralFat: '',
      waistPerimeter: '',
      waterPerc: '',
      weight: ''

    },
    validationRules: {
      name: (value) => value.trim().length >= 2,
    },
  });



  const finishAppointmentHandler = async (event) => {
    event.preventDefault();


    const newMeasurements = {
      basalMetabolism: form.values.basalMetabolism,
      bodyAge: form.values.bodyAge,
      boneMass: form.values.boneMass,
      chestPerimeter: form.values.chestPerimeter,
      date: new Date().toISOString(),
      fatMassPerc: form.values.fatMassPerc,
      hipPerimeter: form.values.hipPerimeter,
      imc: form.values.imc,
      kgLeanMass: form.values.kgLeanMass,
      visceralFat: form.values.visceralFat,
      waistPerimeter: form.values.waistPerimeter,
      waterPerc: form.values.waterPerc,
      weight: form.values.weight

    }


    //nao está a ir para o backend
    try {
      await sendRequest(
        `http://localhost:8080/appointments/${appointmentId}/finish`,
        'PATCH',
        JSON.stringify(newMeasurements),
        {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + auth.token

        }
      );

      navigate(`/patients/${patientId}`);

      notifications.showNotification({
        title: 'Appointment finished!',
        message: 'You can check all your appointments in the Appointments page.',
        radius: 'lg',
        icon: (<BsCheckCircleFill />),
        color: "teal"
      })
    } catch (err) {
    }

  }




  return (
    <div className="main__wrapper">
      <div className="ongoing-appointment-form__info">
        <h1>New body measurements registration</h1>
        <p>Register the new body measurements of the patient</p>
      </div>




      <div className="ongoing-appointment-form__container">

        <div className="ongoing-appointment-form__left-column">

          <Card className='ongoing-appointment-card'>
            <form onSubmit={finishAppointmentHandler}>
              <div className="ongoing-appointment-form__item">
                <NumberInput
                  placeholder="Patient's weight"
                  label="Weight (in kg)"
                  variant="filled"
                  radius="md"
                  size="xs"
                  precision={2}
                  step={0.05}
                  {...form.getInputProps('weight')}
                />
              </div>

              <div className="ongoing-appointment-form__item">
                <NumberInput
                  placeholder="Patient's IMC"
                  label="IMC"
                  variant="filled"
                  radius="md"
                  size="xs"
                  precision={2}
                  step={0.05}
                  style={{ marginTop: 20 }}
                  {...form.getInputProps('imc')}
                />
              </div>

              <div className="ongoing-appointment-form__item">
                <NumberInput
                  placeholder="Patient's fat mass in %"
                  label="Fat mass percentage"
                  variant="filled"
                  radius="md"
                  size="xs"
                  precision={2}
                  step={0.05}
                  style={{ marginTop: 20 }}
                  {...form.getInputProps('fatMassPerc')}
                />
              </div>

              <div className="ongoing-appointment-form__item">
                <NumberInput
                  placeholder="Patient's lean mass in kg"
                  label="Lean mass"
                  variant="filled"
                  radius="md"
                  size="xs"
                  precision={2}
                  step={0.05}
                  style={{ marginTop: 20 }}
                  {...form.getInputProps('kgLeanMass')}
                />
              </div>

              <div className="ongoing-appointment-form__item">
                <NumberInput
                  placeholder="Patient's water percentage"
                  label="Water percentage"
                  variant="filled"
                  radius="md"
                  size="xs"
                  precision={2}
                  step={0.05}
                  style={{ marginTop: 20 }}
                  {...form.getInputProps('waterPerc')}
                />
              </div>

              <div className="ongoing-appointment-form__item">
                <NumberInput
                  placeholder="Patient's Basal metabolism"
                  label="Basal metabolism"
                  variant="filled"
                  radius="md"
                  size="xs"
                  precision={2}
                  step={0.05}
                  style={{ marginTop: 20 }}
                  {...form.getInputProps('basalMetabolism')}
                />
              </div>

              <div className="ongoing-appointment-form__item">
                <NumberInput
                  placeholder="Patient's visceral fat"
                  label="Visceral fat"
                  variant="filled"
                  radius="md"
                  size="xs"
                  precision={2}
                  step={0.05}
                  style={{ marginTop: 20 }}
                  {...form.getInputProps('visceralFat')}
                />
              </div>

              <div className="ongoing-appointment-form__item">
                <NumberInput
                  placeholder="Patient's bone mass"
                  label="Bone mass"
                  variant="filled"
                  radius="md"
                  size="xs"
                  precision={2}
                  step={0.05}
                  style={{ marginTop: 20 }}
                  {...form.getInputProps('boneMass')}
                />
              </div>

              <div className="ongoing-appointment-form__item">
                <NumberInput
                  placeholder="Patient's body age"
                  label="Body age"
                  variant="filled"
                  radius="md"
                  size="xs"
                  style={{ marginTop: 20 }}
                  {...form.getInputProps('bodyAge')}
                />
              </div>

              <div className="ongoing-appointment-form__item">
                <NumberInput
                  placeholder="Patient's waist perimeter in cm"
                  label="Waist perimeter"
                  variant="filled"
                  radius="md"
                  size="xs"
                  precision={2}
                  step={0.05}
                  style={{ marginTop: 20 }}
                  {...form.getInputProps('waistPerimeter')}
                />
              </div>

              <div className="ongoing-appointment-form__item">
                <NumberInput
                  placeholder="Patient's hip perimeter in cm"
                  label="Hip perimeter"
                  variant="filled"
                  radius="md"
                  size="xs"
                  precision={2}
                  step={0.05}
                  style={{ marginTop: 20 }}
                  {...form.getInputProps('hipPerimeter')}
                />
              </div>

              <div className="ongoing-appointment-form__item">
                <NumberInput
                  placeholder="Patient's chest perimeter in cm"
                  label="Chest perimeter"
                  variant="filled"
                  radius="md"
                  size="xs"
                  precision={2}
                  step={0.05}
                  style={{ marginTop: 20, marginBottom: 20 }}
                  {...form.getInputProps('chestPerimeter')}
                />
              </div>



              <div className='new-measurement-form__submit-button'>
                <Button type='submit' color='teal' variant="outline" compact>Submit</Button>
              </div>

            </form >
          </Card>

        </div>

        <div className="ongoing-appointment-form__right-column">

          {!isLoading && loadedPatient ?
            <React.Fragment>
              <div className='ongoing-appointment-card'>
                <PatientCard className="ongoing-appointment-card-patient" patient={loadedPatient} editable={false} />
              </div>
              <div className='ongoing-appointment-card'>
                <MeasurementsCard measurements={loadedPatient.measurementsList} />
              </div>
            </React.Fragment>

            :

            <div className='empty-warning'><Loader color="teal" size="sm" variant="dots" /> </div>
          }






        </div>






      </div>


    </div >

  );
};

export default AppointmentMeasurements;