import React, {useState, useEffect, useRef, createContext, useContext} from 'react';
import Home from './Home';
import Library from './Library';
import Prepare from './Prepare';
import Manager from './Manager';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';



function App(){
  return(
    <Router>
      <div className = 'app'>
      {/*only runs on reload */}
        {useEffect(() =>{console.log('link start')}, [])}
          <Routes>
            <Route path = '/' element={<Home />}/>
            <Route path = "/library" element={<Library />} />
            <Route path = "/create" element={<Prepare />} />
            <Route path = "/manager" element={<Manager />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
