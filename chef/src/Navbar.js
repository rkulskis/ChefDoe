import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import React, {createContext, useContext, useState} from 'react';
const FuncContext = createContext();
const ValContext = createContext();

 function NavItem(props){
    const toggle = useContext(ValContext);
    const setToggle = useContext(FuncContext);

    function menuSwitch(){
      if(toggle[1] != props.id){
        setToggle([true, props.id]);
      }else{
        setToggle([!toggle[0], props.id]);
      }
    }

    if(props.id != undefined){
      return(
        <div>
          <div className = "mainButton flexer" onClick ={() => menuSwitch()}>
            {props.icon}
          </div>

          {toggle[0] && (toggle[1] === props.id) && props.children}
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
  return(
    <div className = "menuBox flexer">
      <div className = "menuList flexer" style = {props.style}>
        {props.children}
      </div>
    </div>
  );
}

function PopoutItem(props){
  return(
    <div className = "subButton flexer quietLink">
      {props.icon}
    </div>
  );
}


function Navbar(props){
  const [toggle, setToggle] = useState([false, "99"]);

  return(
    <FuncContext.Provider value = {setToggle}>
    <ValContext.Provider value = {toggle}>
      <div className = "navbarBox flexer" >
        <div className = "navbarList flexer" >
          {props.children}
        </div>
      </div>
    </ValContext.Provider>
    </FuncContext.Provider>
  );
}

export function Homebar(){
  return(
    <Navbar>
      <NavItem icon = "Cook" id = "0">
        <PopoutMenu>
          <Link to="/library" style= {{textDecoration: 'none', color: 'inherit'}}><PopoutItem icon = "Browse Recipes"></PopoutItem></Link>
          <Link to="/" style= {{textDecoration: 'none', color: 'inherit'}}><PopoutItem icon = "Random Recipe"></PopoutItem></Link>
        </PopoutMenu>
      </NavItem>

       <NavItem icon = "Recipes" id = "1">
        <PopoutMenu style = {{top: '50%'}}>
          <Link to="/library" style= {{textDecoration: 'none', color: 'inherit'}}><PopoutItem icon = "Manage Recipes"></PopoutItem></Link>
          <Link to="/create" style= {{textDecoration: 'none', color: 'inherit'}}><PopoutItem icon = "Add New Recipe"></PopoutItem></Link>
        </PopoutMenu>
      </NavItem>

      <Link to="/account" style= {{textDecoration: 'none', color: 'inherit'}}>
        <NavItem icon = "Account" type = "3"></NavItem>
      </Link>
    </Navbar>
  );
}
export default Navbar;