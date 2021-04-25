import React from 'react'
import SingleEvent from './SingleEvent';


const EventList=(props)=>{

    if(props.events.length === 0){
    return (
        <div>
        <h2>no Event found</h2>    
        </div>
        )

    }

    return(
        <ul className="row mr-2 justify-content-center">
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
