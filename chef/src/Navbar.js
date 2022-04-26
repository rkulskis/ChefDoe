import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import React, {createContext, useContext, useState} from 'react';
const FuncContext = createContext();
const ValContext = createContext();

function Navbar(){

  function NavItem(props){
    const toggles = useContext(ValContext);
    const setToggle = useContext(FuncContext);

    function topSwitch(){
      setToggle([!toggles[0],false]);
    }

    function bottomSwitch(){
      setToggle([false,!toggles[1]]);
    }

    if(props.type === "1"){
      return(
        <div>
          <div className = "mainButton flexer" onClick ={() => topSwitch()}>
              {props.icon}
          </div>

          {toggles[0] && props.children}

        </div>
      ); 
    }
    else if (props.type === "2"){
      return(
        <div>
          <div className = "mainButton flexer" onClick ={() => bottomSwitch()}>
              {props.icon}
          </div>

          {toggles[1] && props.children}
        </div>
      );
    }
    else{
      return(
        <div>
          <div className = "mainButton flexer">
              {props.icon}
          </div>

          {props.children}

        </div>
      );
    }
  }

function PopoutMenu(props){
  if(props.type === "1"){
    return(
      <div className = "menuBox flexer">
        <div className = "menuList flexer">
          {props.children}
        </div>
      </div>
    );
  } 

  else{
    return(
      <div className = "menuBox flexer">
        <div className = "menuList flexer flip">
          {props.children}
        </div>
      </div>
    );
  }
}

function PopoutItem(props){
    return(
          <div className = "subButton flexer quietLink">
              {props.icon}
          </div>
        
    );
}

  const [toggle, setToggle] = useState([false,false]);

  return(
    <FuncContext.Provider value = {setToggle}>
    <ValContext.Provider value = {toggle}>
    <div className = "navbarBox flexer">
      <div className = "navbarList flexer" >
        <NavItem icon = "Cook" type = "1">
            <PopoutMenu type = "1">
               <Link to="/library" style= {{textDecoration: 'none', color: 'inherit'}}><PopoutItem icon = "Browse Recipes"></PopoutItem></Link>
               <Link to="/" style= {{textDecoration: 'none', color: 'inherit'}}><PopoutItem icon = "Random Recipe"></PopoutItem></Link>
            </PopoutMenu>
          </NavItem>

          <NavItem icon = "Recipes" type = "2">
            <PopoutMenu type = "2">
              <Link to="/library" style= {{textDecoration: 'none', color: 'inherit'}}><PopoutItem icon = "Manage Recipes"></PopoutItem></Link>
              <Link to="/create" style= {{textDecoration: 'none', color: 'inherit'}}><PopoutItem icon = "Add New Recipe"></PopoutItem></Link>
            </PopoutMenu>
          </NavItem>

          <Link to="/account" style= {{textDecoration: 'none', color: 'inherit'}}><NavItem icon = "Account" type = "3"></NavItem></Link>
      </div>
    </div>
    </ValContext.Provider>
    </FuncContext.Provider>
  );
}

export default Navbar;