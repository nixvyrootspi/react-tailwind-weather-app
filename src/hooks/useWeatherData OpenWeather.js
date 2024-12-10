import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = '5bc08d25929f559edfbf30db3328cb65';
const WEATHER_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const AQI_BASE_URL = 'http://api.openweathermap.org/data/2.5/air_pollution';

const useWeatherData = (locations) => {
  const [weatherData, setWeatherData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const allWeatherData = await Promise.all(
          locations.map(async (location) => {
            const weatherResponse = await axios.get(`${WEATHER_BASE_URL}?q=${location}&appid=${API_KEY}&units=metric`);
            const weatherData = weatherResponse.data;
            const lat = weatherData.coord.lat;
            const lon = weatherData.coord.lon;

            const aqiResponse = await axios.get(`${AQI_BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
            const aqiData = aqiResponse.data.list[0].main.aqi;

            return {
              location: weatherData.name,
              temp: weatherData.main.temp,
              precipitation: weatherData.rain ? weatherData.rain['1h'] : 0,
              humidity: weatherData.main.humidity,
              windSpeed: weatherData.wind.speed,
              pressure: weatherData.main.pressure,
              visibility: weatherData.visibility / 1000, // converting meters to kilometers
              aqi: aqiData,
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