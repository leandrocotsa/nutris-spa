import React from 'react';

import { TextInput, PasswordInput, Button } from '@mantine/core';

import './LoginGroup.css';

const LoginGroup = props => {


    return (

        <div className="login-page-container">





            <div className="login-form-col">

                <div className='login-form-wrapper'>


                    <div className='login-logo-container-left'>
                        <img src='/nutris-logo.png' alt="logo" />
                    </div>


                    <h1>Login</h1>
                    <p>Welcome to Nutris, an application that let's you.</p>

                    <form className="login-form">
                        <div className="login-form__item">
                            <TextInput
                                placeholder="Insert your email"
                                label="Email"
                                variant="filled"
                                radius="md"
                                size="xs"
                            />
                        </div>


                        <div className="login-form__item">
                            <PasswordInput
                                placeholder="Password"
                                label="Password"
                                variant="filled"
                                radius="md"
                                size="xs"
                                style={{ marginTop: 20 }}
                            />
                        </div>
                        <div className='login-form__submit-button'>
                            <Button color='teal' variant="light" compact>Login</Button>
                        </div>
                    </form>
                </div>
            </div>





            <div className="login-logo-div">

                <div className='login-logo-container'>
                    <img src='/nutris-logo.png' alt="logo" />
                </div>

            </div>
        </div>




    );
};

export default LoginGroup;
