// src/App.js
import React from 'react';
import Navbar from './Component/NavBar';
import Banner from './Component/Banner';
import BannerCont from './Component/BannerCont';
import Footer from './Component/Footer';
import Home from './Page/Home';


function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <BannerCont />
      <Home />
      <Footer />
      
    </div>
  );
}



export default App;
