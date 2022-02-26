import React, { useState, useEffect } from 'react';


import Card from '../../shared/components/UIElements/Card'


import { Accordion, Button, Progress } from '@mantine/core';


import './FoodPlanGroup.css';
import { useLocation } from 'react-router-dom';

const FoodPlanGroup = props => {

    console.log(props.foodPLan);

    //state com array do food plan em que cada vez que muda é recalculada stuff
    //o componente com as barras usa esse state como props
    //sempre que acrescentar ou retirar um alimento o activeMacroNutrients muda de valores
    //eu so consigo editar o ativo portanto há match entre o aberto e o que tem as barras

    const [foodPlan, setFoodPlan] = useState(props.foodPlan);

    const [planMacroNutrients, setPlanMacroNutrients] = useState(props.foodPlan);


    const location = useLocation();
    const { patient } = location.state;

    useEffect(() => {

        //recalculate

        //setPlanMacroNutrients

    }, []); //plan aliments


    const patientProtein = patient.macroNutrients.proteins;
    const patientFat = patient.macroNutrients.fat;
    const patientHydrates = patient.macroNutrients.hydrates;


    //edit food plan logic
    useEffect(() => {
        setFoodPlan(props.foodPlan);
    }, [props.foodPlan])


    const addDayHandler = () => {

        setFoodPlan((prevFoodPlan) => {
            return prevFoodPlan.concat({ "id": 3 });
        })

    }




    if (foodPlan.length === 0) {

    }



    return (
        <div className="main__wrapper">
            <div className="food-plan-group__info">
                <h1>Food plan of {patient.firstName + ' ' + patient.lastName}</h1>
                <p>Create complete food plans</p>
            </div>
            <div className="food-plan-group__container">

                <div className="food-plan-group__left-column">
                    <Card className='food-plan-card'>
                        <div className='food-plan-card-header'>
                            <Button color='teal' variant="light" radius="md" compact onClick={addDayHandler}>
                                + New day plan
                            </Button>
                        </div>

                        <Accordion multiple disableIconRotation>



                            {foodPlan.map(day => (
                                <Accordion.Item label={<h3>Day plan {day.id}</h3>} onClick={console.log("clicked")}>
                                    <h1>Lol</h1>
                                    <h1>Lol</h1><h1>Lol</h1><h1>Lol</h1><h1>Lol</h1><h1>Lol</h1><h1>Lol</h1><h1>Lol</h1><h1>Lol</h1><h1>Lol</h1><h1>Lol</h1><h1>Lol</h1><h1>Lol</h1><h1>Lol</h1><h1>Lol</h1><h1>Lol</h1><h1>Lol</h1><h1>Lol</h1><h1>Lol</h1><h1>Lol</h1>
                                </Accordion.Item>
                            ))}



                        </Accordion>

                    </Card>

                </div>

                <div className="food-plan-group__right-column">
                    <Card className="ref-values-card">

                        <div className='ref-values-card-header'>
                            <h2>Reference macro-nutrients values</h2>
                        </div>
                        <div className='ref-values-card__container'>
                            <div className="ref-values-item">
                                <h4><span className='ref-value'>Daily protein amount: </span>{patient.macroNutrients.proteins.toFixed(2)} g</h4>
                            </div>
                            <div className="ref-values-item">
                                <h4><span className='ref-value'>Daily fat amount: </span>{patient.macroNutrients.fat.toFixed(2)} g</h4>
                            </div>
                            <div className="ref-values-item">
                                <h4><span className='ref-value'>Daily carbohydrates amount: </span>{patient.macroNutrients.hydrates.toFixed(2)} g</h4>
                            </div>
                            <div className="ref-values-item">
                                <h4><span className='ref-value'>Maximum daily kcal: </span>{patient.macroNutrients.vet.toFixed(2)} g</h4>
                            </div>
                            <div className="ref-values-item">
                                <h4><span className='ref-value'>Mininum daily kcal: </span>{patient.macroNutrients.metBasalCurrentWeight.toFixed(2)} g</h4>
                            </div>

                        </div>


                    </Card>

                    <Card className='progress-card'>
                        <div className='progress-card-header'>
                            <h2>Macro-nutrients state</h2>
                        </div>

                        <div>
                            <h3>Day Plan 1</h3>
                            <h4>Protein</h4>
                            <Progress value={75} label="75g" size="xl" radius="xl" color="green" />
                            <h4>Fat</h4>
                            <Progress value={32} label="32g" size="xl" radius="xl" color="lime" />
                            <h4>Carbohydrates</h4>
                            <Progress value={49} label="48g" size="xl" radius="xl" color="cyan" />
                            <h4>Calories</h4>
                            <Progress value={92} label="1563 kcal" size="xl" radius="xl" color="teal" />
                        </div>
                    </Card>
                </div>


            </div>

        </div>

    );
};

export default FoodPlanGroup;
