import React from 'react';
import { FaBars } from 'react-icons/fa';
import '../style/navbar.css';

function Navbar() {
    return (
        <div className="navbar-container">

            <h2>My-Movies</h2>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="navbar-icon" >
                <FaBars />
            </div>
        </div>
    );
}

export default Navbar;
