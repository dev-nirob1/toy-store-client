import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Pages/Shared/Header/Navbar'
import Footer from './Pages/Shared/Footer/Footer'

function App() {

  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
