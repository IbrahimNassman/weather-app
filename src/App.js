  import React from 'react';
  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import Weather from './components/weather';
  import './App.css';
  import Login from './components/login';
 import Home from './pages/Home';
import RegisterForm from './components/registerForm';
import {MantineProvider}from "@mantine/core"

function App() {
  return (
    <div className="App">
      <MantineProvider> 
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registerForm/" element={<RegisterForm />} />
      </Routes>
    </BrowserRouter>
    </MantineProvider>
    </div>
  );
}

export default App;
