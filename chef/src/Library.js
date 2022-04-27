import {BrowserRouter as Router, Route, Routes, Link, useLocation} from 'react-router-dom';
import React, {createContext, useContext, useState, useEffect} from 'react';
import {Libbar} from './Navbar';



function Library(){
	// find way to get data from database 
	const location = useLocation();
	console.log(location.state);

	const [recipes, setRecipes] = useState([
		{name: 'adsasfasofnsadsdasd adsoisadasd sd', ingredients: ['orange peels', 'chicken broth', 'applesauce'], measurements: ['1/2 cup', '1/2 cup', '1/4 cup'], id: 1},
		{name: 'banana bread', ingredients: ['bananas', 'white bread', 'butter'], measurements: ['5', '2 loaves', '1 stick'], id: 2},
		{name: 'ice cream', ingredients: ['milk', 'cream', 'sprinkles'], measurements: ['4 cup', '2 cup', '3 cup'],  id: 3},
		{name: 'orange soup', ingredients: ['orange peels', 'chicken broth', 'applesauce'], measurements: ['1/2 cup', '1/2 cup', '1/4 cup'], id: 4},
		{name: 'banana bread', ingredients: ['bananas', 'white bread', 'butter'], measurements: ['5', '2 loaves', '1 stick'], id: 5},
		{name: 'ice cream', ingredients: ['milk', 'cream', 'sprinkles'], measurements: ['4 cup', '2 cup', '3 cup'],  id: 6},
		{name: 'orange soup', ingredients: ['orange peels', 'chicken broth', 'applesauce'], measurements: ['1/2 cup', '1/2 cup', '1/4 cup'], id: 7},
		{name: 'banana bread', ingredients: ['bananas', 'white bread', 'butter'], measurements: ['5', '2 loaves', '1 stick'], id: 8},
		{name: 'ice cream', ingredients: ['milk', 'cream', 'sprinkles'], measurements: ['4 cup', '2 cup', '3 cup'],  id: 9},
		{name: 'orange soup', ingredients: ['orange peels', 'chicken broth', 'applesauce'], measurements: ['1/2 cup', '1/2 cup', '1/4 cup'], id: 10},
		{name: 'banana bread', ingredients: ['bananas', 'white bread', 'butter'], measurements: ['5', '2 loaves', '1 stick'], id: 11},
		{name: 'ice cream', ingredients: ['milk', 'cream', 'sprinkles'], measurements: ['4 cup', '2 cup', '3 cup'],  id: 12},
		{name: 'orange soup', ingredients: ['orange peels', 'chicken broth', 'applesauce'], measurements: ['1/2 cup', '1/2 cup', '1/4 cup'], id: 14},
		{name: 'banana bread', ingredients: ['bananas', 'white bread', 'butter'], measurements: ['5', '2 loaves', '1 stick'], id: 15},
		{name: 'ice cream', ingredients: ['milk', 'cream', 'sprinkles'], measurements: ['4 cup', '2 cup', '3 cup'],  id: 16},
		{name: 'orange soup', ingredients: ['orange peels', 'chicken broth', 'applesauce'], measurements: ['1/2 cup', '1/2 cup', '1/4 cup'], id: 13},
		{name: 'banana bread', ingredients: ['bananas', 'white bread', 'butter'], measurements: ['5', '2 loaves', '1 stick'], id: 17},
		{name: 'ice cream', ingredients: ['milk', 'cream', 'sprinkles'], measurements: ['4 cup', '2 cup', '3 cup'],  id: 19},
		{name: 'orange soup', ingredients: ['orange peels', 'chicken broth', 'applesauce'], measurements: ['1/2 cup', '1/2 cup', '1/4 cup'], id: 20},
		{name: 'banana bread', ingredients: ['bananas', 'white bread', 'butter'], measurements: ['5', '2 loaves', '1 stick'], id: 18},
		{name: 'ice cream', ingredients: ['milk', 'cream', 'sprinkles'], measurements: ['4 cup', '2 cup', '3 cup'],  id: 21},
		{name: 'orange soup', ingredients: ['orange peels', 'chicken broth', 'applesauce'], measurements: ['1/2 cup', '1/2 cup', '1/4 cup'], id: 22},
		{name: 'banana bread', ingredients: ['bananas', 'white bread', 'butter'], measurements: ['5', '2 loaves', '1 stick'], id: 23},
		{name: 'ice cream', ingredients: ['milk', 'cream', 'sprinkles'], measurements: ['4 cup', '2 cup', '3 cup'],  id: 24},
		{name: 'ice cream', ingredients: ['milk', 'cream', 'sprinkles'], measurements: ['4 cup', '2 cup', '3 cup'],  id: 25},
		{name: 'orange soup', ingredients: ['orange peels', 'chicken broth', 'applesauce'], measurements: ['1/2 cup', '1/2 cup', '1/4 cup'], id: 26},
		{name: 'banana bread', ingredients: ['bananas', 'white bread', 'butter'], measurements: ['5', '2 loaves', '1 stick'], id: 27},
		{name: 'ice cream', ingredients: ['milk', 'cream', 'sprinkles'], measurements: ['4 cup', '2 cup', '3 cup'],  id: 28},
		{name: 'orange soup', ingredients: ['orange peels', 'chicken broth', 'applesauce'], measurements: ['1/2 cup', '1/2 cup', '1/4 cup'], id:  29},
		{name: 'banana bread', ingredients: ['bananas', 'white bread', 'butter'], measurements: ['5', '2 loaves', '1 stick'], id: 30},
		{name: 'ice cream', ingredients: ['milk', 'cream', 'sprinkles'], measurements: ['4 cup', '2 cup', '3 cup'],  id: 31},
		{name: 'orange soup', ingredients: ['orange peels', 'chicken broth', 'applesauce'], measurements: ['1/2 cup', '1/2 cup', '1/4 cup'], id: 32},
		{name: 'banana bread', ingredients: ['bananas', 'white bread', 'butter'], measurements: ['5', '2 loaves', '1 stick'], id: 33},
		{name: 'ice cream', ingredients: ['milk', 'cream', 'sprinkles'], measurements: ['4 cup', '2 cup', '3 cup'],  id: 34},
		{name: 'orange soup', ingredients: ['orange peels', 'chicken broth', 'applesauce'], measurements: ['1/2 cup', '1/2 cup', '1/4 cup'], id: 35},
		{name: 'banana bread', ingredients: ['bananas', 'white bread', 'butter'], measurements: ['5', '2 loaves', '1 stick'], id: 36},
		{name: 'ice cream', ingredients: ['milk', 'cream', 'sprinkles'], measurements: ['4 cup', '2 cup', '3 cup'],  id: 37},
		{name: '', instructions: '', ingredients: [], measurements: [], id: 0},
	]);

	return(
		<div className = "library">
			{useEffect(() =>{console.log('library page loaded')})}
			<div className = 'libraryTitle flexer'>ChefDoe</div> 
			<Libbar list = {recipes} />
			<div className = 'recipePreviewsContainer flexer'> 
				<DisplayRecipePreviews list = {recipes}/>
			</div>
		</div>
	);
}

export function pullRandom(props){
	const recipes = props;
	const id = Math.floor((Math.random() * (recipes.length - 1)));
	const randomRecipe = (recipes.filter(recipe => recipe.id === id))[0];
	console.log(randomRecipe.name, randomRecipe.id);
	return randomRecipe;
}

export function DisplayRecipePreviews(props){
	return (
		/*for each recipe, access its data. key has to be a unique property for each item because reasons, id works well*/
		props.list.map((recipe) =>(
			<div className = "recipePreview flexer" key ={recipe.id}>
				<div className = "recipePreviewTitleBackground">
					<div className = "recipePreviewTitle"> {recipe.name}</div>
				</div>

				<Link to="/library" style= {{textDecoration: 'none', color: 'inherit'}}>
					<div className = "libSubButton flexer quietLink" onClick= {() => pullRandom(props.list)}> Select Recipe </div>
				</Link>
			</div>
		))
	);
}


export function ListRecipes(props){
	return (
		/*for each recipe, access its data. key has to be a unique property for each item because reasons, id works well*/
		props.list.map((recipe) =>(
			<div className = "recipePreviewBox" key ={recipe.id}>
				<div className = "recipeTitle"> {recipe.name} </div>
				<div> Needs these ingredients: {recipe.ingredients.map((item) => " " + item )}</div>
				<div> With these amounts: {recipe.measurements.map((item) => " " + item )}</div>
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