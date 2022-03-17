import './App.css';
import React, { useEffect, useState } from "react";
import Weather from './components/weather';
import { Dimmer, Loader } from 'semantic-ui-react';
import $ from 'jquery';
export default function App() {

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      const response = await fetch("http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=7474326d53564eae1b93d73f4423dc98")
      // console.log(response.status)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
    }
    fetchData();
  }, [lat,long])


  return (
    <div className="container">
      {(typeof data.main != 'undefined') ? (
        <Weather weatherData={data}/>
      ): (
        <div>
          <Dimmer active>
            <Loader>Loading..</Loader>
          </Dimmer>
       </div>
     )}
     
 </div>
  );
}