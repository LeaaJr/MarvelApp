import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Component/NavBar';
import Footer from './Component/Footer';
import Banner from './Component/Banner';
import BannerCont from './Component/BannerCont';
import CardsDiag from './Component/CardsDiag';
import SecondBan from './Component/SecondBan';
import Comics from './Component/Comiscs';
import Home from "./Page/Home";
import Movies from "./Page/Movies";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Ruta para Home */}
        <Route
          path="/"
          element={
            <>
              <Banner />
              <BannerCont />
              <CardsDiag />
              <SecondBan />
              <Comics />
              <Home />
            </>
          }
        />
        
        {/* Ruta para Movies */}
        <Route
          path="/movies"
          element={<Movies />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
