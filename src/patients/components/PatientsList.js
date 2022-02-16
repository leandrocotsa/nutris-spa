import React from 'react';

import { TextInput } from '@mantine/core';

import { BiSearch } from 'react-icons/bi';

import PatientItem from './PatientItem';

import './PatientsList.css';

const PatientsList = props => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>No patients found.</h2>
      </div>
    );
  }

  return (
    <div className="main__wrapper">
      <div className="patients-list__info">
        <h1>Patients</h1>
        <p>Check informations about your patients</p>
      </div>
      <div className="patients-list__search-bar">
        <TextInput
          radius="md"
          size="xs"
          icon={<BiSearch />} />

      </div>
      <ul className="patients-list">

        {props.items.map(user => (
          <PatientItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            currentWeight={user.currentWeight}
            weightGoal={user.weightGoal}
            birthDate={user.birthDate}
            lastAppointment={user.lastAppointment}
            weightDif={user.weightDif}
          />
        ))}
      </ul>
    </div>
  );
};

export default PatientsList;
