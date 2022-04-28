import {BrowserRouter as Router, Route, Routes, Link, useLocation} from 'react-router-dom';
import React, {createContext, useContext, useState, useEffect} from 'react';
import {Confirmbar} from './Navbar';

function Confirmation(){
	const location = useLocation();
	// here, state is recipe, selected ingredients, and num portions 
	console.log(location.state);
	const recipe = location.state[0];
	const data = location.state[1];
	return(
		<div className="order">
			{useEffect(() =>{console.log('order confirmation page loaded')})}
			<div className = 'menuTitle flexer'>ChefDoe</div>
			<Confirmbar/>
			<div className = 'confirmMessageContainer flexer'>
				<div className = 'confirmMessage'>Order Placed</div>
				<div className = 'confirmSubtext'>Purchased {data.length} {data.length === 1 ? "ingredient" : "ingredients"} for: {recipe.name}</div>
				<div className = 'confirmSubtext'>See your Amazon account for details</div>
				<div className = 'confirmThank'>Thank you for using ChefDoe!</div>
			</div>
		</div>
	);
}

export default Confirmation;