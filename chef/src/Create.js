import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import React, {createContext, useContext, useState, useEffect} from 'react';

function Create(){
	return(
		<div className="create">
			{useEffect(() =>{console.log('create page loaded')})}
			<h2>make new recipe here!</h2>
			<Link to="/">
				<button>back to home</button>
			</Link>
		</div>
	);
}

export default Create;