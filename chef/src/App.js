import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from 'react';
import Home from './Home';
import Library from './Library';
import Create from './Create';
import View from './View';
import Order from './Order';
import Confirmation from './Confirmation';
import Review from './Review';
import Manager from './Manager';


/*
  The exact specifics carrying information over is complicated, but the idea is that each link passes certain state variables around.
  each page has its own navbar method, which, since it contains the links to other pages, is where state variables are passed in. 
  the idea is that each page has an expected state, be it with 1, 2, or even 3 variables. these variables must be passed by the links from other pages 
  each page gets the data to its navbar method differently, some with useState and some by just passing a local variable. 
  
  */

function App(){
  return(
    <Router>
      <div className = 'app'>
          <Routes>
            <Route path = "/" element={<Library />}/>
            <Route path = "/library" element={<Library />} />
            <Route path = "/create" element={<Create />} />
            <Route path = "/view" element={<View/>} />
            <Route path = "/order" element={<Order/>} />
            <Route path = "/review" element={<Review/>} />
            <Route path = "/confirmation" element={<Confirmation/>} />
            <Route path = "/test" element={<Manager />}/>    
            {/*I spent too much time on this to delete it*/}
            <Route path = "/secret" element={<Home />}/>    
          </Routes>
      </div>
    </Router>
  );
}

export default App;
