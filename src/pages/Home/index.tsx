import React, { FC, useState } from 'react'
import './styles.css'
import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom';
import 'animate.css';
import FsLightbox from "fslightbox-react";
import Navigation, { Page } from '../../components/navigation';
import { openContactForm } from '../../utils/openContactForm';

const Home: FC = () => {
    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1
    });

    function openLightboxOnSlide(value: number) {
        setLightboxController({
            toggler: !lightboxController.toggler,
            slide: value
        });
    }


    return (
        <div className="App">
            <div className="visible-on-mobile company-name navbar-left">HEADKINO GAMES</div>
            <Navigation page={Page.Home} />
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
                        <span>IN PRE-PRODUCTION</span>
                        <br />
                        Planned release:
                        <br />
                        <span>2026 Q3</span>
                    </p>

                    <Link to='/games'>
                        <button className="learn-more">Learn More</button>
                    </Link>

                    <p className='preview-description'>* Early in-game screens (prototype stage) - updates coming soon</p>
                    <div className='preview'>
                        <img onClick={() => openLightboxOnSlide(1)}
                            src="/screen_01.webp"
                            alt="screenshot game"
                            className="preview-image flash-image"
                        />
                        <img onClick={() => openLightboxOnSlide(2)}
                            src="/screen_02.webp"
                            alt="screenshot game"
                            className="preview-image flash-image"
                        />
                        <img onClick={() => openLightboxOnSlide(3)}
                            src="/screen_03.webp"
                            alt="screenshot game"
                            className="preview-image flash-image"
                        />
                        <FsLightbox
                            toggler={lightboxController.toggler}
                            sources={[
                                "./screen_01.webp",
                                "./screen_02.webp",
                                "./screen_03.webp",
                            ]}
                            slide={lightboxController.slide}
                        />
                    </div>

                    <Marquee className="marquee-banner" direction='right'>
                        <span className="no-select" onClick={() => openContactForm()}>REACH OUT ✉️ !</span>
                    </Marquee>

                    <img
                        src="/characters_group.webp"
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
                            <img src="/portrait_j.webp" alt="Team Member Joy" />
                            <p className="name">Joy W</p>
                            <p>Cofounder - Art and Narrative</p>
                        </div>
                        <div className="image-wrapper">
                            <img src="/portrait_p.webp" alt="Team Member Philipp" />
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
                        <Link to='/team'>
                            <button className="more-about-us">More about us</button>
                        </Link>
                        <br /><br />
                        <span>Feel free to connect.</span>
                        <br />
                        <i onClick={() => openContactForm()} className="fas fa-envelope social-icon small"></i>
                    </p>
                </div>
            </div>

            <div id="press-kit" className="segment press-kit-segment">
                <div className='content'>
                    <div className='text-description'>
                        <h1>Press Kit</h1>
                        <h2>Coming Soon</h2>
                        <span>Why not send us an email?</span>
                        <br />
                        <br />
                        <h3>hello@headkino.com</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;