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
import { useForm } from '@mantine/hooks';
import EditAppointmentModal from './EditAppointmentModal';
import { useHttpClient } from '../../shared/hooks/http-hook';

const reformatDate = (dateStart, dateEnd) => {
    return new Date(dateStart).toLocaleString().replace(/AM|PM/, '');
};


const AppointmentsTable = props => {

    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    //dois useEffect
    //um para obter os appintemnts todos da nutricionista
    // outro para fazer os filtros



    const [openedWarning, setOpenedWarning] = useState(false);
    const [openedEditAppointment, setOpenedEditAppointment] = useState(false);
    const [selectedAppointmentState, setSelectedAppointmentState] = useState('');
    const [selectedAppointmentType, setSelectedAppointmentType] = useState('');
    const [enteredSearchText, setEnteredSearchText] = useState('');
    const [selectedAppointment, setSelectedAppointment] = useState({});


    const [currentAppointments, setCurrentAppointments] = useState([]);







    useEffect(() => {

        setCurrentAppointments(props.appointments
            .filter(appointment => {
                if (selectedAppointmentState !== null && selectedAppointmentState !== '') {
                    return (appointment.state === selectedAppointmentState)
                } return true;

            })
            .filter(appointment => {
                if (selectedAppointmentType !== null && selectedAppointmentType !== '') {
                    return (appointment.type === selectedAppointmentType)
                } return true;

            }))
        //filters
        //set current appointemnts

    }, [selectedAppointmentState, selectedAppointmentType, enteredSearchText, props.appointments]);



    const deleteAppointment = async (appointmentId) => {

        try {
            await sendRequest(
                'http://localhost:8080/appointments/' + appointmentId,
                'DELETE',
                null,
                {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtakBnbWFpbC5jb20iLCJhdWQiOiJST0xFX05VVFJJVElPTklTVCIsImV4cCI6MTY0NTcxNTg0MCwiaWF0IjoxNjM3MDc1ODQwLCJqdGkiOiIxIn0.Hj9vs2H_BWjFnQax6x51dqtK4io3_oHpZc57R0OZuYaDCKEyidtZfSXS1SREupJTNl3nWZznA69Al6JaWJDK-w'
                }
            );
        } catch (err) {

        }
    }




    const appointmentStateChangeHandler = (event) => {
        setSelectedAppointmentState(event);
    }


    const appointmentTypeChangeHandler = (event) => {
        setSelectedAppointmentType(event);
    }


    const rows = currentAppointments.map((appointment) => (
        <tr key={appointment.id}>



            {props.endDate
                ? <td>{reformatDate(appointment.startTime) + "/"}<br />{reformatDate(appointment.endTime)}</td>
                : <td>{reformatDate(appointment.startTime)}</td>
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
                                <BsCaretDownFill onClick={() => setSelectedAppointment(appointment)} />
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






    return (



        <React.Fragment>
            <WarningModal
                opened={openedWarning}
                onClose={() => {
                    setOpenedWarning(false)
                }}
                onConfirm={deleteAppointment}
                toDelete={selectedAppointment}
            />

            <EditAppointmentModal
                opened={openedEditAppointment}
                onClose={() => {
                    setOpenedEditAppointment(false)
                }}
                appointment={selectedAppointment}
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
                                    value={selectedAppointmentType}
                                    onChange={appointmentTypeChangeHandler}
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

                {currentAppointments.length === 0 && <p className='center empty-warning'>No appointments found!</p>}

            </div>
        </React.Fragment>

    );
};

export { AppointmentsTable, reformatDate };




