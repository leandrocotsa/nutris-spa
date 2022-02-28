import React from 'react';
import Card from '../../shared/components/UIElements/Card';





import './ReferenceMacroValues.css';

const ReferenceMacroValues = props => {





    return (

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
                    <h4><span className='ref-value'>Maximum daily kcal: </span>{props.patient.macroNutrients.metBasalCurrentWeight.toFixed(2)} g</h4>
                </div>
                <div className="ref-values-item">
                    <h4><span className='ref-value'>Mininum daily kcal: </span>{props.patient.macroNutrients.vet.toFixed(2)} g</h4>
                </div>

            </div>


        </Card>

    );
};

export default ReferenceMacroValues;
