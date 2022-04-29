import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import React, {createContext, useContext, useState, useEffect} from 'react';

function Manager(){
	// experiement in this closed environment!


	const outsideArray = 
		[{name: 'orange soup', ingredients: ['orange peels', 'chicken broth', 'applesauce'], measurements: ['1/2 cup', '1/2 cup', '1/4 cup'], ratio: 1, id: 0},
		{name: 'banana bread', ingredients: ['bananas', 'white bread', 'butter'], measurements: ['5', '2 loaves', '1 stick'], ratio: 1, id: 1},
		{name: 'ice cream', ingredients: ['milk', 'cream', 'sprinkles'], measurements: ['4 cup', '2 cup', '3 cup'], ratio: 1, id: 2}];


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



	// need the current size of database to ensure no id issues 


	const [newRecipe, setNewRecipe] = useState({name: '', instructions: '', ingredients: null, measurements: null, ratio: 1, id: outsideArray.length});
	const [reqValid, setReqValid] = useState({nameValid: false, instructValid: false, ingredValid: false, measureValid: false})
	const [recipeValid, setRecipeValid] = useState(false);

	{useEffect(() => {console.log(newRecipe, reqValid, recipeValid)}, [newRecipe])}


	function handleSubmit(event){
		event.preventDefault();
	}

	function handleInput(event){
		console.log(event.target.name);
		const field = event.target.name;
		const value = event.target.value;
		validateInput(field, value);
	}

	function validateInput(field, value){
		const currValid = reqValid;
		console.log(newRecipe);
		console.log('bruh', value);

		switch(field){
			case 'name':
			// this breaks because im setting the state to be an array instead of an object here, like a dingus 
				setNewRecipe([value, newRecipe.instructions, newRecipe.ingredients, newRecipe.measurements, 1, newRecipe.id]);
				setReqValid([value.length > 0 ? true : false, currValid.instructValid, currValid.ingredValid, currValid.measureValid]);
				break;

			case 'instructions':
				setNewRecipe([newRecipe.name, value, newRecipe.ingredients, newRecipe.measurements, 1, newRecipe.id]);
				setReqValid([currValid.nameValid, value.length > 0 ? true : false, currValid.ingredValid, currValid.measureValid]);
				break;


			case 'name':
				setNewRecipe([value, newRecipe.instructions, newRecipe.ingredients, newRecipe.measurements, 1, newRecipe.id]);
				setReqValid([value.length > 0 ? true : false, currValid.instructValid, currValid.ingredValid, currValid.measureValid]);
				break;
			case 'name':
				setNewRecipe([value, newRecipe.instructions, newRecipe.ingredients, newRecipe.measurements, 1, newRecipe.id]);
				setReqValid([value.length > 0 ? true : false, currValid.instructValid, currValid.ingredValid, currValid.measureValid]);
				break;
		}

		setRecipeValid(reqValid === [true, true, true, true] ? true : false);
	}


	return(
		<div className = "manager">
			{useEffect(() =>{console.log('manager page loaded')})}
			<h2>manage recipes here!</h2>
			<Link to="/">
				<button>back to home</button>
			</Link>
			<div className = "test"> 
				<form onSubmit = {handleSubmit}>
					<div className = "testy">
						<label>input name:</label>
						<input
							type = "text"
							required
							name = 'name'
							onChange = {(e) => handleInput(e)}
						/>
						</div>
					
					<div className = "testy">
						<label>input instructions:</label>
						<textarea
							required
							name = 'instructions'
							onChange = {(e) => handleInput(e)}
						></textarea>
					</div>
					<div className = "testy">
						<label>input ingredients:</label>
						<textarea
							required
						></textarea>
					</div>
					<div className = "testy">
						<label>input measurements:</label>
						<textarea
							required
						></textarea>
					</div>
					<button disabled = {!recipeValid}>bruh button</button>
				</form>
{/*				<div>
				<	ManageRecipes list = {openRecipes} func = {recipeRemove} />
				</div>
				<div>
					<ManageRecipes list = {closedRecipes} func = {recipeReturn} />
				</div>
				<div>
					<ManageRecipes list = {outsideArray} />
				</div>*/}

			</div>
		</div>
	);
}

function ManageRecipes(props){
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