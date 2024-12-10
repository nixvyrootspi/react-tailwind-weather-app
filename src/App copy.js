import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import WeatherTable from './components/WeatherTable';
import AddLocation from './components/AddLocation';
import useWeatherService from './hooks/useWeatherService'

const initialLocations =['New Delhi', 'Moscow', 'New York', 'Tokyo', 'Paris'];

const App = () => {
  const [locations, setLocations] = useState(initialLocations);
  const [weatherData, setWeatherData] = useState([]);

  // useEffect(()=>{
  //   const fetchWeatherData = async () => {
  //     const allWeatherData = await Promise.all(
  //       locations.map(location => {
  //         const { weatherData } = useWeatherService(location);
  //         return weatherData;
  //       })
  //     );
  //     setWeatherData(allWeatherData.filter(data => data !== null));
  //   }
  // }, [locations]);

  useEffect(()=>{
    const fetchWeatherData = async () => {
      const allWeatherData = await Promise.all(locations.map(async (location)=>{
        const { weatherData } = useWeatherService(location);
        return weatherData;
      }));
      setWeatherData(allWeatherData.filter(data => data !== null));
    };
    fetchWeatherData();
  }, [locations]);

  const addLocation = (location) => {
    if(!locations.includes(location)){
      setLocations([...locations, location]);
    }
  };

  return (
    <div className='container ms-auto'>
      <Header/>
      <AddLocation addLocation={addLocation}/>
      <WeatherTable weatherData={weatherData}/>
    </div>
  );
}

export default App