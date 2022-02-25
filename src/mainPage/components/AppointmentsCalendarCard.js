import React, { useEffect, useState } from 'react';

import Card from '../../shared/components/UIElements/Card';

import Kalend, { CalendarView } from 'kalend';
import 'kalend/dist/styles/index.css'; // import styles


import './AppointmentsCalendarCard.css';

const colors = [
    'indigo',
    'blue',
    'orange',
    'red',
    'pink',
    'crimson',
    'dodgerblue',
    'brown',
    'purple',
    'tomato',
    'MediumPurple',
    'salmon',
];

const AppointmentsCalendarCard = props => {

    const [calendarAppointments, setCalendarAppointments] = useState();



    useEffect(() => {


        setCalendarAppointments(props.appointments.map(appointment => {
            return {
                id: appointment.id,
                startAt: new Date(appointment.startTime).toISOString(),
                endAt: new Date(appointment.endTime).toISOString(),
                timezoneStartAt: 'Europe/Berlin', // optional
                summary: appointment.patientName,
                color: colors[Math.floor(Math.random() * colors.length - 1) + 1],
                calendarID: 'work'
            }
        }));

    }, [props.appointments]);







    return (


        <Card className="calendar-card">

            <Kalend
                initialView={CalendarView.WEEK}
                disabledViews={[]}
                events={calendarAppointments}
                initialDate={new Date().toISOString()}
                hourHeight={40}
                timezone={'Europe/Berlin'}
            // disableMobileDropdown={true}
            />
        </Card>
    );
};

export default AppointmentsCalendarCard;
