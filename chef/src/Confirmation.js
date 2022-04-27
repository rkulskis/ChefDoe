import {BrowserRouter as Router, Route, Routes, Link, useLocation} from 'react-router-dom';
import React, {createContext, useContext, useState, useEffect} from 'react';
import {Confirmbar} from './Navbar';

function Confirmation(){
	const location = useLocation();
	// here, state is recipe, selected ingredients, and num portions 
	console.log(location.state);
	const data = location.state;
	const str = data[0].measurements.toString();
	const matches = str.match(/[+-]?\d+(\.\d+)?/g);
	return(
		<div className="order">
			{useEffect(() =>{console.log('order confirmation page loaded')})}
			<div className = 'libraryTitle flexer'>ChefDoe</div>
			<Confirmbar data = {data}/>
			<div className = 'orderPopupContainer flexer'>
				<div className = 'orderPopup'>Order Placed</div>
				<div className = 'orderSummary'>Purchased {data[0].ingredients.length} ingredients for: {data[0].name}</div>
				<div className = 'orderSubtext'>See your Amazon account for details</div>
				<div className = 'orderThank'>Thank you for using ChefDoe!</div>
				<div className = 'orderThank'>{data[0].measurements}</div>
				<div className = 'orderThank'>{matches.length}</div>
			</div>
		</div>
	);
}

export default Confirmation;