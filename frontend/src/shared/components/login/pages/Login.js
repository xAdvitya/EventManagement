import React from 'react'
// import './Login.css'

const Login = (props) => {
    return (
        <div>
            <h1>EVENT MANAGEMENT</h1>
            <form class="login">
                <h2>Register</h2>
                <input type="text" name="username" placeholder="Username"/>
                <input type="email" name="email"  placeholder="Email"/>
                <input type="password" name="password"  placeholder="Password"/>
                <input type="password" name="password"  placeholder="Confirm Password"/>
                <input type="submit" value="Register Now" />
            </form>
        </div>
    )
}

export default Login
