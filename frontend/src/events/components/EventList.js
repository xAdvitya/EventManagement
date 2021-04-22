import React from 'react'
import SingleEvent from './SingleEvent';


const EventList=(props)=>{

    console.log(props.events['events'])
    console.log('wss')

    if(props.length === 0){
    return (
        <div>
        <h2>no user found</h2>    
        </div>
        )

    }
    return(
        <ul className="row">
                {props.events['events'].map(event=>(
                    <SingleEvent
                    key={event.id}
                    id={event.id}
                    image={event.image}
                    name={event.name}
                    verified={event.verified}
                    creatorId={event.creatorId}
                    description={event.description}
                    />
                ))}
        </ul>
    );
}

export default EventList
