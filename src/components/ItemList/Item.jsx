
import ButtonCard from './ButtonCard';
import './Item.css';

export default function Item(props){    
    return(
      <div className='card'>
        <div className='imgContainer'>
            <img 
              className='imgProd'
              src={props.srcImg}
              height={200}
              alt={props.alt}
            />
        </div>
        <hr/>
          <h2>{props.title}</h2>
          <p>{props.detail}</p>
          <h4>Precio ${props.precio}</h4>
          <ButtonCard />
      </div>
    )
}

