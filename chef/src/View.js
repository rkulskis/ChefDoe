import {useLocation} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import {Viewbar} from './Navbar';


function View(){
	const location = useLocation();
	console.log(location.state);
	const recipe = location.state;
	const [portion, setPortion] = useState(1);

	return(
		<div className="view">
			{useEffect(() =>{console.log('view page loaded')})}
			<div className = 'menuTitle flexer'>RECIPE VIEW</div>
			<Viewbar recipe = {recipe} portion = {portion} />
			<div className = 'recipeContainer flexer'> 
				<DisplayRecipeInfo data ={recipe} func = {setPortion}/> 
			</div>
		</div>
	);
}


function DisplayRecipeInfo(props){
	const recipe = props.data;
	const ing1 = recipe.ingredients[0];
	const mes1 = recipe.measurements[0];

	return (
		<div className = "recipe">
		{/*the top bar*/}
			<div className = "recipeTitleBackground">
				<div className = "recipeTitle"> {recipe.name}</div>
			</div>

		{/*the bottom bar*/}
			<div className = "labelContainer flexer">
				<div className = "recipeLabel flexer"> INGREDIENTS: </div>
				<div className = "recipeLabel flexer"> MEASUREMENTS: </div>
			</div>

		{/*everything else*/}
			<div className = "recipeLabel flexer" style = {{bottom: '25px'}}> INSTRUCTIONS: </div>
			<div className = "recipeSteps">{recipe.instructions} </div>

			<div className = "infoContainer flexer">
				{/*display the ingredients and measurements, but try to make them more readable*/}
				<div className = "recipeIngredients">{
					(
						recipe.ingredients.map((item) => ing1 === item ? item : " -- " + item)
					)
				}</div>
				<div className = "recipeMeasurements">{
					(
						recipe.measurements.map((item) =>   mes1 === item ? item : " -- " + item)
					)
				}</div>

			</div>
		{/*allow the user to select the number of portions*/}
			<div className = "portionSelectorContainer flexer">
				<div style = {{marginRight: '5px'}}>How many portions ?</div>
				<input type= 'number' onChange={(e) => props.func(e.target.value * 1)}/>
			</div>
		</div>
	);
}

export default View;