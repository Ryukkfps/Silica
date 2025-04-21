import { Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import AboutUs from './Pages/AboutUS/AboutUs';
import ContactUs from './Pages/ContactUs/ContactUs';
import Gallery from './Pages/Gallery/Gallery';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path='/gallery' element={<Gallery />} />
    </Routes>
  );
};

export default AppRoutes;
