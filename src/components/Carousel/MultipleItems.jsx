import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { getOfferProduct } from "../../services/firebase";
import Loader from "../Loader/Loader";
import './MultipleItems.css'

export default function MultipleItems(){

  const [datosList,setDatosList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setDatosList([]);
    getOfferProduct().then((data) => { 
      console.log(data)
      setDatosList(data);
      setIsLoading(false);
      })
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    autoplay:true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    className: 'multi',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (

    <div className="offers">
      <h2 className="offerTitle">OFERTAS!</h2>
    {
      isLoading ? 
        <Loader/>

      :

      <Slider {...settings}>
        {
          datosList.map((item) => {
            return (
              <div className="cardMulti">
                <Link to={`/producto/${item.id}`}>
                  <div className='imgContainerMulti'>
                    <img className='imgMulti' src={item.img} alt={item.title}/>
                  </div>
                  <div className='detailsItem'>
                    <h4 className="textMulti"><span className='offer'>Oferta! </span> ${`${item.price}`}</h4>
                    <p className="textMulti">{item.title}</p>
                  </div>
                </Link>
              </div>
            )
          })  
        }
      </Slider>
    }
    </div>    
  );
}

