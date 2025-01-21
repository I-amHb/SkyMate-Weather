import Axios from 'axios';
import { useState } from 'react';
import React from 'react';
import Searchbar from './Searchbar';
import CardSection from './CardSection';

function WeatherContainer() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = '56aea3b189c33067318c473c6b463b02';

  // function to fetch weather data
  const fetchWeather = (cityName) => {

    const geoCodingApi = "http://api.openweathermap.org/geo/1.0/direct";
    const geoUrl = `${geoCodingApi}?q=${cityName}&limit=5&appid=${apiKey}`;

    // fetch weather coordinates
    Axios.get(geoUrl)
    .then((res) => {
      if (res.data.length > 0) {
        const { lat, lon, name } = res.data[0];
        const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
        
        // fetch weather data using coordinates        
        return Axios.get(weatherApiUrl).then((res) => {
          setWeatherData({ ...res.data, cityName: name });
          setError(null);
        });
      } else {
        throw new Error('City not found');
      }
    })
    .catch((err) => {
      console.error("Error:", err);
      setError(err.message || "Failed to fetch weather data.");
      setWeatherData(null);
    })

  };

  return (
    <div className='proto'>
      <Searchbar onSearch={fetchWeather}/>
      <CardSection weatherData={weatherData} error={error} />
    </div>
  );
}


export default WeatherContainer;