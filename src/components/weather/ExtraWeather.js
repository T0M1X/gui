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

        <h1 className="title-Weekly">
          Weekly View
        </h1>

        <table>
          <tr>
            <th>
              Day
            </th>
            <th>
              Temp
            </th>
            <th>
              Wind-Spd
            </th>
            <th>
              Humidity
            </th>
            <th>
              Sunrise - Sunset
            </th>

          </tr>
          <tr>
            <td>
              Monday
            </td>
            <td>
              <img src="images/01d.png" class="IconTD"></img>
            </td>
            <td>
              2.06 mph
            </td>
            <td>
              34%
            </td>
            <td>
              5:56:26 - 6:17:17
            </td>

          </tr>
          <tr>
          <td>
              Tuesday
            </td>
            <td>
              10c
            </td>
            <td>
              3.62 mph
            </td>
            <td>
              15%
            </td>
            <td>
              5:56:26 - 6:17:17
            </td>

          </tr>
        </table>


      </div>
    </div>
  );
}

export default ExtraWeather;
