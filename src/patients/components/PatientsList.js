import React, { useEffect, useState } from 'react';

import { TextInput, Loader, Pagination } from '@mantine/core';

import { BiSearch } from 'react-icons/bi';

import PatientItem from './PatientItem';

import './PatientsList.css';

import { chunk } from "lodash";

const PatientsList = props => {

  const [activePage, setPage] = useState(1);

  const [patientsPage, setPatientsPage] = useState();





  const [searchText, setSearchText] = useState('');

  useEffect(() => {



    const patientsFiltered = props.patients.filter(patient =>
      patient.fullName.toLowerCase().indexOf(searchText.toLowerCase()) >= 0);


    setPatientsPage(chunk(patientsFiltered, 10));






  }, [props.patients, searchText]);



  return (

    <React.Fragment>

      <div className="patients-list__search-bar">
        <TextInput
          radius="md"
          size="xs"
          onChange={(event) => setSearchText(event.target.value)}
          value={searchText}
          icon={<BiSearch />} />

      </div>
      <ul className="patients-list">

        {props.patients && patientsPage ?

          (patientsPage.length === 0 ? <p className='center empty-warning'>No patients found!</p>
            :

            <React.Fragment>
              {patientsPage[activePage - 1].map(patient => (
                <PatientItem
                  key={patient.id}
                  id={patient.id}
                  image={patient.image}
                  name={patient.fullName}
                  currentWeight={patient.currentWeight}
                  weightGoal={patient.desiredWeight}
                  birthDate={patient.birthDate}
                />
              ))}

              <Pagination color="teal" size="sm" radius="md" total={patientsPage.length} page={activePage} onChange={setPage} />

            </React.Fragment>
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
