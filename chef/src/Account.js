import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import React, {createContext, useContext, useState, useEffect} from 'react';



function Account(){
	return(
		<div className="account">
			{useEffect(() =>{console.log('account page loaded')})}
			<h2>personal info here!</h2>
			<Link to="/">
				<button>back to home</button>
			</Link>
		</div>
	);
}

export default Account;