import React from 'react';

import Card from '../../shared/components/UIElements/Card';

import { Button, Radio, RadioGroup, TextInput, Select, NumberInput, ColorInput, Textarea, Accordion, ThemeIcon, PasswordInput } from '@mantine/core';
import { DatePicker, TimeInput } from '@mantine/dates';

import { BsFilePerson } from 'react-icons/bs';
import { MdMedicalServices } from 'react-icons/md';
import { IoLogIn } from 'react-icons/io5';


import NewPatientForm from '../components/NewPatientForm';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { useForm } from '@mantine/hooks';
import { useLocation, useNavigate } from 'react-router-dom';


const NewPatient = (props) => {


  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const navigate = useNavigate();

  const location = useLocation();
  const { appointmentId } = location.state;



  //verificar se é modal de update ou create appointment 

  const form = useForm({
    initialValues: {
      firstName: '',
      lastName: '',
      birthDate: '',
      phoneNumber: '',
      sex: '',
      familyNumber: '',
      maritalStatus: '',
      healthProblems: '',
      medication: '',
      reasonAppointment: '',
      minimalWeight: '',
      maximumWeight: '',
      desiredWeight: '',
      height: '',
      activityQuotient: '',
      allergies: '',
      intestinalTransit: '',
      urineColor: '',
      waterConsumption: '',
      coffee: '',
      refrigerants: '',
      weekendExceptions: '',
      knowsCooking: '',
      wakeUpHour: '',
      bedHour: '',
      dailyMealsSummary: '',
      email: '',
      password: ''

    },
    validationRules: {
      name: (value) => value.trim().length >= 2,
    },
  });



  const createPatientHandler = async (event) => {
    event.preventDefault();

    const newPatient = {
      anamnesis: {
        activityQuotient: form.values.activityQuotient,
        allergies: form.values.allergies,
        bedHour: form.values.bedHour,
        coffee: form.values.coffee,
        dailyMealsSummary: form.values.dailyMealsSummary,
        desiredWeight: form.values.desiredWeight,
        healthBackground: form.values.healthBackground,
        healthProblems: form.values.healthProblems,
        height: form.values.height,
        intestinalTransit: form.values.intestinalTransit,
        knowsCooking: form.values.knowsCooking,
        maximumWeight: form.values.maximumWeight,
        medication: form.values.medication,
        minimalWeight: form.values.minimalWeight,
        reasonAppointment: form.values.reasonAppointment,
        refrigerants: form.values.refrigerants,
        urineColor: form.values.urineColor,
        wakeUpHour: form.values.wakeUpHour,
        waterConsumption: form.values.waterConsumption,
        weekendExceptions: form.values.weekendExceptions
      },
      appointmentId: appointmentId,
      birthDate: new Date(form.values.birthDate).toISOString(),
      email: form.values.email,
      familyNumber: form.values.familyNumber,
      firstName: form.values.firstName,
      lastName: form.values.lastName,
      maritalStatus: form.values.maritalStatus,
      password: form.values.password,
      phoneNumber: form.values.phoneNumber,
      sex: form.values.sex
    }

    console.log(newPatient);
    //nao está a ir para o backend
    try {
      const responseData = await sendRequest(
        'http://localhost:8080/patients',
        'POST',
        JSON.stringify(newPatient),
        {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtakBnbWFpbC5jb20iLCJhdWQiOiJST0xFX05VVFJJVElPTklTVCIsImV4cCI6MTY1NDM1NjA0NiwiaWF0IjoxNjQ1NzE2MDQ2LCJqdGkiOiIxIn0.fPi-lfPU8PN4aSitBAVHKH4Y_j1dVvf5fmCk8UtaEZKRPZDiNiJpfEjLIzRRk0Oy86R9uE6bVOKZZBDKFCg5DA'

        }
      );

      navigate(`/appointments/${appointmentId}/measurements?${responseData.id}`);
    } catch (err) {

    }

  }


  return (
    <div className="main__wrapper">
      <div className="new-patient-form__info">
        <h1>New patient</h1>
        <p>Create the new patient</p>
      </div>

      <form onSubmit={createPatientHandler}>
        <div className="new-patient-form__container">

          <Card className='new-patient-card-wrapper'>

            <Accordion multiple disableIconRotation>

              <Accordion.Item
                label={<h3>Basic information</h3>}
                icon={
                  <ThemeIcon color="teal" variant="light">
                    <BsFilePerson />
                  </ThemeIcon>}>
                <Card className='new-patient-form__card'>




                  <div className="new-patient-form__item">
                    <TextInput
                      placeholder="Patient's first name"
                      label="First name"
                      variant="filled"
                      radius="md"
                      size="xs"
                      required
                      {...form.getInputProps('firstName')}
                    />
                  </div>

                  <div className="new-patient-form__item">
                    <TextInput
                      placeholder="Patient's last name"
                      label="Last name"
                      variant="filled"
                      radius="md"
                      size="xs"
                      style={{ marginTop: 20 }}
                      required
                      {...form.getInputProps('lastName')}
                    />
                  </div>

                  <div className="new-patient-form__item">
                    <DatePicker

                      placeholder="Pick date"
                      label="Birth date"
                      variant="filled"
                      radius="md"
                      size="xs"
                      style={{ marginTop: 20 }}
                      required
                      {...form.getInputProps('birthDate')}
                    />

                  </div>



                  <div className="new-patient-form__item">
                    <TextInput
                      placeholder="Patient's phone number"
                      label="Phone number"
                      variant="filled"
                      radius="md"
                      size="xs"
                      style={{ marginTop: 20 }}
                      {...form.getInputProps('phoneNumber')}
                    />
                  </div>

                  <div className="new-patient-form__item">
                    <Select
                      label="Gender"
                      placeholder="Pick one"
                      variant="filled"
                      radius="md"
                      size="xs"
                      style={{ marginTop: 20 }}
                      data={[
                        { value: 'Male', label: 'Male' },
                        { value: 'Female', label: 'Female' },
                        { value: 'Other', label: 'Other' }
                      ]}
                      {...form.getInputProps('sex')}
                    />
                  </div>

                  <div className="new-patient-form__item">
                    <NumberInput
                      placeholder="Number of family elements at home"
                      label="Familiy number"
                      variant="filled"
                      radius="md"
                      size="xs"
                      style={{ marginTop: 20 }}
                      {...form.getInputProps('familyNumber')}
                    />
                  </div>

                  <div className="new-patient-form__item">
                    <Select
                      label="Marital status"
                      placeholder="Pick one"
                      variant="filled"
                      radius="md"
                      size="xs"
                      style={{ marginTop: 20, marginBottom: 20 }}
                      data={[
                        { value: 'Single', label: 'Single' },
                        { value: 'Married', label: 'Married' },
                        { value: 'Divorced', label: 'Divorced' },
                        { value: 'Widowed', label: 'Widowed' }
                      ]}
                      {...form.getInputProps('maritalStatus')}
                    />
                  </div>

                </Card>

              </Accordion.Item>



              <Accordion.Item label={<h3>Anamnesis</h3>}
                icon={
                  <ThemeIcon color="blue" variant="light">
                    <MdMedicalServices />
                  </ThemeIcon>}>

                <Card className='new-patient-form__card'>

                  <div className="new-patient-form__item">
                    <TextInput
                      placeholder="Patient's health problems"
                      label="Health problems"
                      variant="filled"
                      radius="md"
                      size="xs"
                      {...form.getInputProps('healthProblems')}
                    />
                  </div>
                  <div className="new-patient-form__item">
                    <TextInput
                      placeholder="Medication taken by the patient"
                      label="Medication"
                      variant="filled"
                      radius="md"
                      size="xs"
                      style={{ marginTop: 20 }}
                      {...form.getInputProps('medication')}
                    />
                  </div>

                  <div className="new-patient-form__item">
                    <TextInput
                      placeholder="Patient's reason for the appointment"
                      label="Reason for appointment"
                      variant="filled"
                      radius="md"
                      size="xs"
                      style={{ marginTop: 20 }}
                      {...form.getInputProps('reasonAppointment')}
                    />
                  </div>


                  <div className="new-patient-form__item">
                    <NumberInput
                      placeholder="Patient's minimal weight"
                      label="Minimal weight (in kg)"
                      variant="filled"
                      radius="md"
                      size="xs"
                      style={{ marginTop: 20 }}
                      {...form.getInputProps('minimalWeight')}
                    />
                  </div>


                  <div className="new-patient-form__item">
                    <NumberInput
                      placeholder="Patient's maximum weight"
                      label="Maximum weight (in kg)"
                      variant="filled"
                      radius="md"
                      size="xs"
                      style={{ marginTop: 20 }}
                      {...form.getInputProps('maximumWeight')}
                    />
                  </div>

                  <div className="new-patient-form__item">
                    <NumberInput
                      placeholder="Patient's desired weight"
                      label="Desired weight (in kg)"
                      variant="filled"
                      radius="md"
                      size="xs"
                      style={{ marginTop: 20 }}
                      {...form.getInputProps('desiredWeight')}
                    />
                  </div>

                  <div className="new-patient-form__item">
                    <NumberInput
                      placeholder="Patient's height"
                      label="Height (in cm)"
                      variant="filled"
                      radius="md"
                      size="xs"
                      style={{ marginTop: 20 }}
                      required
                      {...form.getInputProps('height')}
                    />
                  </div>

                  <div className="new-patient-form__item">
                    <Select
                      label="Activity quotient"
                      placeholder="Pick one"
                      variant="filled"
                      radius="md"
                      size="xs"
                      style={{ marginTop: 20 }}
                      data={[
                        { value: 1.12, label: '1.12 - Light activity' },
                        { value: 1.29, label: '1.29 - Moderate activity' },
                        { value: 1.59, label: '1.59 - Intense activity' }
                      ]}
                      required
                      {...form.getInputProps('activityQuotient')}
                    />
                  </div>


                  <div className="new-patient-form__item">
                    <TextInput
                      placeholder="Patient's allergies"
                      label="Allergies"
                      variant="filled"
                      radius="md"
                      size="xs"
                      style={{ marginTop: 20 }}
                      {...form.getInputProps('allergies')}
                    />
                  </div>

                  <div className="new-patient-form__item">
                    <TextInput
                      placeholder="Patient's intestinal transit"
                      label="Intestinal transit"
                      variant="filled"
                      radius="md"
                      size="xs"
                      style={{ marginTop: 20 }}
                      {...form.getInputProps('intestinalTransit')}
                    />
                  </div>


                  <div className="new-patient-form__item">
                    <ColorInput
                      placeholder="Pick color"
                      label="Urine color"
                      variant="filled"
                      radius="md"
                      size="xs"
                      style={{ marginTop: 20 }}
                      {...form.getInputProps('urineColor')}
                    />
                  </div>

                  <div className="new-patient-form__item">
                    <TextInput
                      placeholder="Patient's water consumption"
                      label="Water consumption"
                      variant="filled"
                      radius="md"
                      size="xs"
                      style={{ marginTop: 20 }}
                      {...form.getInputProps('waterConsumption')}
                    />
                  </div>

                  <div className="new-patient-form__item">
                    <TextInput
                      placeholder="Patient's coffee consumption"
                      label="Coffee consumption"
                      variant="filled"
                      radius="md"
                      size="xs"
                      style={{ marginTop: 20 }}
                      {...form.getInputProps('coffee')}
                    />
                  </div>

                  <div className="new-patient-form__item">
                    <TextInput
                      placeholder="Patient's refrigerants consumption"
                      label="Refrigerants consumption"
                      variant="filled"
                      radius="md"
                      size="xs"
                      style={{ marginTop: 20 }}
                      {...form.getInputProps('refrigerants')}
                    />
                  </div>


                  <div className="new-patient-form__item">
                    <TextInput
                      placeholder="Patient's weekend exceptions"
                      label="Weekend exceptions"
                      variant="filled"
                      radius="md"
                      size="xs"
                      style={{ marginTop: 20 }}
                      {...form.getInputProps('weekendExceptions')}
                    />
                  </div>

                  <div className="new-patient-form__item">
                    <RadioGroup
                      label="Can the patient cook?"
                      variant="filled"
                      radius="md"
                      size="xs"
                      style={{ marginTop: 20 }}
                      {...form.getInputProps('knowsCooking')}
                    >
                      <Radio value="yes">Yes</Radio>
                      <Radio value="no">No</Radio>
                    </RadioGroup>
                  </div>

                  <div className="new-patient-form__item">
                    <TextInput
                      placeholder="Patient's wake-up hour"
                      label="Wake-up time"
                      variant="filled"
                      radius="md"
                      size="xs"
                      style={{ marginTop: 20 }}
                      {...form.getInputProps('wakeUpHour')}
                    />
                  </div>

                  <div className="new-patient-form__item">
                    <TextInput
                      placeholder="Patient's bed time"
                      label="Bed time"
                      variant="filled"
                      radius="md"
                      size="xs"
                      style={{ marginTop: 20 }}
                      {...form.getInputProps('bedHour')}
                    />
                  </div>


                  <div className="new-patient-form__item">

                    <Textarea
                      placeholder="Patient's daily meals summary"
                      label="Daily meals summary"
                      variant="filled"
                      radius="md"
                      size="xs"
                      style={{ marginTop: 20, marginBottom: 30 }}
                      {...form.getInputProps('dailyMealsSummary')}
                    />


                  </div>











                </Card>
              </Accordion.Item>



              <Accordion.Item label={<h3>Account setup</h3>} icon={
                <ThemeIcon color="green" variant="light">
                  <IoLogIn />
                </ThemeIcon>}>


                <Card className='new-patient-form__card'>


                  <div className="new-patient-form__item">
                    <TextInput
                      placeholder="Patient's email"
                      label="Email"
                      variant="filled"
                      radius="md"
                      size="xs"
                      {...form.getInputProps('email')}

                    />
                  </div>




                  <div className="new-patient-form__item">
                    <PasswordInput
                      placeholder="Password"
                      label="Password"
                      description="Password must include at least one letter, number and special character"
                      variant="filled"
                      radius="md"
                      size="xs"
                      required
                      style={{ marginTop: 20 }}
                      {...form.getInputProps('password')}
                    />
                  </div>



                </Card>



              </Accordion.Item>
            </Accordion>





          </Card>

        </div>
        <div className='new-patient-form__submit-button'>
          <Button type='submit' color='teal' variant="outline" compact>Submit</Button>
        </div>

      </form>

    </div>

  );
};

export default NewPatient;