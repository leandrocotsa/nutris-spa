import React, { useContext } from 'react';

import SideBarLinks from './SideBarLinks';
import './SideBar.css';
import { AuthContext } from '../../context/auth-context';


const SideBar = props => {

    const auth = useContext(AuthContext);

 

    return (

        <React.Fragment>
            {auth.isLoggedIn &&
                <div className="side-bar">
                    <div className="side-bar__logo">
                        <img src='/nutris-logo.png' alt="logo" />
                    </div>

                    <div className="">
                        <SideBarLinks />
                    </div>
                </div>}
        </React.Fragment>
    );

};

export default SideBar;