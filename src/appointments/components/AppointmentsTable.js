import React from 'react';



import { Table, Badge, Menu, Divider } from '@mantine/core';

import { BsCaretDownFill, BsFillTrashFill } from 'react-icons/bs';
import { BiCalendarStar } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';





import './AppointmentsTable.css';

const reformatDate = (dateStart, dateEnd) => {
    return new Date(dateStart).toLocaleString();
};

const AppointmentsTable = props => {



    const rows = props.appointments.map((appointment) => (
        <tr key={appointment.id}>



            {props.endDate
                ? <td>{reformatDate(appointment.startDate) + "/"}<br />{reformatDate(appointment.endDate)}</td>
                : <td>{reformatDate(appointment.startDate)}</td>
            }

            {props.patientName && <td>{appointment.patientName}</td>}




            {appointment.type === "FIRST"
                ? <td><Badge variant="outline" color="red">{appointment.type}</Badge></td>
                : <td><Badge variant="outline" color="cyan">{appointment.type}</Badge></td>}
            {appointment.state === "COMPLETED"
                ? <td><Badge color="teal">{appointment.state}</Badge></td>
                : <td><Badge color="orange">{appointment.state}</Badge></td>}
            <td>
                <span className='all-appointments-card__action-icons'>
                    <Menu className='header__avatar'
                        position="bottom"
                        placement="start"
                        gutter={8}
                        withArrow
                        control={
                            <div>
                            <BsCaretDownFill />
                            </div>
                        }>
                        <Menu.Item icon={<BiCalendarStar />}>Start</Menu.Item>
                        <Menu.Item icon={<AiOutlineEdit />}>Edit</Menu.Item>
                        <Divider />
                        <Menu.Item color="red" icon={<BsFillTrashFill />}>Delete</Menu.Item>
                    </Menu>
                    
                </span>
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

        <div className='appointments-table__container'>

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

    );
};

export { AppointmentsTable, reformatDate };
