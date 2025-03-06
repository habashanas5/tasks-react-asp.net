/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import './Login.scss';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://localhost:7097/api/account/login', {
                email,
                password
            });

            if (response.data.token) {
                localStorage.setItem('token', response.data.token); 
                localStorage.setItem('userId', response.data.userId); 
                navigate('/'); 
            } else {
                setErrorMessage('Invalid credentials');
            }
        } catch (error) {
            console.error("Login error: ", error);
            setErrorMessage('An error occurred, please try again later');
        }
    };

    return (
        <>
            <Header />
            <div className="login-container">
                <h2 className="login-title">Login</h2>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <form className="login-form" onSubmit={handleLogin}>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            className="form-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input
                            type="password"
                            className="form-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button className="submit-btn" type="submit">Login</button>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default Login;
