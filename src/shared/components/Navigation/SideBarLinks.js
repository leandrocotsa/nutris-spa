import React from 'react';
import { NavLink } from 'react-router-dom';

import { FaHome, FaCalendarDay } from 'react-icons/fa';
import { BsPeopleFill } from 'react-icons/bs';
import { ImSpoonKnife } from 'react-icons/im';

import './SideBarLinks.css';

const SideBarLinks = props => {
  return <ul className="nav-links">
    <li>
      <NavLink to="/"><FaHome /> Home</NavLink>
    </li>
    <li>
      <NavLink to="/appointments"><FaCalendarDay /> Appointments</NavLink>
    </li>
    <li>
      <NavLink to="/patients"><BsPeopleFill /> Patients</NavLink>
    </li>
    <li>
      <NavLink to="/food"><ImSpoonKnife /> Food</NavLink>
    </li>
  </ul>
};

export default SideBarLinks;