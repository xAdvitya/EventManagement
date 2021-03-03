import React from 'react'
import './SideBar.css'

const SideBar = (props) => {
    return (
    <div className="sidenav">
        <a href="/manageevent/planevent">Plan event</a>
        <a href="/manageevent/allevents">All events</a>
        <a href="/manageevent/comments">comments</a>
        <a href="/manageevent/stats">Stats</a>
        <a href="#  " id="logout">Logout</a>
    </div>)
}

export default SideBar
