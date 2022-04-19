import React from 'react'
import Navbar from '../components/navbar'
import "../styles/home.css"

const Home = () => {
  return (
    <div className='container-home'>
      <Navbar />
      <h1 className='text-dark algin-items-center p-4 bg-light'>Welcom to our project</h1>
    </div>
  )
}

export default Home