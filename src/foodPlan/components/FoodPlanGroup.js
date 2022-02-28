import React, { useState, useEffect, forwardRef } from 'react';


import Card from '../../shared/components/UIElements/Card'


import { Accordion, Button, Divider, Group, NumberInput, Progress, Select, Text, TextInput } from '@mantine/core';


import './FoodPlanGroup.css';
import { useLocation } from 'react-router-dom';

const FoodPlanGroup = props => {

    //state com array do food plan em que cada vez que muda é recalculada stuff
    //o componente com as barras usa esse state como props
    //sempre que acrescentar ou retirar um alimento o activeMacroNutrients muda de valores
    //eu so consigo editar o ativo portanto há match entre o aberto e o que tem as barras

    const [foodDiaries, setFoodDiaries] = useState([]);

    const [selectBoxAliments, setSelectBoxAliments] = useState([]);

    const [selectedFoodDiary, setSelectedFoodDiary] = useState([]);

    const [selectedMacro, setSelectedMacro] = useState([]);








    //edit food plan logic
    useEffect(() => {

        const currentMacros =
        {
            id: selectedFoodDiary.id,
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
                        if (aliment.alimentId && aliment.qty) {
                            const fullAliment = props.aliments.find(a => a.id === aliment.alimentId);


                            currentMacros.totalFat += aliment.qty * fullAliment.lipid / 100;
                            currentMacros.totalHydrates += aliment.qty * fullAliment.carbohydrate / 100;
                            currentMacros.totalKcal += aliment.qty * fullAliment.calories / 100;
                            currentMacros.totalProtein += aliment.qty * fullAliment.protein / 100;

                            console.log(currentMacros);

                        }
                    })


                }

            }

            );
            console.log(currentMacros);
            setSelectedMacro(currentMacros);


            //
        }


        //set([...array, newStuff])

        //recalculate on the selected foodDiary
        //because whenever a food diary changes the changes are applied to the select diary always

        //setPlanMacroNutrients

        //console.log(selectedFoodDiary

        //o selecred muda sempre qye o food diary muda, estao ligados
        //mas nao pode poder o selected como dependencia senao tinha loop infinito

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
                value: aliment.id,
                description: alimentDescription
            }
        }));



        //recalculate on the selected foodDiary
        //because whenever a food diary changes the changes are applied to the select diary always

        //setPlanMacroNutrients

    }, [props.aliments])


    const addFoodDiaryHandler = () => {

        setFoodDiaries([...foodDiaries,
        {
            id: Math.random(),
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

            /** 
                        id: Math.random(),
                        totalFat: 0,
                        totalHydrates: 0,
                        totalKcal: 0,
                        totalProtein: Math.floor(Math.random() * 31)
                        */
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
                            <Accordion.Item label={<h3>Day plan {foodDiaryIndex} </h3>} onClick={() => setSelectedFoodDiary(foodDiary)}>








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
                                                    onChange={(value) => {
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
                                                    onBlur={(event) => {
                                                        setFoodDiaries(prevFoodDiaries => {

                                                            const newFoodDiaries = [...prevFoodDiaries];

                                                            newFoodDiaries[foodDiaryIndex].meals[mealIndex].aliments[alimentIndex].qty = event.currentTarget.value;


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
                        <Button color='teal' variant="light" radius="md" style={{ marginTop: 20 }} compact onClick={() => { }}>Submit</Button>
                    </div>
                    :
                    <div className='fooddiary-submit-button'>
                        <Button color='teal' variant="light" radius="md" style={{ marginTop: 20 }} disabled compact onClick={() => { }}>Submit</Button>
                    </div>
                    }

                </Card>

            </div>

            <div className="food-plan-group__right-column">
                <Card className="ref-values-card">

                    <div className='ref-values-card-header'>
                        <h2>Reference macro-nutrients values</h2>
                    </div>



                    <div className='ref-values-card__container'>
                        <div className="ref-values-item">
                            <h4><span className='ref-value'>Daily protein amount: </span>{props.patient.macroNutrients.proteins.toFixed(2)} g</h4>
                        </div>
                        <div className="ref-values-item">
                            <h4><span className='ref-value'>Daily fat amount: </span>{props.patient.macroNutrients.fat.toFixed(2)} g</h4>
                        </div>
                        <div className="ref-values-item">
                            <h4><span className='ref-value'>Daily carbohydrates amount: </span>{props.patient.macroNutrients.hydrates.toFixed(2)} g</h4>
                        </div>
                        <div className="ref-values-item">
                            <h4><span className='ref-value'>Maximum daily kcal: </span>{props.patient.macroNutrients.vet.toFixed(2)} g</h4>
                        </div>
                        <div className="ref-values-item">
                            <h4><span className='ref-value'>Mininum daily kcal: </span>{props.patient.macroNutrients.metBasalCurrentWeight.toFixed(2)} g</h4>
                        </div>

                    </div>









                </Card>

                <Card className='progress-card'>
                    <div className='progress-card-header'>
                        <h2>Macro-nutrients state</h2>
                    </div>


                    {selectedMacro.id ?
                        <div>
                            <h3>Day Plan 1</h3>
                            <p>lol{selectedMacro.id}</p>
                            <h4>Protein</h4>
                            {selectedMacro.totalProtein < props.patient.macroNutrients.proteins
                                ? <Progress value={parseInt((selectedMacro.totalProtein / props.patient.macroNutrients.proteins) * 100)} label={selectedMacro.totalProtein.toFixed(1) + "g"} size="xl" radius="xl" color="green" />
                                :
                                <React.Fragment>
                                    <Progress value={100} label={selectedMacro.totalProtein.toFixed(1) + "g"} size="xl" radius="xl" color="red" />
                                    <p>Exceeded</p>
                                </React.Fragment>
                            }

                            <h4>Fat</h4>

                            {selectedMacro.totalFat < props.patient.macroNutrients.fat
                                ? <Progress value={parseInt((selectedMacro.totalFat / props.patient.macroNutrients.fat) * 100)} label={selectedMacro.totalFat.toFixed(1) + "g"} size="xl" radius="xl" color="lime" />
                                :
                                <React.Fragment>
                                    <Progress value={100} label={selectedMacro.totalFat.toFixed(1) + "g"} size="xl" radius="xl" color="red" />
                                    <p>Exceeded</p>
                                </React.Fragment>
                            }

                            <h4>Carbohydrates</h4>


                            {selectedMacro.totalHydrates < props.patient.macroNutrients.hydrates
                                ? <Progress value={parseInt((selectedMacro.totalHydrates / props.patient.macroNutrients.hydrates) * 100)} label={selectedMacro.totalHydrates.toFixed(1) + "g"} size="xl" radius="xl" color="cyan" />
                                :
                                <React.Fragment>
                                    <Progress value={100} label={selectedMacro.totalHydrates.toFixed(1) + "g"} size="xl" radius="xl" color="red" />
                                    <p>Exceeded</p>
                                </React.Fragment>
                            }



                            <h4>Calories</h4>

                            {selectedMacro.totalKcal < props.patient.macroNutrients.vet
                                ? <Progress value={parseInt((selectedMacro.totalKcal / props.patient.macroNutrients.vet) * 100)} label={selectedMacro.totalKcal.toFixed(1) + "kcal"} size="xl" radius="xl" color="teal" />
                                :
                                <React.Fragment>
                                    <Progress value={100} label={selectedMacro.totalKcal.toFixed(1) + "g"} size="xl" radius="xl" color="red" />
                                    <p>Exceeded</p>
                                </React.Fragment>
                            }



                        </div>

                        : <p>No selected Food Diary</p>



                    }


                </Card>
            </div>


        </div>



    );
};

export default FoodPlanGroup;
