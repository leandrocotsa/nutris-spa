import React from 'react';

import Card from '../../../shared/components/UIElements/Card';
import GenericLineChart from './GenericLineChart';

import './GraphsCard.css';

const GraphsCard = props => {

    const yValuesFirstGraph = [
        {
            yValue: 'weight',
            color: '#82ca9d',
        }];

    const yValuesSecondGraph = [
        {
            yValue: 'fatMassPerc',
            color: '#82ca9d',
        },
        {
            yValue: 'kgLeanMass',
            color: '#007500',
        }];

    const yValuesThirdGraph = [
        {
            yValue: 'waistPerimeter',
            color: '#82ca9d',
        },
        {
            yValue: 'hipPerimeter',
            color: '#007500',
        }];




    return (

        <Card className="graphs-card">
            <h2>Body measurements graphs</h2>

            <div className='graphs-card__container'>
                <div className='graphs-card__graph'>
                    <GenericLineChart measurements={props.measurements} graphSpecs={yValuesFirstGraph} />
                </div>
                <div className='graphs-card__graph'>
                    <GenericLineChart measurements={props.measurements} graphSpecs={yValuesSecondGraph} />
                </div>
                <div className='graphs-card__graph'>
                    <GenericLineChart measurements={props.measurements} graphSpecs={yValuesThirdGraph} />
                </div>

            </div>

        </Card>
    );
};

export default GraphsCard;
