import './App.css';
import React, { Component, useEffect, useState } from "react";
import Weather from './components/weather';
import Homepage from './components/weather/Homepage';
import { Dimmer, Loader } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
      await fetch("http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=7474326d53564eae1b93d73f4423dc98")
      .then(res => res.json())
      .then(result => {
        setData(result)
      });
    }
    fetchData();
  }, [lat,long])
  

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/weather' element={
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
        } />
      </Routes>
    </Router>
  );
}