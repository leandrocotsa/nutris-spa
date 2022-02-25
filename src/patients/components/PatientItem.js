import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import { Avatar } from '@mantine/core';
import { Button } from '@mantine/core';
import './PatientItem.css';

import { format } from 'fecha';

import { Link } from 'react-router-dom';


const UserItem = props => {



  return (
    <li className="patient-item">

      <Card className="patient-item__content">

        <div className="patient-item__image">
          <Avatar radius="xl" size="lg" color="teal" src={props.image ? 'https://images.uncyc.org/wikinet/e/eb/Nikocado_Avocado.jpg' : null} alt={'nico'} />
        </div>
        <div className="patient-item__info-name">
          <h3>{props.name}</h3>
        </div>

        <div className="patient-item__info">
          <h4>{ format(new Date(props.birthDate), 'DD-MM-YYYY') }</h4>
        </div>



        <div className="patient-item__info">
          <h4>{ props.currentWeight ? props.currentWeight : "-" }Kg /
            <span className='patient-item__info__goal-weight'>{props.weightGoal}Kg</span>
          </h4>
        </div>




        <div className="patient-item__info patient-item__buttons">
          <Button component={Link} to={`/patients/${props.id}`} color='teal' variant="light" radius="md">
            See details
          </Button>
          
        </div>


      </Card>
    </li >
  );
};

//if weight diff length != 0 && positive: do red

export default UserItem;
