import React from 'react'
import './style.css'

const EventComments = (props) => {
    return (
        <div class="comment_head">
            <h2>
                Comments
            </h2>
            <form>
                <textarea placeholder="write comment here..." ></textarea>
                <button type="submit" class="comment_button">comment</button>
            </form>
        </div>
    )
}

export default EventComments
