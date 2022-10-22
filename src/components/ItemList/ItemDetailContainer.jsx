import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getProducto} from '../../services/firebase';
import Item from './Item';
import ItemDetail from './ItemDetail';
import './ItemDetailContainer.css';

function ItemDetailContainer(props) {

  const [item, setItem] = useState({});
  const [feedbackMsg, setFeedbackMsg] = useState(null);

  const { itemID } = useParams();

  useEffect(() => {
    getProducto(itemID)
    .then( (data) =>{
      setItem(data);
    })
    .catch( (error) =>{
      setFeedbackMsg(error.message);
    })
  }, [])

  return (
    <>
    { feedbackMsg 
      ? 
      <h4>Error: {feedbackMsg}</h4>
      :
      <div className='itemDetailContainer'>
        <ItemDetail item={item}/>
      </div>
    }
    </>
  )
}

export default ItemDetailContainer;