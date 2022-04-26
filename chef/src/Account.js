import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

import React, {createContext, useContext, useState} from 'react';
const FuncContext = createContext();
const ValContext = createContext();


export function ListRecipes(){
	const recipes = useContext(ValContext);
    const setRecipes = useContext(FuncContext);
	return (
		/*for each recipe, access its data. key has to be a unique property for each item because reasons, id works well*/
		recipes.map((recipe) =>(
			<div className = "recipePreview" key ={recipe.id}>
				<h2> {recipe.name} </h2>
				<p> Needs these ingredients: {recipe.ingredients.map((item) => " " + item )}</p>
				<p> With these amounts: {recipe.measurements.map((item) => " " + item )}</p>
			</div>
		))
	);
}

function Account(){
	return(
		<div className="account">
			<h2>personal info here!</h2>
			<Link to="/">
				<button>back to home</button>
			</Link>
		</div>
	);
}

export default Account;