import {useLocation} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import {Orderbar} from './Navbar';

function Order(){
	const location = useLocation();
	console.log(location.state);
	const recipe = location.state[0];
	const numPortions = location.state[1];

	// create list of adjusted measurements to give to ingredient objects
	const measurementList = ApplyPortions([recipe.measurements, numPortions]);

	// create list of objects to represent the ingredients instead of just strings. needed for manage logic 
	const ingredientList = recipe.ingredients.map((val, index) => ({name: val, ind: index, description: measurementList[index]}));

	// by making 2 hooks and having the below methods, we can ping-pong ingredients between the lists
	// bonus points because it's like a little minigame 
	const [toIgnore, setToIgnore] = useState(ingredientList);
	const [toOrder, setToOrder] = useState([]);

	function selectIngredient(ind){
		// move ingredient from toIgnore into toOrder
		const otherIngredients = toIgnore.filter(ingredient => ingredient.ind !== ind);
		const chosenIngredient = toIgnore.filter(ingredient => ingredient.ind === ind);
		const newOrder = toOrder.concat(chosenIngredient);
		// we now have local versions of the new lists. make them global 
		setToIgnore(otherIngredients);
		setToOrder(newOrder);
	}

	function returnIngredient(ind){
		// move ingredient from toOrder into toIgnore
		const otherIngredients = toOrder.filter(ingredient => ingredient.ind !== ind);
		const removedIngredient = toOrder.filter(ingredient => ingredient.ind === ind);
		const newIgnore = toIgnore.concat(removedIngredient);
		// we now have local versions of the new lists. make them global 
		setToIgnore(newIgnore);
		setToOrder(otherIngredients);
	}

	return(
		<div className="order">
			{useEffect(() =>{console.log('order page loaded')})}
			<div className = 'menuTitle flexer'>CREATE ORDER</div>
			<Orderbar recipe = {recipe} portion = {numPortions} cart ={toOrder}/>

			<div className = "ingredientsContainer flexer"> 
 				<div className = "ingredientsBox flexer">
 					<div className = "ingredientBoxLabel">Ingredients you have:</div>
 					<ManageIngredients list = {toIgnore} func = {selectIngredient} />
 				</div>
 				<div className = "ingredientsBox flexer">
 					<div className = "ingredientBoxLabel">Ingredients you need:</div>
 					<ManageIngredients list = {toOrder} func = {returnIngredient} />
 				</div>
 			</div>

		</div>
	);
}

function ManageIngredients(props){
	return (
		/*display the ingredients and provide function to move them*/
		props.list.map((ingredient) =>(
			<div className = "ingredient flexer" key = {ingredient.ind} onClick= {() => props.func(ingredient.ind)}>
				{ingredient.description}
			</div>
		))
	);
}

function ApplyPortions(props){
	return(
		// does magic to pull the numbers out of a string and replace those numbers in the original string with a multiple 
		// i.e. '0.5 cup ketchup -> 1.5 cup ketchup' in one line 
		props[0].map((item) =>(
			item = item.replace(item.match(/[+-]?\d+(\.\d+)?/g)[0], (item.match(/[+-]?\d+(\.\d+)?/g)[0] * props[1]))
		))
	);
}

export default Order;
