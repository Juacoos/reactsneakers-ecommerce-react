import React from 'react'
import logo from '../../images/logo.png';
import ButtonNav from './ButtonNav';
import CartWidget from './CartWidget';
import './NavBar.css';

function NavBar() {
  return (
    <nav className='nav'>
      <div className='logo'>
        <a href="#"><img src={logo} style={{width:50}} className='logo' alt='logo'/></a>
      </div>
      <div className='nav-buttons'>
        <ul className='nav-lista'>
          <ButtonNav nombreNav={'Inicio'} direccion={"#"} />
          <ButtonNav nombreNav={'Productos'} direccion={"#"} />
          <ButtonNav nombreNav={'Contacto'} direccion={"#"} />
          <CartWidget />
        </ul>
      </div>
    </nav>
  )
}

export default NavBar;