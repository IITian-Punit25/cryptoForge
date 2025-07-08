import React from 'react';
import {Link} from 'react-router-dom';
import './css/Navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <h2 className="logo">CryptoForge</h2>
            <ul className="nav-links">
                <li><Link to="/">Encrypt</Link></li>
                <li><Link to="/decrypt">Decrypt</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    );
}