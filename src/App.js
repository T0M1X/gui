import './App.css';
import React, { Component, useEffect, useState } from 'react';
import Weather from './components/weather';
import Homepage from './components/weather/homepage';
import { Dimmer, Loader } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import useGeo from './hooks/useGeo';
import ExtraWeather from './components/weather/ExtraWeather';
import RMap from './components/rainmap';

// Makes calls to API
export default function App() {
  const [data, setData] = useState([]);
  const location = useGeo();
  useEffect(() => {
    const fetchData = async () => {
      if (location.loaded) {
        fetch(location.link)
          .then((res) => res.json())
          .then((result) => {
            setData(result);
            console.log(result);
          });
      }
    };
    fetchData();
  }, [location]);

  return (
    <Router>
      <Routes>
        {/* path to homepage */}
        <Route
          path="/"
          element={
            typeof data.current != 'undefined' ? (
              <Homepage weatherData={data} name={data.name} />
            ) : (
              <Dimmer active>
                <Loader />
              </Dimmer>
            )
          }
        />
        {/* path to main weather page */}
        <Route
          path="/weather"
          element={
            <div className="container">
              {typeof data.current != 'undefined' ? (
                <Weather weatherData={data} />
              ) : (
                <div>
                  <Dimmer active>
                    <Loader />
                  </Dimmer>
                </div>
              )}
            </div>
          }
        />
        {/* path to weekly forecast page */}
        <Route
          path="/extraWeather"
          element={
            <div>
              {typeof data.current != 'undefined' ? (
                <ExtraWeather weatherData={data} />
              ) : (
                <div>
                  <Dimmer active>
                    <Loader />
                  </Dimmer>
                </div>
              )}
            </div>
          }
        />
        {/* Path to map page */}
        <Route
          path="/Map"
          element={
            <div>
              {typeof data.current != 'undefined' ? (
                <RMap weatherData={data} />
              ) : (
                <div>
                  <Dimmer active>
                    <Loader />
                  </Dimmer>
                </div>
              )}
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
