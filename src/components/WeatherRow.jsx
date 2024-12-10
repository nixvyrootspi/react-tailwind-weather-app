import React from 'react'

const WeatherRow = ({ data, index }) => {
    const bgColor = index%2===0?'bg-blue-100':'bg-blue-200';
  return (
    <tr className={`${bgColor} p-2`}>
        <td className='px-4 py-2'>{data.location}</td>
        <td className='px-4 py-2'>{data.temp}</td>
        <td className='px-4 py-2'>{data.precipitation}</td>
        <td className='px-4 py-2'>{data.humidity}</td>
        <td className='px-4 py-2'>{data.windSpeed}</td>
        <td className='px-4 py-2'>{data.pressure}</td>
        <td className='px-4 py-2'>{data.visibility}</td>
        <td className='px-4 py-2'>{data.aqi}</td>
    </tr>
  );
};

export default WeatherRow