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
          <Route path="/products/upvc" element={<Upvc />} />
          <Route path="/products/aluminium" element={<Aluminium />} />
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
