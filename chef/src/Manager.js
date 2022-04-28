import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import React, {createContext, useContext, useState, useEffect} from 'react';

function Manager(){
	// get data from database


	const outsideArray = 
		[{name: 'orange soup', ingredients: ['orange peels', 'chicken broth', 'applesauce'], measurements: ['1/2 cup', '1/2 cup', '1/4 cup'], ratio: 1, id: 1},
		{name: 'banana bread', ingredients: ['bananas', 'white bread', 'butter'], measurements: ['5', '2 loaves', '1 stick'], ratio: 1, id: 2},
		{name: 'ice cream', ingredients: ['milk', 'cream', 'sprinkles'], measurements: ['4 cup', '2 cup', '3 cup'], ratio: 1, id: 3}];


	const [openRecipes, setOpenRecipes] = useState(outsideArray);
	const [closedRecipes, setClosedRecipes] = useState([]);

	function recipeRemove(id){
		// take recipe from open list, place into closed 
		const otherRecipes = openRecipes.filter(recipe => recipe.id !== id);
		const removedRecipe = openRecipes.filter(recipe => recipe.id === id);
		const newClosed = closedRecipes.concat(removedRecipe);
		setOpenRecipes(otherRecipes);
		setClosedRecipes(newClosed);
	}

	function recipeReturn(id){
		// take recipe from closed list, place into open
		const otherRecipes = closedRecipes.filter(recipe => recipe.id !== id);
		const returnedRecipe = closedRecipes.filter(recipe => recipe.id === id);
		const newOpen = openRecipes.concat(returnedRecipe);
		setOpenRecipes(newOpen);
		setClosedRecipes(otherRecipes);
	}

	// only runs when recipes is changed
	{useEffect(() =>{console.log(outsideArray)}, [openRecipes, closedRecipes])}
	{useEffect(() =>{console.log(openRecipes)}, [openRecipes, closedRecipes])}
	{useEffect(() =>{console.log(closedRecipes)}, [openRecipes, closedRecipes])}

	return(
		<div className = "manager">
			{useEffect(() =>{console.log('manager page loaded')})}
			<h2>manage recipes here!</h2>
			<Link to="/">
				<button>back to home</button>
			</Link>
			<div className = "test flexer"> 
				<div>
				<	ManageRecipes list = {openRecipes} func = {recipeRemove} />
				</div>
				<div>
					<ManageRecipes list = {closedRecipes} func = {recipeReturn} />
				</div>
				<div>
					<ManageRecipes list = {outsideArray} />
				</div>
			</div>
		</div>
	);
}

export function ManageRecipes(props){
	return (
		/*for each recipe, access its data. key has to be a unique property for each item because reasons, id works well*/
		props.list.map((recipe) =>(
			<div className = "recipePreview testy" key ={recipe.id}>
				<h2> {recipe.name} </h2>
				<p> Needs these ingredients: {recipe.ingredients.map((item) => " " + item )}</p>
				<p> With these amounts: {recipe.measurements.map((item) => " " + item )}</p>
				<button onClick= {() => console.log('edit time')}> Adjust Recipe </button>
				<button onClick= {() => props.func(recipe.id)}> Move Recipe </button>
			</div>
		))
	);
}


export default Manager;