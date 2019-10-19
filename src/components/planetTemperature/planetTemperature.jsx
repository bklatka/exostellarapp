import React from 'react';
import { calculateTemperature, kelvinToCelcius, kelvinToFarenheit } from '../../utils/temperature';

const PlanetTemperature = props => {
    const temp = calculateTemperature(1, 1, 29, 1);
    const celc = kelvinToCelcius(temp);
    const farenheit = kelvinToFarenheit(temp);
    return (
        <div>
            <p>Sun temp is:</p>
            <p>{temp} K</p>
            <p>{celc} C</p>
            <p>{farenheit} F</p>
        </div>
    );
};


export default PlanetTemperature;
