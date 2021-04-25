import React from 'react'

const EventDetails = (props) => {
    console.log(props.event['event'])
    return (
    <div className="container mt-4 d-flex justify-content-center">
    <div className="card bg-light" style={{width:"600px"}}>

        {/* <img src={props.event['event'].image} className="card-img-top" width="40%" height="50%"/> */}

        <div className="card-body">

            <h2>{props.event['event'].name}</h2>
            <p>{props.event['event'].description}</p>     
        </div>

    </div>
    </div>
    )
}

export default EventDetails;
