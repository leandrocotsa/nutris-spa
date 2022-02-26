import React from 'react';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import './GenericLineChart.css';


const GenericLineChart = props => {

    return (

        <div className='chart__container'>
        <LineChart width={330} height={200} data={props.graphData}
            margin={{ top: 10, right: 20, left: 20, bottom: 5 }}>

            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            {props.graphSpecs.map(graphSpec => (
                <Line type="monotone" dataKey={graphSpec.yValue} stroke={graphSpec.color} strokeWidth={3} />
            ))}
        </LineChart>
        </div>
    );
};

export default GenericLineChart;
