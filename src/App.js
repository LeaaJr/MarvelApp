// src/App.js
import React from 'react';
import Navbar from './Component/NavBar';
import Banner from './Component/Banner';
import BannerCont from './Component/BannerCont';
import Footer from './Component/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <BannerCont />
      <Footer />
    </div>
  );
}

export default App;
