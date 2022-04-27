import {Link} from 'react-router-dom';
import React, {createContext, useContext, useState} from 'react';
import {pullRandom} from './Library';
const FuncContext = createContext();
const ValContext = createContext();

function Navbar(props){
  // encapsulates all menu items. can have any amount of children, each of which are 'mainButtons'
  const [toggle, setToggle] = useState([false, "99"]);

  return(
    // allows for sub menu toggling logic 
    <FuncContext.Provider value = {setToggle}>
    <ValContext.Provider value = {toggle}>
      {/*boxClass provides styling for the bar, listClass provides styling for the items inside it*/}
      <div className = {props.boxClass} >
        <div className = {props.listClass} >
          {props.children}
        </div>
      </div>
    </ValContext.Provider>
    </FuncContext.Provider>
  );
}

function NavItem(props){
    // outermost menu item. can have any amount of children, usually sub menus. these are 'mainButtons'
    // note that props.id is only initialized if this NavItem has children 
    const toggle = useContext(ValContext);
    const setToggle = useContext(FuncContext);


    // allows only 1 sub menu to be displayed at the same time 
    function menuSwitch(){
      if(toggle[1] !== props.id){
        setToggle([true, props.id]);
      }else{
        setToggle([!toggle[0], props.id]);
      }
    }

    // sub menu logic (has children)
    if(props.id !== undefined){
      return(
        <div>
          <div className = {props.itemClass} onClick ={() => menuSwitch()}>
            {props.icon}
          </div>

          {toggle[0] && (toggle[1] === props.id) && props.children}
        </div>
      ); 
    }
    else{
       // link logic (has no children)
      return(
        <div>
          <div className = {props.itemClass}>
            {props.icon}
          </div>
        </div>
      );
    }
}

function PopoutMenu(props){
  // encapsulates sub menu items. can have any amount of children, each of which are 'subButtons'
  return(
    <div className = {props.boxClass}>
      <div className = {props.listClass} style = {props.style}>
        {props.children}
      </div>
    </div>
  );
}

function PopoutItem(props){
  // innermost menu item. has no children, these are 'subButtons'
  return(
    <div className = {props.itemClass}>
      {props.icon}
    </div>
  );
}


export function Homebar(){
  // all CSS styling is declared here (its ugly but worth it)
  return(
    // the main menu
    <Navbar boxClass = "homeBarBox flexer" listClass = "homeBarList flexer">
    {/* Cook button */}
      <NavItem icon = "Cook" id = "0" itemClass = "homeMainButton flexer">
        <PopoutMenu boxClass = "homeMenuBox flexer" listClass = "homeMenuList flexer">

          <Link to="/library" style= {{textDecoration: 'none', color: 'inherit'}}>
            <PopoutItem icon = "Browse Recipes" itemClass = "homeSubButton flexer quietLink"/>
          </Link>

          <Link to="/" style= {{textDecoration: 'none', color: 'inherit'}}>
            <PopoutItem icon = "Random Recipe" itemClass = "homeSubButton flexer quietLink"/>
          </Link>

        </PopoutMenu>
      </NavItem>
    {/* Recipes button */}
      <NavItem icon = "Recipes" id = "1" itemClass = "homeMainButton flexer">
        <PopoutMenu boxClass = "homeMenuBox flexer" listClass = "homeMenuList flexer" itemClass = "homeSubButton flexer quietLink" style = {{top: '50%'}}>

          <Link to="/manager" style= {{textDecoration: 'none', color: 'inherit'}}>
            <PopoutItem icon = "Manage Recipes" itemClass = "homeSubButton flexer quietLink"/>
          </Link>

          <Link to="/create" style= {{textDecoration: 'none', color: 'inherit'}}>
            <PopoutItem icon = "Add New Recipe" itemClass = "homeSubButton flexer quietLink"/>
          </Link>

        </PopoutMenu>
      </NavItem>
      {/* Account button */}
      <Link to="/account" style= {{textDecoration: 'none', color: 'inherit'}}>
        <NavItem icon = "Account" id = "2" itemClass = "homeMainButton flexer"/>
      </Link>

    </Navbar>
  );
}

export function Libbar(props){
  return(
    <Navbar boxClass = "libBarBox flexer" listClass = "libBarList flexer">
      {/* create new recipe button */}
      <Link to="/create" style= {{textDecoration: 'none', color: 'inherit'}}>
        <NavItem icon = "Add a Recipe" itemClass = "libMainButton flexer quietLink" />
      </Link>
      {/* select random recipe button */}
      <Link to="/view" style= {{textDecoration: 'none', color: 'inherit'}} state ={pullRandom(props.list)} >
        <NavItem icon = "Random Recipe" itemClass = "libMainButton flexer quietLink" />
      </Link>
    </Navbar>
  );
}

export function Createbar(){
  // create and save
  return(
    <Navbar boxClass = "libBarBox flexer" listClass = "libBarList flexer">
      {/* cancel button */}
      <Link to="/library" style= {{textDecoration: 'none', color: 'inherit'}}>
        <NavItem icon = "Cancel" itemClass = "libMainButton flexer quietLink" />
      </Link>

      {/* save and continue to view button*/}
      <Link to="/view" style= {{textDecoration: 'none', color: 'inherit'}} state={'PLACE_NEW_DATA_HERE'} >
        <NavItem icon = "Save and View" itemClass = "libMainButton flexer quietLink" />
      </Link>
    </Navbar>
  );
}

export function Viewbar(props){
    // see information and select portion 
    return(
      <Navbar boxClass = "libBarBox flexer" listClass = "libBarList flexer">
      {/* back button */}
        <Link to="/library" style= {{textDecoration: 'none', color: 'inherit'}} >
          <NavItem icon = "Back to Library" itemClass = "libMainButton flexer quietLink" />
        </Link>

        {/* continue to order page button*/}
        <Link to="/order" style= {{textDecoration: 'none', color: 'inherit'}} state={[props.data, props.val]} >
          <NavItem icon = "Continue" itemClass = "libMainButton flexer quietLink" />
        </Link>
      </Navbar>
    ); 
}

export function Orderbar(props){
    // choose ingredients needed, place order 
    return(
      <Navbar boxClass = "libBarBox flexer" listClass = "libBarList flexer">
      {/* back button, needs [0] to prevent data size overflow*/}
        <Link to="/view" style= {{textDecoration: 'none', color: 'inherit'}} state = {props.data[0]}>
          <NavItem icon = "Back to Recipe" itemClass = "libMainButton flexer quietLink" />
        </Link>

        {/* place order button*/}
        <Link to="/confirmation" style= {{textDecoration: 'none', color: 'inherit'}} state={props.data} >
          <NavItem icon = "Place Order" itemClass = "libMainButton flexer quietLink" />
        </Link>
      </Navbar>
    ); 
}

export function Confirmbar(){
    // display ingredients ordered
    return(
      <Navbar boxClass = "libBarBox flexer" listClass = "libBarList flexer">
      {/* back button */}
        <Link to="/library" style= {{textDecoration: 'none', color: 'inherit'}}>
          <NavItem icon = "Back to Library" itemClass = "libMainButton flexer quietLink" />
        </Link>
      </Navbar>
    ); 
}