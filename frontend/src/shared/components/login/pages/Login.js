import React from 'react'

const Login = (props) => {
    return (
        <div>
            <h1>LOGO</h1>
            <form>
                <label>username</label>
                <input type="text" name="username"/>
                <label>email</label>
                <input type="email" name="email"/>
                <label>password</label>
                <input type="password" name="password"/>
                <label>retype password</label>
                <input type="password" name="password"/>
            </form>
        </div>
    )
}

export default Login
