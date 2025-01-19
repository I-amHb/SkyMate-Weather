import React from 'react'
import WeatherCard from './WeatherCard'

function CardSection({ weatherData, error }) {
  return (
    <div className='w-full h-auto flex justify-center p-3 '>
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : weatherData ? (
          <WeatherCard weatherData={weatherData} />
        ) : (
          <p>Your trusted Weather Companion</p>
        )}
    </div>
  )
}

export default CardSection