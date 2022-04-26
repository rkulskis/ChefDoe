import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import React, {createContext, useContext, useState} from 'react';
const FuncContext = createContext();
const ValContext = createContext();

function Library(){
	// display 
	return(
		<ReadLibrary>
			<h2>recipes here!</h2>
			<Link to="/">
				<button>back to home</button>
			</Link>
			<ListRecipes/>
		</ReadLibrary>
	);
}


function ReadLibrary(props){
	// read data into here somehow 
	const [recipes, setRecipes] = useState([
		{name: 'orange soup', ingredients: ['orange peels', 'chicken broth', 'applesauce'], measurements: ['1/2 cup', '1/2 cup', '1/4 cup'], ratio: 1, id: 1},
		{name: 'banana bread', ingredients: ['bananas', 'white bread', 'butter'], measurements: ['5', '2 loaves', '1 stick'], ratio: 1, id: 2},
		{name: 'ice cream', ingredients: ['milk', 'cream', 'sprinkles'], measurements: ['4 cup', '2 cup', '3 cup'], ratio: 1, id: 3},
	
	]);

	return(
		// give data to display
		<FuncContext.Provider value = {setRecipes}>
    	<ValContext.Provider value = {recipes}>
			<div className="library">
				{props.children}
			</div>
		</ValContext.Provider>
    	</FuncContext.Provider>
	); 


}

function ListRecipes(){
	const recipes = useContext(ValContext);
    const setRecipes = useContext(FuncContext);
    // can do this with props instead of context, which works for calling imported functions too. 
    // i couldnt get context to work with an imported function, so if i end up placing this elsewhere (video 11, ~5 mins)
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



/*
	data to do list:
		find way to store recipe + user data (the database)
		find way to display/manage recipe data (display in this file, maybe manage in new file)
		find way to add new recipe data (create.js)
		find way to add new user data (account.js)
		find way to transfer data to bot (new file)

	structure?
		home
			home bar: browse recipes, random recipe, manage recipes, add new recipe, account 

		browse recipes -> library
			click on recipe -> recipe prep page 
			library bar : manage recipes, random recipe, back to home 
		
		random recipe -> random recipe prep page 
		
		manage recipes -> manager 
			click on recipe -> edit info / remove
			manager bar : browse recipes, add new recipe, back to home 
			
		add new recipe -> create 
			add info
			create bar : save new recipe, back to home 

		account -> account 
			account bar: update payment info, update address info, back to home 


	
*/

export default Library;