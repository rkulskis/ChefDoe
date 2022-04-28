import {useLocation} from 'react-router-dom';
import React, {createContext, useContext, useState, useEffect} from 'react';
import {Createbar} from './Navbar';

export function HandleNumInput(props){
	const setPortion = props.func;
	function getInputValue(event){
		// make string to int 
		setPortion(event.target.value * 1);
	};

	return(
		<input type= 'number' onChange={getInputValue}/>
	);
}


function Create(){
	const location = useLocation();
	console.log(location.state);
	return(
		<div className="create">
			{useEffect(() =>{console.log('prepare page loaded')})}
			<div className = 'menuTitle flexer'>NEW RECIPE</div>
			<h2>make and save recipe here!</h2>
			<Createbar />

		</div>
	);
}



export default Create;