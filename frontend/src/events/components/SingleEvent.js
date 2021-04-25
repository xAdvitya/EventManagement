import React from 'react'
import { Link } from 'react-router-dom';
import './style.css'

export const SingleEvent = (props) => { 
    return (
        <div className="card event-card mt-4 col-sm-12 div card-body">
            <Link to={`/${props.id}/events`}>

                <div>
                <h2 className="card-event-head">{props.name}</h2>
                {props.verified && <span class="badge badge-success">verified</span>}
                </div>

                <h5 className="card-event-body mt-2">{`${props.description.slice(0, 100)}...`}</h5>
            </Link>
        </div>
    )
}

export default SingleEvent;