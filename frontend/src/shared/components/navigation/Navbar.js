import './Navbar.css'
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


const navbarManage = () => {
    return (
        <div>
            <ul>
            <a href="/">
            <li className="logo">
                EVENT MANAGEMENT
             </li>
             </a>
            </ul>
        </div>
    )
}


const navbarDefault = () => {
    return (
        <ul>
                <li className="logout">
                    <NavLink to='/auth'><button>Logout</button></NavLink>
                </li >
                <a href="/">
                    <li className="logo">
                        EVENT MANAGEMENT
                    </li>
                </a>
                <li className="make_events">
                    <NavLink to='/manageevent/planevent'><button>Make Events</button></NavLink>
                </li>
        </ul>
    )
}

export class Navbar extends Component {

render() {

    let nav;

    if(window.location.pathname === '/' || window.location.pathname ==='/:e/events'){
        console.log(window.location.pathname)
        nav = navbarDefault();
    }
    else{
        console.log(window.location.pathname)   
        nav = navbarManage();
    }

    return (
            <React.Fragment>
                 {nav}
            </React.Fragment>
           
        )
    }
}

export default Navbar;


