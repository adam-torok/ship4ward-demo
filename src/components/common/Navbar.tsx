import { useState } from 'react';
import logo from '@/assets/ui/ship4ward-logo.svg';
import avatar from '@/assets/ui/avatar.svg';

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="header">
            <nav className="header--nav">
                <div className='header--nav-content'>
                    <div className="header--nav-logo">
                        <img src={logo} alt="Ship4ward Logo" />
                    </div>

                    <ul className="header--nav-items">
                        <li><a href="#">Teszt item</a></li>
                        <li><a href="#">Teszt item</a></li>
                        <li><a href="#">Teszt item</a></li>
                    </ul>
                </div>

                <div className="flex items-center gap-2">
                    <div className='header--nav-avatar'>
                        <img src={avatar} alt="avatar" className="w-8 h-8 rounded-full" />
                    </div>

                    <button
                        className="header--toggle-btn"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        )}
                    </button>
                </div>
            </nav>

            {isMobileMenuOpen && (
                <ul className="header--mobile-menu">
                    <li><a href="#">Teszt item</a></li>
                    <li><a href="#">Teszt item</a></li>
                    <li><a href="#">Teszt item</a></li>
                </ul>
            )}
        </header>
    );
}