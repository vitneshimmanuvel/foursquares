import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Interiors from './pages/Interiors';
import Upvc from './pages/Upvc';
import Aluminium from './pages/Aluminium';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import './index.css';

import InteriorsFullHome from './pages/InteriorsFullHome';
import InteriorsKitchen from './pages/InteriorsKitchen';
import InteriorsLivingRoom from './pages/InteriorsLivingRoom';
import InteriorsBedroom from './pages/InteriorsBedroom';

import UpvcColours from './pages/UpvcColours';
import UpvcCasement from './pages/UpvcCasement';
import UpvcSliding from './pages/UpvcSliding';
import UpvcTiltTurn from './pages/UpvcTiltTurn';

import UpvcDoors from './pages/UpvcDoors';
import UpvcDoorsCasement from './pages/UpvcDoorsCasement';
import UpvcDoorsSliding from './pages/UpvcDoorsSliding';
import UpvcDoorsSlideFold from './pages/UpvcDoorsSlideFold';

import AluminiumSliding from './pages/AluminiumSliding';
import AluminiumCasement from './pages/AluminiumCasement';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Navigate to="/products/interiors" replace />} />
          <Route path="/products/interiors" element={<Interiors />} />
          <Route path="/products/interiors/full-home" element={<InteriorsFullHome />} />
          <Route path="/products/interiors/kitchen" element={<InteriorsKitchen />} />
          <Route path="/products/interiors/living-room" element={<InteriorsLivingRoom />} />
          <Route path="/products/interiors/bedroom" element={<InteriorsBedroom />} />
          
          <Route path="/products/upvc" element={<Upvc />} />
          <Route path="/products/upvc/casement" element={<UpvcCasement />} />
          <Route path="/products/upvc/sliding" element={<UpvcSliding />} />
          <Route path="/products/upvc/tilt-turn" element={<UpvcTiltTurn />} />
          <Route path="/products/upvc/colours" element={<UpvcColours />} />

          <Route path="/products/upvc-doors" element={<UpvcDoors />} />
          <Route path="/products/upvc-doors/casement" element={<UpvcDoorsCasement />} />
          <Route path="/products/upvc-doors/sliding" element={<UpvcDoorsSliding />} />
          <Route path="/products/upvc-doors/slide-fold" element={<UpvcDoorsSlideFold />} />
          <Route path="/products/upvc-doors/colours" element={<UpvcColours />} />

          <Route path="/products/aluminium" element={<Aluminium />} />
          <Route path="/products/aluminium/sliding" element={<AluminiumSliding />} />
          <Route path="/products/aluminium/casement" element={<AluminiumCasement />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
