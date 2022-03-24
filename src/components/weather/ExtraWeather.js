import React, { useState } from 'react';
import './styles.css';
import { Button } from 'semantic-ui-react';
import WeatherDetails from './WeatherDetails';
import { Link } from 'react-router-dom';

function ExtraWeather({ weatherData }) {
  const [counter, setCounter] = useState(0);
  return (
    // container with top bar
    <div className="container">
      <div className="main">
        <div className="top">
          <p className="header">{weatherData.timezone}</p>
          <Link to="/" className="button">
            <img className="home-button" src={`images/home.png`}></img>
          </Link>
          <Button
            className="button"
            inverted
            color="blue"
            onClick={() => {
              window.location.reload();
            }}
          >
            <img className="refresh-button" src={`images/refresh.png`}></img>
          </Button>
        </div>
        {/* main table with all info */}
        <table>
          <tbody>
            <tr>
              <th>Day</th>
              <th>Temp</th>
              <th>Wind-Spd</th>
              <th>Humidity</th>
              <th>Sunrise</th>
              <th>Sunset</th>
            </tr>
            {weatherData.daily.map((day) => (
              <WeatherDetails
                weatherData={day}
                key={weatherData.daily.indexOf(day)}
                dayNumber={weatherData.daily.indexOf(day)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ExtraWeather;
