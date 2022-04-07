import React from 'react';
import CitySelector from './components/CitySelector';
import { Container } from 'react-bootstrap';
import './App.css';import UseFetch from './hooks/UseFetch';
import WeatherList from './components/WeatherList';
//import Login from './components/login';


function App() {
const {data, error, isLoading, setUrl} = UseFetch();
  
  const getContent = () => {
  if(error) return <h2>Error when fetching: {error}</h2>
    if(!data && isLoading) return <h2>LOADING...</h2>
    if(!data) return null;
    return <WeatherList weathers={data.list} />}
  
  return (
    <Container className="App">
      {/* <Login /> */}
      <CitySelector onSearch={(city) => setUrl(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=3f87189f1aac3532836f8ddb60ca2990`)}/>
      {getContent()}
    </Container>
  );
}

export default App;

