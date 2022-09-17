
import './Card.css';

export default function Card(props){    
    return(
      <div className='card'>
          <h2>{props.title}</h2>
          <img 
            className='imgProd'
            src={props.srcImg}
            height={200}/>
          <p>{props.detail}</p>
          <h4>Precio ${props.precio}</h4>
      </div>
    )
}

