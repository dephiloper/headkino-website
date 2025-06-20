import React, { useState } from 'react'
import '../Home/styles.css'
import './styles.css'
import ScrollToTop from '../../components/scroll-to-top'
import { openContactForm } from '../../utils/openContactForm'
import Marquee from 'react-fast-marquee'
import FsLightbox from 'fslightbox-react'
import Navigation from '../../components/navigation'

const Games: React.FC = () => {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  })

  const openLightboxOnSlide = (slide: number) => {
    setLightboxController((prev) => ({
      toggler: !prev.toggler,
      slide,
    }))
  }

  const screenshots = [1, 2, 3, 4, 5, 6]
  const screenshotSources = screenshots.map((i) => `screen_0${i}.webp`)

  return (
    <>
      <ScrollToTop />
      <Navigation />
      <main className="games-page">
        <img
          src="/HauntedCleaner_title_blk.webp"
          alt="Game Title"
          className="game-title"
        />

        <section className="split-section">
          <div className="left-text-block">
            <div className="game-desc">
              <p className="game-lead">
                <span className="game-title-name">HAUNTED CLEANER</span> is a relaxing
                light puzzle and narrative game about tidying up and decorating the rooms
                of the deceased and unpacking the stories left behind. Play a psychic
                cleaner, meet diverse characters, explore different locations, and help
                lost spirits find peace!
              </p>
              <p className="game-status">
                <strong>CURRENTLY IN PRE-PRODUCTION</strong>
              </p>
              <p className="game-release">
                <strong>Planned release: 2026 Q3</strong>
              </p>
            </div>
          </div>

          <div className="right-bullet-points">
            <ul>
              <li>
                <strong>Cozy and relaxing</strong>
                <br />
                Meditative, Low pressure core experience, no “Lose States” or “Game Overs”
                allowing the player to play at their own pace.
              </li>
              <li>
                <strong>Self expression</strong>
                <br />
                Self expression through decoration, flexible puzzle solutions and
                organisation systems, supporting unique and shareable experiences.
              </li>
              <li>
                <strong>Unique stories</strong>
                <br />
                Meet diverse characters, explore different locations, reveal details of
                the story. Help lost spirits find peace
              </li>
              <li>
                <strong>Aesthetically pleasing</strong>
                <br />A stylized, low-poly aesthetic across distinct settings, including
                elements drawing from pre-2000s era, both nostalgic and atmospheric.
              </li>
            </ul>
          </div>
        </section>

        <Marquee className="marquee-banner" direction="left">
          <span className="no-select" onClick={openContactForm}>
            REACH OUT ✉️ !
          </span>
        </Marquee>

        <section className="centered-image-section">
          <img
            src="/characters_group.webp"
            alt="Character Portrait"
            className="centered-main-image"
          />
          <p className="caption">
            The player takes the role of Jones, a cleaner who can communicate with the
            deceased. Throughout the game clients seek help in tidying haunted locations
            and aiding trapped spirits to move on.
          </p>
        </section>

        <p className="screenshot-note">
          * Early in-game screens (prototype stage) - updates coming soon
        </p>

        <section className="screenshot-grid">
          {screenshots.map((i) => (
            <img
              key={i}
              src={`screen_0${i}.webp`}
              alt={`in-game screenshot ${i}`}
              className="screenshot-img flash-image"
              onClick={() => openLightboxOnSlide(i)}
            />
          ))}

          <FsLightbox
            toggler={lightboxController.toggler}
            sources={screenshotSources}
            slide={lightboxController.slide}
          />
        </section>
      </main>
    </>
  )
}

export default Games
