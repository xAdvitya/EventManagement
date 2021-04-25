import './Navbar.css'
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
            <ul className="nav bg-warning py-3">

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
            <ul className="nav">

            <li className="logo nav-item ml-1 mt-2">
                <Link className="navbar-brand" to="/">
               <h1 className="text-light">Event Fixer</h1>
                </Link>
            </li>

            {!auth.isLoggedIn &&
                <li className="nav-item">
                    <NavLink className="nav-link text-white btn btn-danger btn-xm mt-3" to='/auth'>Authenticate</NavLink>
                </li>
                }
                <div className="d-flex justify-content-start mb-3">

                {auth.isLoggedIn &&
                <li className="nav-item">
                    <NavLink className="nav-link text-white btn btn-info btn-sm mt-3 ml-5 mr-3" to='/manageevent/planevent'>make Events</NavLink>
                </li>}

                {auth.isLoggedIn &&
                <li className="nav-item">
                    <NavLink className="nav-link text-white btn btn-info btn-sm mt-3 mr-3" to='/manageevent/allevents'>all Events</NavLink>
                </li>}
            </div>
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


