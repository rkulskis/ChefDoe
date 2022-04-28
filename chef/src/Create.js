import {useLocation} from 'react-router-dom';
import React, {createContext, useContext, useState, useEffect} from 'react';
import {Createbar} from './Navbar';

export function HandleNumInput(props){
	function getInputValue(event){
		// update state thanks to context
		// also, make string into int 
		props.func(event.target.value * 1);
	};

	return(
		<input type= 'number' onChange={getInputValue}/>
	);
}

export function HandleTextInput(props){
	function getInputValue(event){
		// update state NO THANKS TO CONTEXT
		// input can either go into [1] or [2], need to check

		if(props.target === "pass"){
			props.func([props.data[0], props.data[1], event.target.value]);
		}else{
			props.func([props.data[0],event.target.value, props.data[2]]);
		}
		
	};
	
	return(
		<input type= 'text' onChange={getInputValue}/>
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