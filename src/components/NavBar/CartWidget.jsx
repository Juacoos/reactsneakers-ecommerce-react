import React from 'react'
import {FaShoppingCart} from 'react-icons/fa';

function CartWidget() {
  return (
    <div className='cart'>
      <a href="#">
        <FaShoppingCart size={25} />
      </a>
    </div>
  )
}
export default CartWidget