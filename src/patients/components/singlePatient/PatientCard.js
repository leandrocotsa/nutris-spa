import React, { useState } from 'react';

import Card from '../../../shared/components/UIElements/Card';
import Avatar from '../../../shared/components/UIElements/Avatar';

import { Button, Menu } from '@mantine/core';

import { FaBirthdayCake, FaPhoneAlt } from 'react-icons/fa';
import { BsGenderAmbiguous, BsFillTrashFill } from 'react-icons/bs';
import { HiMail } from 'react-icons/hi';
import { AiOutlineEdit } from 'react-icons/ai';

import PatientFullDetailsModal from './PatientFullDetailsModal'




import './PatientCard.css';
import WarningModal from '../../../shared/components/FormElements/WarningModal';
import { useHttpClient } from '../../../shared/hooks/http-hook';
import { useNavigate } from 'react-router-dom';

const PatientCard = props => {

    const [opened, setOpened] = useState(false);

    const [openedWarning, setOpenedWarning] = useState(false);

    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    const navigate = useNavigate();


    const deletePatient = async () => {

        try {
            await sendRequest(
                'http://localhost:8080/patients/' + props.patient.id,
                'DELETE',
                null,
                {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtakBnbWFpbC5jb20iLCJhdWQiOiJST0xFX05VVFJJVElPTklTVCIsImV4cCI6MTY1NDM1NjA0NiwiaWF0IjoxNjQ1NzE2MDQ2LCJqdGkiOiIxIn0.fPi-lfPU8PN4aSitBAVHKH4Y_j1dVvf5fmCk8UtaEZKRPZDiNiJpfEjLIzRRk0Oy86R9uE6bVOKZZBDKFCg5DA'
                }
            );

            navigate(`/patients`);

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
                        <h4><FaBirthdayCake /> {props.patient.birthDate}</h4>
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
                                <Menu.Item icon={<BsFillTrashFill />}>New plan</Menu.Item>
                                <Menu.Item icon={<AiOutlineEdit />}>Edit plan</Menu.Item>
                                <Menu.Item color="red" icon={<BsFillTrashFill />}>Delete plan</Menu.Item>

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
