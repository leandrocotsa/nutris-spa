import React, { useState, useEffect, forwardRef, useContext } from 'react';


import Card from '../../shared/components/UIElements/Card'


import { Accordion, Button, Divider, Group, NumberInput, Progress, Select, Text, TextInput } from '@mantine/core';


import './FoodPlanGroup.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { useNotifications } from '@mantine/notifications';
import { AuthContext } from '../../shared/context/auth-context';
import { BsCheckCircleFill } from 'react-icons/bs';
import ReferenceMacroValues from './ReferenceMacroValues';
import ProgressBarsMacro from './ProgressBarsMacro';

const FoodPlanGroup = props => {



    const [foodDiaries, setFoodDiaries] = useState([]);

    const [selectBoxAliments, setSelectBoxAliments] = useState([]);

    const [selectedFoodDiary, setSelectedFoodDiary] = useState([]);

    const [selectedMacro, setSelectedMacro] = useState([]);


    const { sendRequest } = useHttpClient();
    const navigate = useNavigate();
    const notifications = useNotifications();
    const auth = useContext(AuthContext);


    useEffect(() => {
        if(props.plan){
            props.plan.foodDiaries.map((foodDiary) => {
                foodDiary.identifier = props.plan.foodDiaries.indexOf(foodDiary) + 1;
            })
            setFoodDiaries(props.plan.foodDiaries);
        }
    }, [props.plan]);



    useEffect(() => {

        

        const currentMacros =
        {
            id: selectedFoodDiary.identifier,
            totalFat: 0,
            totalHydrates: 0,
            totalKcal: 0,
            totalProtein: 0
        }

        console.log(selectedFoodDiary.meals);

        if (selectedFoodDiary.length !== 0 && selectedFoodDiary.meals.length !== 0) {
            selectedFoodDiary.meals.forEach((meal) => {

                if (meal.aliments.length !== 0) {
                    meal.aliments.forEach(aliment => {
                        console.log(aliment)
                        if (aliment.alimentId && aliment.qtyInGrams) {
                            const fullAliment = props.aliments.find(a => parseInt(a.id) === parseInt(aliment.alimentId));


                            currentMacros.totalFat += aliment.qtyInGrams * fullAliment.lipid / 100;
                            currentMacros.totalHydrates += aliment.qtyInGrams * fullAliment.carbohydrate / 100;
                            currentMacros.totalKcal += aliment.qtyInGrams * fullAliment.calories / 100;
                            currentMacros.totalProtein += aliment.qtyInGrams * fullAliment.protein / 100;

                            console.log(currentMacros);

                        }
                    })


                }

            }

            );
            console.log(currentMacros);
            setSelectedMacro(currentMacros);



        }

    }, [props.aliments, selectedFoodDiary, foodDiaries])

    useEffect(() => {

        setSelectBoxAliments(props.aliments.map(aliment => {
            const alimentDescription = `Category: ${aliment.alimentCategory.name} 
                                        Kcal: ${aliment.calories.toFixed(2)} 
                                        Protein: ${aliment.protein.toFixed(2)} 
                                        Fat: ${aliment.lipid.toFixed(2)} 
                                        Hydrates: ${aliment.carbohydrate.toFixed(2)}`
            return {
                label: aliment.name,
                value: aliment.id.toString(),
                description: alimentDescription
            }
        }));


    }, [props.aliments])


    const createPlanHandler = async (event) => {
        event.preventDefault();



        console.log(JSON.stringify({foodDiaries: foodDiaries}));
        
        
        try {
            const responseData = await sendRequest(
                `http://localhost:8080/patients/${props.patient.id}/plan`,
                'POST',
                JSON.stringify({foodDiaries: foodDiaries}),
                {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + auth.token

                }
            );

            navigate(`/patients/${props.patient.id}`);
            notifications.showNotification({
                title: 'Food plan created!',
                message: 'You can check your patients\' food plans in the Patients page.',
                radius: 'lg',
                icon: (<BsCheckCircleFill />),
                color: "teal"
            })
        } catch (err) {

        }

    

    }


    const addFoodDiaryHandler = () => {

        setFoodDiaries([...foodDiaries,
        {
            identifier: foodDiaries.length + 1,
            meals: [
                {
                    aliments: [],
                    mealType: "Breakfast"
                },
                {
                    aliments: [],
                    mealType: "Mid-morning"
                },
                {
                    aliments: [],
                    mealType: "Lunch"
                },
                {
                    aliments: [],
                    mealType: "Afternoon"
                },
                {
                    aliments: [],
                    mealType: "Dinner"
                },
                {
                    aliments: [],
                    mealType: "Supper"
                }
            ]
        }])

    }



    const SelectItem = forwardRef(
        ({ image, label, description, ...others }, ref) => (
            <div ref={ref} {...others}>
                <Group noWrap>
                    <div>
                        <Text>{label}</Text>
                        <Text size="xs" color="dimmed">
                            {description}
                        </Text>
                    </div>
                </Group>
            </div>
        )
    );



    return (

        <div className="food-plan-group__container">

            <div className="food-plan-group__left-column">
                <Card className='food-plan-card'>
                    <div className='food-plan-card-header'>
                        <Button color='teal' variant="outline" radius="md" compact onClick={addFoodDiaryHandler}>
                            + New day plan
                        </Button>
                    </div>

                    <Accordion multiple disableIconRotation>



                        {foodDiaries.map((foodDiary, foodDiaryIndex) => (
                            <Accordion.Item label={<h3>Day plan {foodDiary.identifier} </h3>} onClick={() => setSelectedFoodDiary(foodDiary)}>


                                {foodDiaries[foodDiaryIndex].meals.map((meal, mealIndex) => (
                                    <React.Fragment>
                                        <Divider my="xs" label={meal.mealType} />
                                        <Button color='teal' variant="outline" radius="md" style={{ marginTop: 10, marginBottom: 10 }} compact onClick={() => {
                                            setFoodDiaries(prevFoodDiaries => {

                                                const newFoodDiaries = [...prevFoodDiaries];

                                                newFoodDiaries[foodDiaryIndex].meals[mealIndex].aliments.push({});

                                                return newFoodDiaries;
                                            })
                                        }}>
                                            + Aliment
                                        </Button>
                                        {meal.aliments.map((aliment, alimentIndex) => (
                                            <div className="food-plan-aliment-field className='fooddiary-action-buttons'">
                                                <Select
                                                    label="Aliment"
                                                    placeholder="Select an aliment"
                                                    variant="filled"
                                                    radius="md"
                                                    size="xs"
                                                    dropdownPosition="bottom"
                                                    maxDropdownHeight={400}
                                                    itemComponent={SelectItem}
                                                    searchable
                                                    clearable
                                                    value={aliment.alimentId}
                                                    onChange={(value) => {
                                                        console.log("lol")
                                                        console.log(aliment);
                                                        setFoodDiaries(prevFoodDiaries => {

                                                            const newFoodDiaries = [...prevFoodDiaries];

                                                            newFoodDiaries[foodDiaryIndex].meals[mealIndex].aliments[alimentIndex].alimentId = value;


                                                            return newFoodDiaries;
                                                        })

                                                    }}
                                                    data={selectBoxAliments}
                                                />

                                                <NumberInput
                                                    placeholder="Quantity in grams"
                                                    label="Aliment quantity (g)"
                                                    variant="filled"
                                                    radius="md"
                                                    size="xs"
                                                    value={aliment.qtyInGrams ? parseInt(aliment.qtyInGrams) : 0}
                                                    onBlur={(event) => {
                                                        setFoodDiaries(prevFoodDiaries => {

                                                            const newFoodDiaries = [...prevFoodDiaries];

                                                            newFoodDiaries[foodDiaryIndex].meals[mealIndex].aliments[alimentIndex].qtyInGrams = event.currentTarget.value;


                                                            return newFoodDiaries;
                                                        })

                                                    }}
                                                />



                                                <Button color='red' variant="light" radius="md" style={{ marginTop: 30 }} compact onClick={() => {
                                                    setFoodDiaries(prevFoodDiaries => {

                                                        const newFoodDiaries = [...prevFoodDiaries];

                                                        newFoodDiaries[foodDiaryIndex].meals[mealIndex].aliments.splice(alimentIndex, 1);


                                                        return newFoodDiaries;
                                                    })
                                                }}>
                                                    X
                                                </Button>


                                            </div>
                                        ))}
                                    </React.Fragment>
                                ))}
                                <div className='fooddiary-action-buttons'>
                                    <Button color='red' variant="light" radius="md" style={{ marginTop: 20 }} compact onClick={() => {
                                        setFoodDiaries((prevFoodDiaries) => {
                                            const newFoodDiaries = [...prevFoodDiaries];
                                            newFoodDiaries.splice(foodDiaryIndex, 1);

                                            return newFoodDiaries;
                                        })
                                        setSelectedFoodDiary([]); //never executews because it is also clicked on the accordion
                                    }}>Delete</Button>

                                </div>




                            </Accordion.Item>
                        ))}





                    </Accordion>
                    {foodDiaries.length !== 0 ?
                        <div className='fooddiary-submit-button'>
                            <Button color='teal' variant="light" radius="md" style={{ marginTop: 20 }} compact type='submit' onClick={createPlanHandler}>Submit</Button>
                        </div>
                        :
                        <div className='fooddiary-submit-button'>
                            <Button color='teal' variant="light" radius="md" style={{ marginTop: 20 }} disabled compact>Submit</Button>
                        </div>
                    }

                </Card>

            </div>

            <div className="food-plan-group__right-column">

                <ReferenceMacroValues patient={props.patient} />

                <ProgressBarsMacro selectedMacro={selectedMacro} patient={props.patient} />

            </div>


        </div>



    );
};

export default FoodPlanGroup;
