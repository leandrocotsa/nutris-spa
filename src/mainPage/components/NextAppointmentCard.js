import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import { Avatar } from '@mantine/core';
import { Button } from '@mantine/core';

import { FaCalendarDay } from 'react-icons/fa';
import { BsCaretDownFill } from 'react-icons/bs';


import { reformatDate } from '../../appointments/components/AppointmentsTable';

import './NextAppointmentCard.css';


const NextAppointmentCard = props => {

    const todaysAppointments = props.appointments.filter(appointment => {
        let appDate = new Date(appointment.startdate);
        let todaysDate = new Date();
        return appointment.state !== "COMPLETED" && appDate.getDay === todaysDate.getDay &&
            appDate.getMonth === todaysDate.getMonth &&
            appDate.getFullYear === todaysDate.getFullYear;

    });

    console.log(todaysAppointments);





    return (

        <Card className="next-appointment-card">
            <h2>Next appointment</h2>

            <div className='next-appointment-card__container'>
                <Avatar src={"https://images.uncyc.org/wikinet/e/eb/Nikocado_Avocado.jpg"} size="xl" radius="xl" />
                <div>
                    <h3 className='dark-gray'>Nikocado Avocado</h3>
                    <h4 className='light-gray'><FaCalendarDay /> {reformatDate(todaysAppointments[0].startDate)}</h4>
                    <h4 className='light-gray'>Lol</h4>
                </div>

                <div className='next-appointment-card__container-buttons'>
                    <Button color='teal' variant="light" radius="md" compact >
                        Start appointment
                    </Button>
                    <Button color='teal' variant="light" radius="md" style={{ marginTop: 10 }} compact>
                        <BsCaretDownFill />More options
                    </Button>
                </div>





            </div>

        </Card>
    );
};

export default NextAppointmentCard;