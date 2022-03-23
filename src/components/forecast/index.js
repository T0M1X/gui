import React from 'react';
import './styles.css';
import moment from 'moment';
import { Button } from 'semantic-ui-react';
import classNames from 'classnames';

const refresh = () => {
  window.location.reload();
}

function Condition({description, icon}){
  return <><img src={`./images/${icon}.png`} className="images" alt="Logo" /><br></br>{description}</>
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

const WeatherForecast =({weatherForecast})=>{
    const tmp=weatherForecast.list[0]
    console.log(tmp)
    console.log(window.location.pathname)
    console.log(tmp.sunrise)
    return(
        <div>
                   
            {(typeof tmp.main != 'undefined') ? (
            <DailyForecast DailyWeather={weatherForecast.list[0]} city={weatherForecast.city.name}/>
            
          ): (
            <div>
              Hello
          </div>
        )}
        </div>
    )
}
const DailyForecast = ({DailyWeather, city}) => (
  <div className={classNames({
    'main': true,
    'ideal' : DailyWeather.main.temp > 15 && DailyWeather.main.temp <25,
    'hot' : DailyWeather.main.temp >= 30,
    'cold' : DailyWeather.main.temp < 0
  })}>
      <div className="top">
        <p className="header">{city}</p>
        <Button className="button" inverted color='blue'  onClick={refresh}><img className='refresh-button' src={`images/refresh.png`}></img></Button>
      </div>
      <div className="flex">
        {/* <p className="day">{moment().format('dddd')}, <span>{moment().format('LL')}</span></p> */}
        <p className="temperature">{DailyWeather.main.temp} &deg;C</p>
        <p className="description"><Condition description={DailyWeather.weather[0].description} icon={DailyWeather.weather[0].icon}/></p>
      </div>

      <div className="flex">
        {/* <p className="temp">Temprature: {DailyWeather.main.temp} &deg;C</p> */}
        <p className="temp">Wind Speed: {DailyWeather.wind.speed}mph</p>
        <p className="temp">Humidity: {DailyWeather.main.humidity} %</p>
      </div>

      <div className="flex">
        <p className="temp">Sunrise: {new Date(DailyWeather.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
        <p className="temp">Sunset: {new Date(DailyWeather.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
      </div>

      <div className="flex">
        <p className="day">Crops Assist</p>
        <div className="description"><IsGood temperature={DailyWeather.main.temp}/></div>
      </div>
    
  </div>
  )

export default WeatherForecast;