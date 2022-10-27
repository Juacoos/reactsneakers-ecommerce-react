import React, { useContext }  from 'react'
import {FaShoppingCart} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { cartContext } from '../../context/cartContext';

function CartWidget() {

  const {getTotalItemCount} = useContext(cartContext);


  return (
    <div className='cart'>
      <Link to="/cart">
        <FaShoppingCart size={25} />
        <span> 
          { 
            getTotalItemCount() > 0 ? 
            getTotalItemCount() > 9 ? "+9" : getTotalItemCount()
            : <></> 
          }
        </span>
      </Link>
    </div>
  )
}
export default CartWidget