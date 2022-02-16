import React, { useState } from 'react';


import { Button, Modal, Radio, RadioGroup, TextInput, Divider, Select, NumberInput, ColorInput, Textarea } from '@mantine/core';
import { DatePicker, TimeInput } from '@mantine/dates';
import { useForm } from '@mantine/hooks';


import './PatientFullDetailsModal.css';


const PatientFullDetailsModal = props => {

    const [editView, seteditView] = useState(false);

    const fullOnClose = () => {
        props.onClose();
        seteditView(false);
        editPatientForm.reset();

    };





    const editPatientForm = useForm({
        initialValues: {
            firstName: props.patient.firstName,
            lastName: props.patient.lastName,
            birthDate: props.patient.birthDate,
            phoneNumber: props.patient.phoneNumber,
            email: props.patient.email,
            sex: props.patient.sex,
            familyNumber: props.patient.familyNumber,
            maritalStatus: props.patient.maritalStatus,
            healthProblems: props.patient.anamnesis.healthProblems,
            medication: props.patient.anamnesis.medication,
            reasonAppointment: props.patient.anamnesis.reasonAppointment,
            minimalWeight: props.patient.anamnesis.minimalWeight,
            maximumWeight: props.patient.anamnesis.maximumWeight,
            desiredWeight: props.patient.anamnesis.desiredWeight,
            height: props.patient.anamnesis.height,
            activityQuotient: props.patient.anamnesis.activityQuotient,
            allergies: props.patient.anamnesis.allergies,
            intestinalTransit: props.patient.anamnesis.intestinalTransit,
            urineColor: props.patient.anamnesis.urineColor,
            waterConsumption: props.patient.anamnesis.waterConsumption,
            coffee: props.patient.anamnesis.coffee,
            refrigerants: props.patient.anamnesis.refrigerants,
            weekendExceptions: props.patient.anamnesis.weekendExceptions,
            knowsCooking: props.patient.anamnesis.knowsCooking,
            wakeUpHour: props.patient.anamnesis.wakeUpHour,
            bedHour: props.patient.anamnesis.bedHour,
            dailyMealsSummary: props.patient.anamnesis.dailyMealsSummary
        },

        validationRules: {
            email: (value) => /^\S+@\S+$/.test(value),
        },
    });


    return (

        <Modal
            centered
            overflow="inside"
            size={600}
            opened={props.opened}
            radius="lg"
            onClose={fullOnClose}
            title={<h3>{editView ? "Patient details - edit" : "Patient details"}</h3>}
        >

            <div className='patient-card__anamnesis-container'>

                {editView
                    ? <>
                        <div className='patient-card__anamnesis-modal-edit'>

                            <div className="anamnesis__info">
                                <Divider my="xs" label="Basic information" />
                            </div>

                            <div className="anamnesis__info">
                                <TextInput
                                    placeholder="Patient's first name"
                                    label="First name"
                                    variant="filled"
                                    radius="md"
                                    size="xs"
                                    required
                                    {...editPatientForm.getInputProps('firstName')}
                                />
                            </div>

                            <div className="anamnesis__info">
                                <TextInput
                                    placeholder="Patient's last name"
                                    label="Last name"
                                    variant="filled"
                                    radius="md"
                                    size="xs"
                                    style={{ marginTop: 15 }}
                                    required
                                    {...editPatientForm.getInputProps('lastName')}
                                />
                            </div>

                            <div className="anamnesis__info">
                                <DatePicker

                                    placeholder="Pick date"
                                    label="Birth date"
                                    inputFormat="DD/MM/YYYY"
                                    defaultValue={new Date(editPatientForm.values.birthDate)}
                                    variant="filled"
                                    radius="md"
                                    size="xs"
                                    style={{ marginTop: 15 }}
                                    required
                                    {...editPatientForm.getInputProps('birthDate')}
                                />

                            </div>

                            <div className="anamnesis__info">
                                <TextInput
                                    placeholder="Patient's phone number"
                                    label="Phone number"
                                    variant="filled"
                                    radius="md"
                                    size="xs"
                                    style={{ marginTop: 15 }}
                                    {...editPatientForm.getInputProps('phoneNumber')}

                                />
                            </div>

                            <div className="anamnesis__info">
                                <TextInput
                                    placeholder="Patient's email"
                                    label="Email"
                                    variant="filled"
                                    radius="md"
                                    size="xs"
                                    style={{ marginTop: 15 }}
                                    required
                                    {...editPatientForm.getInputProps('email')}
                                />
                            </div>



                            <div className="anamnesis__info">
                                <Select
                                    label="Gender"
                                    placeholder="Pick one"
                                    variant="filled"
                                    radius="md"
                                    size="xs"
                                    style={{ marginTop: 15 }}
                                    data={[
                                        { value: 'Male', label: 'Male' },
                                        { value: 'Female', label: 'Female' },
                                        { value: 'Other', label: 'Other' }
                                    ]}
                                    {...editPatientForm.getInputProps('sex')}
                                />
                            </div>

                            <div className="anamnesis__info">
                                <NumberInput
                                    placeholder="Number of family elements at home"
                                    label="Familiy number"
                                    variant="filled"
                                    radius="md"
                                    size="xs"
                                    style={{ marginTop: 15 }}
                                    {...editPatientForm.getInputProps('familyNumber')}
                                />
                            </div>

                            <div className="anamnesis__info">
                                <Select
                                    label="Marital status"
                                    placeholder="Pick one"
                                    variant="filled"
                                    radius="md"
                                    size="xs"
                                    style={{ marginTop: 15 }}
                                    data={[
                                        { value: 'Single', label: 'Single' },
                                        { value: 'Married', label: 'Married' },
                                        { value: 'Divorced', label: 'Divorced' },
                                        { value: 'Widowed', label: 'Widowed' }
                                    ]}
                                    {...editPatientForm.getInputProps('maritalStatus')}
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
                                    {...editPatientForm.getInputProps('healthProblems')}

                                />
                            </div>
                            <div className="anamnesis__info">
                                <TextInput
                                    placeholder="Medication taken by the patient"
                                    label="Medication"
                                    variant="filled"
                                    radius="md"
                                    size="xs"
                                    style={{ marginTop: 15 }}
                                    {...editPatientForm.getInputProps('medication')}
                                />
                            </div>

                            <div className="anamnesis__info">
                                <TextInput
                                    placeholder="Patient's reason for the appointment"
                                    label="Reason for appointment"
                                    variant="filled"
                                    radius="md"
                                    size="xs"
                                    style={{ marginTop: 15 }}
                                    {...editPatientForm.getInputProps('reasonAppointment')}
                                />
                            </div>


                            <div className="anamnesis__info">
                                <NumberInput
                                    placeholder="Patient's minimal weight"
                                    label="Minimal weight (in kg)"
                                    variant="filled"
                                    radius="md"
                                    size="xs"
                                    style={{ marginTop: 15 }}
                                    {...editPatientForm.getInputProps('minimalWeight')}
                                />
                            </div>


                            <div className="anamnesis__info">
                                <NumberInput
                                    placeholder="Patient's maximum weight"
                                    label="Maximum weight (in kg)"
                                    variant="filled"
                                    radius="md"
                                    size="xs"
                                    style={{ marginTop: 15 }}
                                    {...editPatientForm.getInputProps('maximumWeight')}
                                />
                            </div>

                            <div className="anamnesis__info">
                                <NumberInput
                                    placeholder="Patient's desired weight"
                                    label="Desired weight (in kg)"
                                    variant="filled"
                                    radius="md"
                                    size="xs"
                                    style={{ marginTop: 15 }}
                                    {...editPatientForm.getInputProps('desiredWeight')}
                                />
                            </div>

                            <div className="anamnesis__info">
                                <NumberInput
                                    placeholder="Patient's height"
                                    label="Height (in cm)"
                                    variant="filled"
                                    radius="md"
                                    size="xs"
                                    style={{ marginTop: 15 }}
                                    {...editPatientForm.getInputProps('height')}
                                />
                            </div>

                            <div className="anamnesis__info">
                                <Select
                                    label="Activity quotient"
                                    placeholder="Pick one"
                                    variant="filled"
                                    radius="md"
                                    size="xs"
                                    style={{ marginTop: 15 }}
                                    data={[
                                        { value: 1.12, label: '1.12 - Light activity' },
                                        { value: 1.29, label: '1.29 - Moderate activity' },
                                        { value: 1.59, label: '1.59 - Intense activity' }
                                    ]}
                                    required
                                    {...editPatientForm.getInputProps('activityQuotient')}
                                />
                            </div>


                            <div className="anamnesis__info">
                                <TextInput
                                    placeholder="Patient's allergies"
                                    label="Allergies"
                                    variant="filled"
                                    radius="md"
                                    size="xs"
                                    style={{ marginTop: 15 }}
                                    {...editPatientForm.getInputProps('allergies')}
                                />
                            </div>

                            <div className="anamnesis__info">
                                <TextInput
                                    placeholder="Patient's intestinal transit"
                                    label="Intestinal transit"
                                    variant="filled"
                                    radius="md"
                                    size="xs"
                                    style={{ marginTop: 15 }}
                                    {...editPatientForm.getInputProps('intestinalTransit')}
                                />
                            </div>


                            <div className="anamnesis__info">
                                <ColorInput
                                    placeholder="Pick color"
                                    label="Urine color"
                                    variant="filled"
                                    radius="md"
                                    size="xs"
                                    {...editPatientForm.getInputProps('urineColor')}
                                />
                            </div>

                            <div className="anamnesis__info">
                                <TextInput
                                    placeholder="Patient's water consumption"
                                    label="Water consumption"
                                    variant="filled"
                                    radius="md"
                                    size="xs"
                                    style={{ marginTop: 15 }}
                                    {...editPatientForm.getInputProps('waterConsumption')}
                                />
                            </div>

                            <div className="anamnesis__info">
                                <TextInput
                                    placeholder="Patient's coffee consumption"
                                    label="Coffee consumption"
                                    variant="filled"
                                    radius="md"
                                    size="xs"
                                    style={{ marginTop: 15 }}
                                    {...editPatientForm.getInputProps('coffee')}
                                />
                            </div>

                            <div className="anamnesis__info">
                                <TextInput
                                    placeholder="Patient's refrigerants consumption"
                                    label="Refrigerants consumption"
                                    variant="filled"
                                    radius="md"
                                    size="xs"
                                    style={{ marginTop: 15 }}
                                    {...editPatientForm.getInputProps('refrigerants')}
                                />
                            </div>


                            <div className="anamnesis__info">
                                <TextInput
                                    placeholder="Patient's weekend exceptions"
                                    label="Weekend exceptions"
                                    variant="filled"
                                    radius="md"
                                    size="xs"
                                    style={{ marginTop: 15 }}
                                    {...editPatientForm.getInputProps('weekendExceptions')}
                                />
                            </div>

                            <div className="anamnesis__info">
                                <RadioGroup
                                    label="Can the patient cook?"
                                    variant="filled"
                                    radius="md"
                                    size="xs"
                                    style={{ marginTop: 15 }}
                                    {...editPatientForm.getInputProps('knowsCooking')}
                                >
                                    <Radio value="yes">Yes</Radio>
                                    <Radio value="no">No</Radio>
                                </RadioGroup>
                            </div>


                            <div className="anamnesis__info">
                                <TimeInput
                                    label="Wake-up time"
                                    variant="filled"
                                    defaultValue={new Date("1111-11-11T" + editPatientForm.values.wakeUpHour)}
                                    radius="md"
                                    size="xs"
                                    style={{ marginTop: 15 }}
            
                                >
                                </TimeInput>
                            </div>

                            <div className="anamnesis__info">
                                <TimeInput
                                    label="Bed time"
                                    variant="filled"
                                    defaultValue={new Date("1111-11-11T" + editPatientForm.values.bedHour)}
                                    radius="md"
                                    size="xs"
                                    style={{ marginTop: 15 }}
                                
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
                                    style={{ marginTop: 15 }}
                                    {...editPatientForm.getInputProps('dailyMealsSummary')}
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
