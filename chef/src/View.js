import {useLocation} from 'react-router-dom';
import React, {createContext, useContext, useState, useEffect} from 'react';
import {Viewbar} from './Navbar';
import {HandleNumInput} from './Create';
const FuncContext = createContext();
const ValContext = createContext();

function View(){
	const location = useLocation();
	console.log(location.state);
	console.log('bruh');
	const recipe = location.state;
	console.log(recipe);
	const [portion, setPortion] = useState(1);

	return(
		<FuncContext.Provider value = {setPortion}>
    	<ValContext.Provider value = {portion}>
		<div className="view">
			{useEffect(() =>{console.log('view page loaded')})}
			<div className = 'libraryTitle flexer'>VIEW PAGE</div>
			<Viewbar data = {recipe} val = {portion} />
			<div className = 'recipeContainer flexer'> 
				<DisplayRecipeInfo data ={[recipe, portion]}/> 
			</div>
		</div>
		</ValContext.Provider>
    	</FuncContext.Provider>
	);
}

export function DisplayRecipeInfo(props){
	const state = props.data;
	console.log(state);
	const recipe = state[0];
	return (
		<div className = "recipe">
			<div className = "recipeTitleBackground">
				<div className = "recipeTitle"> {recipe.name}</div>
			</div>
			<div className = "recipeIngredients"> Needs these ingredients: {recipe.ingredients.map((item) => " " + item )}</div>
			<div className = "recipeMeasurements"> With these amounts: {recipe.measurements.map((item) => " " + item )}</div>
			<div className = "recipeSteps"> Instructions: {recipe.instructions} </div>
			<HandleNumInput props = {props} func = {useContext(FuncContext)}/>
		</div>
	);
}

export default View;