import { HashRouter as BrowserRouter } from 'react-router-dom'
import AppRoutes from './Routes'
import InfoHeader from './Components/InfoHeader'
import Navbar from './Components/Navbar'
import { FaWhatsapp } from 'react-icons/fa';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <InfoHeader />
        <Navbar />
        <main className="flex-grow" style={{ backgroundColor: '#fbf7f1' }}>
          <AppRoutes />
        </main>
        <a
        href="https://wa.me/7459076207?text=I%20want%20to%20enquire%20about%20your%20products"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition duration-300"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp size={28} />
      </a>
      </div>
    </BrowserRouter>
  )
}

export default App
