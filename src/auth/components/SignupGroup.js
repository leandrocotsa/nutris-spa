import React, { useContext, useState } from 'react';

import { TextInput, PasswordInput, Button, Loader } from '@mantine/core';
import { useForm } from '@mantine/hooks';

import './LoginGroup.css';
import { AuthContext } from '../../shared/context/auth-context';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { Link } from 'react-router-dom';

const SignupGroup = props => {

    const auth = useContext(AuthContext);

    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [isEmailAvailable, setIsEmailAvailable] = useState(true);

    const form = useForm({
        initialValues: {
            firstName: '',
            lastName: '',
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


    const signUpHandler = async event => {
        event.preventDefault();


        try {
            await sendRequest(
                'http://localhost:8080/nutritionists/register',
                'POST',
                JSON.stringify(form.values),
                {
                    'Content-Type': 'application/json'
                }
            );
            auth.login();
        } catch (err) {

        }
    }

    const emailExistsVerification = (async () => {
        form.validateField('email');

        try {
            const responseData = await sendRequest(
                'http://localhost:8080/login/exists?email=' + form.values.email
            );
            setIsEmailAvailable(responseData);
        } catch (err) {

        }

    });



    return (

        <div className="login-page-container">

            <div className="login-form-col">

                <div className='login-form-wrapper'>


                    <div className='login-logo-container-left'>
                        <img src='/nutris-logo.png' alt="logo" />
                    </div>


                    <h1>Register</h1>
                    <p>Welcome to Nutris, an application that let's you.</p>

                    <form className="login-form" onSubmit={signUpHandler}>
                        <div className='signup-form__names-row'>

                            <div className="login-form__item">
                                <TextInput
                                    placeholder="Insert your first name"
                                    label="First Name"
                                    variant="filled"
                                    radius="md"
                                    size="xs"
                                    required
                                    {...form.getInputProps('firstName')}
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
                                    {...form.getInputProps('lastName')}
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
                                onBlur={emailExistsVerification}
                                {...form.getInputProps('email')}
                                required
                            />
                            {!isEmailAvailable && <p>Email not available</p>}
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
                            <Button type="submit" color='teal' variant="light" compact>Sign up{isLoading && <> &nbsp; <Loader color="teal" size="sm" variant="dots" /></>}</Button>
                            {error && <p className='login-form__error-message'>{error}</p>}
                            <p>Already have an account? Click <Link to='/login'> here</Link> to Login.</p>
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
