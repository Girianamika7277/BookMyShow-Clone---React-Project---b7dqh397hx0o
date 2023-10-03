import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css"
import Nav from "./Nav";


const initialState = {
    name: "",
    email: "",
    password: "",
    isAuth: false
}

const Login = () => {
    const [loginData, setLoginData] = useState(initialState);
    const navigate = useNavigate();
    const movieAuthentication = JSON.parse(localStorage.getItem('selectedMovie'));
    console.log('login')
    console.log(movieAuthentication)


    const loginHandler = (e) => {
        e.preventDefault();
        const userDataArr = JSON.parse(localStorage.getItem('user')) || [];
        let count = 0;
        userDataArr.map((el) => {
            if (loginData.email === el.email && loginData.password === el.password) {
                loginData.isAuth = true;
                loginData.name = el.name;
                alert('Login Successfully')
                localStorage.setItem('isAuth', JSON.stringify(loginData.isAuth))
                localStorage.setItem('userNameData', JSON.stringify(loginData.name))
                if(movieAuthentication){
                    navigate('/seatbooking')
                }
                navigate('/');
            }
            else {
                count++;
                if (count === userDataArr.length) {
                    alert('Invalid Credientials!')
                }
            }
        })

    }

    return (
        <div className="login">
            <Nav />
            <div className="login-container" >
                <span className="symbol" >&#128275;</span>
                <h2>Sign In</h2>
                <form className="login-form" onSubmit={loginHandler} >
                    <div className="login-email" >
                        <label >Email : <span>*</span></label>
                        <input type="email" id="email" onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} placeholder="Email" required />
                    </div>
                    <div className="login-password" >
                        <label >Password : <span>*</span></label>
                        <input type="password" onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} placeholder="Password" required />
                    </div>
                    <div>
                        <button type="submit" >Sign In</button>
                    </div>
                </form>
                <div className="login-account" >
                    <p>Don't have an account?</p>
                    <Link to='/signup'><p>Register</p></Link>
                </div>
            </div>
        </div>
    )
}

export default Login;