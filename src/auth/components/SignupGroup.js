import React from 'react';

import { TextInput, PasswordInput, Button } from '@mantine/core';
import { useForm } from '@mantine/hooks';

import './LoginGroup.css';

const SignupGroup = props => {

    const form = useForm({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationRules: {
            email: (value) => /^\S+@\S+$/.test(value),
            password: (password) => password.trim().length >= 8,
            confirmPassword: (confirmPassword, values) => confirmPassword === values.password,
        },
        errorMessages: {
            email: 'Invalid email',
            password: 'Password must include at least 8 characters',
            confirmPassword: 'Passwords must match'
        },
    });

    //quando verificar no server se o email existe faço form.setErrors nessa situação


    const signUpHander = event => {
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


                    <h1>Register</h1>
                    <p>Welcome to Nutris, an application that let's you.</p>

                    <form className="login-form" onSubmit={signUpHander}>
                        <div className='signup-form__names-row'>

                            <div className="login-form__item">
                                <TextInput
                                    placeholder="Insert your first name"
                                    label="First Name"
                                    variant="filled"
                                    radius="md"
                                    size="xs"
                                    required
                                />
                            </div>

                            <div className="login-form__item">
                                <TextInput
                                    placeholder="Insert your last name"
                                    label="Last Name"
                                    variant="filled"
                                    radius="md"
                                    size="xs"
                                    required
                                />
                            </div>

                        </div>

                        <div className="login-form__item">
                            <TextInput
                                placeholder="Insert your email"
                                label="Email"
                                variant="filled"
                                radius="md"
                                size="xs"
                                onBlur={() => form.validateField('email')}
                                {...form.getInputProps('email')}
                                required
                            />
                        </div>


                        <div className="login-form__item">
                            <PasswordInput
                                placeholder="Password"
                                label="Password"
                                variant="filled"
                                radius="md"
                                size="xs"
                                onBlur={() => form.validateField('password')}
                                {...form.getInputProps('password')}
                                required

                            />
                        </div>

                        <div className="login-form__item">
                            <PasswordInput
                                placeholder="Confirm password"
                                label="Confirm password"
                                variant="filled"
                                radius="md"
                                size="xs"
                                onBlur={() => form.validateField('confirmPassword')}
                                {...form.getInputProps('confirmPassword')}
                                required

                            />
                        </div>

                        <div className='login-form__submit-button'>
                            <Button type="submit" color='teal' variant="light" compact>Sign up</Button>
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

export default SignupGroup;
