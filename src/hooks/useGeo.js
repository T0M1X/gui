import React, {useEffect, useState} from 'react'

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
            link:`${process.env.REACT_APP_API_URL}/weather/?lat=${location.coords.latitude}&lon=${location.coords.longitude}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`,
            
        });
    };
    const onError = error =>{
        setLocation({
        loaded:true,
        error,
        link:`http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=${process.env.REACT_APP_API_KEY}`,
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