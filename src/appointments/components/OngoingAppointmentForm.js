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
import { useParams } from 'react-router-dom';

const OngoingAppointmentForm = props => {

    //fetch do patient




    const appointmentId = useParams().appointmentId;



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
                            <div className="ongoing-appointment-form__item">
                                <NumberInput
                                    placeholder="Patient's weight"
                                    label="Weight (in kg)"
                                    variant="filled"
                                    radius="md"
                                    size="xs"
                                    precision={2}
                                    step={0.05}
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
                                />
                            </div>

                            <div className="ongoing-appointment-form__item">
                                <NumberInput
                                    placeholder="Patient's body age"
                                    label="Visceral fat"
                                    variant="filled"
                                    radius="md"
                                    size="xs"
                                    style={{ marginTop: 20 }}
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
                                    style={{ marginTop: 20, marginBottom: 20}}
                                />
                            </div>

     

                            <div className='new-measurement-form__submit-button'>
                                <Button color='teal' variant="outline" compact>Submit</Button>
                            </div>

                        </form >
                    </Card>

                </div>

                <div className="ongoing-appointment-form__right-column">

                    <div className='ongoing-appointment-card'>
                        <PatientCard className="ongoing-appointment-card-patient" patient={props.patient} editable={false} />
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
