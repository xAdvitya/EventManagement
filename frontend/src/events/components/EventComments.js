import React from 'react'

const EventComments = (props) => {
    return (
        <div>
            <h2>
                Comments
            </h2>
            <form>
                <textarea placeholder="write comment here" ></textarea>
                <button type="submit">comment</button>
            </form>
        </div>
    )
}

export default EventComments
