import React, { useContext, useState } from 'react';

import { TextInput, PasswordInput, Button, Loader } from '@mantine/core';

import { useForm } from '@mantine/hooks';

import './LoginGroup.css';
import { AuthContext } from '../../shared/context/auth-context';
import { useHttpClient } from '../../shared/hooks/http-hook';

const LoginGroup = props => {

    const auth = useContext(AuthContext);


    const { isLoading, error, sendRequest, clearError } = useHttpClient();


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





    const loginSubmitHandler = async event => {
        event.preventDefault();

        try {
            const responseData = await sendRequest(
                'http://localhost:8080/login',
                'POST',
                JSON.stringify(form.values),
                {
                    'Content-Type': 'application/json'
                }
            );

            auth.login(responseData.token);
        } catch (err) {

        }


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

                    <form className="login-form" onSubmit={loginSubmitHandler}>
                        <div className="login-form__item">
                            <TextInput
                                placeholder="Insert your email"
                                label="Email"
                                variant="filled"
                                radius="md"
                                size="xs"
                                {...form.getInputProps('email')}
                            />
                        </div>


                        <div className="login-form__item">
                            <PasswordInput
                                placeholder="Password"
                                label="Password"
                                variant="filled"
                                radius="md"
                                size="xs"
                                {...form.getInputProps('password')}
                            />
                        </div>
                        <div className='login-form__submit-button'>
                            <Button color='teal' variant="light" compact type="submit">Login{isLoading && <> &nbsp; <Loader color="teal" size="sm" variant="dots" /></>}</Button>
                            {error && <p className='login-form__error-message'>Invalid credentials</p>}
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
