import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from 'react';
import Home from './Home';
import Library from './Library';
import Create from './Create';
import View from './View';
import Order from './Order';
import Confirmation from './Confirmation';

function App(){
  return(
    <Router>
      <div className = 'app'>
          <Routes>
          {/*I spent too much time on this to delete it*/}
            <Route path = "/secret" element={<Home />}/>    
            <Route path = "/" element={<Library />}/>
            <Route path = "/library" element={<Library />} />
            <Route path = "/create" element={<Create />} />
            <Route path = "/view" element={<View/>} />
            <Route path = "/order" element={<Order/>} />
            <Route path = "/confirmation" element={<Confirmation/>} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
