import React, { useEffect, useState } from 'react'
import { getData, getProductByCategory } from '../../mockAPI/mockAPI';
import Item from './Item'
import { useParams } from 'react-router-dom';

function ItemList() {

  const [datosList,setDatosList] = useState([]);

  const { categoryID } = useParams();

  useEffect(() => {
    if(categoryID === undefined){
        getData().then((data) => { 
        setDatosList(data);
      })
    }
    else {
      getProductByCategory(categoryID).then((data) => { 
        setDatosList(data);
      })
    }
  }, [categoryID])


  return (
    <>
    
      { datosList.map( (item) => {
        return (
          <Item 
            id={item.id}
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