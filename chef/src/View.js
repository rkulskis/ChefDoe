import {useLocation} from 'react-router-dom';
import React, {createContext, useContext, useState, useEffect} from 'react';
import {Viewbar} from './Navbar';
import {HandleNumInput} from './Create';
const FuncContext = createContext();
const ValContext = createContext();

function View(){
	const location = useLocation();
	console.log(location.state);
	const recipe = location.state;
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
	const recipe = state[0];
	return (
		<div className = "recipe">
			<div className = "recipeTitleBackground">
				<div className = "recipeTitle"> {recipe.name}</div>
			</div>

			<div className = "labelContainer flexer">
				<div className = "recipeLabel flexer"> INGREDIENTS: </div>
				<div className = "recipeLabel flexer"> MEASUREMENTS: </div>
				<div className = "recipeLabel flexer"> INGREDIENTS: </div>
				<div className = "recipeLabel flexer"> MEASUREMENTS: </div>
			</div>

			<div className = "recipeLabel flexer" style = {{bottom: '25px'}}> INSTRUCTIONS: </div>
			<div className = "recipeSteps">{recipe.instructions} </div>

			
			<div className = "infoContainer flexer">
				<div className = "recipeIngredients">{recipe.ingredients.map((item) => " " + item )}</div>
				<div className = "recipeMeasurements">{recipe.measurements.map((item) => " " + item )}</div>
				<div className = "recipeIngredients">{recipe.ingredients.map((item) => " " + item )}</div>
				<div className = "recipeMeasurements">{recipe.measurements.map((item) => " " + item )}</div>

			</div>

			<div className = "portionSelectorContainer flexer">
				<div style = {{marginRight: '5px'}}>How many portions ?</div>
				<HandleNumInput props = {props} func = {useContext(FuncContext)}/>
			</div>
		</div>
	);
}

export default View;