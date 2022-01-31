import React from 'react';

import Card from '../../shared/components/UIElements/Card';

import { Button, Radio, RadioGroup, TextInput, Divider, Select, NumberInput, ColorInput, Textarea, Accordion, ThemeIcon, PasswordInput } from '@mantine/core';
import { DatePicker, TimeInput } from '@mantine/dates';

import { BsFilePerson } from 'react-icons/bs';
import { MdMedicalServices } from 'react-icons/md';
import { IoLogIn } from 'react-icons/io5';

import PatientCard from '../../patients/components/singlePatient/PatientCard';
import MeasurementsCard from '../../patients/components/singlePatient/MeasurementsCard';







import './OngoingAppointmentForm.css';

const OngoingAppointmentForm = props => {

    return (
        <div className="main__wrapper">
            <div className="ongoing-appointment-form__info">
                <h1>New body measurements registration</h1>
                <p>Register the new body measurements of the patient</p>
            </div>


            <div className="ongoing-appointment-form__container">

                <div className="ongoing-appointment-form__left-column">

                    <Card className='ongoing-appointment-card'>
                        <form>
                        <div className="new-patient-form__item">
                                        <TextInput
                                            placeholder="Patient's health problems"
                                            label="Health problems"
                                            variant="filled"
                                            radius="md"
                                            size="xs"

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
                                        />
                                    </div>
                            <div className='new-patient-form__submit-button'>
                                <Button color='teal' variant="outline" compact>Submit</Button>
                            </div>

                        </form >
                    </Card>

                </div>

                <div className="ongoing-appointment-form__right-column">

                    <div className='ongoing-appointment-card'>
                        <PatientCard patient={props.patient} editable={false} />
                    </div>
                    <div className='ongoing-appointment-card'>
                        <MeasurementsCard measurements={props.patient.measurementsList} />
                    </div>





                </div>






            </div>


        </div >

    );
};

export default OngoingAppointmentForm;
