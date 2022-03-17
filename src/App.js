import './App.css';
import React, { Component, useEffect, useState } from "react";
import Weather from './components/weather';
import { Dimmer, Loader } from 'semantic-ui-react';
<<<<<<< HEAD
import { compose } from '@mui/system';
=======
import $ from 'jquery';
>>>>>>> 2766398d7ee43b80c1c4d74691f636dd35dfb503
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
<<<<<<< HEAD
      if(lat!="" && long!=""){
      await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
=======

      const response = await fetch("http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=7474326d53564eae1b93d73f4423dc98")
      // console.log(response.status)
>>>>>>> 2766398d7ee43b80c1c4d74691f636dd35dfb503
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });}
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