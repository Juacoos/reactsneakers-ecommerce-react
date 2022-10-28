import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import './CarouselS.css'

export default function LazyLoad({images}){
  
  const settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      arrows: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      initialSlide: 1,
      className: 'slides'
    };
    return (
      <section className='slider'>
        <Slider className='slider__content' {...settings} >
          {images.map((image) => (
					<Link to={image.id === "1" ?  "/category/deportivo" : "/category/urbano"}>
						<div key={image.id} className='slider__content--item'>
							<img className="imgSlider" src={image.image} alt={image.title} />
							<p className='slider-description'>{image.title}</p>
						</div>
					</Link>
				))}
        </Slider>
      </section>
    );
  }
