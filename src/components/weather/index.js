import React from 'react';
import './styles.css';
import moment from 'moment';
import { Button } from 'semantic-ui-react';
import Cloud from '../images/cloud.png';
import Sun from '../images/sun.png';
import Partly from '../images/part-cloud.png';
const refresh = () => {
  window.location.reload();
}
function Condition({cond, description}){
  if (cond==="Clouds"){
    return <div><img src={Cloud} alt="Logo" />{description}</div>
  }

  else if (cond==="Sun"){
    return <div><img src={Sun} alt="Logo" />{description}</div>
  }
  else{
    return <div><img src={Partly} alt="Logo" /> {description}</div>
  }
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
  <div className="main">

      <div className="top">
        <p className="header">{weatherData.name}</p>
        <Button className="button" inverted color='blue' circular icon='refresh' onClick={refresh} />
      </div>
      <div className="flex">
        <p className="day">{moment().format('dddd')}, <span>{moment().format('LL')}</span></p>
        <p className="description"><Condition cond={weatherData.weather[0].main} description={weatherData.weather[0].description}/></p>
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