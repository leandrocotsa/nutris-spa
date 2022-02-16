import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { Table, Badge, Menu, Divider, Select, TextInput, Accordion } from '@mantine/core';
import { DateRangePicker } from '@mantine/dates';

import { BsCaretDownFill, BsFillTrashFill } from 'react-icons/bs';
import { BiCalendarStar, BiSearch } from 'react-icons/bi';
import { FiFilter } from 'react-icons/fi';

import { AiOutlineEdit } from 'react-icons/ai';


import './AppointmentsTable.css';

import WarningModal from '../../shared/components/FormElements/WarningModal';
import NewAppointmentModal from './NewAppointmentModal';

const reformatDate = (dateStart, dateEnd) => {
    return new Date(dateStart).toLocaleString();
};

const AppointmentsTable = props => {

    const [openedWarning, setOpenedWarning] = useState(false);
    const [openedEditAppointment, setOpenedEditAppointment] = useState(false);
    const [selectedAppointmentState, setSelectedAppointmentState] = useState('');
    const [appointments, setAppointments] = useState(props.appointments);

    useEffect(() => {
        setAppointments((prevAppointments) => {
            return props.appointments
                .filter(appointment => {
                    if(selectedAppointmentState !== null && selectedAppointmentState !== '') {
                        return appointment.state === selectedAppointmentState;
                    }
                    return true;
                }  )
        })
    }, [selectedAppointmentState, props.appointments])

    const appointmentStateChangeHandler = (event) => {
        setSelectedAppointmentState(event);
    }



    const rows = appointments.map((appointment) => (
        <tr key={appointment.id}>



            {props.endDate
                ? <td>{reformatDate(appointment.startDate) + "/"}<br />{reformatDate(appointment.endDate)}</td>
                : <td>{reformatDate(appointment.startDate)}</td>
            }

            {props.patientName &&

                <td>
                    <div>
                        {appointment.patientId
                            ?
                            <Link to={`/patients/${appointment.patientId}`}>
                                {appointment.patientName}
                            </Link>
                            :
                            <>
                                {appointment.patientName}
                            </>
                        }

                    </div>
                </td>}




            {appointment.type === "FIRST"
                ? <td><Badge size="xs" variant="outline" color="red">{appointment.type}</Badge></td>
                : <td><Badge size="xs" variant="outline" color="cyan">{appointment.type}</Badge></td>}
            {appointment.state === "COMPLETED"
                ? <td><Badge color="teal">{appointment.state}</Badge></td>
                : <td><Badge color="orange">{appointment.state}</Badge></td>}
            <td>
                <div className='all-appointments-card__action-icons'>
                    <Menu
                        position="bottom"
                        placement="start"
                        gutter={8}
                        withArrow
                        control={
                            <div>
                                <BsCaretDownFill />
                            </div>

                        }>

                        {appointment.state !== "COMPLETED"
                            ? <Menu.Item component={Link} to={appointment.type === "FIRST" ? `/patients/new` : `/appointments/${appointment.id}/measurements`} icon={<BiCalendarStar />}>Start</Menu.Item>
                            : <Menu.Item disabled icon={<BiCalendarStar />}>Start</Menu.Item>
                        }

                        <Menu.Item icon={<AiOutlineEdit />} onClick={() => setOpenedEditAppointment(true)}>Edit</Menu.Item>
                        <Divider />
                        <Menu.Item color="red" icon={<BsFillTrashFill />} onClick={() => setOpenedWarning(true)}>Delete</Menu.Item>
                    </Menu>

                </div>
            </td>
        </tr>
    ));



    if (props.appointments.length === 0) {
        return (
            <div className="center">
                <h2>No patients found.</h2>
            </div>
        );
    }


    return (

        <>
            <WarningModal
                opened={openedWarning}
                onClose={() => {
                    setOpenedWarning(false)
                }}
            />

            <NewAppointmentModal
                opened={openedEditAppointment}
                onClose={() => {
                    setOpenedEditAppointment(false)
                }}
            />


            <div className='appointments-table__container'>

                {props.fullMode &&
                    <Accordion icon={<FiFilter />} disableIconRotation>
                        <Accordion.Item label="Filters">
                            <div className='appointments-table__filters'>
                                <DateRangePicker
                                    label="Date range"
                                    placeholder="Pick date range"
                                    inputFormat="DD/MM/YYYY"
                                    variant="filled"
                                    radius="md"
                                    size="xs"
                                />
                                <TextInput
                                    label="Patient name"
                                    placeholder="Type the patient name"
                                    radius="md"
                                    size="xs"
                                    variant="filled"
                                    icon={<BiSearch />}
                                />

                                <Select
                                    label="Appointment type"
                                    placeholder="Pick type"
                                    clearable
                                    variant="filled"
                                    radius="md"
                                    size="xs"

                                    data={[
                                        { value: 'FIRST', label: 'First' },
                                        { value: 'FOLLOWING', label: 'Following' }
                                    ]}
                                />

                                <Select
                                    label="Appointment state"
                                    placeholder="Pick state"
                                    clearable
                                    variant="filled"
                                    radius="md"
                                    size="xs"
                                    value={selectedAppointmentState}
                                    onChange={appointmentStateChangeHandler}
                                    data={[
                                        { value: 'COMPLETED', label: 'Completed' },
                                        { value: 'SCHEDULED', label: 'Scheduled' }
                                    ]}
                                />
                            </div>
                        </Accordion.Item>
                    </Accordion>

                }

                <Table verticalSpacing="sm">
                    <thead>
                        <tr>
                            <th>Date</th>
                            {props.patientName && <th>Patient</th>}
                            <th>Type</th>
                            <th>State</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </Table>

            </div>
        </>

    );
};

export { AppointmentsTable, reformatDate };




