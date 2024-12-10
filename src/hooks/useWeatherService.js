import React, { useState, useEffect } from 'react'
// import axios from 'axios';

import React from 'react'

const useWeatherService = () => {
  return (
    <div>useWeatherService</div>
  )
}

export default useWeatherService

// const API_KEY = '25b0ffd2d31643f0b0b62705240912';
// const BASE_URL = 'https://api.weatherapi.com/v1/current.json';


// const useWeatherService = () => {
//     const [weatherData, setWeatherData] = useState(null);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchWeather = async () => {
//             try {
//                 const response = await axios.get(`${BASE_URL}?key=${API_KEY}&q=${location}`);
//                 const data = response.data;
//                 setWeatherData({
//                     location: data.location.name,
//                     temp: data.current.temp_c,
//                     precipitation: data.current.precip_mm,
//                     humidity: data.current.humidity,
//                     windSpeed: data.current.wind_kph,
//                     pressure: data.current.pressure_mb,
//                     visibility: data.current.vis_km,
//                     aqi: data.current.air_quality.pm2_5,
//                 });
//             } catch (err) {
//                 setError(err);
//             }
//         }
//         fetchWeather();
//     }, [location]);
//     return (
//         <div>useWeatherService</div>
//     )
// }

// export default useWeatherService