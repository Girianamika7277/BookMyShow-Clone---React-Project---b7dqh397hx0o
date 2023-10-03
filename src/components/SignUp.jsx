import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/SignUp.css"
import Nav from "./Nav";



const initialState = {
    name: "",
    email: "",
    password: ""
}

const SignUp = () => {

    const [signupData, setSignupData] = useState(initialState);
    const navigate = useNavigate();

    const signupHandler = (e) => {
        e.preventDefault();
        const userDataArr = JSON.parse(localStorage.getItem('user')) || [];
        userDataArr.push(signupData);
        localStorage.setItem('user', JSON.stringify(userDataArr));
        alert('Registered Successfully')
        navigate('/login');
    }


    return (
        <>
            <Nav />
            <div className="signup-container" >
                <span className="symbol" >&#x1F512;</span>
                <h2>Sign Up</h2>
                <form className="signup-form" onSubmit={signupHandler} >
                    <div className="signup-name" >
                        <label for="name" >Name : <span>*</span></label>
                        <input type="text" id="name" onChange={(e) => setSignupData({ ...signupData, name: e.target.value })} placeholder="Name" required />
                    </div>
                    <div className="signup-email" >
                        <label for="email" >Email : <span>*</span></label>
                        <input type="email" id="email" onChange={(e) => setSignupData({ ...signupData, email: e.target.value })} placeholder="Email" required />
                    </div>
                    <div className="signup-password" >
                        <label for="" >Password : <span>*</span></label>
                        <input type="password" onChange={(e) => setSignupData({ ...signupData, password: e.target.value })} placeholder="Password" required />
                    </div>
                    <div>
                        <button type="submit" >Register</button>
                    </div>
                </form>
                <div className="signup-account" >
                    <p>Already have an account?</p>
                    <Link to='/login'><p>Sign In</p></Link>
                </div>
            </div>
        </>
    )
}

export default SignUp;