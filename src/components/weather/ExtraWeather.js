import React from "react";
import "./styles.css";
import { Button } from "semantic-ui-react";

function TableBuilder({weatherData}){
  var now = new Date();
  var buffer = new Date();
  var innerHTMl = ''
  for (var counter = 0; counter < 7; counter = counter+1){
    buffer.setDate(now.getDate() +counter);
    innerHTMl +=  '<tr><td>Monday</td><td><img src="images/01d.png" className="IconTD"></img></td><td>2.06 mph</td><td>34%</td><td>5:56:26 - 6:17:17</td></tr>'
    
  }

  return {innerHTMl};
}





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
          <TableBuilder weatherData = {weatherData}/>

        </table>


      </div>
    </div>
  );
}

export default ExtraWeather;
