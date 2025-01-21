import React from 'react'

function WeatherCard({ weatherData }) {
  return (
    <div className='w-[390px] h-[400px] bg-white flex flex-col gap-6 justify-evenly 
                        shadow-custom rounded-md md:w-[500px] border-[3px] border-[#2a93bd] mb-7 '>
        <div className=' w-full h-[150px] flex'>
            <div className='w-1/3 flex flex-col gap-1 p-1 justify-center '>
                <div>
                    <h1 className='font-bold text-[30px] text-center'>
                        {weatherData.cityName || 'Unknown City' }
                    </h1>
                     <p className=' text-center '>{new Date().toLocaleDateString()}</p>
                </div>
                
            </div>
            <div className=' w-2/3 flex items-center justify-end'>
                <img className=' w-[130px] ' src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} 
                alt="clear-icon" />
            </div>
        </div>
        <div className=' w-full h-[100px] flex flex-col justify-center '>
            <h1 className=' h-full text-[60px] text-center'>
                {Math.round(weatherData.main.temp)}℃
            </h1>
        </div>
        <div className=' w-full h-[100px] flex flex-row justify-evenly items-center '>
            <div className='w-1/2 flex flex-row items-center justify-center '>
                <img className='w-[55px] ' src="./assets/humidity.png" alt="humidity-icon" />
                <div>
                    <h1 className=' text-[23px] '>{weatherData.main.humidity}%</h1>
                    <p className=' text-[14px] '>Humidity</p>
                </div>
            </div>
            <div className='w-1/2  flex flex-row items-center justify-center  '>
                <img className='w-[55px] ' src="./assets/wind.png" alt="humidity-icon" />
                    <div>
                        <h1 className=' text-[23px] '>{weatherData.wind.speed} m/s</h1>
                        <p className=' text-[14px] '>Wind Speed</p>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherCard