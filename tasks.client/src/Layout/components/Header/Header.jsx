/* eslint-disable no-unused-vars */
import React from 'react';
import logo from "../../../assets/images/tasks-icon-21.png"; 
import './Header.scss';

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Logo" className="img-logo" />
        </header>
    );
}

export default Header;