import {useLocation} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import {Createbar} from './Navbar';


function Create(){
	const location = useLocation();
	console.log(location.state);

	const newId = 0;
	// get id from database 

	const [newRecipe, setNewRecipe] = useState({name: '', instructions: '', ingredients: '', measurements: '', ratio: 1, id: newId});
	const [nameValid, setNameValid] = useState(false);
	const [instructValid, setInstructValid] = useState(false);
	const [infoValid, setInfoValid] = useState(false);

	useEffect(() => {console.log(newRecipe, nameValid, instructValid, infoValid)}, [newRecipe, nameValid, instructValid, infoValid])


	function handleSubmit(event){
		event.preventDefault();
		var temp = newRecipe.ingredients;	
		const newIngr = temp.split('|').map((val) => val.replace(/^\s+|\s+$/g,''));
		temp = newRecipe.measurements;
		const newMeas = temp.split('|').map((val) => val.replace(/^\s+|\s+$/g,''));

		setNewRecipe({name: newRecipe.name, instructions: newRecipe.instructions, ingredients: newIngr, measurements: newMeas, ratio: 1, id: newRecipe.id});

		// send newRecipe to database here 

	}

	function handleInput(field, value){
		switch(field){
			case 'name':
				setNewRecipe({name: value, instructions: newRecipe.instructions, ingredients: newRecipe.ingredients, measurements: newRecipe.measurements, ratio: 1, id: newRecipe.id});
				setNameValid(value.length > 0 ? true : false);
				break;

			case 'instructions':
				setNewRecipe({name: newRecipe.name, instructions: value, ingredients: newRecipe.ingredients, measurements: newRecipe.measurements, ratio: 1, id: newRecipe.id});
				setInstructValid(value.length > 0 ? true : false);
				break;

			case 'ingredients':
				setNewRecipe({name: newRecipe.name, instructions: newRecipe.instructions, ingredients: value, measurements: newRecipe.measurements, ratio: 1, id: newRecipe.id});
				setInfoValid(VerifyInformation(field, value));
				break;

			case 'measurements':
				setNewRecipe({name: newRecipe.name, instructions: newRecipe.instructions, ingredients: newRecipe.ingredients, measurements: value, ratio: 1, id: newRecipe.id});
				setInfoValid(VerifyInformation(field, value));
				break;

			default:
				break;
		}
	}

	function VerifyInformation(field, value){
		// requirements:
		// same number and same order of ingredients/measurements
		// ingredient string must be inside of measurement string (but not be the same string)
		// measurement string must contain a number and that number must come first in the string (can verify using split(' ') and comparing result with indexOf)
		// to pass these requirements, ask user to split different ingredients/measurements using | character 

		var ingreds = field === 'ingredients' ? value : newRecipe.ingredients;
		var measures = field === 'measurements' ? value : newRecipe.measurements;

		console.log('info ', ingreds, measures);

		// split into individual ingredients 
		ingreds = ingreds.split('|');
		measures = measures.split('|');
		
		// clean up extra white spaces
		ingreds = ingreds.map((val) => val.replace(/^\s+|\s+$/g,''));
		measures = measures.map((val) => val = val.replace(/^\s+|\s+$/g,''));

		console.log('info2 ', ingreds, measures);

		// easy way to prevent weird edge cases
		if(ingreds.toString() === measures.toString()){
			console.log('bad input, cannot be the same string');
			return false;
		}

		// not same number of ingredients or measurements, stop here
		if(ingreds.length !== measures.length){
			console.log('bad input, must have same number of ingredients and measurements')
			return false;
		}

		// store measurement numbers
		const nums = measures.map((val) => val.match(/[+-]?\d+(\.\d+)?/g));

		// not every measurement has a number, stop here
		if(nums.length !== measures.length){
			console.log('bad input, some measurement is missing a number');
			return false;
		}

		// time to really check stuff

		// every valid pair removes 1, every invalid pair adds 1. get to 0 for success 
		var checks = ingreds.length;

		// loop through every ingredient
		// yes, this could be 1 check, but this is better for debugging 
		ingreds.map((val, index) =>
		{	
			console.log(val, measures[index]);
			// if ingredient or measurment is empty string, stop here
			if(val !== '' && measures[index] !== ''){
				console.log('valid strings');
				// check that ingredient order is the same as measurement order (aka whole ingredient string inside corresponding measurement string)
				if(measures[index].indexOf(val) !== -1){
					console.log('valid order');
					// check that each measurement starts with a number 
					if(measures[index].indexOf(nums[index]) === 0){
						console.log('valid ingredient/measurement pair!')
						checks--;
					}else{
						console.log('measurement does not start with a number');
						checks++;
					}
				}else{
					console.log('ingredient not in corresponding measurement');
					checks++;
				}
			}else{
				console.log('empty string spotted')
				checks++;
			}
		});
		console.log(checks);

		console.log('what');
		if(checks === 0){
			return true;
		}else{
			return false;
		}
	}

	return(
		<div className="create">
			{useEffect(() =>{console.log('prepare page loaded')})}
			<div className = 'menuTitle flexer'>SUBMIT NEW RECIPE</div>
			<Createbar />
					<div className = "createContainer flexer">
						<form onSubmit = {handleSubmit} className = "createList flexer">

							<button disabled = {!(nameValid && instructValid && infoValid)} className = "createSubmitButton flexer">Submit Recipe</button>
							
							<div id = 'nameInput' className = "createBox flexer">
								<label>Input recipe name:</label>
								<input
									id = "nameInputBar"
									type = "text"
									required
									name = 'name'
									onChange = {(e) => handleInput(e.target.name, e.target.value)}
								/>
							</div>
							
							<div id = 'instrInput'className = "createBox flexer">
								<label>Input cooking instructions:</label>
								<textarea
									rows="10" cols="50"
									required
									name = 'instructions'
									onChange = {(e) => handleInput(e.target.name, e.target.value)}
								>
								</textarea>
							</div>

							<div id = 'ingrInput' className = "createBox flexer">
								<label>Input ingredients:</label>
								<textarea
									defaultValue = 
									"Please separate inputs with a | character and include ingredients in their corresponding measurement. Measurements must begin with a number; whole or decimal are fine, but fractions are not.
									Note: the button will show when a recipe is valid.
									See valid input examples below:"
									rows= "10" cols="50"
									required
									name = 'ingredients'
									onChange = {(e) => handleInput(e.target.name, e.target.value)}
								>
								</textarea>
							</div>

							<div id = 'measInput'className = "createBox flexer">
								<label>Input measurements:</label>
								<textarea 
									defaultValue = 
									" Valid input:
									kosher salt | pepper                (Ingredients)
									2 tsp kosher salt | 0.25 oz pepper  (Measurements)
									~
									Invalid input:
									kosher salt | black pepper 	
									1/4 tsp salt | a couple ounces of black pepper 
									"
									rows= "10" cols="50"
									required
									name = 'measurements'
									onChange = {(e) => handleInput(e.target.name, e.target.value)}
								>
								</textarea>
							</div>

					</form>
				</div>
		</div>
	);
}



export default Create;