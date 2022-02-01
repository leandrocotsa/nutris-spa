import React from 'react';

import Card from '../../shared/components/UIElements/Card';

import { Button, Radio, RadioGroup, TextInput, Select, NumberInput, ColorInput, Textarea, Accordion, ThemeIcon, PasswordInput } from '@mantine/core';
import { DatePicker, TimeInput } from '@mantine/dates';

import { BsFilePerson } from 'react-icons/bs';
import { MdMedicalServices } from 'react-icons/md';
import { IoLogIn } from 'react-icons/io5';





import './NewPatientForm.css';

const NewPatientForm = props => {

    return (
        <div className="main__wrapper">
            <div className="new-patient-form__info">
                <h1>New patient</h1>
                <p>Create the new patient</p>
            </div>

            <form>
                <div className="new-patient-form__container">

                    <Card className='new-patient-card-wrapper'>

                        <Accordion multiple disableIconRotation>

                            <Accordion.Item
                                label={<h3>Basic information</h3>}
                                icon={
                                    <ThemeIcon color="teal" variant="light">
                                        <BsFilePerson />
                                    </ThemeIcon>}>
                                <Card className='new-patient-form__card'>




                                    <div className="new-patient-form__item">
                                        <TextInput
                                            placeholder="Patient's name"
                                            label="Full name"
                                            variant="filled"
                                            radius="md"
                                            size="xs"
                                        />
                                    </div>

                                    <div className="new-patient-form__item">
                                        <DatePicker

                                            placeholder="Pick date"
                                            label="Birth date"
                                            variant="filled"
                                            radius="md"
                                            size="xs"
                                            style={{ marginTop: 20 }}
                                            required
                                        />

                                    </div>



                                    <div className="new-patient-form__item">
                                        <TextInput
                                            placeholder="Patient's phone number"
                                            label="Phone number"
                                            variant="filled"
                                            radius="md"
                                            size="xs"
                                            style={{ marginTop: 20 }}
                                        />
                                    </div>

                                    <div className="new-patient-form__item">
                                        <Select
                                            label="Gender"
                                            placeholder="Pick one"
                                            variant="filled"
                                            radius="md"
                                            size="xs"
                                            style={{ marginTop: 20 }}
                                            data={[
                                                { value: 'Male', label: 'Male' },
                                                { value: 'Female', label: 'Female' },
                                                { value: 'Other', label: 'Other' }
                                            ]}
                                        />
                                    </div>

                                    <div className="new-patient-form__item">
                                        <NumberInput
                                            placeholder="Number of family elements at home"
                                            label="Familiy number"
                                            variant="filled"
                                            radius="md"
                                            size="xs"
                                            style={{ marginTop: 20 }}
                                        />
                                    </div>

                                    <div className="new-patient-form__item">
                                        <Select
                                            label="Marital status"
                                            placeholder="Pick one"
                                            variant="filled"
                                            radius="md"
                                            size="xs"
                                            style={{ marginTop: 20, marginBottom: 20 }}
                                            data={[
                                                { value: 'Single', label: 'Single' },
                                                { value: 'Married', label: 'Married' },
                                                { value: 'Divorced', label: 'Divorced' },
                                                { value: 'Widowed', label: 'Widowed' }
                                            ]}
                                        />
                                    </div>

                                </Card>

                            </Accordion.Item>



                            <Accordion.Item label={<h3>Anamnesis</h3>}
                                icon={
                                    <ThemeIcon color="blue" variant="light">
                                        <MdMedicalServices />
                                    </ThemeIcon>}>

                                <Card className='new-patient-form__card'>

                                    <div className="new-patient-form__item">
                                        <TextInput
                                            placeholder="Patient's health problems"
                                            label="Health problems"
                                            variant="filled"
                                            radius="md"
                                            size="xs"

                                        />
                                    </div>
                                    <div className="new-patient-form__item">
                                        <TextInput
                                            placeholder="Medication taken by the patient"
                                            label="Medication"
                                            variant="filled"
                                            radius="md"
                                            size="xs"
                                            style={{ marginTop: 20 }}
                                        />
                                    </div>

                                    <div className="new-patient-form__item">
                                        <TextInput
                                            placeholder="Patient's reason for the appointment"
                                            label="Reason for appointment"
                                            variant="filled"
                                            radius="md"
                                            size="xs"
                                            style={{ marginTop: 20 }}
                                        />
                                    </div>


                                    <div className="new-patient-form__item">
                                        <NumberInput
                                            placeholder="Patient's minimal weight"
                                            label="Minimal weight (in kg)"
                                            variant="filled"
                                            radius="md"
                                            size="xs"
                                            style={{ marginTop: 20 }}
                                        />
                                    </div>


                                    <div className="new-patient-form__item">
                                        <NumberInput
                                            placeholder="Patient's maximum weight"
                                            label="Maximum weight (in kg)"
                                            variant="filled"
                                            radius="md"
                                            size="xs"
                                            style={{ marginTop: 20 }}
                                        />
                                    </div>

                                    <div className="new-patient-form__item">
                                        <NumberInput
                                            placeholder="Patient's desired weight"
                                            label="Desired weight (in kg)"
                                            variant="filled"
                                            radius="md"
                                            size="xs"
                                            style={{ marginTop: 20 }}
                                        />
                                    </div>

                                    <div className="new-patient-form__item">
                                        <NumberInput
                                            placeholder="Patient's height"
                                            label="Height (in cm)"
                                            variant="filled"
                                            radius="md"
                                            size="xs"
                                            style={{ marginTop: 20 }}
                                        />
                                    </div>

                                    <div className="new-patient-form__item">
                                        <Select
                                            label="Activity quotient"
                                            placeholder="Pick one"
                                            variant="filled"
                                            radius="md"
                                            size="xs"
                                            style={{ marginTop: 20 }}
                                            data={[
                                                { value: '1.12', label: '1.12 - Light activity' },
                                                { value: '1.29', label: '1.29 - Moderate activity' },
                                                { value: '1.59', label: '1.59 - Intense activity' }
                                            ]}
                                        />
                                    </div>


                                    <div className="new-patient-form__item">
                                        <TextInput
                                            placeholder="Patient's allergies"
                                            label="Allergies"
                                            variant="filled"
                                            radius="md"
                                            size="xs"
                                            style={{ marginTop: 20 }}
                                        />
                                    </div>

                                    <div className="new-patient-form__item">
                                        <TextInput
                                            placeholder="Patient's intestinal transit"
                                            label="Intestinal transit"
                                            variant="filled"
                                            radius="md"
                                            size="xs"
                                            style={{ marginTop: 20 }}
                                        />
                                    </div>


                                    <div className="new-patient-form__item">
                                        <ColorInput
                                            placeholder="Pick color"
                                            label="Urine color"
                                            variant="filled"
                                            radius="md"
                                            size="xs"
                                        />
                                    </div>

                                    <div className="new-patient-form__item">
                                        <TextInput
                                            placeholder="Patient's water consumption"
                                            label="Water consumption"
                                            variant="filled"
                                            radius="md"
                                            size="xs"
                                            style={{ marginTop: 20 }}
                                        />
                                    </div>

                                    <div className="new-patient-form__item">
                                        <TextInput
                                            placeholder="Patient's coffee consumption"
                                            label="Coffee consumption"
                                            variant="filled"
                                            radius="md"
                                            size="xs"
                                            style={{ marginTop: 20 }}
                                        />
                                    </div>

                                    <div className="new-patient-form__item">
                                        <TextInput
                                            placeholder="Patient's refrigerants consumption"
                                            label="Refrigerants consumption"
                                            variant="filled"
                                            radius="md"
                                            size="xs"
                                            style={{ marginTop: 20 }}
                                        />
                                    </div>


                                    <div className="new-patient-form__item">
                                        <TextInput
                                            placeholder="Patient's weekend exceptions"
                                            label="Weekend exceptions"
                                            variant="filled"
                                            radius="md"
                                            size="xs"
                                            style={{ marginTop: 20 }}
                                        />
                                    </div>

                                    <div className="new-patient-form__item">
                                        <RadioGroup
                                            label="Can the patient cook?"
                                            variant="filled"
                                            radius="md"
                                            size="xs"
                                            style={{ marginTop: 20 }}
                                        >
                                            <Radio value="yes">Yes</Radio>
                                            <Radio value="no">No</Radio>
                                        </RadioGroup>
                                    </div>


                                    <div className="new-patient-form__item">
                                        <TimeInput
                                            label="Wake-up time"
                                            variant="filled"
                                            radius="md"
                                            size="xs"
                                            style={{ marginTop: 20 }}
                                        >
                                        </TimeInput>
                                    </div>

                                    <div className="new-patient-form__item">
                                        <TimeInput
                                            label="Bed time"
                                            variant="filled"
                                            radius="md"
                                            size="xs"
                                            style={{ marginTop: 20 }}
                                        >
                                        </TimeInput>
                                    </div>





                                    <div className="new-patient-form__item">

                                        <Textarea
                                            placeholder="Patient's daily meals summary"
                                            label="Daily meals summary"
                                            variant="filled"
                                            radius="md"
                                            size="xs"
                                            style={{ marginTop: 20, marginBottom: 30 }}
                                        />


                                    </div>











                                </Card>
                            </Accordion.Item>



                            <Accordion.Item label={<h3>Account setup</h3>} icon={
                                <ThemeIcon color="green" variant="light">
                                    <IoLogIn />
                                </ThemeIcon>}>


                                <Card className='new-patient-form__card'>


                                    <div className="new-patient-form__item">
                                        <TextInput
                                            placeholder="Patient's email"
                                            label="Email"
                                            variant="filled"
                                            radius="md"
                                            size="xs"
                                    
                                        />
                                    </div>




                                    <div className="new-patient-form__item">
                                        <PasswordInput
                                            placeholder="Password"
                                            label="Password"
                                            description="Password must include at least one letter, number and special character"
                                            variant="filled"
                                            radius="md"
                                            size="xs"
                                            required
                                            style={{ marginTop: 20 }}
                                        />
                                    </div>



                                </Card>



                            </Accordion.Item>
                        </Accordion>





                    </Card>

                </div>
                <div className='new-patient-form__submit-button'>
                    <Button color='teal' variant="outline" compact>Submit</Button>
                </div>

            </form>

        </div>

    );
};

export default NewPatientForm;
