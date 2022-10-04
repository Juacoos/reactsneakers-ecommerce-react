import React from 'react'
import ButtonCard from './ButtonCard';
import ButtonsDetail from './ButtonsDetail';
import ItemCount from './ItemCount';
import './ItemDetail.css';

function ItemDetail(props) {
  return (
    <div className='itemDetail'>

      <div className='detailContainerImg'>
        <img className='detailImg'
          src={props.srcImg} 
          alt={props.alt}/>
      </div>

      <div className='detailContainerContent'>
        <div>
          <h1 className='titleDetail'>{props.title}</h1>
          <h2 className='priceDetail'>$ {props.price}</h2>
        </div>
        
        
        <div>
          <p className='details'>{props.detail}</p>
          <ButtonsDetail/>
          
        </div>


      </div>
    </div>
  )
}

export default ItemDetail