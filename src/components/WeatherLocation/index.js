import React,{Component} from 'react';
import Location from './Location'
import WeatherData from './WeatherData';
const WeatherLocation=()=>{
    return (<div>
        <Location city={'Arequipa'}></Location>
        <WeatherData></WeatherData>
    </div>);
};

export default WeatherLocation