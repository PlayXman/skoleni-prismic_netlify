import React from 'react';
import {RichText} from 'prismic-reactjs';

const Employee = ({item}) => {
	const photo = item.employee_photo;

	return (
		<div className="employee">
			<img
				src={photo.url}
				width={photo.dimensions.width}
				height={photo.dimensions.height}
				alt={photo.alt}
			/>
			<div className="employee__info">
				{RichText.render(item.employee_name)}
				{RichText.render(item.employee_info)}
			</div>
		</div>
	);
};

export default Employee;
