import { Progress } from '@mantine/core';
import React from 'react';
import Card from '../../shared/components/UIElements/Card';





import './ProgressBarsMacro.css';

const ProgressBarsMacro = props => {





    return (

        <Card className='progress-card'>
            <div className='progress-card-header'>
                <h2>Macro-nutrients state</h2>
            </div>


            {props.selectedMacro.id ?
                <div>
                    <h3>Day Plan {props.selectedMacro.id}</h3>
  
                    <h4>Protein</h4>
                    {props.selectedMacro.totalProtein < props.patient.macroNutrients.proteins
                        ? <Progress value={parseInt((props.selectedMacro.totalProtein / props.patient.macroNutrients.proteins) * 100)} label={props.selectedMacro.totalProtein.toFixed(1) + "g"} size="xl" radius="xl" color="green" />
                        :
                        <React.Fragment>
                            <Progress value={100} label={props.selectedMacro.totalProtein.toFixed(1) + "g"} size="xl" radius="xl" color="red" />
                            <p>Exceeded</p>
                        </React.Fragment>
                    }

                    <h4>Fat</h4>

                    {props.selectedMacro.totalFat < props.patient.macroNutrients.fat
                        ? <Progress value={parseInt((props.selectedMacro.totalFat / props.patient.macroNutrients.fat) * 100)} label={props.selectedMacro.totalFat.toFixed(1) + "g"} size="xl" radius="xl" color="lime" />
                        :
                        <React.Fragment>
                            <Progress value={100} label={props.selectedMacro.totalFat.toFixed(1) + "g"} size="xl" radius="xl" color="red" />
                            <p>Exceeded</p>
                        </React.Fragment>
                    }

                    <h4>Carbohydrates</h4>


                    {props.selectedMacro.totalHydrates < props.patient.macroNutrients.hydrates
                        ? <Progress value={parseInt((props.selectedMacro.totalHydrates / props.patient.macroNutrients.hydrates) * 100)} label={props.selectedMacro.totalHydrates.toFixed(1) + "g"} size="xl" radius="xl" color="cyan" />
                        :
                        <React.Fragment>
                            <Progress value={100} label={props.selectedMacro.totalHydrates.toFixed(1) + "g"} size="xl" radius="xl" color="red" />
                            <p>Exceeded</p>
                        </React.Fragment>
                    }



                    <h4>Calories</h4>

                    {props.selectedMacro.totalKcal < props.patient.macroNutrients.vet
                        ? <Progress value={parseInt((props.selectedMacro.totalKcal / props.patient.macroNutrients.vet) * 100)} label={props.selectedMacro.totalKcal.toFixed(1) + "kcal"} size="xl" radius="xl" color="teal" />
                        :
                        <React.Fragment>
                            <Progress value={100} label={props.selectedMacro.totalKcal.toFixed(1) + "g"} size="xl" radius="xl" color="red" />
                            <p>Exceeded</p>
                        </React.Fragment>
                    }



                </div>

                : <p>No selected Food Diary</p>



            }


        </Card>

    );
};

export default ProgressBarsMacro;
