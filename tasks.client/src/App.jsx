/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MasterLayout from "./Layout/MasterLayout";
import Login from './Layout/components/Login/Login';
import Register from './Layout/components/Register/Register';
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MasterLayout />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    );
}

export default App;