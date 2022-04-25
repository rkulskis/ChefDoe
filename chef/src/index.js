import React from 'react';
import ReactDOM from 'react-dom/client';
import styling from './index.css';



class Mover extends React.Component{
	logClick(){
		
	}
	render(){
		return <div class = "mainButton flexer" onClick = {() => console.log('click')}>Cook</div>
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

