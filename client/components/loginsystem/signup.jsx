import React, { useState } from "react";
import {Route, Link} from "react-router-dom";
import  Login  from "./login";
import Axios from 'axios';

export default function SignUp () {
    const [fullName, setfullName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);


    const submitForm = () => {
        Axios.post("http://localhost:3001/api/signup",{
            username: fullName,
            email: email,
            password: password,
        }).then(()=>{
            alert("Successful insert");
        });
    };

    return (
        <form>
            <h3>Sign Up</h3>

            <div className="form-group">
                <label>Full name</label>
                <input type="text" title="name-input" className="form-control" placeholder="Full name" onChange={(e)=>{setfullName(e.target.value)}} />
            </div>

            <div className="form-group">
                <label>Email address</label>
                <input type="email" title="email-input" className="form-control" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}} />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" title="password-input" className="form-control" placeholder="Enter password" onChange={(e)=>{setPassword(e.target.value)}} />
            </div>

            <button type="submit" title="submit-btn" className="btn btn-primary btn-block" onClick={submitForm}>Sign Up</button>
            <p className="forgot-password text-right">
                Already registered <Link to="sign-in">sign in?</Link>
            </p>
            <Route path="/sign-in" component={Login}></Route>
        </form>
    );
}
