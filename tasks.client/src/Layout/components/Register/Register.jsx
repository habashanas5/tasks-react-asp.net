/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Register.scss';
import Header from '../Header/Header';  
import Footer from '../Footer/Footer';  

const Register = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://localhost:7097/api/account/register', {
                userName,
                email,
                password
            });

            if (response.status === 200) {
                alert('Registration successful!');
                navigate('/login');
            }
        } catch (error) {
            setErrorMessage('Failed to register user');
        }
    };

    return (
        <>
            <Header /> 
            <div className="register-container">
                <h2 className="register-title">Register</h2>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <form className="register-form" onSubmit={handleRegister}>
                    <div className="form-group">
                        <label>Username:</label>
                        <input
                            type="text"
                            className="form-input"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            required
                        />
                    </div>
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
                    <button className="submit-btn" type="submit">Register</button>
                </form>
            </div>
            <Footer /> 
        </>
    );
};

export default Register;
