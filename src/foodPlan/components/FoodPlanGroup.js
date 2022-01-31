import React from 'react';


import Card from '../../shared/components/UIElements/Card'


import { Accordion, ThemeIcon } from '@mantine/core';


import './FoodPlanGroup.css';

const FoodPlanGroup = props => {

    //state com array do food plan em que cada vez que muda é recalculada stuff
    //o componente com as barras usa esse state como props



    return (
        <div className="main__wrapper">
            <div className="food-plan-group__info">
                <h1>Food plan of Niko</h1>
                <p>Create complete food plans</p>
            </div>
            <div className="food-plan-group__container">

                <div className="food-plan-group__left-column">
                    <Card>
                        <Accordion multiple disableIconRotation>

                            <Accordion.Item
                                label={<h3>Basic information</h3>}
                                >
                            </Accordion.Item>

                        </Accordion>

                    </Card>

                </div>

                <div className="food-plan-group__right-column">
                    <Card>
                        ref values
                    </Card>

                    <Card>
                        progress bars
                    </Card>
                </div>


            </div>

        </div>

    );
};

export default FoodPlanGroup;
