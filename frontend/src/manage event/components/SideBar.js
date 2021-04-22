import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";

const SideBar = (props) => {
    return (
    <div className="sidenav">
        <Link to="/manageevent/planevent">Plan event</Link>
        <Link to="/manageevent/allevents">All events</Link>
        <Link to="/manageevent/comments">comments</Link>
        <Link to="/manageevent/stats">Logout</Link>
    </div>)
}

export default SideBar
