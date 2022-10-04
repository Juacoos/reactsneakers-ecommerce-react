
import ButtonCard from './ButtonCard';
import './Item.css';
import { Link } from 'react-router-dom';

export default function Item(props){    
    return(

        <div className='card'>
          <div className='imgContainer'>
            <Link to={`/producto/${props.id}`}>
              <img 
                className='imgProd'
                src={props.srcImg}
                height={200}
                alt={props.alt}
              />
            </Link>
          </div>
          <div className='detailsItem'>

            <h2>{props.title}</h2>
            <p>{props.detail}</p>
            <h4>${props.precio}</h4>
            <Link to={`/producto/${props.id}`}>

              <ButtonCard/>
            </Link>

          </div>
        </div>
    )
}

