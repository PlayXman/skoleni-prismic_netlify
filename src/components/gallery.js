import React from 'react';
import RichText from "prismic-reactjs/src/Component";
import './gallery.css';

const Gallery = ({items}) => {
	return (
		<div className="gallery">
			{items.map( ( item, index ) => {
				return(
					<div key={`img${index}`} className="gallery__item">
						<img src={item.gallery_image.url} alt="" />
						{RichText.render(item.image_captions)}
					</div>
				);
			})}
		</div>
	);
};

export default Gallery;
