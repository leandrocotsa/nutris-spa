import React, { useState, useEffect, useContext } from 'react';

import { Link } from 'react-router-dom';

import { Table, Badge, Menu, Divider, Select, TextInput, Accordion } from '@mantine/core';
import { DateRangePicker } from '@mantine/dates';

import { BsCaretDownFill, BsFillTrashFill } from 'react-icons/bs';
import { BiCalendarStar, BiSearch } from 'react-icons/bi';
import { FiFilter } from 'react-icons/fi';


import { BsCheckCircleFill } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai';


import './AppointmentsTable.css';

import WarningModal from '../../shared/components/FormElements/WarningModal';
import EditAppointmentModal from './EditAppointmentModal';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { useNotifications } from '@mantine/notifications';
import { AuthContext } from '../../shared/context/auth-context';



const reformatDate = (dateStart, dateEnd) => {
    const dateString = new Date(dateStart).toLocaleString().replace(/AM|PM/, '')
    return dateString.substring(0, dateString.length - 4);
};


const AppointmentsTable = props => {

    const notifications = useNotifications();

    const { sendRequest } = useHttpClient();

    const auth = useContext(AuthContext);

    //dois useEffect
    //um para obter os appintemnts todos da nutricionista
    // outro para fazer os filtros



    const [openedWarning, setOpenedWarning] = useState(false);
    const [openedEditAppointment, setOpenedEditAppointment] = useState(false);
    const [selectedAppointmentState, setSelectedAppointmentState] = useState('');
    const [selectedAppointmentType, setSelectedAppointmentType] = useState('');
    const [enteredSearchText, setEnteredSearchText] = useState('');
    const [selectedAppointment, setSelectedAppointment] = useState({});

    const [dateRange, setDateRange] = useState([]);


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

            })
            .filter(appointment => {
                return appointment.patientName.toLowerCase().indexOf(enteredSearchText.toLowerCase()) >= 0;
            })
            .filter(appointment => {

                const startDate = new Date(appointment.startTime);
                const endDate = new Date(appointment.endTime);
                   
                return (dateRange[0] && dateRange[1]) ? dateRange[1] >= startDate && dateRange[0] <= endDate : true;
            })


        );



 


        //filters
        //set current appointemnts

    }, [selectedAppointmentState, selectedAppointmentType, enteredSearchText, props.appointments, dateRange]);



    const deleteAppointment = async () => {

        try {
            await sendRequest(
                'http://localhost:8080/appointments/' + selectedAppointment.id,
                'DELETE',
                null,
                {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + auth.token
                }
            );


            props.onDelete(selectedAppointment.id);
            notifications.showNotification({
                title: 'Appointment deleted!',
                message: 'You can check all your appointments in the Appointment page.',
                radius: 'lg',
                icon: (<BsCheckCircleFill />),
                color: "red"
            })
        } catch (err) {

        }
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

            {props.type && (appointment.type === "FIRST"
                ? <td><Badge size="xs" variant="outline" color="red">{appointment.type}</Badge></td>
                : <td><Badge size="xs" variant="outline" color="cyan">{appointment.type}</Badge></td>)}



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
                            ? <Menu.Item
                                component={Link}
                                to={appointment.patientId === null
                                    ? "/patients/new"
                                    : `/appointments/${appointment.id}/measurements?patient=${appointment.patientId}`
                                }
                                state={{ appointmentId: appointment.id }}
                                icon={<BiCalendarStar />}>Start</Menu.Item>
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

                message="Are you sure you want to delete this appointment? This operation cannot be undone."
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
                                    value={dateRange}
                                    onChange={(event) =>
                                        setDateRange(event)
                                    }

                                />
                                <TextInput
                                    label="Patient name"
                                    placeholder="Type the patient name"
                                    radius="md"
                                    size="xs"
                                    variant="filled"
                                    value={enteredSearchText}
                                    onChange={(event) =>
                                        setEnteredSearchText(event.target.value)
                                    }
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
                                    onChange={(event) =>
                                        setSelectedAppointmentType(event)
                                    }
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
                                    onChange={(event) =>
                                        setSelectedAppointmentState(event)}
                                    data={[
                                        { value: 'COMPLETED', label: 'Completed' },
                                        { value: 'SCHEDULED', label: 'Scheduled' }
                                    ]}

                                />
                            </div>
                        </Accordion.Item>
                    </Accordion>

                }

                <div className='all-appointment-table-container'>
                    <Table verticalSpacing="sm">
                        <thead>
                            <tr>
                                <th>Date</th>
                                {props.patientName && <th>Patient</th>}
                                {props.type && <th>Type</th>}
                                <th>State</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>{rows}</tbody>
                    </Table>

                    {currentAppointments.length === 0 && <p className='center empty-warning'>No appointments found!</p>}

                </div>

            </div>
        </React.Fragment>

    );
};

export { AppointmentsTable, reformatDate };




