import {BrowserRouter as Router, Route, Routes, Link, useLocation} from 'react-router-dom';
import React, {createContext, useContext, useState, useEffect} from 'react';
import {Confirmbar} from './Navbar';

function Confirmation(){
	const location = useLocation();
	// here, state is recipe, selected ingredients, and num portions 
	console.log(location.state);
	const data = location.state;
	const str = data.measurements.toString();
	const matches = str.match(/[+-]?\d+(\.\d+)?/g);
	return(
		<div className="order">
			{useEffect(() =>{console.log('order confirmation page loaded')})}
			<div className = 'menuTitle flexer'>ChefDoe</div>
			<Confirmbar data = {data}/>
			<div className = 'confirmMessageContainer flexer'>
				<div className = 'confirmMessage'>Order Placed</div>
				<div className = 'confirmSubtext'>Purchased {data.ingredients.length} ingredients for: {data.name}</div>
				<div className = 'confirmSubtext'>See your Amazon account for details</div>
				<div className = 'confirmThank'>Thank you for using ChefDoe!</div>
			</div>
		</div>
	);
}

export default Confirmation;