import React, { useEffect, useState } from 'react';

import Card from '../../shared/components/UIElements/Card';

import { Button, Loader } from '@mantine/core';


import NewAppointmentModal from './NewAppointmentModal';

import { AppointmentsTable } from './AppointmentsTable';


import './AllAppointmentsCard.css';
import { useHttpClient } from '../../shared/hooks/http-hook';


const AllAppointmentsCard = props => {

    const [opened, setOpened] = useState(false);

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

                { !props.isLoading && props.appointments ? <div className='all-appointments-card__container'>
                    <AppointmentsTable appointments={props.appointments} patientName={true} endDate={true} fullMode={true} type={true} onDelete={props.onDelete}/>
                </div> : <div className='empty-warning'><Loader color="teal" size="sm" variant="dots" /> </div> }

          

            </Card>
        </>
    );
};

export default AllAppointmentsCard;
