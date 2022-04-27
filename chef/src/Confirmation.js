import {BrowserRouter as Router, Route, Routes, Link, useLocation} from 'react-router-dom';
import React, {createContext, useContext, useState, useEffect} from 'react';
import {Confirmbar} from './Navbar';

function Confirmation(){
	const location = useLocation();
	console.log(location.state);
	const recipe = location.state;
	return(
		<div className="order">
			{useEffect(() =>{console.log('order confirmation page loaded')})}
			<div className = 'libraryTitle flexer'>CONFIRM PAGE</div>
			<h2>order placed!</h2>
			<Confirmbar data = {recipe}/>

		</div>
	);
}

export default Confirmation;