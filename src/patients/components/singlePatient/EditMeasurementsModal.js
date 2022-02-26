import React, { useContext, useEffect, useState } from 'react';
import { useForm } from '@mantine/hooks';

import { Button, Modal, NumberInput, Radio, RadioGroup, Select, TextInput } from '@mantine/core';
import { DatePicker, TimeInput } from '@mantine/dates';

import { BsCheckCircleFill } from 'react-icons/bs';

import './EditMeasurementsModal.css';

import { useNavigate } from 'react-router-dom';
import { useNotifications } from '@mantine/notifications';
import { useHttpClient } from '../../../shared/hooks/http-hook';
import { AuthContext } from '../../../shared/context/auth-context';



const EditMeasurementsModal = props => {

    const [loadedPatients, setLoadedPatients] = useState([]);

    const { isLoading, error, sendRequest, clearError } = useHttpClient();



    const navigate = useNavigate();

    const notifications = useNotifications();


    const auth = useContext(AuthContext);

    //verificar se é modal de update ou create appointment 

    const editForm = useForm({
        initialValues: {
            patientName: '',
            date: '',
            startTime: '',
            endTime: ''
        },
        validationRules: {
            name: (value) => value.trim().length >= 2,
        }
    });


    useEffect(() => {
        editForm.setValues({
            basalMetabolism: props.measurement.basalMetabolism,
            bodyAge: props.measurement.bodyAge,
            boneMass: props.measurement.boneMass,
            chestPerimeter: props.measurement.chestPerimeter,
            fatMassPerc: props.measurement.fatMassPerc,
            hipPerimeter: props.measurement.hipPerimeter,
            imc: props.measurement.imc,
            kgLeanMass: props.measurement.kgLeanMass,
            visceralFat: props.measurement.visceralFat,
            waistPerimeter: props.measurement.waistPerimeter,
            waterPerc: props.measurement.waterPerc,
            weight: props.measurement.weight
        })
    }, [props.measurement]);



    const updateAppointmentHandler = async (event) => {
        event.preventDefault();




        const updatedMeasurement = {
            basalMetabolism: editForm.values.patientName,
            bodyAge: editForm.values.bodyAge,
            boneMass: editForm.values.boneMass,
            chestPerimeter: editForm.values.chestPerimeter,
            fatMassPerc: editForm.values.fatMassPerc,
            hipPerimeter: editForm.values.hipPerimeter,
            imc: editForm.values.imc,
            kgLeanMass: editForm.values.kgLeanMass,
            visceralFat: editForm.values.visceralFat,
            waistPerimeter: editForm.values.waistPerimeter,
            waterPerc: editForm.values.waterPerc,
            weight: editForm.values.weight,
            date: props.measurement.date
        }


        try {
            await sendRequest(
                `http://localhost:8080/patients/${props.patientId}/measurements/${props.measurement.id}`,
                'PATCH',
                JSON.stringify(updatedMeasurement),
                {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + auth.token

                }
            );
            navigate("/patients");

            notifications.showNotification({
                title: 'Patient measurements updated!',
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
            size={380}
            opened={props.opened}
            radius="lg"
            onClose={props.onClose}
            title={<h3>Update measurement</h3>}

        >
            <div className='new-appointment-modal-wrapper'>
                <form className='new-appointment-form' onSubmit={updateAppointmentHandler}>



                    <div className="new-appointment-form-item">
                        <NumberInput
                            placeholder="Patient's weight"
                            label="Weight (in kg)"
                            variant="filled"
                            radius="md"
                            size="xs"
                            precision={2}
                            step={0.05}
                            {...editForm.getInputProps('weight')}
                        />
                    </div>

                    <div className="new-appointment-form-item">
                        <NumberInput
                            placeholder="Patient's IMC"
                            label="IMC"
                            variant="filled"
                            radius="md"
                            size="xs"
                            precision={2}
                            step={0.05}
                            style={{ marginTop: 20 }}
                            {...editForm.getInputProps('imc')}
                        />
                    </div>


                    <div className="new-appointment-form-item">
                        <NumberInput
                            placeholder="Patient's fat mass in %"
                            label="Fat mass percentage"
                            variant="filled"
                            radius="md"
                            size="xs"
                            precision={2}
                            step={0.05}
                            style={{ marginTop: 20 }}
                            {...editForm.getInputProps('fatMassPerc')}
                        />
                    </div>

                    <div className="new-appointment-form-item">
                        <NumberInput
                            placeholder="Patient's fat mass in %"
                            label="Fat mass percentage"
                            variant="filled"
                            radius="md"
                            size="xs"
                            precision={2}
                            step={0.05}
                            style={{ marginTop: 20 }}
                            {...editForm.getInputProps('fatMassPerc')}
                        />
                    </div>

                    <div className="new-appointment-form-item">
                        <NumberInput
                            placeholder="Patient's lean mass in kg"
                            label="Lean mass"
                            variant="filled"
                            radius="md"
                            size="xs"
                            precision={2}
                            step={0.05}
                            style={{ marginTop: 20 }}
                            {...editForm.getInputProps('kgLeanMass')}
                        />
                    </div>

                    <div className="new-appointment-form-item">
                        <NumberInput
                            placeholder="Patient's water percentage"
                            label="Water percentage"
                            variant="filled"
                            radius="md"
                            size="xs"
                            precision={2}
                            step={0.05}
                            style={{ marginTop: 20 }}
                            {...editForm.getInputProps('waterPerc')}
                        />
                    </div>

                    <div className="new-appointment-form-item">
                        <NumberInput
                            placeholder="Patient's Basal metabolism"
                            label="Basal metabolism"
                            variant="filled"
                            radius="md"
                            size="xs"
                            precision={2}
                            step={0.05}
                            style={{ marginTop: 20 }}
                            {...editForm.getInputProps('basalMetabolism')}
                        />
                    </div>

                    <div className="new-appointment-form-item">
                        <NumberInput
                            placeholder="Patient's visceral fat"
                            label="Visceral fat"
                            variant="filled"
                            radius="md"
                            size="xs"
                            precision={2}
                            step={0.05}
                            style={{ marginTop: 20 }}
                            {...editForm.getInputProps('visceralFat')}
                        />
                    </div>

                    <div className="new-appointment-form-item">
                        <NumberInput
                            placeholder="Patient's bone mass"
                            label="Bone mass"
                            variant="filled"
                            radius="md"
                            size="xs"
                            precision={2}
                            step={0.05}
                            style={{ marginTop: 20 }}
                            {...editForm.getInputProps('boneMass')}
                        />
                    </div>

                    <div className="new-appointment-form-item">
                        <NumberInput
                            placeholder="Patient's body age"
                            label="Body age"
                            variant="filled"
                            radius="md"
                            size="xs"
                            style={{ marginTop: 20 }}
                            {...editForm.getInputProps('bodyAge')}
                        />
                    </div>

                    <div className="new-appointment-form-item">
                        <NumberInput
                            placeholder="Patient's waist perimeter in cm"
                            label="Waist perimeter"
                            variant="filled"
                            radius="md"
                            size="xs"
                            precision={2}
                            step={0.05}
                            style={{ marginTop: 20 }}
                            {...editForm.getInputProps('waistPerimeter')}
                        />
                    </div>


                    <div className="new-appointment-form-item">
                        <NumberInput
                            placeholder="Patient's hip perimeter in cm"
                            label="Hip perimeter"
                            variant="filled"
                            radius="md"
                            size="xs"
                            precision={2}
                            step={0.05}
                            style={{ marginTop: 20 }}
                            {...editForm.getInputProps('hipPerimeter')}
                        />
                    </div>

                    <div className="new-appointment-form-item">
                        <NumberInput
                            placeholder="Patient's chest perimeter in cm"
                            label="Chest perimeter"
                            variant="filled"
                            radius="md"
                            size="xs"
                            precision={2}
                            step={0.05}
                            style={{ marginTop: 20, marginBottom: 20 }}
                            {...editForm.getInputProps('chestPerimeter')}
                        />
                    </div>





                    <div className="new-appointment-form__buttons">
                        <Button type='submit' color='teal' variant="light" compact onClick={props.onClose}
                        >Update measurement</Button>

                    </div>
                </form>
            </div>
        </Modal>


    );
};

export default EditMeasurementsModal;
