import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import React, {createContext, useContext, useState, useEffect} from 'react';

function  Prepare(){
	return(
		<div className="prepare">
			{useEffect(() =>{console.log('prepare page loaded')})}
			<h2>make, adjust, order recipe here!</h2>
			<Link to="/">
				<button>back to home</button>
			</Link>
		</div>
	);
}

export default Prepare;