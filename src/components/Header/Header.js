import './Header.css';
import logo from '../../img/logo.jpg'

import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <nav>
                <a href="/home">Home</a>
                <a href="/aboutUs">About us</a>
                <a href="contactUs">Contact us</a>
                <a href="/success">Success</a>
            </nav>
            <img className="logo" src={logo} alt="" />
            <div className="header-text">
                <h1>Current project on React.js</h1>
                <h2>99 days commitment delivery service(full team)</h2>
            </div>
            
        </div>
    );
};

export default Header;