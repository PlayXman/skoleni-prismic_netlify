import React from 'react';
import Employee from "./employee";
import "./style.css";

const Employees = ({items}) => {
	return (
		<div className="employees">
			{items.map( ( item, index ) => {
				return <Employee key={`key${index}`} item={item} />
			} )}
		</div>
	);
};

export default Employees;
