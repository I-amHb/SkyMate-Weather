import Axios from 'axios';
import { useState } from 'react';
import React from 'react';
import Searchbar from './Searchbar';
import CardSection from './CardSection';

function WeatherContainer() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = '56aea3b189c33067318c473c6b463b02';

  // function to fetch weather data
  const fetchWeather = () => {

    const geoCodingApi = "http://api.openweathermap.org/geo/1.0/direct";
    const geoUrl = `${geoCodingApi}?q=${city}&limit=5&appid=${apiKey}`;

    // fetch weather coordinates
    Axios.get(geoUrl)
    .then((res) => {
      if (res.data.length > 0) {
        const { lat, lon } = res.data[0];
        // fetch weather data using coordinates

        const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
        return Axios.get(weatherApiUrl);
      } else {
        throw new Error('City not found');
      }
    })
    .then((res) => {
      setWeatherData(res.data);
      setError(null);
    })
    .catch((err) => {
      console.error("Error:", err);
      setError(err.message || "Failed to fetch weather data.");
      setWeatherData(null);
    })

  };

  //Handle city Change from search bar
  const handleCityChange = (newCity) => {
    setCity(newCity);
    fetchWeather();
  }

    

  return (
    <div className='proto'>
      <Searchbar onCityChange={handleCityChange}/>
      <CardSection weatherData={weatherData} error={error} />
    </div>
  );
}


export default WeatherContainer;