import React, { FC } from 'react'
import './styles-new.css'
import Marquee from 'react-fast-marquee'

const HomeNew: FC = () => {
    return (
        <div className="App">
            <div className="background-image"></div>
            <div className="segment game-segment">
                <div className="content">
                    <img src="/ghost_01.png" alt="Rotating Ghost" className="ghost-image" />
                    <img
                        src="/HauntedCleaner_title_blk.png"
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
                            src="/webbg_01.jpg"
                            alt="Character Portrait"
                            className="preview-image"
                        />
                        <img
                            src="/webbg_02.jpg"
                            alt="Character Portrait"
                            className="preview-image"
                        />
                        <img
                            src="/image22.jpg"
                            alt="Character Portrait"
                            className="preview-image"
                        />
                    </div>

                    <img
                        src="/image59_b.png"
                        alt="Character Portrait"
                        className="character-image"
                    />
                </div>
            </div>
            <div className="segment company-segment">
                <div className='content'>
                    <h3>WELCOME TO OUR SITE!</h3>
                    <h1>WE ARE</h1>
                    <img src="Headkino_logo.png" alt="Headkino Logo" className="logo-image" />
                    <p>
                        Friends making game about ordinary people in a slightly extraordinary
                        situation.
                    </p>
                    <div className="social-icons">
                        <a href="https://headkino.itch.io/" target="_blank" rel="noopener noreferrer">
                            <img src="itchio-black.svg" alt="Itch.io" className="social-icon itch" />
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

            <div className="segment about-us-segment">
                <div className='content'>
                    <Marquee className="marquee-heading" direction='left'>
                        <span>Who Are We?</span>
                    </Marquee>
                    <h3 className='heading-team'>Meet the Team</h3>

                    <div className="image-container">
                        <div className="image-wrapper">
                            <img src="/profile_01_c.png" alt="Team Member Joy" />
                            <p className="name">Joy W</p>
                            <p>Cofounder - Art and Narrative</p>
                        </div>
                        <div className="image-wrapper">
                            <img src="/portrait_philipp.png" alt="Team Member Philipp" />
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
                        Feel free to connect:
                        <br />
                        <a
                            href="mailto:headkinogames@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fas fa-envelope social-icon small"></i>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HomeNew;