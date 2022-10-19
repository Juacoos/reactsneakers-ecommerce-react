import React, { useEffect, useState } from 'react'
import { getData, getProductByCategory } from '../../mockAPI/mockAPI';
import Item from './Item'
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';

function ItemList(props) {

  return (
    <>
      { 
        props.datosList.map( (item) => {
          return (
            <Item 
              id={item.id}
              key={item.id}
              title={item.title}
              srcImg={item.img}
              precio={item.price}
              stock={item.stock}
              offer={item.offer}
            />
        ) 
      })
      }
    </>
  )
}

export default ItemList