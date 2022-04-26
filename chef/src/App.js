import './index.css';
import React, {useState, useEffect, useRef, createContext, useContext} from 'react';

const FuncContext = createContext();
const ValContext = createContext();


  // <div id = "mainTab" class = "flexer">
  //     <div class="mainButton flexer">
  //       Cook
  //       <div id = "cookCover" class = "flexer"></div>
  //     </div>
  //     <div class="mainButton flexer">Recipes</div>
  //     <div class="mainButton flexer">Account</div>
  //   </div>

  //   <div id = "cookTab", class = "subTab flexer">
  //     <div class="subButton cook flexer">Browse Recipes</div>
  //     <div class="subButton cook flexer">Random Recipe</div>
  //   </div>

  //   <div id = "manageTab", class = "subTab flexer">
  //     <div class="subButton manage flexer">Manage Recipes</div>
  //     <div class="subButton manage flexer">Add New Recipe</div>
  //   </div>

  //   <div id = "accTab", class = "subTab flexer">
  //     <div class="subButton acc flexer">Update Address</div>
  //     <div class="subButton acc flexer">Update Payment</div>
  //   </div>

function App() {
  // I'll fix the weird names when I can. just trying to get this together atm. 
  // basically a global variable that only allows 1 menu open at once 
  const [toggle, setToggle] = useState([false,false]);
  return (
    // allows for 'global variable' functionality
    <FuncContext.Provider value = {setToggle}>
      <ValContext.Provider value = {toggle}>
        {/* 
        the real meat of the visuals:
            NavBar encapsulates the entire menu. 
            clicking on a NavItem pulls up its associated sub menu OR page (account)
            V NOT DONE YET V 
            clicking on browse/manage goes to the library page 
            clicking on random pulls up a random recipe's page 
            clicking on add new does.. something 
        */}
        <NavBar>
          <NavItem icon = "Cook" type = "1">
            <DropdownMenu type = "1">
              <DropdownItem icon = "Browse Recipes"></DropdownItem>
              <DropdownItem icon = "Random Recipe"></DropdownItem>
            </DropdownMenu>
          </NavItem>

          <NavItem icon = "Recipes" type = "2">
            <DropdownMenu type = "2">
              <DropdownItem icon = "Manage Recipes"></DropdownItem>
              <DropdownItem icon = "Add New Recipe"></DropdownItem>
            </DropdownMenu>
          </NavItem>

          <NavItem icon = "Account" type = "3">
            {/*update address, update payment*/}
          </NavItem>
        </NavBar>
      </ValContext.Provider>
    </FuncContext.Provider>
  );
}


function NavBar(props){

  return (
    <div className = "navbar flexer">
      <ul className = "navbar-nav" >
        {props.children}
      </ul>
    </div>
  );
}

function NavItem(props){
  const toggles = useContext(ValContext);
  const setToggle = useContext(FuncContext);

  function topSwitch(){
    setToggle([!toggles[0],false]);
  }

  function bottomSwitch(){
    setToggle([false,!toggles[1]]);
  }

  if(props.type == "1"){
    return(
      <li className = "nav-item">
        <div className = "mainButton flexer" onClick ={() => topSwitch()}>
            {props.icon}
        </div>

        {toggles[0] && props.children}

      </li>
    ); 
  }
  else if (props.type == "2"){
    return(
      <li className = "nav-item">
        <div className = "mainButton flexer" onClick ={() => bottomSwitch()}>
            {props.icon}
        </div>

        {toggles[1] && props.children}
      </li>
    );
  }
  else{
    return(
      <li className = "nav-item">
        <div className = "mainButton flexer" onClick ={() => bottomSwitch()}>
            {props.icon}
        </div>

        {props.children}

      </li>
    );
  }

}

function DropdownMenu(props){
  if(props.type == "1"){
    return(
      <div className = "dropdownBox flexer">
        <div className = "dropdown flexer">
          {props.children}
        </div>
      </div>
    );
  } else{
    return(
      <div className = "dropdownBox flexer">
        <div className = "dropdown flexer flip">
          {props.children}
        </div>
      </div>
    );
  }
  
}

function DropdownItem(props){
    return(
        <div className = "subButton flexer">
          {props.icon}
        </div>
    );
  }

export default App;
