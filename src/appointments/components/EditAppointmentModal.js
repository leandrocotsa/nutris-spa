import React, { useEffect, useState } from 'react';
import { useForm } from '@mantine/hooks';

import { Button, Modal, Radio, RadioGroup, Select, TextInput } from '@mantine/core';
import { DatePicker, TimeInput } from '@mantine/dates';


import './EditAppointmentModal.css';
import { useHttpClient } from '../../shared/hooks/http-hook';


const EditAppointmentModal = props => {

    const [loadedPatients, setLoadedPatients] = useState([]);

    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    //verificar se é modal de update ou create appointment 
    
    const editAppForm = useForm({
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
        editAppForm.setValues({
            patientName: props.appointment.patientName,
            date: new Date(props.appointment.startTime),
            startTime: new Date(props.appointment.startTime),
            endTime: new Date(props.appointment.endTime)
        })
    }, [props.appointment]);



    const updateAppointmentHandler = async (event) => {
        event.preventDefault();
        console.log(props.appointment.patientName)





    }





    return (

        <Modal
            centered
            overflow="inside"
            size={380}
            opened={props.opened}
            radius="lg"
            onClose={props.onClose}
            title={<h3>Update appointment</h3>}

        >
            <div className='new-appointment-modal-wrapper'>
                <form className='new-appointment-form' onSubmit={updateAppointmentHandler}>
                    <div className="new-appointment-form-item">
                        <p>Patient: {props.appointment.patientName}</p>
                        <DatePicker

                            placeholder="Pick a date"
                            label="Appointment's date"
                            variant="filled"
                            radius="md"
                            size="xs"
                            required
                            {...editAppForm.getInputProps('date')}
                        />
                    </div>


                    <div className="new-appointment-form-item">
                        <TimeInput
                            label="Appointment's start time"
                            variant="filled"
                            radius="md"
                            size="xs"
                            style={{ marginTop: 20 }}
                            {...editAppForm.getInputProps('startTime')}
                        >
                        </TimeInput>
                    </div>

                    <div className="new-appointment-form-item">
                        <TimeInput
                            label="Appointment's end time"
                            variant="filled"
                            radius="md"
                            size="xs"
                            style={{ marginTop: 20 }}
                            {...editAppForm.getInputProps('endTime')}
                        >
                        </TimeInput>
                    </div>

                    {props.appointment.type === "FIRST" &&
                        <div className="new-appointment-form-item">
                            <TextInput
                                placeholder="Patient's name"
                                label="Patient's name"
                                variant="filled"
                                radius="md"
                                size="xs"
                                style={{ marginTop: 20, marginBottom: 30 }}
                                {...editAppForm.getInputProps('patientName')}
                            />
                        </div>
                    }


                    <div className="new-appointment-form__buttons">
                        <Button type='submit' color='teal' variant="light" compact onClick={props.onClose}
                        >Update appointment</Button>

                    </div>
                </form>
            </div>
        </Modal>


    );
};

export default EditAppointmentModal;
