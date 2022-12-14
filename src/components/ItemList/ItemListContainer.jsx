import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import { getData, getProductByCategory } from '../../services/firebase';

import Loader from '../Loader/Loader';
import ItemList from './ItemList';
import './ItemListContainer.css';

function ItemListContainer(props) {
  
  const [datosList,setDatosList] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  
  const { categoryID } = useParams();

  useEffect(() => {
    
    setDatosList([]);
    if(categoryID === undefined){
        getData().then((data) => { 
        setDatosList(data);
        setIsLoading(false);
      })
    }
    else {
      getProductByCategory(categoryID).then((data) => { 
        setDatosList(data);
        setIsLoading(false);
      })
    }
  }, [categoryID])



  return (
    <div className='itemListContainer'>

      <h2 className='greeting'>{props.greeting}</h2>


      {categoryID && <h3 id='catID'>Productos de la categoría {`${categoryID}`}</h3>}

      <div className={!isLoading && "productos"}> {/* Aca uso el condicional porque con el grid el loader se ve mal */}
        { 
          isLoading ?
          <Loader/>
          :
          <>
            
            <ItemList datosList={datosList}/>
          </>
        }
      </div>
    </div>
  )
}

export default ItemListContainer;

