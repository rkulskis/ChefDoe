import {BrowserRouter as Router, Route, Routes, Link, useLocation} from 'react-router-dom';
import React, {createContext, useContext, useState, useEffect} from 'react';
import {Orderbar} from './Navbar';

function Order(){
	const location = useLocation();
	console.log(location.state);
	const recipe = location.state[0];
	const numPortions = location.state[1];

	// makes list of objects to represent the ingredients, instead of just strings. needed for manage logic 
	const ingredientList = recipe.ingredients.map((val, index) => ({name: val, ind: index}));

	// by making 2 hooks and having the below methods, we can ping-pong ingredients between the lists
	// bonus points because it's like a little minigame 
	const [toIgnore, setToIgnore] = useState(ingredientList);
	const [toOrder, setToOrder] = useState([]);

	// debug printing
	{useEffect(() =>{console.log(ingredientList)}, [toOrder, toIgnore])}
	{useEffect(() =>{console.log(toIgnore)}, [toOrder, toIgnore])}
	{useEffect(() =>{console.log(toOrder)}, [toOrder, toIgnore])}

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
			<h2>order recipe here!</h2>
			<Orderbar data = {recipe}/>

			<div className = "test flexer"> 
 				<div>
 					<ManageIngredients list = {toIgnore} func = {selectIngredient} />
 				</div>
 				<div>
 					<ManageIngredients list = {toOrder} func = {returnIngredient} />
 				</div>
 				<div>
 					<ManageIngredients list = {ingredientList} />
 				</div>
 			</div>

		</div>
	);
}

function ManageIngredients(props){
	return (
		/**/
		props.list.map((ingredient) =>(
			<div className = "recipePreview testy" key ={ingredient.ind}>
				<h2> {ingredient.name} </h2>
				<button onClick= {() => props.func(ingredient.ind)}> Move </button>
			</div>
		))
	);
}

export default Order;
