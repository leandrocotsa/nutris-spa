import React, { useState, useEffect } from 'react';


import Card from '../../shared/components/UIElements/Card'


import { Accordion, Button, Progress } from '@mantine/core';


import './FoodPlanGroup.css';
import { useLocation } from 'react-router-dom';

const FoodPlanGroup = props => {

    //state com array do food plan em que cada vez que muda é recalculada stuff
    //o componente com as barras usa esse state como props
    //sempre que acrescentar ou retirar um alimento o activeMacroNutrients muda de valores
    //eu so consigo editar o ativo portanto há match entre o aberto e o que tem as barras

    const [foodDiaries, setFoodDiaries] = useState([]);

    const [selectedFoodDiary, setSelectedFoodDiary] = useState([]);




    const location = useLocation();
    const { patient } = location.state;



    //edit food plan logic
    useEffect(() => {

        console.log(foodDiaries)
        //recalculate

        //setPlanMacroNutrients
    }, [foodDiaries])


    const addFoodDiaryHandler = () => {

        setFoodDiaries([...foodDiaries,
        {
            id: Math.random(),
            totalFat: 0,
            totalHydrates: 0,
            totalKcal: 0,
            totalProtein: Math.floor(Math.random() * 31)
        }])

    }

    const removeFoodDiaryHandler = () => {

        setFoodDiaries((prevFoodDiaries, index) => {
            prevFoodDiaries.splice(1, index);
            return prevFoodDiaries;
        })

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
                            <Button color='teal' variant="light" radius="md" compact onClick={addFoodDiaryHandler}>
                                + New day plan
                            </Button>
                        </div>

                        <Accordion multiple disableIconRotation>



                            {foodDiaries.map((foodDiary, index) => (
                                <Accordion.Item label={<h3>Day plan {index} </h3>} onClick={() => setSelectedFoodDiary(foodDiary)}>
                                    <Button onClick={() => {
                                        setFoodDiaries((prevFoodDiaries) => {
                                            prevFoodDiaries.splice(index, 1);
                                            const newArray = [...prevFoodDiaries]
                                            return newArray;
                                        })
                                    }}>Delete</Button>
                                    <h1>{foodDiary.id}</h1>
                                    <h1>Lol</h1><h1>Lol</h1><h1>Lol</h1>
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


                        {selectedFoodDiary.id ?
                            <div>
                                <h3>Day Plan 1</h3>
                                <p>lol{selectedFoodDiary.id}</p>
                                <h4>Protein</h4>
                                {selectedFoodDiary.totalProtein < patient.macroNutrients.proteins
                                    ? <Progress value={parseInt((selectedFoodDiary.totalProtein / patient.macroNutrients.proteins) * 100)} label={selectedFoodDiary.totalProtein + "g"} size="xl" radius="xl" color="green" />
                                    :
                                    <React.Fragment>
                                        <Progress value={100} label={selectedFoodDiary.totalProtein + "g"} size="xl" radius="xl" color="red" />
                                        <p>Exceeded</p>
                                    </React.Fragment>
                                }

                                <h4>Fat</h4>
                                <Progress value={32} label="32g" size="xl" radius="xl" color="lime" />
                                <h4>Carbohydrates</h4>
                                <Progress value={49} label="48g" size="xl" radius="xl" color="cyan" />
                                <h4>Calories</h4>
                                <Progress value={92} label="1563 kcal" size="xl" radius="xl" color="teal" />
                            </div>

                            : <p>No selected Food Diary</p>



                        }


                    </Card>
                </div>


            </div>

        </div>

    );
};

export default FoodPlanGroup;
