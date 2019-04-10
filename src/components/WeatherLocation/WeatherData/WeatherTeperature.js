import React from 'react';
import WeatherIcons from 'react-weathericons';

const WeatherTemperature =(props)=>{
    return (<div>
        <WeatherIcons name={'day-hail'}></WeatherIcons>
        <p>Temperatura : {props.temperature} C°</p>
    </div>);
}

export default WeatherTemperature;