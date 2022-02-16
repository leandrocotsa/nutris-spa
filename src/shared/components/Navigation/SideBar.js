import React from 'react';

import SideBarLinks from './SideBarLinks';
import './SideBar.css';


const SideBar = props => {

    if(window.location.pathname==='/login' || window.location.pathname==='/signup'){
        return null;
    }   

    return <div className="side-bar">
          <div className="side-bar__logo">
            <img src='/nutris-logo.png' alt="logo" />
          </div>

        <div className="">
            <SideBarLinks />
        </div>
    </div>;
};

export default SideBar;