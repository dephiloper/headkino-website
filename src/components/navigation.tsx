import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { openContactForm } from "../utils/openContactForm";

const Navigation: FC = () => {
    const [navOpen, setNavOpen] = useState(false);
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as HTMLElement; // Cast to HTMLElement for better type safety
        const navContent = document.querySelector('.nav-content'); // Select the nav-content element

        // Check if the clicked target is not the navContent or a descendant of it
        if (navContent && !navContent.contains(target)) {
            setNavOpen(false); // Close the nav if clicked outside
        }
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setNavOpen(false);
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        if (navOpen) {
            setDropdownVisible(true);
        } else {
            const timeout = setTimeout(() => {
                setDropdownVisible(false);
            }, 300);
            return () => clearTimeout(timeout);
        }
    }, [navOpen]);

    return (
        <>
            <div className="visible-on-mobile company-name navbar-left">HEADKINO GAMES</div>
            <nav className="navbar">
                <div className="navbar-left hidden-on-mobile">HEADKINO GAMES</div>
                <div className="navbar-right" onClick={() => setNavOpen(!navOpen)}>
                    <i className="fas fa-bars"></i>
                </div>
                <div className={`nav-dropdown ${dropdownVisible ? (navOpen ? '' : 'hidden') : 'hidden'}`}>
                    <div className="nav-content">
                        <span className="nav-links">
                            <div className='remove-on-mobile'>HEADKINO GAMES</div>
                            <img
                                className='visible-on-mobile headkino-nav'
                                src="/Headkino_logo.webp"
                                alt="HeadKino Logo"

                            />
                            <span className="spacer"></span>
                            <Link to="games" className='remove-on-mobile'>GAMES</Link>
                            <div className='remove-on-mobile'> | </div>
                            <Link to="#about" onClick={() => scrollToSection('about')}>ABOUT</Link>
                            <div> | </div>
                            <Link to="team">TEAM</Link>
                            <div> | </div>
                            <a onClick={() => openContactForm()}>CONTACT</a>
                            <div> | </div>
                            <Link to="#press-kit" onClick={() => scrollToSection('press-kit')}>PRESS</Link>
                        </span>
                    </div>
                </div>
            </nav>
        </>
    )
};

export default Navigation;