import React from 'react'

const InputForm = () => {
    return (
        <div>
            <form>
                <label>Event name</label>
                <input name="title" type="text" />
                  <label>Description</label>
                  <textarea name="description"></textarea>
                  <input name="images" type="file" multiple/>
                  <input name="date" type="date" />
                  <button type="submit">
                      submit
                  </button>
            </form>
        </div>
    )
}

export default InputForm
