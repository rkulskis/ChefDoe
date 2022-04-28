import {BrowserRouter as Router, Route, Routes, Link, useLocation} from 'react-router-dom';
import React, {createContext, useContext, useState, useEffect} from 'react';
import {Confirmbar} from './Navbar';

function Confirmation(){
	const location = useLocation();
	console.log(location.state);
	const recipe = location.state[0];
	const portion = location.state[1];
	const orderInfo = location.state[2];

	return(
		<div className="confirmation">
			{useEffect(() =>{console.log('order confirmation page loaded')})}
			<div className = 'menuTitle flexer'>ChefDoe</div>
			<Confirmbar/>
			<div className = 'confirmMessageContainer flexer'>
				<div className = 'confirmMessage'>Order Sent</div>
				<div className = 'confirmSubtext'>Ordered {orderInfo[0].length} {orderInfo[0].length === 1 ? "ingredient" : "ingredients"} for: {recipe.name}</div>
				<div className = 'confirmSubtext'>See your Amazon account for details</div>
				<div className = 'confirmThank'>Thank you for using ChefDoe!</div>
			</div>
		</div>
	);
}

export default Confirmation;