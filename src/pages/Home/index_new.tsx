import React, { FC } from 'react';
import './styles-new.css';
import Marquee from 'react-fast-marquee';

const HomeNew: FC = () => {
    return (
        <div className="App">
            <div className="background-image"></div>
            <div className="segment game-segment">
                <div className="content">
                    <img src="/ghost_01.png" alt="Rotating Ghost" className="ghost-image" />
                    <img src="/HauntedCleaner_title_blk.png" alt="Game Title" className="game-title" />
                    <p className="game-description">
                        <span>HAUNTED CLEANER</span> is a relaxing light puzzle and narrative game about tidying up the rooms of the deceased and uncovering the stories left behind.
                        <br />
                        <br />
                        Imagine <span>UNPACKING</span> but set in a haunted location.
                        <br />
                        <br />
                        IN DEVELOPMENT
                        <br />
                        Planned release:
                        <br />
                        2026 Q3
                    </p>
                    <Marquee className='marquee'>
                        <span>
                            WISHLIST NOW!!
                        </span>
                    </Marquee>
                    <img src="/image59_b.png" alt="Character Portrait" className="character-image" />

                </div>
            </div>
            <div className="segment headkino-segment"></div>
            <div className="segment about-us-segment"></div>
        </div>
    );
};

export default HomeNew;
