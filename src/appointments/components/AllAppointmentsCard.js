import React, { useEffect, useState } from 'react';

import Card from '../../shared/components/UIElements/Card';

import { Button, Loader } from '@mantine/core';


import NewAppointmentModal from './NewAppointmentModal';

import { AppointmentsTable } from './AppointmentsTable';


import './AllAppointmentsCard.css';
import { useHttpClient } from '../../shared/hooks/http-hook';


const AllAppointmentsCard = props => {

    const [opened, setOpened] = useState(false);

    const [loadedAppointments, setLoadedAppointments] = useState([]);

    const { isLoading, error, sendRequest, clearError } = useHttpClient();



    useEffect(() => {
        const fetchAppointments = async () => { //not a good practice to turn useEffect into async so this is the way to go

            try {
                const responseData = await sendRequest(
                    'http://localhost:8080/appointments',
                    'GET', null,
                    {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtakBnbWFpbC5jb20iLCJhdWQiOiJST0xFX05VVFJJVElPTklTVCIsImV4cCI6MTY0NTcxNTg0MCwiaWF0IjoxNjM3MDc1ODQwLCJqdGkiOiIxIn0.Hj9vs2H_BWjFnQax6x51dqtK4io3_oHpZc57R0OZuYaDCKEyidtZfSXS1SREupJTNl3nWZznA69Al6JaWJDK-w'
                    }
                );
                setLoadedAppointments(responseData);
            } catch (err) {

            }
        };
        fetchAppointments();

        //first fetch with all appointments
        //set dos appointments no current
        //props que faz fazer fetch de tudo ou so dos de hoje?
    }, [sendRequest]);









    return (
        <>
            <NewAppointmentModal
                opened={opened}
                onClose={() => {
                    setOpened(false)
                }}
            />

            <Card className="all-appointments-card">
                <div className="all-appointments-card-header">

                    <Button color='teal' variant="light" radius="md" compact onClick={() => setOpened(true)}>
                        + New appointment
                    </Button>
                </div>

                { !isLoading && loadedAppointments ? <div className='all-appointments-card__container'>
                    <AppointmentsTable appointments={loadedAppointments} patientName={true} endDate={true} fullMode={true} />
                </div> : <div className='empty-warning'><Loader color="teal" size="sm" variant="dots" /> </div> }

          

            </Card>
        </>
    );
};

export default AllAppointmentsCard;
