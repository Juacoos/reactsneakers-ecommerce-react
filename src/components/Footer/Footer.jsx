import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithubSquare, FaInstagramSquare } from 'react-icons/fa';
import { AiFillTwitterSquare } from 'react-icons/ai';
import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='columna'>
        <h3>Más información</h3>
        <Link className='link'>Quienes somos</Link>
        <Link className='link'>Contacto</Link>
        <Link className='link'>Ver más</Link>
      </div>
      <div className='rrss'>
        <h3>Seguinos en nuestras redes</h3>
        <a href="https://instagram.com" className='link'>
          <FaInstagramSquare size={20} className='iconRS'/> Instagram
        </a>
        <a href="https://twitter.com" className='link'>

          <AiFillTwitterSquare size={20} className='iconRS'/> Twitter

        </a>
        <a href="https://github.com/Juacoos/reactsneakers-ecommerce-react" className='link'>
          <FaGithubSquare size={20} className='iconRS'/> Github
        </a>
      </div>
    </div>
  )
}

export default Footer