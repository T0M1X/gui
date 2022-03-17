import React from 'react';
import './styles.css';
import moment from 'moment';
import { Button } from 'semantic-ui-react';
import classNames from 'classnames';

const refresh = () => {
  window.location.reload();
}
function Condition({description, icon}){
  return <div><img src={`images/${icon}.png`} className="images" alt="Logo" />{description}</div>
}
 
function IsGood(props){
  const temperature=Math.round(props.temperature)
  if (temperature<=20){
    return <h1>Too cold for crops!</h1>
  }
  else{
    return <h1>Ideal for crops!</h1>

  }
}


const WeatherCard = ({weatherData}) => (
  <div className={classNames({
    'main': true,
    'hot' : weatherData.main.temp > 20
  })}>

      <div className="top">
        <p className="header">{weatherData.name}</p>
        <Button className="button" inverted color='blue' circular icon='refresh' onClick={refresh} />
      </div>
      <div className="flex">
        <p className="day">{moment().format('dddd')}, <span>{moment().format('LL')}</span></p>
        <p className="description"><Condition description={weatherData.weather[0].description} icon={weatherData.weather[0].icon}/></p>
      </div>

      <div className="flex">
        <p className="temp">Temprature: {weatherData.main.temp} &deg;C</p>
        <p className="temp">Humidity: {weatherData.main.humidity} %</p>
      </div>

      <div className="flex">
        <p className="sunrise-sunset">Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
        <p className="sunrise-sunset">Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
      </div>

      <div className="flex">
        <p className="day">Crops Assist</p>
        <p className="description"><IsGood temperature={weatherData.main.temp}/></p>
      </div>
    
  </div>
)

export default WeatherCard;