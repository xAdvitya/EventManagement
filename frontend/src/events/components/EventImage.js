import React from 'react'

const EventImage = (props) => {
    return (
        <div>
            <img src={props.event.images[0]}/>
            <img src={props.event.images[1]}/>
            <img src={props.event.images[2]}/>
        </div>
    )
}

export default EventImage
