import React, { Component ,useState} from 'react'
import Navbar from '../../shared/components/navigation/Navbar'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";


const ManageEvents = () => {
    
    return (
        <div>
            <React.Fragment>
            <Navbar/>
            <div className="manage_buttons">
            <button className="btn btn-info"><Link to="/manageevent/planevent">Plan event</Link></button>
            <button className="btn btn-info"><Link to="/manageevent/allevents">All events</Link></button>
            </div>
            </React.Fragment>
        </div>
    )
        }

export default ManageEvents;
