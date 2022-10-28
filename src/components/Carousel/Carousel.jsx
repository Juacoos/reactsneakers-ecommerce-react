import React from 'react';
import Slider from 'infinite-react-carousel';
import './Slider.css'
import { Link } from 'react-router-dom';

const Carousel = ({ images, autoplay, dots}) => {
	return (
		<section className='slider'>
			<Slider className='slider__content' autoplay={autoplay} dots={dots} prevArrow={<h1>{"<"}</h1>} nextArrow={<h1>{">"}</h1>}/* arrows={false} */>
				{images.map((image) => (
					<Link to={image.id === "1" ?  "/category/deportivo" : "/category/urbano"}>
						<div key={image.id} className='slider__content--item'>
							<img src={image.image} alt={image.title} />
							<p className='slider-description'>{image.title}</p>
						</div>
					</Link>
				))}
			</Slider>
		</section>
	)
}

export default Carousel;


