import React from 'react';
import {Link} from "gatsby";

const List = ({items}) => {
	return (
		<div className="list">
			{items.map( ( item ) => {
				const key = item.node._meta.uid;

				return(
					<div key={key} className="list__item">
						<Link to={`/news/${key}`}>{item.node.title[0].text}</Link>
					</div>
				);
			})}
		</div>
	);
};

export default List;
