import React from 'react'
import './style.css'
import { Link } from 'react-router-dom';


export const SingleEvent = (props) => {
    return (
        <div className="xxx">
            <Link to={`/${props.id}/events`}>
                <h2> event name: {props.name}</h2>
                <h2>created by: {props.creatorName}</h2>
            </Link>
        </div>
    )
}

export default SingleEvent;