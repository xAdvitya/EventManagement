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
import AllEvents from '../components/AllEvents';
import Comments from '../components/Comments'
import Stats from '../components/Stats';

export class MakeEvents extends Component {
    render() {
    let component;
    {
    if(window.location.pathname === '/manageevent/planevent'){
        component = <PlanEvent/>;
    }

    else if(window.location.pathname === '/manageevent/allevents'){
        component = <AllEvents/>;
    }

    else if(window.location.pathname === '/manageevent/comments'){
        component = <Comments/>
    }
    else if(window.location.pathname === '/manageevent/stats'){
        component = <Stats/>
    }
}
        return (
            <React.Fragment>
            <Navbar/>
             <div>   
                <SideBar/>
            </div>
            {component}
            </React.Fragment>
        )
    }
}

export default MakeEvents
