import React from 'react'
import './InputForm.css'

const InputForm = () => {
    return (
        <div class="plan_event">
            <form>
                <label for="1">Event Name</label>
                <input name="title" type="text" id="1"/>
                  <label for="2">Event Description</label>
                  <textarea name="description" id="2"></textarea>
                  <label for="3">Add Pictures</label>
                  <input name="images" type="file" multiple id="3"/>
                  <label for="last_date">Event Time</label>
                  <input name="date" type="date" id="last_date"/>
                  <button type="submit">
                      submit
                  </button>
            </form>
        </div>
    )
}

export default InputForm
