import { Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import AboutUs from './Pages/AboutUS/AboutUs';
import ContactUs from './Pages/ContactUs/ContactUs';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
  );
};

export default AppRoutes;
