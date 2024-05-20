import './NavBar.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="container-navbar">
      <div className="hamburger-menu">
        <div className={`menu-btn ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
              <div className="btn-line" />
              <div className="btn-line" />
              <div className="btn-line" />
        </div>
        <div className={`menu ${isOpen ? 'open' : ''}`}>
            <div className="linksMobile">
                <Link to='/'>
                  <h1 onClick={toggleMenu}>Sua Marca</h1>
                </Link>
                <ul>
                  <Link to='/'>
                    <li onClick={toggleMenu}>Home</li>
                  </Link>
                  <Link to='/aboutMe'>
                    <li onClick={toggleMenu}>Sobre</li>
                  </Link>
                  <li className='btnMobile'>Obter um Orçamento</li>
                </ul>
                <h2 className='developer'>Desenvolvido por Fabrício Vieira</h2>
            </div>
        </div>

      </div>
      <div className="desktopMenu">
        <Link to='/'>
          <h1>Sua Marca</h1>
        </Link>
        <ul>
          <Link to='/'>
            <li className='itens'>Home</li>
          </Link>
          <Link to='/aboutMe'>
            <li className='itens'>Sobre</li>
          </Link>
          <li className='btn'>Obter um Orçamento</li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar