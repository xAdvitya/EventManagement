import React from 'react'
import './style.css'
const EventDetails = (props) => {
    return (
        <div className="xxx">
       
            <h2>{props.event.name}</h2>
            <h3>{props.event.description}</h3>
        </div>
    )
}

export default EventDetails;
