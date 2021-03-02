import React from 'react'
import './style.css'

const EventImage = (props) => {
    return (
        <div class="event_pictures">
            <img src={props.event.images[0]}/>
        </div>
    )
}

export default EventImage
