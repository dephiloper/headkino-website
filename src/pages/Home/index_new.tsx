import React, { FC, useEffect, useState } from 'react'
import './styles-new.css'
import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom';
import 'animate.css';
import swal from 'sweetalert2'

const HomeNew: FC = () => {
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

    const openContactForm = () => {
        if (window.innerWidth <= 768) {
            // Open the Google Form in a new tab
            window.open('https://docs.google.com/forms/d/e/1FAIpQLSdVtkdvNCKKaduoADF9ioPDTRgag_vOmtbl-Ja_Wn_tu4qNZA/viewform', '_blank');
        } else {
            // Open the Google Form in a SweetAlert popup
            swal.fire({
                html: '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdVtkdvNCKKaduoADF9ioPDTRgag_vOmtbl-Ja_Wn_tu4qNZA/viewform?embedded=true" width="640" height="800" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>',
                showCloseButton: true,
                showConfirmButton: false,
                customClass: {
                    popup: 'swal-with-iframe',
                },

                width: 750,
                showClass: {
                    popup: `
                      animate__animated
                      animate__fadeInUp
                      animate__faster
                    `
                  },
                  hideClass: {
                    popup: `
                      animate__animated
                      animate__fadeOutDown
                      animate__faster
                    `
                  }
            });
        }
    }


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


    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setNavOpen(false);
    };


    return (
        <div className="App">
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
                            <Link to="#games" onClick={() => scrollToSection('games')}>GAMES</Link>
                            <div> | </div>
                            <Link to="#about" onClick={() => scrollToSection('about')}>ABOUT</Link>
                            <div> | </div>
                            <Link to="#team" onClick={() => scrollToSection('team')}>TEAM</Link>
                            <div> | </div>
                            <a onClick={() => openContactForm()}>CONTACT</a>
                        </span>
                    </div>
                </div>
            </nav>
            <div className="background-image"></div>

            <div className="segment game-segment">
                <div className="content">
                    <img src="/ghost_01.webp" alt="Rotating Ghost" className="ghost-image" />
                    <img
                        id="games"
                        src="/HauntedCleaner_title_blk.webp"
                        alt="Game Title"
                        className="game-title"
                    />
                    <p className="game-description">
                        <span>HAUNTED CLEANER</span> is a relaxing light puzzle and narrative game
                        about tidying up the rooms of the deceased and uncovering the stories left
                        behind.
                        <br />
                        <br />
                        Imagine <span>UNPACKING</span> but set in a haunted location.
                        <br />
                        <br />
                        IN DEVELOPMENT
                        <br />
                        Planned release:
                        <br />
                        <span>2026 Q3</span>
                    </p>
                    <Marquee className="marquee-banner" direction='right'>
                        <span>WISHLIST NOW!!</span>
                    </Marquee>
                    <div className='preview'>
                        <img
                            src="/game_scene.webp"
                            alt="screenshot game"
                            className="preview-image"
                        />
                        <img
                            src="/webbg_02.webp"
                            alt="screenshot game"
                            className="preview-image"
                        />
                        <img
                            src="/image22.webp"
                            alt="screenshot game"
                            className="preview-image"
                        />
                    </div>

                    <img
                        src="/image59_b.webp"
                        alt="Character Portrait"
                        className="character-image"
                    />
                </div>
            </div>

            <div id="about" className="segment company-segment">
                <div className='content'>
                    <h3>WELCOME TO OUR SITE!</h3>
                    <h1>WE ARE</h1>
                    <img src="/Headkino_logo_positive.webp" alt="Headkino Logo" className="logo-image" />
                    <p>
                        Friends making game about ordinary people in a slightly extraordinary
                        situation.
                    </p>
                    <div className="social-icons">
                        <a href="https://headkino.itch.io/" target="_blank" rel="noopener noreferrer">
                            <img src="/itchio-black-no-text.webp" alt="Itch.io" className="social-icon itch" />
                        </a>
                        <a
                            href="https://instagram.com/headkino.games"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-instagram social-icon"></i>
                        </a>
                        <a href="https://threads.net/@headkino.games" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-threads social-icon"></i>
                        </a>
                        <a
                            href="https://bsky.app/profile/headkino.bsky.social"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-bluesky social-icon"></i>
                        </a>
                        <a
                            href="https://youtube.com/@headkino"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-youtube social-icon"></i>
                        </a>
                        <a
                            href="https://tiktok.com/@headkino.games"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-tiktok social-icon"></i>
                        </a>
                        <a href="https://www.linkedin.com/company/headkino" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin social-icon"></i>
                        </a>
                        {/* <a
                            href="mailto:headkinogames@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fas fa-envelope social-icon"></i>
                        </a> */}
                        <a
                            href="https://reddit.com/r/headkinogames"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-reddit social-icon"></i>
                        </a>
                        <a
                            href="https://discord.gg/rsX4e2FmWF"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-discord social-icon"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div id="team" className="segment about-us-segment">
                <div className='content'>
                    <Marquee className="marquee-heading" direction='left'>
                        <span>Who Are We?</span>
                    </Marquee>
                    <h3 className='heading-team'>Meet the Team</h3>

                    <div className="image-container">
                        <div className="image-wrapper">
                            <img src="/profile_01_c.webp" alt="Team Member Joy" />
                            <p className="name">Joy W</p>
                            <p>Cofounder - Art and Narrative</p>
                        </div>
                        <div className="image-wrapper">
                            <img src="/portrait_philipp.webp" alt="Team Member Philipp" />
                            <p className="name">Philipp B</p>
                            <p>Cofounder - Programming and Design</p>
                        </div>
                    </div>

                    <i className="fas fa-ghost ghost-heading"></i>

                    <h3 className='text-heading'>HELLO!</h3>
                    <h3 className='text-subheading'>We are Joy and Philipp!</h3>
                    <p className='text-description'>
                        We are 2 friends met at work while working in Berlin.
                        <br /><br />
                        <span>HeadKino Games</span> is a game studio set to be established in Q2 of 2025!
                        <br /><br />
                        Our first project <span>Haunted Cleaner</span> was born of a combination of cozy games and personal stories in mysterious, nostalgic settings. The project reflects a shared interest in unusual, cross-genre media and aims to create engaging experiences, emotional connection and relaxation through satisfying interactions and both direct and indirect storytelling.
                        <br /><br />
                        <span>Feel free to connect.</span>
                        <br />
                        <i onClick={() => openContactForm()} className="fas fa-envelope social-icon small"></i>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HomeNew;