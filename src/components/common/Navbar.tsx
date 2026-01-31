import { useState } from 'react';
import logo from '@/assets/ui/ship4ward-logo.svg';
import avatar from '@/assets/ui/avatar.svg';

const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Services', href: '#' },
    { label: 'Help', href: '#' },
    { label: 'Pricing', href: '#' },
    { label: 'Tracking', href: '#' },
];

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMenu = () => {
        setIsMobileMenuOpen(false);
    }

    return (
        <header className="header">
            <nav className="header--nav">
                <div className='header--nav-content'>
                    <div className="header--nav-logo">
                        <img width="32px" height="auto" src={logo} alt="SHIP4WARD" />
                    </div>

                    <ul className="header--nav-items">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <a href={link.href}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex items-center gap-2">
                    <div className='header--nav-avatar'>
                        <img src={avatar} alt="User profile" className="w-8 h-8 rounded-full" />
                    </div>

                    <button
                        className="header--toggle-btn"
                        onClick={toggleMenu}
                        aria-label="Toggle menu">
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
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                onClick={closeMenu}>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </header>
    );
}