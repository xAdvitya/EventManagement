import React from 'react'
import SingleEvent from './SingleEvent';
import './style.css'

const EventList=(props)=>{

    if(props.length === 0){
    return (
        <div>
        <h2>no user found</h2>    
        </div>
        )
    }
    return(
        <ul>
            {props.events.map(event=>(
                <SingleEvent
                key={event.id}
                id={event.id}
                image={event.image}
                name={event.name}
                verified={event.verified}
                joinCount={event.joinCount}
                creatorId={event.creatorId}
                creatorName={event.creatorName}
                />
            ))}
        </ul>
    );
}

export default EventList
