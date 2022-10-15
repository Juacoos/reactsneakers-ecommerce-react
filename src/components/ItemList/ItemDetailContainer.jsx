import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getProducto} from '../../mockAPI/mockAPI';
import Item from './Item';
import ItemDetail from './ItemDetail';
import './ItemDetailContainer.css';

function ItemDetailContainer(props) {

  const [item, setItem] = useState([]);

  const { itemID } = useParams();

  useEffect(() => {
    getProducto(itemID).then( (data) =>{
      setItem(data);
    });
  }, [])

  return (
    <div className='itemDetailContainer'>
      <ItemDetail item={item}/>
    </div>
  )
}

export default ItemDetailContainer;