import React, { useState } from 'react';


import { Button, Modal, Radio, RadioGroup, TextInput, Divider, Select, NumberInput, ColorInput, Textarea } from '@mantine/core';
import { DatePicker, TimeInput } from '@mantine/dates';


import './PatientFullDetailsModal.css';


const PatientFullDetailsModal = props => {

    const [editView, seteditView] = useState(false);

    const fullOnClose = () => {
        props.onClose();
        seteditView(false);

    };


    return (

        <Modal
            centered
            overflow="inside"
            size={600}
            opened={props.opened}
            radius="lg"
            onClose={fullOnClose}


        >

            <div className='patient-card__anamnesis-modal-header'>
                <h3 className='green-text'>{editView ? "Patient details - edit" : "Patient details"}</h3>
            </div>



            <div className='patient-card__anamnesis-container'>

                {editView
                    ? <>
                        <div className='patient-card__anamnesis-modal-edit'>

                            <div className="anamnesis__info">
                                <Divider my="xs" label="Basic information" />
                            </div>

                            <div className="anamnesis__info">
                                <TextInput
                                    placeholder="Patient's name"
                                    label="Full name"
                                    variant="filled"
                                    radius="md"
                                    size="xs"
                                />
                            </div>

                            <div className="anamnesis__info">
                                <DatePicker

                                    placeholder="Pick date"
                                    label="Birth date"
                                    variant="filled"
                                    radius="md"
                                    size="xs"
                                    style={{ marginTop: 20 }}
                                    required
                                />

                            </div>

                            <div className="anamnesis__info">
                                <TextInput
                                    placeholder="Patient's email"
                                    label="Email"
                                    variant="filled"
                                    radius="md"
                                    size="xs"
                                    style={{ marginTop: 20 }}
                                />
                            </div>

                            <div className="anamnesis__info">
                                <TextInput
                                    placeholder="Patient's phone number"
                                    label="Phone number"
                                    variant="filled"
                                    radius="md"
                                    size="xs"
                                    style={{ marginTop: 20 }}
                                />
                            </div>

                            <div className="anamnesis__info">
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
                                />
                            </div>

                            <div className="anamnesis__info">
                                <NumberInput
                                    placeholder="Number of family elements at home"
                                    label="Familiy number"
                                    variant="filled"
                                    radius="md"
                                    size="xs"
                                    style={{ marginTop: 20 }}
                                />
                            </div>

                            <div className="anamnesis__info">
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
                                />
                            </div>

                            <div className="anamnesis__info">
                                <Divider my="xs" label="Anamnesis" />
                            </div>

                            <div className="anamnesis__info">
                                <TextInput
                                    placeholder="Patient's health problems"
                                    label="Health problems"
                                    variant="filled"
                                    radius="md"
                                    size="xs"

                                />
                            </div>
                            <div className="anamnesis__info">
                                <TextInput
                                    placeholder="Medication taken by the patient"
                                    label="Medication"
                                    variant="filled"
                                    radius="md"
                                    size="xs"
                                    style={{ marginTop: 20 }}
                                />
                            </div>

                            <div className="anamnesis__info">
                                <TextInput
                                    placeholder="Patient's reason for the appointment"
                                    label="Reason for appointment"
                                    variant="filled"
                                    radius="md"
                                    size="xs"
                                    style={{ marginTop: 20 }}
                                />
                            </div>


                            <div className="anamnesis__info">
                                <NumberInput
                                    placeholder="Patient's minimal weight"
                                    label="Minimal weight (in kg)"
                                    variant="filled"
                                    radius="md"
                                    size="xs"
                                    style={{ marginTop: 20 }}
                                />
                            </div>


                            <div className="anamnesis__info">
                                <NumberInput
                                    placeholder="Patient's maximum weight"
                                    label="Maximum weight (in kg)"
                                    variant="filled"
                                    radius="md"
                                    size="xs"
                                    style={{ marginTop: 20 }}
                                />
                            </div>

                            <div className="anamnesis__info">
                                <NumberInput
                                    placeholder="Patient's desired weight"
                                    label="Desired weight (in kg)"
                                    variant="filled"
                                    radius="md"
                                    size="xs"
                                    style={{ marginTop: 20 }}
                                />
                            </div>

                            <div className="anamnesis__info">
                                <NumberInput
                                    placeholder="Patient's height"
                                    label="Height (in cm)"
                                    variant="filled"
                                    radius="md"
                                    size="xs"
                                    style={{ marginTop: 20 }}
                                />
                            </div>

                            <div className="anamnesis__info">
                                <Select
                                    label="Activity quotient"
                                    placeholder="Pick one"
                                    variant="filled"
                                    radius="md"
                                    size="xs"
                                    style={{ marginTop: 20 }}
                                    data={[
                                        { value: '1.12', label: '1.12 - Light activity' },
                                        { value: '1.29', label: '1.29 - Moderate activity' },
                                        { value: '1.59', label: '1.59 - Intense activity' }
                                    ]}
                                />
                            </div>


                            <div className="anamnesis__info">
                                <TextInput
                                    placeholder="Patient's allergies"
                                    label="Allergies"
                                    variant="filled"
                                    radius="md"
                                    size="xs"
                                    style={{ marginTop: 20 }}
                                />
                            </div>

                            <div className="anamnesis__info">
                                <TextInput
                                    placeholder="Patient's intestinal transit"
                                    label="Intestinal transit"
                                    variant="filled"
                                    radius="md"
                                    size="xs"
                                    style={{ marginTop: 20 }}
                                />
                            </div>


                            <div className="anamnesis__info">
                                <ColorInput
                                    placeholder="Pick color"
                                    label="Urine color"
                                    variant="filled"
                                    radius="md"
                                    size="xs"
                                />
                            </div>

                            <div className="anamnesis__info">
                                <TextInput
                                    placeholder="Patient's water consumption"
                                    label="Water consumption"
                                    variant="filled"
                                    radius="md"
                                    size="xs"
                                    style={{ marginTop: 20 }}
                                />
                            </div>

                            <div className="anamnesis__info">
                                <TextInput
                                    placeholder="Patient's coffee consumption"
                                    label="Coffee consumption"
                                    variant="filled"
                                    radius="md"
                                    size="xs"
                                    style={{ marginTop: 20 }}
                                />
                            </div>

                            <div className="anamnesis__info">
                                <TextInput
                                    placeholder="Patient's refrigerants consumption"
                                    label="Refrigerants consumption"
                                    variant="filled"
                                    radius="md"
                                    size="xs"
                                    style={{ marginTop: 20 }}
                                />
                            </div>


                            <div className="anamnesis__info">
                                <TextInput
                                    placeholder="Patient's weekend exceptions"
                                    label="Weekend exceptions"
                                    variant="filled"
                                    radius="md"
                                    size="xs"
                                    style={{ marginTop: 20 }}
                                />
                            </div>

                            <div className="anamnesis__info">
                                <RadioGroup
                                    label="Can the patient cook?"
                                    variant="filled"
                                    radius="md"
                                    size="xs"
                                    style={{ marginTop: 20 }}
                                >
                                    <Radio value="yes">Yes</Radio>
                                    <Radio value="no">No</Radio>
                                </RadioGroup>
                            </div>


                            <div className="anamnesis__info">
                                <TimeInput
                                    label="Wake-up time"
                                    variant="filled"
                                    radius="md"
                                    size="xs"
                                    style={{ marginTop: 20 }}
                                >
                                </TimeInput>
                            </div>

                            <div className="anamnesis__info">
                                <TimeInput
                                    label="Bed time"
                                    variant="filled"
                                    radius="md"
                                    size="xs"
                                    style={{ marginTop: 20 }}
                                >
                                </TimeInput>
                            </div>





                            <div className="anamnesis__info">

                                <Textarea
                                    placeholder="Patient's daily meals summary"
                                    label="Daily meals summary"
                                    variant="filled"
                                    radius="md"
                                    size="xs"
                                    style={{ marginTop: 20, marginBottom: 30 }}
                                />


                            </div>




                        </div>
                        <div className="patient-card__buttons">
                            <Button color='teal' variant="outline" compact onClick={fullOnClose}>Submit</Button>

                        </div>

                    </>
                    :
                    <>


                        <div className='patient-card__anamnesis-modal-view'>

                            <Divider my="xs" label="Basic information" />

                            <div className="anamnesis__info">
                                <h4>Full name: <span className='measurement-value'>{props.patient.fullName}</span></h4>
                            </div>

                            <div className="anamnesis__info">
                                <h4>Birthdate: <span className='measurement-value'>{props.patient.birthDate}</span></h4>
                            </div>

                            <div className="anamnesis__info">
                                <h4>Email: <span className='measurement-value'>{props.patient.email}kg</span></h4>
                            </div>

                            <div className="anamnesis__info">
                                <h4>Phone nº: <span className='measurement-value'>{props.patient.phoneNumber}</span></h4>
                            </div>

                            <div className="anamnesis__info">
                                <h4>Gender: <span className='measurement-value'>{props.patient.sex}</span></h4>
                            </div>
                            <div className="anamnesis__info">
                                <h4>Family nº: <span className='measurement-value'>{props.patient.familyNumber}</span></h4>
                            </div>

                            <div className="anamnesis__info">
                                <h4>Marital status: <span className='measurement-value'>{props.patient.maritalStatus}kg</span></h4>
                            </div>

                            <Divider my="xs" label="Anamnesis" />


                            <div className="anamnesis__info">
                                <h4>Health problems: <span className='measurement-value'>{props.patient.anamnesis.healthProblems}</span></h4>
                            </div>

                            <div className="anamnesis__info">
                                <h4>Medication: <span className='measurement-value'>{props.patient.anamnesis.medication}</span></h4>
                            </div>

                            <div className="anamnesis__info">
                                <h4>Health Background: <span className='measurement-value'>{props.patient.anamnesis.healthBackground}</span></h4>
                            </div>

                            <div className="anamnesis__info">
                                <h4>Reason for appointment: <span className='measurement-value'>{props.patient.anamnesis.reasonAppointment}</span></h4>
                            </div>
                            <div className="anamnesis__info">
                                <h4>Min. weight: <span className='measurement-value'>{props.patient.anamnesis.minimalWeight}kg</span></h4>
                            </div>

                            <div className="anamnesis__info">
                                <h4>Max. weight: <span className='measurement-value'>{props.patient.anamnesis.maximumWeight}kg</span></h4>
                            </div>

                            <div className="anamnesis__info">
                                <h4>Desired weight: <span className='measurement-value'>{props.patient.anamnesis.desiredWeight}</span></h4>
                            </div>

                            <div className="anamnesis__info">
                                <h4>Height: <span className='measurement-value'>{props.patient.anamnesis.height}cm</span></h4>
                            </div>
                            <div className="anamnesis__info">
                                <h4>Activity quotient: <span className='measurement-value'>{props.patient.anamnesis.activityQuotient}</span></h4>
                            </div>
                            <div className="anamnesis__info">
                                <h4>Allergies: <span className='measurement-value'>{props.patient.anamnesis.allergies}</span></h4>
                            </div>
                            <div className="anamnesis__info">
                                <h4>Intestinal transit: <span className='measurement-value'>{props.patient.anamnesis.intestinalTransit}</span></h4>
                            </div>
                            <div className="anamnesis__info">
                                <h4>Urine color: <span className='measurement-value'>{props.patient.anamnesis.urineColor}</span></h4>
                            </div>
                            <div className="anamnesis__info">
                                <h4>Water consumption: <span className='measurement-value'>{props.patient.anamnesis.waterConsumption}</span></h4>
                            </div>

                            <div className="anamnesis__info">
                                <h4>Coffee: <span className='measurement-value'>{props.patient.anamnesis.coffee}</span></h4>
                            </div>

                            <div className="anamnesis__info">
                                <h4>Refrigerants: <span className='measurement-value'>{props.patient.anamnesis.refrigerants}</span></h4>
                            </div>
                            <div className="anamnesis__info">
                                <h4>Weekend exceptions: <span className='measurement-value'>{props.patient.anamnesis.weekendExceptions}</span></h4>
                            </div>
                            <div className="anamnesis__info">
                                <h4>Can cook?: <span className='measurement-value'>{props.patient.anamnesis.knowsCooking}</span></h4>
                            </div>
                            <div className="anamnesis__info">
                                <h4>Wake-up time: <span className='measurement-value'>{props.patient.anamnesis.wakeUpHour}</span></h4>
                            </div>
                            <div className="anamnesis__info">
                                <h4>Bed time: <span className='measurement-value'>{props.patient.anamnesis.bedHour}</span></h4>
                            </div>
                            <div className="anamnesis__info">
                                <h4>Daily meals summary: <span className='measurement-value'>{props.patient.anamnesis.dailyMealsSummary}</span></h4>
                            </div>

                        </div>
                        <div className="patient-card__buttons">
                            <Button color='teal' variant="outline" compact onClick={() => seteditView(true)}>Edit</Button>
                        </div>
                    </>}


            </div>



        </Modal>


    );
};

export default PatientFullDetailsModal;
