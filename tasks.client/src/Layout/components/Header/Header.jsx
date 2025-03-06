/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../assets/images/tasks-icon-21.png";
import './Header.scss';

function Header() {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const [userName, setUserName] = React.useState('');

    React.useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
            setUserName('User');
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userId'); 
        setIsLoggedIn(false);
        window.location.href = '/login'; 
    };

    const PressImage = () => {
        window.location.href = '/';
    };

    return (
        <header className="header">
            <img src={logo} alt="Logo" className="img-logo" onClick={PressImage} />
            <nav className="nav-links">
                {isLoggedIn ? (
                    <>
                        <span className="nav-link welcome">Welcome, {userName}</span>
                        <button onClick={handleLogout} className="nav-link logout">Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="nav-link">Login</Link>
                        <Link to="/register" className="nav-link">Register</Link>
                    </>
                )}
            </nav>
        </header>
    );
}

export default Header;