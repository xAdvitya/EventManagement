// import './Navbar.css'
import {useContext} from 'react';
import React,{Component} from 'react'
import { NavLink } from 'react-router-dom';
import {AuthContext} from '../../context/auth-context'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";
  
const navbarManage = () => {
    return (
            <ul className="nav navbar-light bg-secondary py-3">

            <li className="logo nav-item">

            <NavLink to='/' className="navbar-brand">
            <h3>Event Fixer</h3> 
            </NavLink>
             </li>

            <li className="nav-item">
            <Link className="nav-link"to="/manageevent/planevent">Plan event</Link>
            </li>

            <li className="nav-item">
            <Link className="nav-link" to="/manageevent/allevents">All events</Link>
            </li>
             
            </ul>
    )
}


const NavbarDefault = () => {
    const auth=useContext(AuthContext);
    return (
        <div>
            <ul className="nav navbar-light bg-info py-3">

            <li className="logo nav-item">
                <Link className="navbar-brand" to="/">
               <h3>Event Fixer</h3> 
                </Link>
            </li>
            {!auth.isLoggedIn &&
                <li className="nav-item">
                    <NavLink className="nav-link text-white" to='/auth'>Authenticate</NavLink>
                </li >
                }
                
                {auth.isLoggedIn &&
                <li className="nav-item">
                    <NavLink className="nav-link text-white" to='/manageevent/planevent'>make Events</NavLink>
                </li>}

                {auth.isLoggedIn &&
                <li className="nav-item">
                    <NavLink className="nav-link text-white" to='/manageevent/allevents'>all Events</NavLink>
                </li>}
        </ul>
        </div>
    )
}


export class Navbar extends Component {

render() {

    let nav;

    if(window.location.pathname === '/' || window.location.pathname ==='/:e/events'|| window.location.pathname ==='/auth'){
        nav = <NavbarDefault/>
    }
    else{
        nav = <NavbarDefault/>
    }

    return (
            <React.Fragment>
                {nav}
            </React.Fragment>
           
        )
    }
}

export default Navbar;


