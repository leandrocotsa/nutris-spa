import React, { useEffect, useState } from 'react';

import Card from '../../shared/components/UIElements/Card';

import { Loader } from '@mantine/core';

import { AppointmentsTable } from '../../appointments/components/AppointmentsTable';

import relax from '../../assets/relax-on-beach.svg';




import './TodaysAppointmentsCard.css';


const TodaysAppointmentsCard = props => {

    const [todaysAppointments, setTodaysAppointments] = useState();



    useEffect(() => {

        setTodaysAppointments(props.appointments.filter(appointment => {
            let appDate = new Date(appointment.startTime);
            let todaysDate = new Date();
            return (appointment.state !== "COMPLETED" && appDate.getDate() === todaysDate.getDate() && appDate.getMonth() === todaysDate.getMonth() && appDate.getFullYear() === todaysDate.getFullYear());

        }));

    }, [props.appointments]);

       







    return (


        <Card className="todays-appointments-card">
            <div className="todays-appointments-card-header">
                <h2>Today's appointments</h2>
            </div>

            <div className='todays-appointments-card__container'>

                {todaysAppointments ?
                    <React.Fragment>
                        <AppointmentsTable appointments={todaysAppointments} patientName={true} endDate={false} onDelete={props.onDelete} />
                        {todaysAppointments.length === 0 && <div className='lol'><img height={210} src={relax} alt='relax' /></div>}
                    </React.Fragment>
                    : <div className='empty-warning'><Loader color="teal" size="sm" variant="dots" /> </div>}

            </div>

        </Card>

    );
};

export default TodaysAppointmentsCard;
