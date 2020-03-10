import React from 'react';
import './Login.css';

class Login extends React.Component{
    render () {
        return (
        <div className="div" align="center">
            <h2>Form Login</h2>
            <form>
                <div className="container">
                    <h1>Tugas Pertemuan Keempat</h1>
                    <label><b>Username </b></label>
                    <input type="text" placeholder="Enter Username" name="username"/>
                    <label><b>Password </b></label>
                    <input type="password" placeholder="Enter Password" name="password"/>

                    <button type="submit">Login</button>
                    <input type="checkbox" defaultChecked/>Remember me
                </div>
                <div className="container" >
                    <button type="button" className="cancelbtn" >Cancel</button>
                </div>
            </form>
        </div>
        )
    }
    
}

export default Login;