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
                startAt: appointment.startTime,
                endAt: appointment.endTime,
                timezoneStartAt: 'Europe/Berlin', // optional
                summary: appointment.patientName,
                color: colors[Math.floor(Math.random() * colors.length - 1) + 1],
                calendarID: 'work'
            }
        }));

    }, [props.appointments]);





    const events = [
        {
            id: 1,
            startAt: '2021-11-17T13:35:00.000Z',
            endAt: '2021-11-17T14:30:00.000Z',
            timezoneStartAt: 'Europe/Berlin', // optional
            summary: 'test',
            color: 'red',
            calendarID: 'work'
        },
        {
            id: 2,
            startAt: '2021-11-21T18:00:00.000Z',
            endAt: '2021-11-21T19:00:00.000Z',
            timezoneStartAt: 'Europe/Berlin', // optional
            summary: 'test',
            color: 'blue',
        }, {
            id: 3,
            startAt: '2021-11-15T17:05:00.000Z',
            endAt: '2021-11-15T18:00:00.000Z',
            timezoneStartAt: 'Europe/Berlin', // optional
            summary: 'test',
            color: 'orange',
            calendarID: 'work'
        },
        {
            id: 4,
            startAt: '2021-11-21T18:00:00.000Z',
            endAt: '2021-11-21T19:00:00.000Z',
            timezoneStartAt: 'Europe/Berlin', // optional
            summary: 'test',
            color: 'blue',
        }
    ];







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
