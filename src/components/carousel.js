import React from 'react';
import RichText from "prismic-reactjs/src/Component";
import "./carousel.css";

const Carousel = ({items}) => {
	return (
		<div className='carousel'>
			{items.map( ( item, index ) => {
				return(
					<div key={`car${index}`} className="carousel__item">
						{RichText.render(item.carousel_content)}
					</div>
				);
			})}
		</div>
	);
};

export default Carousel;
