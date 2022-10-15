import React from 'react';
import './Button.css';
import ItemCount from './ItemCount';

function Button(props) {

  function handleClick() {
    if (props.onClick) props.onClick();
  }

  return (

      <button onClick={handleClick} className={props.claseBtn}>
        {props.children}
      </button>

  )
}

export default Button