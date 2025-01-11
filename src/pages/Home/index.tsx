import React, { FC, useState } from 'react'
import './styles.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

const Home: FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="right-side">
          <h3>WELCOME TO OUR SITE</h3>
          <hr />
          <h1>WE ARE</h1>
          <hr />
          <img src="Headkino_logo.png" alt="Headkino Logo" className="logo-image" />
          <p>
            2 friends making game about ordinary people in a slightly extraordinary
            situation.
          </p>
          <div className="social-icons">
            <a href="https://itch.io" target="_blank" rel="noopener noreferrer">
              <img src="itchio-black.svg" alt="Itch.io" className="social-icon itch" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram social-icon"></i>
            </a>
            <a href="https://threads.net" target="_blank" rel="noopener noreferrer">
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
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-tiktok social-icon"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin social-icon"></i>
            </a>
            <a
              href="mailto:headkinogames@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-envelope social-icon"></i>
            </a>
          </div>
        </div>
        <img src="game_scene.png" alt="Game Scene" className="half-page-image" />
        <div className='ghost-container'>
          <img src="ghost_01.png" alt="Ghost" className="floating-ghost" />
        </div>
      </header>
    </div>
  )
}

export default Home
