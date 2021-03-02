import React from 'react'

const EventForm = (props) => {
    return (
        <div>
            <form>
                
                <div>
                <label>
                    name
                </label>
                <input type="text" name="name"/>
                </div>

                <div>
                <label>
                    email
                </label>
                <input type="email" name="email"/>
                </div>

                <div>
                <label>
                    Registeration number
                </label>
                <input type="number" name="regno"/>
                </div>

                <div>
                <label>
                    Program
                </label>
                <input type="text" name="program"/>
                </div>

                <div>
                <label>
                    current semester
                </label>
                <input type="text" name="semester"/>
                </div>
                
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default EventForm
