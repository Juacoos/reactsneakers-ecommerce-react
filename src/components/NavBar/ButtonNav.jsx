import React from 'react'

function ButtonNav(props) {
  return (
    <li className='nav-pags'><a href={props.direccion}>{props.nombreNav}</a></li>
  )
}

export default ButtonNav;