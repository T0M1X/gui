import React from 'react';
import './styles.css';
import moment from 'moment';
import { Button } from 'semantic-ui-react';
import classNames from 'classnames';

const refresh = () => {
  window.location.reload();
}

function Condition({description, icon}){
  return <><img src={`images/${icon}.png`} className="images" alt="Logo" /><br></br>{description}</>
}
 
function IsGood(props){
  const temperature=Math.round(props.temperature)
  if (temperature<=15 && temperature >= 0){
    return <h1>Too cold for crops!</h1>
  }
  else if (temperature > 15 && temperature < 25){
    return <h1>Ideal for crops!</h1>
  }
  else if (temperature >= 30){
    return <h1>Too hot for crops!</h1>
  }
  else{
    return <h1>It is below freezing! Way to cold for crops!</h1>
  }
}


const WeatherCard = ({weatherData}) => (
  <div className={classNames({
    'main': true,
    'ideal' : weatherData.main.temp > 15 && weatherData.main.temp <25,
    'hot' : weatherData.main.temp >= 30,
    'cold' : weatherData.main.temp < 0
  })}>

      <div className="top">
        <p className="header">{weatherData.name}</p>
        <Button className="button" inverted color='blue'  onClick={refresh}><img className='refresh-button' src={`images/refresh.png`}></img></Button>
      </div>
      <div className="flex">
        {/* <p className="day">{moment().format('dddd')}, <span>{moment().format('LL')}</span></p> */}
        <p className="temperature">{weatherData.main.temp} &deg;C</p>
        <p className="description"><Condition description={weatherData.weather[0].description} icon={weatherData.weather[0].icon}/></p>
      </div>

      <div className="flex">
        {/* <p className="temp">Temprature: {weatherData.main.temp} &deg;C</p> */}
        <p className="temp">Wind Speed: {weatherData.wind.speed}mph</p>
        <p className="temp">Humidity: {weatherData.main.humidity} %</p>
      </div>

      <div className="flex">
        <p className="temp">Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
        <p className="temp">Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
      </div>

      <div className="flex">
        <p className="day">Crops Assist</p>
        <div className="description"><IsGood temperature={weatherData.main.temp}/></div>
      </div>
    
  </div>
)

export default WeatherCard;