import React from 'react';
import WeatherCard from './components/WeatherCard';
import CitySelector from './components/CitySelector';
import { Container } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <Container className="App">
      <CitySelector />
    </Container>
  );
}

export default App;
