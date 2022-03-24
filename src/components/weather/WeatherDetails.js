import React from 'react';

// function TableBuilder({ weatherData }) {
//   var now = new Date();
//   var buffer = new Date();
//   var innerHTMl = '';
//   for (var counter = 0; counter < 7; counter = counter + 1) {
//     buffer.setDate(now.getDate() + counter);
//     // console.log(now.toString().substring(0, 8));
//     // innerHTMl +=
//     //   '<tr><td>Monday</td><td><img src="images/01d.png" className="IconTD"></img></td><td>2.06 mph</td><td>34%</td><td>5:56:26 - 6:17:17</td></tr>';
//   }

//   return null;
// }

function WeatherDetails({ weatherData }) {
  return (
    <tr>
        <td>
        {
            new Date().toString().substring(0, 3)
        }
        </td>
        <td>
            <img src={`images/${weatherData.weather[0].icon}.png`} className="IconTD" />
            {
                console.log(weatherData.weather[0].icon)
            }
        </td>
        <td>
            {weatherData.wind_speed}mph
        </td>
        <td>
            {weatherData.humidity}%
        </td>
        <td>
            {new Date(weatherData.sunrise * 1000).toLocaleTimeString('en-IN')}
            {new Date(weatherData.sunset * 1000).toLocaleTimeString('en-IN')}
        </td>
    </tr>
  );
}

export default WeatherDetails;
