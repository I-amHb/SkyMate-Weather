import React from 'react'
import WeatherCard from './WeatherCard'
import HomeWeatherCards from './HomeWeatherCards'

function CardSection({ weatherData, error }) {
  return (
    <div className='w-full h-auto flex justify-center p-3 '>
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : weatherData ? (
          <WeatherCard weatherData={weatherData} />
        ) : (
          <HomeWeatherCards/>
        )}
    </div>
  )
}

export default CardSection