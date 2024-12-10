// import React, { useState } from 'react'

// const AddLocation = ({ addLocation}) => {
//     const [location, setLocation] = useState('');

//     const handleAdd = () =>{
//         if (location){
//             addLocation(location);
//             setLocation('');
//         }
//     };

//   return (
//     <div className='p-4'>
//         <input type='text' value={location} onChange={(e)=>setLocation(e.target.value)} className='border p-2' placeholder='enter new location'/>
//         <button onClick={handleAdd} className='ml-2 bg-blue-500 text-white p-2 rounded'>Add Location</button>
//     </div>
//   )
// }

// export default AddLocation

import React, { useState } from 'react';
import axios from 'axios';

const API_KEY = '25b0ffd2d31643f0b0b62705240912'; // Your Weather API key
const BASE_URL = 'https://api.weatherapi.com/v1/current.json';

const AddLocation = ({ addLocation }) => {
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');

  const handleAdd = async () => {
    if (!location) {
      setError('Location cannot be empty');
      return;
    }

    try {
      const response = await axios.get(`${BASE_URL}?key=${API_KEY}&q=${location}`);
      if (response.data) {
        setError('');
        addLocation(location);
        setLocation('');
      }
    } catch (err) {
      setError('Invalid location. Please enter a valid location.');
    }
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border p-2"
        placeholder="Enter location"
      />
      <button onClick={handleAdd} className="ml-2 bg-blue-500 text-white p-2 rounded">
        Add Location
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default AddLocation;