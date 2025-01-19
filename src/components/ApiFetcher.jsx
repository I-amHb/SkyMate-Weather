import React from 'react'
import { useState, useEffect } from 'react'
import Axios from 'axios';


function ApiFetcher() {

  const [coordinates, setCoordinates] = useState({ lat: null, lon: null });
  const [Weather, setWeather] = useState("");
  const [error, setError] = useState(null);

  const apiKey = '56aea3b189c33067318c473c6b463b02';
  const city = 'kaduna';

  // Function to fetch coordinates from geocoding API

  const fetchCoordinates = () => {

    const geoCodingApi = 'http://api.openweathermap.org/geo/1.0/direct';
    const url = `${geoCodingApi}?q=${city}&limit=5&appid=${apiKey}`;
  // http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=56aea3b189c33067318c473c6b463b02
    Axios.get(url)
    .then((res) => {
      if (res.data.length > 0) {
        const latitude = res.data[0]['lat'];
        const longitude = res.data[0]['lon'];
        console.log('Latitude: '+ latitude);
        console.log('Longitude: '+ longitude);
        setCoordinates({ lat: latitude, lon: longitude });
      } else {
        setError('City not found')
      } 
    })
    .catch((err) => {
      console.error("Error fetching coordinates:", err);
      setError("Failed to fetch coordinates.");
    })
  }


  // Function to weather data from the openweathermap API
  function fetchWeather() {
    if (!coordinates.lat || !coordinates.lon) return;

    const weatherAPIUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}`;
    console.log(weatherAPIUrl)
    
    Axios.get(weatherAPIUrl)
    .then((res) => {

      const weatherMain = res.data['weather'][0]['main'];
      console.log(res.data.weather[0]['main']);
      setWeather(weatherMain);
    })
    .catch((err) => {
      console.error("Error fetching weather:", err);
      setError("Failed to fetch weather data.");
    })

    
  }

  useEffect(() => {
    fetchCoordinates();
  }, []);
  
  useEffect(() => {
    fetchWeather();
  }, [coordinates]);


  return (
    <div className=''>
      {/* <button className='border-black border-solid border-[2px]' onClick={fetchWeather}>Generate Weather Info</button>
      <p> {getWeather} ℃ </p> */}
    </div>
  )
}

export default ApiFetcher;
