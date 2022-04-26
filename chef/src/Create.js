import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';


function Create(){
	return(
		<div className="create">
			<h2>make new recipe here!</h2>
			<Link to="/">
				<button>back to home</button>
			</Link>
		</div>
	);
}

export default Create;