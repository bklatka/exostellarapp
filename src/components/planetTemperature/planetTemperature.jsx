import React from 'react';
import { calculateTemperature, kelvinToCelcius, kelvinToFarenheit } from '../../utils/temperature';
import { useSelector } from 'react-redux';
import { getStarMass } from '../../store/star/star.selectors';
import StarMassSlider from '../startMassSlider/starMassSlider';

const PlanetTemperature = props => {
    const starMass = useSelector(getStarMass);
    const temp = calculateTemperature(starMass, 1, 29, 1);
    const celc = kelvinToCelcius(temp);
    const farenheit = kelvinToFarenheit(temp);

    return (
        <div>
            <p>Planet temp is:</p>
            <p>{temp} K</p>
            <p>{celc} C</p>
            <p>{farenheit} F</p>

            <div>
                <p>Star mass (Sun is 1.00):</p>
                <StarMassSlider />
            </div>
        </div>
    );
};


export default PlanetTemperature;
