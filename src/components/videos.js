import React from 'react';
import { RichText } from "prismic-reactjs";
import './videos.css';

const Videos = ( { items } ) => {
	return (
		<div className="videos">
			{items.map( ( item, index ) => {
				let el = document.createElement( 'div' );
				el.innerHTML = item.video.html.trim();
				el = el.firstChild;

				return (
					<div key={`video${index}`} className="videos__item">
						{React.createElement( el.nodeName.toLowerCase(), {
							width: el.width,
							height: el.height,
							src: el.src,
							frameBorder: 0,
							allowFullScreen: true
						}, null )}
						<h4>{item.video_title[0].text}</h4>
						{RichText.render( item.video_text )}
					</div>
				);
			} )}
		</div>
	);
};

export default Videos;
