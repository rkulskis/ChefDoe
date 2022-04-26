import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import React, {createContext, useContext, useState, useEffect} from 'react';



function Library(){
	// find way to get data from database 

	const [recipes, setRecipes] = useState([
		{name: 'orange soup', ingredients: ['orange peels', 'chicken broth', 'applesauce'], measurements: ['1/2 cup', '1/2 cup', '1/4 cup'], ratio: 1, id: 1},
		{name: 'banana bread', ingredients: ['bananas', 'white bread', 'butter'], measurements: ['5', '2 loaves', '1 stick'], ratio: 1, id: 2},
		{name: 'ice cream', ingredients: ['milk', 'cream', 'sprinkles'], measurements: ['4 cup', '2 cup', '3 cup'], ratio: 1, id: 3},
	]);

	return(
		<div className = "library">
			{useEffect(() =>{console.log('library page loaded')})}
			<h2>browse recipes here!</h2>
			<Link to="/">
				<button>back to home</button>
			</Link>
			<ListRecipes list = {recipes}/>
		</div>
	);
}


export function ListRecipes(props){
	return (
		/*for each recipe, access its data. key has to be a unique property for each item because reasons, id works well*/
		props.list.map((recipe) =>(
			<div className = "recipePreview" key ={recipe.id}>
				<h2> {recipe.name} </h2>
				<p> Needs these ingredients: {recipe.ingredients.map((item) => " " + item )}</p>
				<p> With these amounts: {recipe.measurements.map((item) => " " + item )}</p>
				<button onClick= {() => console.log('select time')}> Select Recipe </button>
			</div>
		))
	);
}



/*
	data to do list:
		find way to store recipe + user data (the database)
		find way to display recipe data (this file)
		find way to manage recipe data (manager.js)
		find way to add new recipe data (create.js)
		find way to add new user data (account.js)
		find way to transfer data to bot (new file)

		CAN DO SEARCH BAR USING .filter() MAYBE POSSIBLY IF ENOUGH TIME  SEE VID 12
	structure?
		home
			home bar: browse recipes, random recipe, manage recipes, add new recipe, account 

		browse recipes -> library
			click on recipe -> prep page w/ chosen recipe info
			library bar : manage recipes, random recipe, back to home 
		
		random recipe -> prep page w/ random recipe info
		
		manage recipes -> manager 
			click on recipe -> edit info / remove
			manager bar : browse recipes, add new recipe, back to home 
			
		add new recipe -> create  (prep page and create page the same? or different?)
			add info into prep page
			create bar : save new recipe, back to home 

		account -> account 
			account bar: update payment info, update address info, back to home 


	
*/

export default Library;