import React, { useState, useEffect } from 'react';

import Card from '../../../shared/components/UIElements/Card';

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import './MeasurementsCard.css';

let currentPos = 0;

const MeasurementsCard = props => {

    const [currentMeasurement, setCurrentMeasurement] = useState(props.measurements[currentPos]);

    useEffect(() => {
        if (props.measurements.length !== 0) {
            currentPos = 0;
            setCurrentMeasurement(props.measurements[currentPos]);
        }
    }, [props])





    const pressPreviousHandler = () => {
        currentPos--;
        setCurrentMeasurement(props.measurements[currentPos]);
    };

    const pressAfterHandler = () => {
        currentPos++;
        setCurrentMeasurement(props.measurements[currentPos]);
    };


    return (



        <Card className="measurements-card">
            <div className='measurements-card-header'>


                <h2>Body Measurements</h2>
                {props.measurements.length !== 0 && <h4><a href='lol'>Edit</a></h4>}


            </div>

            {props.measurements.length === 0 ? <p className='center'>No body measurements registered.</p> :

                <React.Fragment>
                    <div className='measurements-card__container'>
                        <div className="measurements-card__info">
                            <h4><span className='measurement-value'>Weight: </span>{currentMeasurement.weight}kg</h4>
                        </div>

                        <div className="measurements-card__info">
                            <h4><span className='measurement-value'>IMC: </span>{currentMeasurement.imc}</h4>
                        </div>

                        <div className="measurements-card__info">
                            <h4><span className='measurement-value'>Fat mass: </span>{currentMeasurement.fatMassPerc}%</h4>
                        </div>

                        <div className="measurements-card__info">
                            <h4><span className='measurement-value'>Lean mass: </span>{currentMeasurement.kgLeanMass}kg</h4>
                        </div>
                        <div className="measurements-card__info">
                            <h4><span className='measurement-value'>Water: </span>{currentMeasurement.waterPerc}%</h4>
                        </div>

                        <div className="measurements-card__info">
                            <h4><span className='measurement-value'>Basal Met.: </span>{currentMeasurement.basalMetabolism}</h4>
                        </div>

                        <div className="measurements-card__info">
                            <h4><span className='measurement-value'>Visceral fat: </span>{currentMeasurement.visceralFat}</h4>
                        </div>

                        <div className="measurements-card__info">
                            <h4><span className='measurement-value'>Bone mass: </span>{currentMeasurement.boneMass}kg</h4>
                        </div>
                        <div className="measurements-card__info">
                            <h4><span className='measurement-value'>Body age: </span>{currentMeasurement.bodyAge}</h4>
                        </div>
                        <div className="measurements-card__info">
                            <h4><span className='measurement-value'>Waist per.: </span>{currentMeasurement.waistPerimeter}cm</h4>
                        </div>
                        <div className="measurements-card__info">
                            <h4><span className='measurement-value'>Hip per.: </span>{currentMeasurement.hipPerimeter}cm</h4>
                        </div>
                        <div className="measurements-card__info">
                            <h4><span className='measurement-value'>Chest per.: </span>{currentMeasurement.chestPerimeter}cm</h4>
                        </div>

                    </div>

                    <div className='measurements-card__swapper'>

                        {currentPos > 0 && <FaAngleLeft size={16} onClick={pressPreviousHandler} />}

                        <span> {currentMeasurement.date} </span>

                        {currentPos < props.measurements.length - 1 && <FaAngleRight size={16} onClick={pressAfterHandler} />}

                    </div>
                </React.Fragment>
            }



        </Card>
    );
};

export default MeasurementsCard;
