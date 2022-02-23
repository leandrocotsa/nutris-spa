import React, { useContext } from 'react';



import { Menu, Avatar } from '@mantine/core';
import { BsCaretDownFill } from 'react-icons/bs';

import './Header.css';
import { AuthContext } from '../../context/auth-context';


const Header = props => {

    const auth = useContext(AuthContext);



    return (

        <React.Fragment>
            {auth.isLoggedIn &&

                <div className="header">

                    <Menu className='header__avatar'
                        position="bottom"
                        placement="end"
                        gutter={8}
                        withArrow
                        control={
                            <div className='header__icons'>

                                <Avatar src={"https://images.uncyc.org/wikinet/e/eb/Nikocado_Avocado.jpg"} size="md" radius="xl" />
                                <BsCaretDownFill size={10} />
                            </div>
                        }>
                        <Menu.Item href="https://mantine/dev" target="_blank">My profile</Menu.Item>
                        <Menu.Item href="https://mantine/dev" target="_blank" onClick={auth.logout}>Logout</Menu.Item>
                    </Menu>

                </div>
            }
        </React.Fragment>

    )
};

export default Header;