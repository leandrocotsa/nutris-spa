import React, { useState } from 'react';

import Card from '../../../shared/components/UIElements/Card';
import Avatar from '../../../shared/components/UIElements/Avatar';

import { Button} from '@mantine/core';

import { FaBirthdayCake, FaPhoneAlt } from 'react-icons/fa';
import { BsGenderAmbiguous } from 'react-icons/bs';
import { HiMail } from 'react-icons/hi';

import PatientFullDetailsModal from './PatientFullDetailsModal'




import './PatientCard.css';

const PatientCard = props => {

    const [opened, setOpened] = useState(false);



    if (props.patient.length === 0) {
        return (
            <div className="center">
                <h2>No patients found.</h2>
            </div>
        );
    }

    return (

        <>


            <Card className="patient-card">

                <div className="patient-card__container-image">
                    <div className="patient-card__container-image-square">
                        <Avatar className="patient-card__image" image={'https://images.uncyc.org/wikinet/e/eb/Nikocado_Avocado.jpg'} alt={'nico'} />
                    </div>
                    <h2>{props.patient.fullName}</h2>
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
                            <Button color='teal' variant="filled" radius="md" onClick={() => setOpened(true)}>
                                Full details
                            </Button>
                        </div>

                    </>}






            </Card>
        </>
    );
};

export default PatientCard;
