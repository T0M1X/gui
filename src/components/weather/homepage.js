import React from "react";
import "./styles.css";
import "./Homepage.css";
import moment from "moment";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

function Homepage({ weatherData,name }) {
  return (
    <div className="container">
      <div className="main">
        <div className="top">
          <p className="header">{name}</p>
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
          <div className="day">
            <h1>{moment().format("dddd")}</h1>
            <p>{moment().format("LL")}</p>
          </div>
          <Link to="/forecast/1">
            <button className="weatherButton">Display Weather</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
