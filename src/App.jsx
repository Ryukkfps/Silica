import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './Routes'
import InfoHeader from './Components/InfoHeader'
import Navbar from './Components/Navbar'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <InfoHeader />
        <Navbar />
        <main className="flex-grow">
          <AppRoutes />
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
