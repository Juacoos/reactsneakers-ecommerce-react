import React, { useEffect, useState } from 'react'
import { getData } from '../../mockAPI/mockAPI';
import Item from './Item'

function ItemList() {

  const [datosList,setDatosList] = useState([]);

  useEffect(() => {
    getData().then((data) => {
      console.log("data");  
      setDatosList(data);
    })
  }, [])
  return (
    <>
      { datosList.map( (item) => {
        return (
          <Item 
            key={item.id}
            title={item.title}
            srcImg={item.img}
            precio={item.price}
            stock={item.stock}
          />
        )
      } )}
    </>
  )
}

export default ItemList