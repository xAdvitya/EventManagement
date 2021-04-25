import React from 'react'
import './style.css'

const EventDetails = (props) => {
    console.log(props.event['event'])
    return (
    <div className="container mt-4 d-flex justify-content-center">
    <div className="card bg-light">

        {/* <img src={props.event['event'].image} className="card-img-top" width="40%" height="50%"/> */}

        <div className="card-body">

            <h2 className="card-event-head card-head">{props.event['event'].name}</h2>
            <p className="card-event-body card-description">{props.event['event'].description}</p>     
        </div>

    </div>
    </div>
    )
}

export default EventDetails;
