import {BrowserRouter as Router, Route, Routes, Link, useLocation} from 'react-router-dom';
import React, {createContext, useContext, useState, useEffect} from 'react';
import {Orderbar} from './Navbar';

function Order(){
	const location = useLocation();
	console.log(location.state);
	const recipe = location.state;
	const numPortions = location.state[1];
	return(
		<div className="order">
			{useEffect(() =>{console.log('order page loaded')})}
			<div className = 'libraryTitle flexer'>CREATE ORDER</div>
			<h2>order recipe here!</h2>
			<Orderbar data = {recipe}/>

		</div>
	);
}

export default Order;