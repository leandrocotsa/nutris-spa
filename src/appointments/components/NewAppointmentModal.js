import React, { useContext, useEffect, useState } from 'react';
import { useForm } from '@mantine/hooks';

import { useNavigate } from 'react-router-dom';

import { Button, Modal, Radio, RadioGroup, Select, TextInput } from '@mantine/core';
import { DatePicker, TimeInput } from '@mantine/dates';

import { useNotifications } from '@mantine/notifications';

import { BsCheckCircleFill } from 'react-icons/bs';



import './NewAppointmentModal.css';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';


const NewAppointmentModal = props => {

    const [loadedPatients, setLoadedPatients] = useState([]);
    const [isDateTaken, setIsDateTaken] = useState(false);

    const { sendRequest } = useHttpClient();

    const navigate = useNavigate();

    const notifications = useNotifications();

    const auth = useContext(AuthContext);

    

    //verificar se é modal de update ou create appointment 

    const form = useForm({
        initialValues: {
            date: '',
            startTime: '',
            endTime: '',
            patientId: '',
            patientName: '',
            radioPatient: ''
        },
        validationRules: {
            name: (value) => value.trim().length >= 2,
        },
    });



    useEffect(() => {

        if (form.values.date && form.values.startTime && form.values.endTime) {
            const fetchDateTaken = async () => { //not a good practice to turn useEffect into async so this is the way to go

                const date = new Date(form.values.date).toISOString();
                const cleanDate = date.substring(0, date.indexOf('T'));
        
        
                const start = new Date(form.values.startTime).toISOString();
                const startTime = start.substring(start.indexOf("T") + 1);
                const end = new Date(form.values.endTime).toISOString();
                const endTime = end.substring(end.indexOf("T") + 1);


                const dateRange = {
                    startDate: `${cleanDate}T${startTime}`,
                    endDate: `${cleanDate}T${endTime}`
                }

                try {
                    const responseData = await sendRequest(
                        'http://localhost:8080/appointments/isdatetaken',
                        'POST', 
                        JSON.stringify(dateRange),
                        
                        {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + auth.token
                        }
                    );

                    setIsDateTaken(responseData.response);


                } catch (err) {

                }
            };
            fetchDateTaken();

        }

        //first fetch with all appointments
        //set dos appointments no current
        //props que faz fazer fetch de tudo ou so dos de hoje?
    }, [form.values.date, form.values.startTime, form.values.endTime, sendRequest, auth.token]);


    useEffect(() => {

        if (form.values.radioPatient === "yes" && loadedPatients.length === 0) {
            const fetchPatients = async () => { //not a good practice to turn useEffect into async so this is the way to go

                try {
                    const responseData = await sendRequest(
                        'http://localhost:8080/patients',
                        'GET', null,
                        {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + auth.token
                        }
                    );

                    setLoadedPatients(responseData.map(patient => {
                        return {
                            value: patient.id,
                            label: patient.fullName
                        }
                    }));


                } catch (err) {

                }
            };
            fetchPatients();

        }

        //first fetch with all appointments
        //set dos appointments no current
        //props que faz fazer fetch de tudo ou so dos de hoje?
    }, [auth.token, form.values.radioPatient, loadedPatients.length, sendRequest]);



    const createAppointmentHandler = async (event) => {
        event.preventDefault();

        const date = new Date(form.values.date).toISOString();
        const cleanDate = date.substring(0, date.indexOf('T'));


        const start = new Date(form.values.startTime).toISOString();
        const startTime = start.substring(start.indexOf("T") + 1);
        const end = new Date(form.values.endTime).toISOString();
        const endTime = end.substring(end.indexOf("T") + 1);


        const newAppointment = {
            startTime: `${cleanDate}T${startTime}`,
            endTime: `${cleanDate}T${endTime}`,
            type: form.values.radioPatient === "yes" ? "FOLLOWING" : "FIRST",
            patientName: form.values.radioPatient === "yes" ? null : form.values.patientName,
            patientId: form.values.radioPatient === "yes" ? form.values.patientId : null
        }


        try {
            await sendRequest(
                'http://localhost:8080/appointments',
                'POST',
                JSON.stringify(newAppointment),
                {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + auth.token

                }
            );
            navigate("/");
            notifications.showNotification({
                title: 'Appointment created!',
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
            title={<h3>New appointment</h3>}

        >
            <div className='new-appointment-modal-wrapper'>
                <form className='new-appointment-form' onSubmit={createAppointmentHandler}>
                    <div className="new-appointment-form-item">
                        <DatePicker

                            placeholder="Pick a date"
                            label="Appointment's date"
                            variant="filled"
                            radius="md"
                            size="xs"
                            required
                            {...form.getInputProps('date')}
                        />
                    </div>


                    <div className="new-appointment-form-item">
                        <TimeInput
                            label="Appointment's start time"
                            variant="filled"
                            radius="md"
                            size="xs"
                            style={{ marginTop: 20 }}
                            {...form.getInputProps('startTime')}
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
                            {...form.getInputProps('endTime')}
                        >
                        </TimeInput>
                    </div>

                    {isDateTaken 
                    && <h4>This date is intercepted by another appointment.</h4>
                    }

                    <div className="new-appointment-form-item">
                        <RadioGroup
                            label="Is the patient already registered?"
                            variant="filled"
                            radius="md"
                            size="xs"
                            style={{ marginTop: 20 }}
                            {...form.getInputProps('radioPatient')}
                        >
                            <Radio value="yes">Yes</Radio>
                            <Radio value="no">No</Radio>
                        </RadioGroup>
                    </div>

                    {form.values.radioPatient === "yes" &&
                        <div className="new-appointment-form-item">
                            <Select
                                label="Patient"
                                placeholder="Pick one"
                                searchable
                                nothingFound="No patients found"
                                variant="filled"
                                radius="md"
                                size="xs"
                                style={{ marginTop: 20, marginBottom: 30 }}
                                data={loadedPatients}
                                {...form.getInputProps('patientId')}
                            />
                        </div>
                    }
                    {form.values.radioPatient === "no" &&
                        <div className="new-appointment-form-item">
                            <TextInput
                                placeholder="Patient's name"
                                label="Patient's name"
                                variant="filled"
                                radius="md"
                                size="xs"
                                style={{ marginTop: 20, marginBottom: 30 }}
                                {...form.getInputProps('patientName')}
                            />
                        </div>
                    }


                    <div className="new-appointment-form__buttons">
                        <Button type='submit' color='teal' variant="light" compact onClick={props.onClose}
                        >Create appointment</Button>

                    </div>
                </form>
            </div>
        </Modal>


    );
};

export default NewAppointmentModal;
