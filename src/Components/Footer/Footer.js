import React from 'react';
import './Footer.css'; // Import the CSS file for styling
import { assets } from '../../assets/assets';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <ul className="social-links">
                        <li><img src={assets.facebook} alt="Facebook" /></li>
                        <li><img src={assets.twitter} alt="Twitter" /></li>
                        <li><img src={assets.instagram} alt="Instagram" /></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>About Us</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac eros et dolor bibendum.</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
