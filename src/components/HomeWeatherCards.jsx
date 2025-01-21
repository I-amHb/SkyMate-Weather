import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function HomeWeatherCards() {
    const [weatherData, setWeatherData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const apiKey = '56aea3b189c33067318c473c6b463b02';
    const cities = ['New York', 'London', 'Paris', 'Abuja', 'Tokyo', 'Rio'];

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                setLoading(true);

                const responses = await Promise.all(
                    cities.map(async (city) => {
                        const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`;
                        const geoResponse = await Axios.get(geoUrl);

                        if (geoResponse.data.length > 0) {
                            const { lat, lon, name } = geoResponse.data[0];
                            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
                            const weatherResponse = await Axios.get(weatherUrl);

                            return { ...weatherResponse.data, cityName: name };
                        } else {
                            throw new Error(`City not found: ${city}`);
                        }
                    })
                );

                setWeatherData(responses);
                setError(null);
            } catch (err) {
                console.error('Error fetching weather data:', err);
                setError('Failed to fetch some weather data.');
            } finally {
                setLoading(false);
            }
        };

        fetchWeatherData();
    }, []); // Dependency array is empty since cities list is static

    if (loading) return <p>Loading popular cities...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <div className="w-full flex flex-col bg-white rounded-md justify-center p-4 md:w-[90%] gap-[100px] md:gap-1">
            <div className='h-[100px] '>
                <h1 className='text-center text-[40px] font-extrabold '>Your trusted Weather Companion</h1>
            </div>
            <div className="w-full flex flex-wrap gap-6 gap-x-11 justify-center items-center">
                {weatherData.map((data, index) => (
                    <div
                        key={index}
                        className="w-[390px] h-[400px] bg-white flex flex-col gap-6 justify-evenly 
                        shadow-custom rounded-md md:w-[500px] border-[3px] border-[#2a93bd] "
                    >
                        <div className="w-full h-[150px] flex">
                            <div className="w-1/2 flex flex-col gap-1 p-1 justify-center">
                                <div>
                                    <h1 className="font-bold text-[30px] text-center">
                                        {data.cityName || 'Unknown City'}
                                    </h1>
                                    <p className="text-center">{new Date().toLocaleDateString()}</p>
                                </div>
                            </div>
                            <div className="w-1/2 flex items-center justify-end">
                                <img
                                    className="w-[130px]"
                                    src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                                    alt="weather-icon"
                                />
                            </div>
                        </div>
                        <div className="w-full h-[100px] flex flex-col justify-center">
                            <h1 className="h-full text-[60px] text-center">{Math.round(data.main.temp)}℃</h1>
                        </div>
                        <div className="w-full h-[100px] flex flex-row justify-evenly items-center">
                            <div className="w-1/2 flex flex-row items-center justify-center">
                                <img className="w-[55px]" src="./assets/humidity.png" alt="humidity-icon" />
                                <div>
                                    <h1 className="text-[20px]">{data.main.humidity}%</h1>
                                    <p className="text-[14px]">Humidity</p>
                                </div>
                            </div>
                            <div className="w-1/2 flex flex-row items-center justify-center">
                                <img className="w-[55px]" src="./assets/wind.png" alt="wind-icon" />
                                <div>
                                    <h1 className="text-[20px]">{data.wind.speed}m/s</h1>
                                    <p className="text-[14px]">Wind Speed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default HomeWeatherCards;