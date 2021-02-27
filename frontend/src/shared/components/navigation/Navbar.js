import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Redirect
} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types'

export default class Navbar extends Component {

constructor(props){
        super(props);
        this.state={
            eventType:'verified'
        }
    }

render() {
    // const nav='';

    // if(window.location.pathname === '/' || window.location.pathname ==='/:e/events'){

    //     this.nav ="<ul>\
    //             <li>\
    //                 <NavLink to='/auth'>Login</NavLink>\
    //             </li>\
    //             <li>\
    //                 <NavLink to='/'><h1>LOGO</h1></NavLink>\
    //             </li>\
    //             <li>\
    //                 <NavLink to='/makeevent'>Make Events</NavLink>\
    //             </li>\
    //         </ul>";
    // }
    // else{
        
    //     this.nav ="<ul>\
    //             <li>\
    //                 <NavLink to='/auth'>Login</NavLink>\
    //             </li>\
    //             <li>\
    //                 <NavLink to='/'><h1>LOGO</h1></NavLink>\
    //             </li>\
    //             <li>\
    //                 <NavLink to='/makeevent'>Make Events</NavLink>\
    //             </li>\
    //         </ul>";
    // }

        return (
            <ul>
                <li>
                    <NavLink to='/auth'>Login</NavLink>
                </li>
                <li>
                    <NavLink to='/'><h1>LOGO</h1></NavLink>
                </li>
                <li>
                    <NavLink to='/makeevent'>Make Events</NavLink>
                </li>
            </ul>
        )
    }
}


