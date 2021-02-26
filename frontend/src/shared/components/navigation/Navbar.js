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

        }
    }
    handleChange = e =>{
        console.log(1)
        return (<Redirect to="/e1/events"/>);
    };

render() {
        return (
            <ul>
            <li>
                <NavLink to='/' exact>All events</NavLink>
            </li>
            <li>
                <NavLink to='/verified'>Verified</NavLink>
            </li>
            <li>
                <NavLink to='/unverified'>unverified</NavLink>
            </li>
            <li>
                <NavLink to='/auth'>login</NavLink>
            </li>

            <li>
                <input type="radio" id="other" name="gender" value="other" onChange={this.handleChange}/> All events
                <input type="radio" id="other" name="gender" value="other" onChange={this.handleChange}/> verified
                <input type="radio" id="other" name="gender" value="other" onChange={this.handleChange}/> unverified
            </li>
        </ul>
        )
    }
}


