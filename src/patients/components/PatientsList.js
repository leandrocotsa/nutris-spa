import React from 'react';

import { TextInput, Loader } from '@mantine/core';

import { BiSearch } from 'react-icons/bi';

import PatientItem from './PatientItem';

import './PatientsList.css';

const PatientsList = props => {

  return (

    <React.Fragment>

      <div className="patients-list__search-bar">
        <TextInput
          radius="md"
          size="xs"
          icon={<BiSearch />} />

      </div>
      <ul className="patients-list">

        {!props.isLoading && props.patients ?

          (props.patients.length === 0 ? <p className='center empty-warning'>No patients found!</p>
            :
            props.patients.map(patient => (
              <PatientItem
                key={patient.id}
                id={patient.id}
                image={patient.image}
                name={patient.fullName}
                currentWeight={patient.currentWeight}
                weightGoal={patient.desiredWeight}
                birthDate={patient.birthDate}
              />
            ))
          )





          :
          <div className='empty-warning'>
            <Loader color="teal" size="sm" variant="dots" />
          </div>
        }




      </ul>
    </React.Fragment>

  );
};

export default PatientsList;
