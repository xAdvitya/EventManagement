import React from 'react'
import { Link } from 'react-router-dom';


export const SingleEvent = (props) => {
    return (
        <div className="card mt-4 col-sm-12 div card-body bg-light">
            <Link to={`/${props.id}/events`}>
                <h2 className="text-primary">{props.name}</h2>
                <h5 className="text-primary">{`${props.description.slice(0, 200)}...`}</h5>
            </Link>
        </div>
    )
}

export default SingleEvent;