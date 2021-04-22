import React from 'react'

const EventForm = (props) => {
    return (
        <div class="registration_form">
            <form >
                
                <div>
                <label for="name-id">
                    name
                </label>
                <input type="text" name="name" id="name-id" placeholder="Enter your name"/>
                </div>

                <div>
                <label for="email-id">
                    email
                </label>
                <input type="email" name="email" id="email-id" placeholder="Enter your email"/>
                </div>

                <div>
                <label for="regno-id">
                    Registeration number
                </label>
                <input type="number" name="regno" id="regno-id" placeholder="Registration number"/>
                </div>

                <div>
                <label for="program-id">
                    Program
                </label>
                <input type="text" name="program" id="program-id" placeholder="program"/>
                </div>

                <div>
                <label for="semester-id">
                    current semester
                </label>
                <input type="text" name="semester" id="semester-id" placeholder="semester number"/>
                </div>
                
                <button type="submit" class="button-form">SUBMIT</button>
            </form>
        </div>
    )
}

export default EventForm
