import React, { Component } from 'react'
import Navbar from '../../shared/components/navigation/Navbar'
import SideBar from '../components/SideBar'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import PlanEvent from '../components/PlanEvent';

export class MakeEvents extends Component {
    render() {
        return (
            <React.Fragment>
            <Navbar/>
            <div>
                <SideBar/>
            </div>
            </React.Fragment>
        )
    }
}

export default MakeEvents
