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

import Appointments from './appointments/pages/Appointments';
import AppointmentMeasurements from './appointments/pages/AppointmentMeasurements';
import FoodPlan from './foodPlan/pages/FoodPlan';
import Signup from './auth/pages/Signup';
import { AuthContext } from './shared/context/auth-context';
import { useAuth } from './shared/hooks/auth-hook';
import AllFood from './food/pages/AllFood';




const App = () => {

  const { token, login, logout } = useAuth();

  

  let routes;

  if (token) {
    routes = (
      <Routes>
        <Route path="/" exact element={<MainPage />} />

        <Route path="/patients" exact element={<Patients />} />
        <Route path="/patients/:patientId" exact element={<Patient />} />
        <Route path="/patients/new" exact element={<NewPatient />} />

        <Route path="/patients/:userId/foodplan" exact element={<FoodPlan />} />

        <Route path="/appointments" exact element={<Appointments />} />
        <Route path="/appointments/:appointmentId/measurements" exact element={<AppointmentMeasurements />} />

        <Route path="/food" exact element={<AllFood />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    );
  }



  return (
    <AuthContext.Provider value={{ 
      isLoggedIn: !!token, 
      token: token,
      login: login, 
      logout: logout }} >
      <Router>
        <SideBar />
        <Header />
        <main>

          {routes}

        </main>
      </Router>
    </AuthContext.Provider >
  );
};

export default App;
