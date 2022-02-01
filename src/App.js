import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes
} from 'react-router-dom';


import SideBar from './shared/components/Navigation/SideBar';
import Header from './shared/components/Navigation/Header';

import MainPage from './mainPage/MainPage';

import Login from './auth/pages/Login';

import NewPatient from './patients/pages/NewPatient';
import Patients from './patients/pages/Patients';
import Patient from './patients/pages/Patient';

import Appointments from './appointments/pages/appointments';
import AppointmentMeasurements from './appointments/pages/AppointmentMeasurements';
import FoodPlan from './foodPlan/pages/FoodPlan';



//TODO: 
//modal para editar measuremnts
//notification system (ez)
//placeholder de loading dos cartoes
//forms de edit como preencho com os valores antigos
//fetch da stuff do frontend
//modal de editar consulta
//planos e alimentos



const App = () => {
  return (
    <Router>
      <SideBar />
      <Header />
      <main>
        <Routes>
          <Route path="/login" exact element={<Login />} />

          <Route path="/" exact element={<MainPage />} />

          <Route path="/patients" exact element={<Patients />} />
          <Route path="/patients/:userId" exact element={<Patient />} />
          <Route path="/patients/new" exact element={<NewPatient />} />

          <Route path="/patients/:userId/foodplan" exact element={<FoodPlan />} />

          <Route path="/appointments" exact element={<Appointments />} />
          <Route path="/appointments/:id/measurements" exact element={<AppointmentMeasurements />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
