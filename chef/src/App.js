import React, {useState, useEffect, useRef, createContext, useContext} from 'react';
import Home from './Home';
import Account from './Account';
import Library from './Library';
import Create from './Create';
import Manager from './Manager';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';



function App(){
  return(
    <Router>
      <div className = 'app'>
      {/*only runs on reload */}
        {useEffect(() =>{console.log('link start')}, [])}
          <Routes>
            <Route path = '/' element={<Home />} />
            <Route path = "/account" element={<Account />} />
            <Route path = "/library" element={<Library />} />
            <Route path = "/create" element={<Create />} />
            <Route path = "/manager" element={<Manager />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
