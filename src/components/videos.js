import React from 'react';
import { RichText } from "prismic-reactjs";
import './videos.css';

const Videos = ( { items } ) => {
	return (
		<div className="videos">
			{items.map( ( item, index ) => {
				return (
					<div key={`video${index}`} className="videos__item">
						<div dangerouslySetInnerHTML={{__html: item.video.html.trim()}} />
						<h4>{item.video_title[0].text}</h4>
						{RichText.render( item.video_text )}
					</div>
				);
			} )}
		</div>
	);
};

export default Videos;
