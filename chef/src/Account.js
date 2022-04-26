import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
function Account(){
	return(
		<div className="account">
			<h2>personal info here!</h2>
			<Link to="/">
				<button>back to home</button>
			</Link>
		</div>
	);
}

export default Account;