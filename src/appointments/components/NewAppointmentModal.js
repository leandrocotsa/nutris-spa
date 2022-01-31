import React, { useState } from 'react';


import { Button, Modal, Radio, RadioGroup } from '@mantine/core';
import { DatePicker, TimeInput } from '@mantine/dates';


import './NewAppointmentModal.css';


const NewAppointmentModal = props => {

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
            name: 'Nikocado Avocado',
            weightGoal: '80',
            currentWeight: '98',
            weightDif: '+1',
            birthDate: '25/04/1998',
            lastAppointment: '22/09/2020',
            image:
                'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        }
    ];



    return (

        <Modal
            centered
            overflow="inside"
            size={450}
            opened={props.opened}
            radius="lg"
            onClose={props.onClose}

        >
            <div className='new-appointment-modal-wrapper'>
                <div className='new-appointment-modal-header'>
                    <h3 className='green-text'>New appointment</h3>
                </div>
                <form className='new-appointment-form'>
                    <div className="new-appointment-form-item">
                        <DatePicker

                            placeholder="Pick a date"
                            label="Appointment's date"
                            variant="filled"
                            radius="md"
                            size="xs"
                            style={{ marginTop: 20 }}
                            required
                        />
                    </div>


                    <div className="new-appointment-form-item">
                        <TimeInput
                            label="Appointment's time"
                            variant="filled"
                            radius="md"
                            size="xs"
                            style={{ marginTop: 20 }}
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
                        >
                            <Radio value="yes">Yes</Radio>
                            <Radio value="no">No</Radio>
                        </RadioGroup>
                    </div>
                    <div className="new-appointment-form__buttons">
                        <Button color='teal' variant="outline" compact onClick={props.onClose}
                        >Create appointment</Button>

                    </div>
                </form>
            </div>
        </Modal>


    );
};

export default NewAppointmentModal;
