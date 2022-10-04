import React from 'react'
import { Link } from 'react-router-dom';

function ButtonNav(props) {
  return (
    <li className='nav-pags'>
      <Link to={props.direccion}>{props.nombreNav}</Link>
    </li>
  )
}

export default ButtonNav;