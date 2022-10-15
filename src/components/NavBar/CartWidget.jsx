import React, { useContext }  from 'react'
import {FaShoppingCart} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { cartContext } from '../../context/cartContext';

function CartWidget() {

  // const cart = useContext(cartContext).cart;
  // == 
  const { cart } = useContext(cartContext);

  const {getTotalItemCount} = useContext(cartContext);

  console.log(cart);

  return (
    <div className='cart'>
      <Link to="/cart">
        <FaShoppingCart size={25} />
        <span> {getTotalItemCount()}</span>
      </Link>
    </div>
  )
}
export default CartWidget