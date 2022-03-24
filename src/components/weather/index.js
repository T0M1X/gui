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
    'ideal' : weatherData.current.temp > 15 && weatherData.current.temp <25,
    'hot' : weatherData.current.temp >= 30,
    'cold' : weatherData.current.temp < 0
  })}>
      <div className="top">
        <p className="header">{weatherData.timezone}</p>
        <Button className="button" inverted color='blue'  onClick={refresh}><img className='refresh-button' src={`images/refresh.png`}></img></Button>
      </div>
      <div className="flex">
        {/* <p className="day">{moment().format('dddd')}, <span>{moment().format('LL')}</span></p> */}
        <p className="temperature">{weatherData.current.temp} &deg;C</p>
        <p className="description"><Condition description={weatherData.current.weather[0].description} icon={weatherData.current.weather[0].icon}/></p>
      </div>

      <table>
        <tr>
          <td>
          <img className='sunrise_set' src={'images/windspeedIcon.png'}></img>
          <small>Wind Spd</small>
          </td>
          <td>
          <p className="temp">{weatherData.current.wind_speed}mph</p>
          </td>
          <td>
          <img className='sunrise_set' src={'images/humidity.png'}></img>
          <small>Humidity</small>
          </td>
          <td>
          <p className="temp">{weatherData.current.humidity} %</p>
          </td>
        </tr>
        <tr>
        <td>
        <img className='sunrise_set' src={'images/sunrise.png'}></img>
        <small>Sunrise</small>
          </td>
          <td>
          <p className="temp">{new Date(weatherData.current.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
          </td>
          <td>
          <img className='sunrise_set' src={'images/sunset.png'} ></img>
          <small>Sunset</small>
          </td>
          <td>
          <p className="temp">{new Date(weatherData.current.sunset * 1000).toLocaleTimeString('en-IN')}</p>
          </td>
        </tr>
      </table>

      <div className="flex">
        <p className="day">Crops Assist</p>
        <div className="description"><IsGood temperature={weatherData.current.temp}/></div>
      </div>
  </div>
)

export default WeatherCard;