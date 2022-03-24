import React from 'react';

function WeatherDetails({ weatherData, dayNumber }) {

    const getDay = () => {

        if (dayNumber === 0){
            return "Today"
        }
        const now = new Date()
        const buffer = new Date()
        buffer.setDate(now.getDate() + dayNumber)

        return buffer.toString().substring(0, 3)
    }
  return (

    <tr>
        <td>
        {
            getDay()
        }
        </td>
        <td>
            <img src={`images/${weatherData.weather[0].icon}.png`} className="IconTD" />
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
