import React from 'react'
import WeatherRow from './WeatherRow';

const WeatherTable = ({ WeatherData }) => {
    return (
        <table className='min-w-full border-collapse block md:table'>
            <thead className='block md:table-header-group'>
                <tr className='border border-gray-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative'>
                    <th className='bg-gray-600 p-2 text-white font-bold md:border md:border-gray-500 text-left block md:table-cell'>Location</th>
                    <th className='bg-gray-600 p-2 text-white font-bold md:border md:border-gray-500 text-left block md:table-cell'>Temp (C)</th>
                    <th className='bg-gray-600 p-2 text-white font-bold md:border md:border-gray-500 text-left block md:table-cell'>Precipitation (%)</th>
                    <th className='bg-gray-600 p-2 text-white font-bold md:border md:border-gray-500 text-left block md:table-cell'>Humidity (%)</th>
                    <th className='bg-gray-600 p-2 text-white font-bold md:border md:border-gray-500 text-left block md:table-cell'>Wind Speed (km/h)</th>
                    <th className='bg-gray-600 p-2 text-white font-bold md:border md:border-gray-500 text-left block md:table-cell'>Pressure (hPa)</th>
                    <th className='bg-gray-600 p-2 text-white font-bold md:border md:border-gray-500 text-left block md:table-cell'>Visibility (km)</th>
                    <th className='bg-gray-600 p-2 text-white font-bold md:border md:border-gray-500 text-left block md:table-cell'>AQI</th>

                </tr>
            </thead>
            <tbody className='block md:table-row-group'>
                {
                    WeatherData.map((data,index)=>(
                        <WeatherRow key={index} data={data} index={index}/>
                    ))
                }
            </tbody>
        </table>
    );
};

export default WeatherTable