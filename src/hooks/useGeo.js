import {useEffect, useState} from 'react'

const useGeo = () => {
  const [location,setLocation]=useState({
    loaded:false,  
    coordinates:{lat:"",lng:""}})
    const onSuccess=location =>{
        setLocation({
            loaded:true,
            coordinates:{
                lat:location.coords.latitude,
                lng:location.coords.longitude,
            },
            /*link:`http://api.openweathermap.org/data/2.5/forecast?q=London&units=metric&APPID=${process.env.REACT_APP_API_KEY}&cnt=7`,*/ 
            link:`https://api.openweathermap.org/data/2.5/onecall?lat=${location.coords.latitude}&lon=${location.coords.longitude}&exclude=minutely,hourly&appid=${process.env.REACT_APP_API_KEY}&units=metric`,
            /* Comment out the first link to access the weather page*/ 
        });
    };
    const onError = error =>{
        setLocation({
        loaded:true,
        error,
        /*link:`http://api.openweathermap.org/data/2.5/forecast?q=London&units=metric&APPID=${process.env.REACT_APP_API_KEY}&cnt=7`,*/ 
        link:`https://api.openweathermap.org/data/2.5/onecall?lat=51.5072&lon=0.1276&exclude=minutely,hourly&appid=${process.env.REACT_APP_API_KEY}&units=metric}`,
    });}
    useEffect(() => {
        if(!("geolocation" in navigator)){
            onError({
                code:0,
                message:"Geo not supported"
            })
            
        }
        navigator.geolocation.getCurrentPosition(onSuccess,onError);

    },[])
    return location
}

export default useGeo