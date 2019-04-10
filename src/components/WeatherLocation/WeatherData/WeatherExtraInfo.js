import React from 'react';

const WeatherExtraInfo =(props)=>{
    let humidity=props.humidity;
    let wind=props.wind;
    return (<div>
        <p>Humedad : {humidity} h</p>
        <p>Viento : {wind}m/s w</p>
    </div>);
}

export default WeatherExtraInfo;