import React from 'react';
import './styles.css';
import moment from 'moment';
import { Button } from 'semantic-ui-react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
const refresh = () => {
  window.location.reload();
};

// Returns the info about temperature as well as main picture
function Condition({ icon, temp, desc }) {
  return (
    <>
      <img src={`images/${icon}.png`} className="images" alt="Logo" />
      <br></br>
      <p className="maintemp">{temp}&deg;</p>
    </>
  );
}

//
function IsGood(props) {
  const temperature = Math.round(props.temperature);
  if (temperature <= 15 && temperature >= 0) {
    return <p>Too cold for crops!</p>;
  } else if (temperature > 15 && temperature < 25) {
    return <p>Ideal for crops!</p>;
  } else if (temperature >= 30) {
    return <p>Too hot for crops!</p>;
  } else {
    return <p>It is below freezing! Way to cold for crops!</p>;
  }
}

const WeatherCard = ({ weatherData }) => (
  <div
    className={classNames({
      main: true,
      ideal: weatherData.current.temp > 15 && weatherData.current.temp < 25,
      hot: weatherData.current.temp >= 30,
      cold: weatherData.current.temp < 0,
    })}
  >
    {/* main container and top bar */}
    <div className="top">
      <p className="header">{weatherData.timezone}</p>
      <div>
      <Link to="/" className="button">
        <img className="home-button" src={`images/home.png`}></img>
      </Link>
      <Button className="button" onClick={refresh}>
        <img className="refresh-button" src={`images/refresh.png`}></img>
      </Button>
      </div>

    </div>
    <div className="flex">
      <div className="description">
        <Condition
          icon={weatherData.current.weather[0].icon}
          temp={weatherData.current.temp}
        />
      </div>
    </div>
    <div className="icon_desc">
      <p className="mini_desc">{weatherData.current.weather[0].description}</p>
    </div>
    {/* info about wind speed */}
    <div className="row">
      <p className="temp">Wind Speed</p>
      <p>{weatherData.current.wind_speed}mph</p>
    </div>
    {/* info about humidity */}
    <div className="row">
      <p className="temp">Humidity</p>
      <p>{weatherData.current.humidity} %</p>
    </div>
    {/* info about sunrise */}
    <div className="row">
      <img className="sunrise_set" src={'images/sunrise.png'}></img>
      <p className="temp">
        Sunrise{' '}
        {new Date(weatherData.current.sunrise * 1000).toLocaleTimeString(
          'en-IN'
        )}
      </p>
    </div>
    {/* info about sunset */}
    <div className="row">
      <img className="sunrise_set" src={'images/sunset.png'}></img>
      <p className="temp">
        Sunset{' '}
        {new Date(weatherData.current.sunset * 1000).toLocaleTimeString(
          'en-IN'
        )}
      </p>
    </div>
    {/* crop assist */}
    <div className="row">
      <p className="temp">Crops Assist</p>
      <div className="temp">
        <IsGood temperature={weatherData.current.temp} />
      </div>
    </div>
  </div>
);

export default WeatherCard;
