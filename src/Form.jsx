import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    const getWeather = (city) => {
        const key = '2a2e7cd4ad3f2d221e48a6f41f2ceac0'; 
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
            .then(response => {
                const data = response.data;
                setWeatherData(data);
                console.log(data);
            })
            .catch(error => {
                console.error('Error fetching the weather data:', error);
            });
    };

    return (
        <div className="form">
            <input
                value={city}
                type="text"
                onKeyDown={e => {
                    if (e.keyCode === 13) {
                        getWeather(city);   
                    }
                }}
                autoFocus={true}
                onChange={e => setCity(e.target.value)}
            />
            <button onClick={() => getWeather(city)}>Get Weather</button>

            {weatherData && (
                <div className="weather-info">
                    <h2>Погода в {weatherData.name}, {weatherData.sys.country}</h2>
                    <p>Температура: {Math.round(weatherData.main.temp - 273.15)}°C</p>   
                    <p>погода: {weatherData.weather[0].description}</p>
                    <p>скорость ветра: {weatherData.wind.speed} m/s</p>
                    <p>Давление: {weatherData.main.pressure} hPa</p>

                </div>
            )}
        </div>
    );
};

export default Form;