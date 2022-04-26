import React, {createContext, useContext, useState, useEffect} from 'react';


import {Homebar} from './Navbar';

function Home(){
	

	return(
		<div className = "home">
			{useEffect(() =>{console.log('home page loaded')})}
			<Homebar />
    	</div>
	);
}

export default Home;