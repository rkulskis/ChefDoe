import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
function Library(){
	return(
		<div className="library">
			<h2>recipes here!</h2>
			<Link to="/">
				<button>back to home</button>
			</Link>
		</div>
	);
}

export default Library;