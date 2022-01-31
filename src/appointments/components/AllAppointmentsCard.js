import React, { useState } from 'react';

import Card from '../../shared/components/UIElements/Card';

import { Button } from '@mantine/core';


import NewAppointmentModal from './NewAppointmentModal';

import { AppointmentsTable } from './AppointmentsTable';


import './AllAppointmentsCard.css';


const AllAppointmentsCard = props => {

    const [opened, setOpened] = useState(false);






    if (props.appointments.length === 0) {
        return (
            <div className="center">
                <h2>No patients found.</h2>
            </div>
        );
    }


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

                <div className='all-appointments-card__container'>


                    <AppointmentsTable appointments={props.appointments} patientName={true} endDate={true}/>




                </div>

            </Card>
        </>
    );
};

export default AllAppointmentsCard;
