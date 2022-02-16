import React from 'react';

import { TextInput, PasswordInput, Button } from '@mantine/core';

import { useForm } from '@mantine/hooks';

import './LoginGroup.css';

const LoginGroup = props => {

    const form = useForm({
        initialValues: {
            email: '',
            password: ''
        },
        validationRules: {
            email: (value) => /^\S+@\S+$/.test(value)
        },
        errorMessages: {
            email: 'Invalid email'
        },
    });


    const loginSubmitHandler = event => {
        event.preventDefault();
        form.onSubmit((values) => {
            console.log(values); //send to server
        });
    }


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
                            />
                        </div>
                        <div className='login-form__submit-button'>
                            <Button color='teal' variant="light" compact onClick={loginSubmitHandler}>Login</Button>
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
