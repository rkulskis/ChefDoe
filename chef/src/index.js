import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const colors = ['red', 'blue', 'green', 'yellow', 'black'];

class Mover extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			color: 'red'
		};
	}

	getRandomColor(){
		const diffColors = colors.filter(color => color !== this.state.color);
		const randomColorIndex = Math.floor(Math.random() * diffColors.length);
		return diffColors[randomColorIndex];
	}

	handleClick(){
		this.setState(({color}) => ({color: this.getRandomColor()}));
	}

	render(){
		return (
		<div class = "mainButton flexer" style = {{backgroundColor: this.state.color}} 
		onClick = {() => this.handleClick()}>Cook</div>
		);
	}
}

class MainPage extends React.Component{
	render(){
		return(
			<>
	      	<div id = "mainTab" class = "flexer">
	      		<Mover />
{/*	      		<div class="mainButton flexer">
	        	Cook
	        	<div id = "cookCover" class = "flexer"></div>*/}
	     		<div class="mainButton flexer">Recipes</div>
	      		<div class="mainButton flexer">Account</div>
	    	</div>

	    	<div id = "cookTab" class = "subTab flexer">
	      		<div class="subButton cook flexer">Browse Recipes</div>
	     		<div class="subButton cook flexer">Random Recipe</div>
	    	</div>

	    	<div id = "manageTab" class = "subTab flexer">
	      		<div class="subButton manage flexer">Manage Recipes</div>
	     		<div class="subButton manage flexer">Add New Recipe</div>
	    	</div>

	    	<div id = "accTab" class = "subTab flexer">
	      		<div class="subButton acc flexer">Update Address</div>
	      		<div class="subButton acc flexer">Update Payment</div>
	    	</div>

	    	</>
    	);
	}
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MainPage />);

