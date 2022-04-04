import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarStyle';

const NavBar = () => {  
 return (
   <>
    <Nav>
      <NavLink to ="/">
        <h1>WORKOUTIO</h1>
      </NavLink>
      <Bars />
      <NavMenu>
        <NavLink to="/profile" activeStyle>
          Profile
        </NavLink>
        <NavLink to="/activity" activeStyle>
          Activity
        </NavLink>
        <NavLink to="/history" activeStyle>
          History
        </NavLink>
        <NavLink to="/settings" activeStyle>
          Settings
        </NavLink>
        <NavBtnLink to="/logout">Log out</NavBtnLink>
      </NavMenu>
      {/* <NavBtn>
        <NavBtnLink to="/logout">Log out</NavBtnLink>
      </NavBtn> */}
    </Nav>
   </>
 );
}

export default NavBar;