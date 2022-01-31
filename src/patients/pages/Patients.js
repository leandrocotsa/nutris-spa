import React from 'react';

import PatientsList from '../components/PatientsList';

const Patients = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Nikocado Avocado',
      weightGoal: '80',
      currentWeight: '98',
      weightDif: '-2',
      birthDate: '25/04/1998',
      lastAppointment: '22/09/2020',
      image:
        'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
      id: 'u2',
      name: 'Nikocado Avocado',
      weightGoal: '80',
      currentWeight: '98',
      weightDif: '+1',
      birthDate: '25/04/1998',
      lastAppointment: '22/09/2020',
      image:
        'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
      id: 'u3',
      name: 'Nikocado Avocado',
      weightGoal: '80',
      currentWeight: '98',
      weightDif: '-2',
      birthDate: '25/04/1998',
      lastAppointment: '22/09/2020',
      image:
        'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
      id: 'u4',
      name: 'Nikocado Avocado',
      weightGoal: '80',
      currentWeight: '98',
      weightDif: '+2',
      birthDate: '25/04/1998',
      lastAppointment: '22/09/2020',
      image:
        'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
      id: 'u5',
      name: 'Nikocado Avocado',
      weightGoal: '80',
      currentWeight: '98',
      weightDif: '-2',
      birthDate: '25/04/1998',
      lastAppointment: '22/09/2020',
      image:
        'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
      id: 'u6',
      name: 'Nikocado Avocado',
      weightGoal: '80',
      currentWeight: '98',
      weightDif: '-2',
      birthDate: '25/04/1998',
      lastAppointment: '22/09/2020',
      image:
        'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
      id: 'u7',
      name: 'Nikocado Avocado',
      weightGoal: '80',
      currentWeight: '98',
      weightDif: '-2',
      birthDate: '25/04/1998',
      lastAppointment: '22/09/2020',
      image:
        'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
      id: 'u8',
      name: 'Nikocado Avocado',
      weightGoal: '80',
      currentWeight: '98',
      weightDif: '-2',
      birthDate: '25/04/1998',
      lastAppointment: '22/09/2020',
      image:
        'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
      id: 'u9',
      name: 'Nikocado Avocado',
      weightGoal: '80',
      currentWeight: '98',
      weightDif: '-2',
      birthDate: '25/04/1998',
      lastAppointment: '22/09/2020',
      image:
        'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    }
  ];

  return <PatientsList items={USERS} />;
};

export default Patients;
