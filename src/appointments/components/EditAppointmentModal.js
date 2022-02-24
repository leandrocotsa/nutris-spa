import React, { useContext, useEffect, useState } from 'react';
import { useForm } from '@mantine/hooks';

import { Button, Modal, Radio, RadioGroup, Select, TextInput } from '@mantine/core';
import { DatePicker, TimeInput } from '@mantine/dates';

import { BsCheckCircleFill } from 'react-icons/bs';

import './EditAppointmentModal.css';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { useNavigate } from 'react-router-dom';
import { useNotifications } from '@mantine/notifications';
import { AuthContext } from '../../shared/context/auth-context';


const EditAppointmentModal = props => {

    const [loadedPatients, setLoadedPatients] = useState([]);

    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    const navigate = useNavigate();

    const notifications = useNotifications();


    const auth = useContext(AuthContext);

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
        event.preventDefault();

        const date = new Date(editAppForm.values.date).toISOString();
        const cleanDate = date.substring(0, date.indexOf('T'));


        const start = new Date(editAppForm.values.startTime).toISOString();
        const startTime = start.substring(start.indexOf("T") + 1);
        const end = new Date(editAppForm.values.endTime).toISOString();
        const endTime = end.substring(end.indexOf("T") + 1);


        const updatedAppointment = {
            startTime: `${cleanDate}T${startTime}`,
            endTime: `${cleanDate}T${endTime}`,
            patientName: editAppForm.values.patientName
        }


        try {
            await sendRequest(
                'http://localhost:8080/appointments/' + props.appointment.id,
                'PATCH',
                JSON.stringify(updatedAppointment),
                {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + auth.token

                }
            );
            navigate("/appointments");

            notifications.showNotification({
                title: 'Appointment updated!',
                message: 'You can check all your appointments in the Appointment page.',
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
