import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = '25b0ffd2d31643f0b0b62705240912';
const BASE_URL = 'https://api.weatherapi.com/v1/current.json';

const useWeatherData = (locations) => {
  const [weatherData, setWeatherData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const allWeatherData = await Promise.all(
          locations.map(async (location) => {
            const response = await axios.get(`${BASE_URL}?key=${API_KEY}&q=${location}`);
            const data = response.data;
            return {
              location: data.location.name,
              temp: data.current.temp_c,
              precipitation: data.current.precip_mm,
              humidity: data.current.humidity,
              windSpeed: data.current.wind_kph,
              pressure: data.current.pressure_mb,
              visibility: data.current.vis_km,
              aqi: data.current.air_quality?.pm2_5 || 'N/A',
            };
          })
        );
        setWeatherData(allWeatherData);
      } catch (err) {
        setError(err);
      }
    };

    fetchWeather();
  }, [locations]);

  return { weatherData, error };
};

export default useWeatherData;