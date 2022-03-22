import './App.css';
import React, { Component, useEffect, useState } from "react";
import Weather from './components/weather';
import Homepage from './components/weather/homepage';
import { Dimmer, Loader } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import useGeo from './hooks/useGeo';
import ExtraWeather from './components/weather/ExtraWeather';
export default function App() {

  const [data, setData] = useState([]);
  const location=useGeo();
  useEffect(() => {
    const fetchData = async () => {
      if(location.loaded){
      fetch(location.link)
      .then(res => res.json())
      .then(result => {
        setData(result)
      });}
    }
    fetchData();
  }, [location])
  

  return (
    <Router>
      <nav>
        
      </nav>
      <Routes>
        <Route path='/' element={<Homepage weatherData={data}/>} />
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
        <Route path='/extraWeather' element={<ExtraWeather weatherData={data}/>}/>
      </Routes>

    </Router>
  );
}