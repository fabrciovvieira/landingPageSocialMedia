import './App.css'
import NavBar from './components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div className="App">
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default App
