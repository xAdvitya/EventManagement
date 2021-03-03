import React from 'react'
import './SideBar.css'

const SideBar = (props) => {
    return (
    <div className="sidenav">
        <a href="/makeevent">Plan event</a>
        <a href="#">All events</a>
        <a href="#">comments</a>
        <a href="#">Stats</a>
        <a href="#" id="logout">Logout</a>
    </div>)
}

export default SideBar
