import React, { useCallback, useState } from 'react';
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



//TODO: 
//modal para editar measuremnts
//notification system (ez)
//placeholder de loading dos cartoes
//forms de edit como preencho com os valores antigos
//fetch da stuff do frontend
//modal de editar consulta
//planos e alimentos



const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Routes>
        <Route path="/" exact element={<MainPage />} />

        <Route path="/patients" exact element={<Patients />} />
        <Route path="/patients/:patientId" exact element={<Patient />} />
        <Route path="/patients/new" exact element={<NewPatient />} />

        <Route path="/patients/:userId/foodplan" exact element={<FoodPlan />} />

        <Route path="/appointments" exact element={<Appointments />} />
        <Route path="/appointments/:appointmentId/measurements" exact element={<AppointmentMeasurements />} />

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
    <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }} >
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
