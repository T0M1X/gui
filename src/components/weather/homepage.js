import React from 'react';
import './styles.css';
import './Homepage.css';
import moment from 'moment';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function Homepage({ weatherData, name }) {
  return (
    // Main conatiner and top bar
    <div className="container">
      <div className="main">
        <div className="top">
          <p className="header">{weatherData.timezone}</p>
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
        <div>
          {/* The day */}
          <div className="day">
            <h1>{moment().format('dddd')}</h1>
            <p>{moment().format('LL')}</p>
          </div>
          {/* Buttons to go to each page */}
          <Link to="/weather">
            <button className="weatherButton">Display Weather</button>
          </Link>
          <Link to="/extraWeather">
            <button className="weatherButton">Week Forcast</button>
          </Link>
          <br></br>
          <Link to="/Map">
            <button className="weatherButton">Rain Map</button>
          </Link>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Homepage;
