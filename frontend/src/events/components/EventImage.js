import React from 'react'
import './style.css'

const EventImage = (props) => {
    return (
        <div class="slide-container">
            <span id="slider-image-1"></span>
            <span id="slider-image-2"></span>
            <span id="slider-image-3"></span>
            <div class="image-container">
                <img src={props.event.images[0]} class="slider-image"/>
                <img src={props.event.images[0]} class="slider-image"/>
                <img src={props.event.images[0]} class="slider-image"/>
            </div>
            <div class="button-container">
                <a href="#slider-image-1" class="slider-button">1</a>
                <a href="#slider-image-2" class="slider-button">2</a>
                <a href="#slider-image-3" class="slider-button">3</a>
            </div>
        </div>
    )
}

export default EventImage
