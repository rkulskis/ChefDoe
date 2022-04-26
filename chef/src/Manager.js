import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import React, {createContext, useContext, useState, useEffect} from 'react';

function Manager(){
	// get data from database
	const [recipes, setRecipes] = useState([
		{name: 'orange soup', ingredients: ['orange peels', 'chicken broth', 'applesauce'], measurements: ['1/2 cup', '1/2 cup', '1/4 cup'], ratio: 1, id: 1},
		{name: 'banana bread', ingredients: ['bananas', 'white bread', 'butter'], measurements: ['5', '2 loaves', '1 stick'], ratio: 1, id: 2},
		{name: 'ice cream', ingredients: ['milk', 'cream', 'sprinkles'], measurements: ['4 cup', '2 cup', '3 cup'], ratio: 1, id: 3},
	]);

	function recipeRemove(id){
		// take out the recipe we dont want anymore (but in a deep copy)
		const otherRecipes = recipes.filter(recipe => recipe.id !== id);
		// update real list of recipes
		setRecipes(otherRecipes);
	}
	// only runs when recipes is changed
	{useEffect(() =>{console.log('recipes updated')}, [recipes])}

	return(
		<div className = "manager">
			{useEffect(() =>{console.log('manager page loaded')})}
			<h2>manage recipes here!</h2>
			<Link to="/">
				<button>back to home</button>
			</Link>
			<ManageRecipes list = {recipes} recipeRemove = {recipeRemove} />
		</div>
	);
}

export function ManageRecipes(props){
	return (
		/*for each recipe, access its data. key has to be a unique property for each item because reasons, id works well*/
		props.list.map((recipe) =>(
			<div className = "recipePreview" key ={recipe.id}>
				<h2> {recipe.name} </h2>
				<p> Needs these ingredients: {recipe.ingredients.map((item) => " " + item )}</p>
				<p> With these amounts: {recipe.measurements.map((item) => " " + item )}</p>
				<button onClick= {() => console.log('edit time')}> Edit Recipe </button>
				<button onClick= {() => props.recipeRemove(recipe.id)}> Remove Recipe </button>
			</div>
		))
	);
}


export default Manager;