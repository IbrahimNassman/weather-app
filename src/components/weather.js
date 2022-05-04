import React from 'react'
import UseFetch from '../hooks/UseFetch';
import WeatherList from './WeatherList';
import CitySelector from './CitySelector'
// import '../styles/weather.css'

const Weather = () => {

  const {data, error, isLoading, setUrl} = UseFetch();
  const getContent = () => {
      if(error) return <h2>Error when fetching: {error}</h2>
      if(!data && isLoading) return <h2>LOADING...</h2>
      if(!data) return null;
    return <WeatherList weathers={data.list} />
  }
  return (
      <div>
        <div className='mt-4 bg-info'>
          <CitySelector onSearch={(city) => setUrl(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=3f87189f1aac3532836f8ddb60ca2990&units=metric`)} />
          {getContent()} 
      </div>
      </div>
  
  );
}

export default Weather