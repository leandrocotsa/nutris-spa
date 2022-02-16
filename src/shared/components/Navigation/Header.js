import React from 'react';



import { Menu, Avatar } from '@mantine/core';
import { BsCaretDownFill } from 'react-icons/bs';

import './Header.css';


const Header = props => {

    if(window.location.pathname==='/login' || window.location.pathname==='/signup'){
        return null;
    }   

    return (

        <div className="header">

            <Menu className='header__avatar' 
                position="bottom"
                placement="end"
                gutter={8}
                withArrow
                control={
                    <div className='header__icons'>
                        
                        <Avatar src={"https://images.uncyc.org/wikinet/e/eb/Nikocado_Avocado.jpg"} size="md" radius="xl" />
                        <BsCaretDownFill size={10}/>
                    </div>
                }>
                <Menu.Item href="https://mantine/dev" target="_blank">My profile</Menu.Item>
                <Menu.Item href="https://mantine/dev" target="_blank">Logout</Menu.Item>
            </Menu>

        </div>

    )
};

export default Header;