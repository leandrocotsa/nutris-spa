import React, { useContext, useState } from 'react';

import Card from '../../../shared/components/UIElements/Card';
import Avatar from '../../../shared/components/UIElements/Avatar';

import { Button, Menu } from '@mantine/core';

import { FaBirthdayCake, FaPhoneAlt } from 'react-icons/fa';
import { BsGenderAmbiguous, BsFillTrashFill } from 'react-icons/bs';
import { HiMail } from 'react-icons/hi';
import { AiOutlineEdit, AiOutlineEye } from 'react-icons/ai';

import PatientFullDetailsModal from './PatientFullDetailsModal'

import { BsCheckCircleFill } from 'react-icons/bs';

import { format } from 'fecha';




import './PatientCard.css';
import WarningModal from '../../../shared/components/FormElements/WarningModal';
import { useHttpClient } from '../../../shared/hooks/http-hook';
import { Link, useNavigate } from 'react-router-dom';
import { useNotifications } from '@mantine/notifications';
import { AuthContext } from '../../../shared/context/auth-context';
import { IoCreateOutline } from 'react-icons/io5';

const PatientCard = props => {

    const [opened, setOpened] = useState(false);

    const [openedWarning, setOpenedWarning] = useState(false);

    const { sendRequest } = useHttpClient();

    const navigate = useNavigate();
    const notifications = useNotifications();

    const auth = useContext(AuthContext);


    const deletePatient = async () => {

        try {
            await sendRequest(
                'http://localhost:8080/patients/' + props.patient.id,
                'DELETE',
                null,
                {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + auth.token
                }
            );

            navigate(`/patients`);

            notifications.showNotification({
                title: 'Patient deleted!',
                message: 'You can check all your patients in the Patients page.',
                radius: 'lg',
                icon: (<BsCheckCircleFill />),
                color: "red"
            })




        } catch (err) {

        }
    }

    const deleteFoodPlanHandler = async () => {

        try {
            await sendRequest(
                `http://localhost:8080/patients/${props.patient.id}/plan`,
                'DELETE',
                null,
                {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + auth.token
                }
            );

            navigate(`/patients`);

            notifications.showNotification({
                title: 'Food Plan deleted!',
                message: 'You can check all your patients in the Patients page.',
                radius: 'lg',
                icon: (<BsCheckCircleFill />),
                color: "red"
            })




        } catch (err) {

        }
    }



    if (props.patient.length === 0) {
        return (
            <div className="center">
                <h2>No patients found.</h2>
            </div>
        );
    }



    return (

        <React.Fragment>

            <WarningModal
                opened={openedWarning}
                onClose={() => {
                    setOpenedWarning(false)
                }}
                onConfirm={deletePatient}
                message="Are you sure you want to delete this patient? This operation cannot be undone."
            />


            <Card className={`patient-card ${props.className}`}>

                <div className="patient-card__container-image">
                    <div className="patient-card__container-image-square">
                        <Avatar className="patient-card__image" image={'https://images.uncyc.org/wikinet/e/eb/Nikocado_Avocado.jpg'} alt={'nico'} />
                    </div>
                    <h2>{props.patient.firstName + " " + props.patient.lastName}</h2>
                </div>

                <div className='patient-card__container'>

                    <div className="patient-card__info">
                        <h4><BsGenderAmbiguous size={16} /> {props.patient.sex}</h4>
                    </div>

                    <div className="patient-card__info">
                        <h4><FaBirthdayCake /> {format(new Date(props.patient.birthDate), 'DD-MM-YYYY')}</h4>
                    </div>

                    <div className="patient-card__info">
                        <h4><FaPhoneAlt size={12} /> {props.patient.phoneNumber}</h4>
                    </div>

                    <div className="patient-card__info">
                        <h4><HiMail /> {props.patient.email}</h4>
                    </div>

                </div>


                {props.editable &&
                    <>
                        <PatientFullDetailsModal
                            centered
                            overflow="inside"
                            size={600}
                            opened={opened}
                            radius="lg"
                            onClose={() => {
                                setOpened(false)
                            }}
                            patient={props.patient}

                        />



                        <div className="patient-card__buttons">
                            <Button compact color='teal' variant="filled" size="xs" radius="md" onClick={() => setOpened(true)}>
                                Full details
                            </Button>

                            <Menu
                                position="bottom"
                                placement="center"
                                gutter={8}
                                withArrow
                                control={
                                    <Button compact color='teal' variant="filled" size="xs" radius="md">Food plan</Button>
                                }>


                                {props.patient.hasFoodplan
                                    ?
                                    <Menu.Item icon={<AiOutlineEye />}>View plan</Menu.Item>

                                    :
                                    <Menu.Item
                                        component={Link}
                                        to={`/patients/${props.patient.id}/foodplan`}
                                        state={{ patient: props.patient }}

                                        icon={<IoCreateOutline />}>New plan</Menu.Item>
                                }

                                {props.patient.hasFoodplan &&
                                    <Menu.Item
                                        component={Link}
                                        to={`/patients/${props.patient.id}/foodplan`}
                                        state={{ patient: props.patient }}

                                        icon={<AiOutlineEdit />}>Edit plan</Menu.Item>

                                }

                                {props.patient.hasFoodplan &&
                                    <Menu.Item color="red" icon={<BsFillTrashFill />} onClick={deleteFoodPlanHandler}>Delete plan</Menu.Item>
                                }







                            </Menu>


                            <Menu
                                position="bottom"
                                placement="start"
                                gutter={8}
                                withArrow
                                control={
                                    <Button compact color='teal' variant="filled" size="xs" radius="md">...</Button>
                                }>
                                <Menu.Item color="red" icon={<BsFillTrashFill />} onClick={() => setOpenedWarning(true)}>Delete patient</Menu.Item>
                            </Menu>



                        </div>

                    </>}






            </Card>
        </React.Fragment>
    );
};

export default PatientCard;
