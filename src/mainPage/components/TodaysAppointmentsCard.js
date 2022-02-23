import React, { useEffect, useState } from 'react';

import Card from '../../shared/components/UIElements/Card';

import { AppointmentsTable } from '../../appointments/components/AppointmentsTable';

import relax from '../../assets/relax-on-beach.svg';




import './TodaysAppointmentsCard.css';


const TodaysAppointmentsCard = props => {

    const [todaysAppointments, setTodaysAppointments] = useState({});



    useEffect(() => {

        setTodaysAppointments(props.appointments.filter(appointment => {
            let appDate = new Date(appointment.startTime);
            let todaysDate = new Date();
            return appointment.state !== "COMPLETED" && appDate.getDay() === todaysDate.getDay() && appDate.getMonth() === todaysDate.getMonth() && appDate.getFullYear() === todaysDate.getFullYear();

        }));

    }, [props.appointments]);







    return (


        <Card className="todays-appointments-card">
            <div className="todays-appointments-card-header">
                <h2>Today's appointments</h2>
            </div>

            <div className='todays-appointments-card__container'>


                <AppointmentsTable appointments={props.appointments} patientName={true} endDate={false} />

                {props.appointments.length === 0 &&
                    <div className='lol'><img  height={210} src={relax} alt='relax' /></div>
                }



            </div>

        </Card>

    );
};

export default TodaysAppointmentsCard;
