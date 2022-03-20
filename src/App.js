import './App.css';
import React, { Component, useEffect, useState } from "react";
import Weather from './components/weather';
import Homepage from './components/weather/homepage';
import { Dimmer, Loader } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import useGeo from './hooks/useGeo';
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