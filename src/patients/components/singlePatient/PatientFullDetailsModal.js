import React, { useContext, useState } from 'react';


import { Button, Modal, Radio, RadioGroup, TextInput, Divider, Select, NumberInput, ColorInput, Textarea } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { useForm } from '@mantine/hooks';


import './PatientFullDetailsModal.css';
import { useNavigate } from 'react-router-dom';
import { useHttpClient } from '../../../shared/hooks/http-hook';

import { format } from 'fecha';


import { BsCheckCircleFill } from 'react-icons/bs';
import { useNotifications } from '@mantine/notifications';
import { AuthContext } from '../../../shared/context/auth-context';




const PatientFullDetailsModal = props => {

    const [editView, setEditView] = useState(false);

    const { sendRequest } = useHttpClient();

    const navigate = useNavigate();


    const notifications = useNotifications();

    const auth = useContext(AuthContext);



    const fullOnClose = () => {
        props.onClose();
        setEditView(false);
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



    const updatePatientHandler = async (event) => {


        event.preventDefault();

        const updatedPatient = {
            anamnesis: {
                activityQuotient: editPatientForm.values.activityQuotient,
                allergies: editPatientForm.values.allergies,
                bedHour: editPatientForm.values.bedHour,
                coffee: editPatientForm.values.coffee,
                dailyMealsSummary: editPatientForm.values.dailyMealsSummary,
                desiredWeight: editPatientForm.values.desiredWeight,
                healthBackground: editPatientForm.values.healthBackground,
                healthProblems: editPatientForm.values.healthProblems,
                height: editPatientForm.values.height,
                intestinalTransit: editPatientForm.values.intestinalTransit,
                knowsCooking: editPatientForm.values.knowsCooking,
                maximumWeight: editPatientForm.values.maximumWeight,
                medication: editPatientForm.values.medication,
                minimalWeight: editPatientForm.values.minimalWeight,
                reasonAppointment: editPatientForm.values.reasonAppointment,
                refrigerants: editPatientForm.values.refrigerants,
                urineColor: editPatientForm.values.urineColor,
                wakeUpHour: editPatientForm.values.wakeUpHour,
                waterConsumption: editPatientForm.values.waterConsumption,
                weekendExceptions: editPatientForm.values.weekendExceptions
            },
            birthDate: new Date(editPatientForm.values.birthDate),
            email: editPatientForm.values.email,
            familyNumber: editPatientForm.values.familyNumber,
            firstName: editPatientForm.values.firstName,
            lastName: editPatientForm.values.lastName,
            maritalStatus: editPatientForm.values.maritalStatus,
            phoneNumber: editPatientForm.values.phoneNumber,
            sex: editPatientForm.values.sex
        }


        //nao está a ir para o backend
        try {
            await sendRequest(
                `http://localhost:8080/patients/${props.patient.id}`,
                'PATCH',
                JSON.stringify(updatedPatient),
                {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + auth.token

                }
            );
            fullOnClose();
            navigate(`/patients`);
            notifications.showNotification({
                title: 'Patient updated!',
                message: 'You can check all your patients in the Patients page.',
                radius: 'lg',
                icon: (<BsCheckCircleFill />),
                color: "teal"
            })
        } catch (err) {

        }



    }


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
                        <form onSubmit={updatePatientHandler}>
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
                                    <TextInput
                                        placeholder="Patient's wake-up hour"
                                        label="Wake-up time"
                                        variant="filled"
                                        radius="md"
                                        size="xs"
                                        style={{ marginTop: 15 }}
                                        {...editPatientForm.getInputProps('wakeUpHour')}
                                    />
                                </div>

                                <div className="anamnesis__info">
                                    <TextInput
                                        placeholder="Patient's bed time"
                                        label="Bed time"
                                        variant="filled"
                                        radius="md"
                                        size="xs"
                                        style={{ marginTop: 15 }}
                                        {...editPatientForm.getInputProps('bedHour')}
                                    />
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
                                <Button color='teal' variant="outline" compact type='submit'>Submit</Button>

                            </div>

                        </form>

                    </>
                    :
                    <>


                        <div className='patient-card__anamnesis-modal-view'>

                            <Divider my="xs" label="Basic information" />

                            <div className="anamnesis__info">
                                <h4>Full name: <span className='measurement-value'>{`${props.patient.firstName} ${props.patient.lastName}`}</span></h4>
                            </div>

                            <div className="anamnesis__info">
                                <h4>Birthdate: <span className='measurement-value'>{format(new Date(props.patient.birthDate), 'DD-MM-YYYY')}</span></h4>
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

                            <div className="anamnesis__info">
                                <h4>Ideal weight: <span className='measurement-value'>{props.patient.macroNutrients.idealWeight.toFixed(2)} kg</span></h4>
                            </div>

              
                            <Divider my="xs" label="Macro-nutrients" />

                            <div className="anamnesis__info">
                                <h4>Daily protein amount: <span className='measurement-value'>{props.patient.macroNutrients.proteins.toFixed(2)} g</span></h4>
                            </div>
                            <div className="anamnesis__info">
                                <h4>Daily fat amount: <span className='measurement-value'>{props.patient.macroNutrients.proteins.toFixed(2)} g</span></h4>
                            </div>
                            <div className="anamnesis__info">
                                <h4>Daily carbohydrates amount: <span className='measurement-value'>{props.patient.macroNutrients.hydrates.toFixed(2)} g</span></h4>
                            </div>
                            <div className="anamnesis__info">
                                <h4>Maximum daily kcal: <span className='measurement-value'>{props.patient.macroNutrients.vet.toFixed(2)}</span></h4>
                            </div>
                            <div className="anamnesis__info">
                                <h4>Minim daily kcal: <span className='measurement-value'>{props.patient.macroNutrients.metBasalCurrentWeight.toFixed(2)}</span></h4>
                            </div>

                        </div>
                        <div className="patient-card__buttons">
                            <Button color='teal' variant="outline" compact onClick={() => setEditView(true)}>Edit</Button>
                        </div>
                    </>}


            </div>



        </Modal>


    );
};

export default PatientFullDetailsModal;
