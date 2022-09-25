import React from 'react'
import { DiReact } from 'react-icons/di';
import ButtonNav from './ButtonNav';
import CartWidget from './CartWidget';
import './NavBar.css';

function NavBar() {
  return (
    <nav className='nav'>
      <div className='logo'>
        <a href="/" className='logoLink'><DiReact size={50}/>ReactSneakers</a>
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