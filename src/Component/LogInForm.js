import React from 'react';
import "./login&signup.css";

export default function LogInForm() {
    return (
        <div className = "logInForm">
            <h1>Login here</h1>
            <form>
                <label>Username: </label>
                <input type = "text" value = "" className = "userName" placeholder = "Username *" required = "true"/> <br/>
                <label>Password: </label>
                <input type = "password" value = "" className = "password" placeholder = "Password *" required = "true"/> <br/>
                <button value = "submit">Log In</button>
            </form>
            
        </div>
    )
}
