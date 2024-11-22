// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/NavBar';
import Banner from './Component/Banner';
import BannerCont from './Component/BannerCont';
import Footer from './Component/Footer';
import Home from './Page/Home';
import Movies from './Page/Movies';
import CardsDiag from './Component/CardsDiag';
import Page from './Page/Page';
import Comics from './Page/Comiscs'

function App() {
  return (
    <Router>
      <Navbar />
        <Banner />
          <BannerCont />

          <CardsDiag />
          <Page />
          <Comics />
      
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movies" element={<Movies />} />
              {/* Agrega más rutas según sea necesario */}
            </Routes>
          
      <Footer />
    </Router>
  );
}

export default App;

