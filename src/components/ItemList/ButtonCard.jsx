import './ButtonCard.css';
import ItemCount from './ItemCount';
function ButtonCard() {

  

  return (
    <div className='container-btn'>
      <button 
        className='btn btn-comprar'>
        Comprar
      </button>
      <button className='btn'>
        Agregar al carrito
      </button>
      <ItemCount stock={10} initial={1}/>
    </div>
  )
}

export default ButtonCard;