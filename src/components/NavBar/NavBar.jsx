import React, { useState } from 'react';
import {GrClose} from "react-icons/gr";
import {GiHamburgerMenu} from "react-icons/gi";

import {DiReact} from "react-icons/di";
import './NavBar.css';
import ButtonNav from './ButtonNav';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

function NavBar() {

  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  }


  return (
    <nav className='container-nav'>
      <div className='wrapper'>

        {/* Logo */}
        <div className='container-logo'>
          <Link to="/" className='logoLink'><DiReact size={50}/>ReactSneakers</Link>
        </div>

        <div onClick={handleClick} className='boton-nav' >
          {clicked ? <GrClose size={25}/> : <GiHamburgerMenu size={25} />}
        </div>

        {/* Links */}

          <div onClick={handleClick} className={`container-links ${clicked ? "abierto" : ""}`}>
            <ul className='links'>
              <ButtonNav  nombreNav={'Inicio'} direccion={"/"} />
              <ButtonNav  nombreNav={'Productos'} direccion={"/"} />
              <ButtonNav  nombreNav={'Deportivo'} direccion={"/category/deportivo"} />
              <ButtonNav  nombreNav={'Urbano'} direccion={"/category/urbano"} />

              <ButtonNav  nombreNav={'Contacto'} direccion={"#"} />
            </ul>
          </div>
          <CartWidget/>
      </div>
    </nav>
  )
}

export default NavBar