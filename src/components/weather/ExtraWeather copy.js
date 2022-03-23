import React from "react";
import "./styles.css";
import { Button } from "semantic-ui-react";

function ExtraWeather({ weatherData }) {
  return (
    <div className="container">
      <div className="main">
        <div className="top">
          <p className="header">{weatherData.name}</p>
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
      </div>
    </div>
  );
}

export default ExtraWeather;
