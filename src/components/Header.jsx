import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import './Header.css';

// NO IMPORT LINE NEEDED FOR LOGO HERE
import logo from '../assets/logo.png';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <div className="logo">
                    {/* Just use a direct string path if the image is in the public folder */}
                    <img
                        src={logo}
                        alt="FROSTVAULT"
                        className="logo-img"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                        }}
                    />

                    <div className="logo-text-wrapper" style={{ display: 'none' }}>
                        <span className="logo-text">FROSTVAULT</span>
                    </div>
                </div>

                <nav className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
                    <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
                    <a href="#technology" onClick={() => setMobileMenuOpen(false)}>Technology</a>
                    <a href="#products" onClick={() => setMobileMenuOpen(false)}>Models</a>
                    <a href="#applications" onClick={() => setMobileMenuOpen(false)}>Applications</a>
                    <a href="#reliability" onClick={() => setMobileMenuOpen(false)}>Reliability</a>
                    <div className="mobile-cta">
                        <Button
                            variant="primary"
                            onClick={() => {
                                setMobileMenuOpen(false);
                                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            Request Quote
                        </Button>
                    </div>
                </nav>

                <div className="header-actions">
                    <Button
                        variant="primary"
                        className="desktop-cta"
                        onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                    >
                        Request Quote
                    </Button>
                    <button
                        className="mobile-menu-toggle"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
