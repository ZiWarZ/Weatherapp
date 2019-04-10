import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTeperature';

const WeatherData=()=>{
    return (<div>
        <WeatherTemperature temperature={'20'}></WeatherTemperature>
        <WeatherExtraInfo humidity={'10'} wind={'1'}></WeatherExtraInfo>
    </div>);
};
export default WeatherData;