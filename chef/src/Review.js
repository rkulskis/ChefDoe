import {useLocation} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import {Reviewbar} from './Navbar';


function Review(){
	const location = useLocation();
	console.log(location.state);
	const recipe = location.state[0];
	const portion = location.state[1];
	const cart = location.state[2];

	const [orderInfo, setOrderInfo] = useState([cart, "", ""]);
	// in view we needed context as well since input was happening in a function call, but not here

	useEffect(() =>{console.log(orderInfo)}, [orderInfo])

	return(
		<div className="review">
			{useEffect(() =>{console.log('order review page loaded')})}
			<div className = 'menuTitle flexer'>REVIEW ORDER</div>
			<Reviewbar recipe = {recipe} portion = {portion} orderInfo = {orderInfo}/>

			<div className = 'cartLabel flexer'>Is this everything you need?</div>
			<div className = 'cartContainer flexer'>
				<div className = 'cartBox flexer'>
					<DisplayCart items = {cart} />
				</div>
			</div>

			<form className = 'userInfoInputContainer flexer' >
				<div className = 'userInfoInputBox flexer'>
					<label>Enter your username:</label>
					<input
						type = "text"
						required
						onChange ={(e) => setOrderInfo([orderInfo[0], e.target.value, orderInfo[2]])}
					/>
				</div>
				<div className = 'userInfoInputBox flexer'>
					<label>Enter your password:</label>
					<input
						type = "text"
						required
						onChange ={(e) => setOrderInfo([orderInfo[0], orderInfo[1], e.target.value])}
					/>
				</div>
			</form>
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
