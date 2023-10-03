import React from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css"


const Nav = ({ inputHandler, handleSubmit }) => {


    const userName = JSON.parse(localStorage.getItem('userNameData'));

    return (
        <div className="navbar" >
            <Link to='/'> <img className="logo-image" src="https://getlogo.net/wp-content/uploads/2020/04/bookmyshow-logo-vector.png" alt="logo-image" /> </Link>
            <div className="nav-section1">
                <div className="nav-search" >
                    <input type="text" placeholder="Search" onChange={(event) => inputHandler(event.target.value)} />
                    <button type="button" onClick={() => handleSubmit()} >Search</button>
                </div>
                <button type="button" className="wishlist" ><Link to='/wishlist' style={{ textDecoration: 'none', color: 'black' }} >&#9825;</Link></button>
                <div className="nav-loginBtn" >
                    <button type="button" >
                        <Link to='/signup' style={{ textDecoration: 'none', color: 'black' }} ><span>&#128100;</span> {userName ? userName.split(' ')[0] : 'Login!'}</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Nav;