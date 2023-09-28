import React, {useEffect, useState} from 'react'
import Navbar from './components/navbar';
import Hero from './components/hero';
import axios from 'axios';
import Content from './components/content';
import Footer from './components/footer';

const Home = () => {
  return (
    <div id="app">
      <Navbar/>
      <Hero/>
      <Content/>
      <Footer/>
    </div>   
  )
}

export default Home;
