import React, { useState } from 'react';
import Header from './components/Header';
import WeatherTable from './components/WeatherTable';
import AddLocation from './components/AddLocation';
import useWeatherData from './hooks/useWeatherData';

const initialLocations = ['New Delhi', 'Moscow', 'New York', 'Tokyo', 'Paris'];

const App = () => {
  const [locations, setLocations] = useState(initialLocations);
  const { weatherData, error } = useWeatherData(locations);

  const addLocation = (location) => {
    if (!locations.includes(location)) {
      setLocations([...locations, location]);
    }
  };

  return (
    <div className="container mx-auto">
      <Header />
      <AddLocation addLocation={addLocation} />
      {error ? (
        <p className="text-red-500">Error fetching weather data: {error.message}</p>
      ) : (
        <WeatherTable weatherData={weatherData} />
      )}
    </div>
  );
};

export default App;