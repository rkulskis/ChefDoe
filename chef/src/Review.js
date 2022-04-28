import {BrowserRouter as Router, Route, Routes, Link, useLocation} from 'react-router-dom';
import React, {createContext, useContext, useState, useEffect} from 'react';
import {Reviewbar} from './Navbar';
import {HandleTextInput} from './Create';


function Review(){
	const location = useLocation();
	console.log(location.state);
	const recipe = location.state[0];
	const portion = location.state[1];
	const cart = location.state[2];

	const [orderInfo, setOrderInfo] = useState([cart, "", ""]);
	// in view we needed context as well since input was happening in a function call, but not here

	{useEffect(() =>{console.log(orderInfo)}, [orderInfo])}

	return(
		<div className="review">
			{useEffect(() =>{console.log('order review page loaded')})}
			<div className = 'menuTitle flexer'>REVIEW ORDER</div>
			<Reviewbar recipe = {recipe} portion = {portion} orderInfo = {orderInfo}/>

			<div className = 'cartContainer flexer'>
				<div className = 'cartBox flexer'>
					<DisplayCart items = {cart} />
				</div>
			</div>

			<div className = 'cartLabel flexer'>Is this everything you need?</div>

			<div className = 'infoInputContainer flexer'>
				<div className = 'infoInputBox flexer'>
					<div style = {{marginBottom: '0px'}}>Enter your username:</div>
					<HandleTextInput target = "name" data = {orderInfo} func = {setOrderInfo}/>
				</div>

				<div className = 'infoInputBox flexer'>
					<div style = {{marginBottom: '0px'}}>Enter your password:</div>
					<HandleTextInput target = "pass" data = {orderInfo} func = {setOrderInfo}/>
				</div>
			</div>
		</div>
	);
}

export default Review;


function DisplayCart(props){
	return (
		props.items.map((ingredient) =>(
 			<div className = "ingredient flexer" style= {{cursor: "default"}} key = {ingredient.ind}>
 				{ingredient.description}
			</div>
 		))
	);
}
