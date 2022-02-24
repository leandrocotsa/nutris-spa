import React, { useEffect, useState } from 'react';

import Card from '../../shared/components/UIElements/Card';
import { Avatar, Loader } from '@mantine/core';
import { Button } from '@mantine/core';

import { FaCalendarDay } from 'react-icons/fa';
import { BsCaretDownFill } from 'react-icons/bs';


import { reformatDate } from '../../appointments/components/AppointmentsTable';

import './NextAppointmentCard.css';


const NextAppointmentCard = props => {

    const [nextAppointment, setNextAppointment] = useState();



    useEffect(() => {

        setNextAppointment(props.appointments.filter(appointment => {
            let appDate = new Date(appointment.startTime);
            let todaysDate = new Date();
            return appointment.state !== "COMPLETED" && appDate.getDate() === todaysDate.getDay() && appDate.getMonth() === todaysDate.getMonth() && appDate.getFullYear() === todaysDate.getFullYear();

        }));

    }, [props.appointments]);




    return (

        <Card className="next-appointment-card">

            <h2>Next appointment</h2>

            {nextAppointment ?
                <React.Fragment>

                    {nextAppointment.length === 0 ? <p className='center'>No more appointments for today!</p>
                        :
                        <div className='next-appointment-card__container'>
                            <Avatar src={"https://images.uncyc.org/wikinet/e/eb/Nikocado_Avocado.jpg"} size="xl" radius="xl" />
                            <div>
                                <h3 className='dark-gray'>{nextAppointment[0].patientName}</h3>
                                <h4 className='light-gray'><FaCalendarDay />&nbsp;{reformatDate(nextAppointment[0].startTime)}</h4>
           
                            </div>

                            <div className='next-appointment-card__container-buttons'>
                                <Button color='teal' variant="light" radius="md" compact >
                                    Start appointment
                                </Button>
                            </div>

                        </div>
                    }
                </React.Fragment>
                : <div className='empty-warning'><Loader color="teal" size="sm" variant="dots" /> </div>}






        </Card>
    );
};

export default NextAppointmentCard;
