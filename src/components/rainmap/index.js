import React, { Component } from 'react';
import { render } from 'react-dom';
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import './map.css';
// Displays rainfall map
function RMap({ weatherData}) {
    return (
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
            <Link to="/" className="button"><img className='home-button' src={`images/home.png`}></img></Link>
          </div>
          <div>
          <iframe src="https://openweathermap.org/weathermap?basemap=map&cities=false&layer=radar&lat=51.5072&lon=0.1276&zoom=3" height="100%" width="100%"/>
          </div>
      </div>
      </div>
    );

  }
  export default RMap;