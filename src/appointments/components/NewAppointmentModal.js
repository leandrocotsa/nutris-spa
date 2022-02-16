import React, { useState } from 'react';
import { useForm } from '@mantine/hooks';

import { Button, Modal, Radio, RadioGroup, Select, TextInput } from '@mantine/core';
import { DatePicker, TimeInput } from '@mantine/dates';


import './NewAppointmentModal.css';


const NewAppointmentModal = props => {

    const [value, setValue] = useState('');

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



    //fecth patients?
    const USERS = [
        {
            id: 'u1',
            name: 'Nikocado Avocado',
            weightGoal: '80',
            currentWeight: '98',
            weightDif: '-2',
            birthDate: '25/04/1998',
            lastAppointment: '22/09/2020',
            image:
                'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        },
        {
            id: 'u2',
            name: 'Nikocada Avocada',
            weightGoal: '80',
            currentWeight: '98',
            weightDif: '+1',
            birthDate: '25/04/1998',
            lastAppointment: '22/09/2020',
            image:
                'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        }
    ];

    const patientList = USERS.map(patient => {
        return {
            value: patient.id,
            label: `${patient.name}`
        }
    });



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
                <form className='new-appointment-form'>
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
                                data={patientList}
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
                        <Button color='teal' variant="light" compact onClick={props.onClose}
                        >Create appointment</Button>

                    </div>
                </form>
            </div>
        </Modal>


    );
};

export default NewAppointmentModal;
