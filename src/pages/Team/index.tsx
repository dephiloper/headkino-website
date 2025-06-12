import React from 'react'
import '../Home/styles.css'
import './styles.css'
import Navigation from '../../components/navigation'
import Marquee from 'react-fast-marquee'
import { openContactForm } from '../../utils/openContactForm'
import ScrollToTop from '../../components/scroll-to-top'

const Team: React.FC = () => {
  return (
    <div>
      <ScrollToTop />
      <Navigation />
      <div className="team-page">
        <div className="content">
          <Marquee className="marquee-heading" direction="left" speed={20}>
            <span>We Are HeadKino</span>
          </Marquee>

          <div className="team-info">
            {/* Left side: portrait_j */}
            <div className="member-section">
              <div className="image-column">
                <img src="/portrait_j.webp" alt="Portrait J" />
                <p className="image-caption">
                  <span className="portrait-name">Joy W</span>
                  <span className="portrait-role">
                    Cofounder - Art and Narrative Design
                  </span>
                </p>
              </div>
              <p className="description-text">
                Multidisciplinary game artist with over 10 years of experience, including
                7+ years specializing in game asset and concept creation Also a published
                comic artist.
              </p>
            </div>

            {/* Right side: portrait_p */}
            <div className="member-section reverse">
              <div className="image-column">
                <img src="/portrait_p.webp" alt="Portrait P" />
                <p className="image-caption">
                  <span className="portrait-name">Philipp B</span>
                  <span className="portrait-role">
                    Cofounder - Programming and Game Design
                  </span>
                </p>
              </div>
              <p className="description-text">
                Experienced game developer with over 9 years of programming experience and
                more than 4 years in the games industry, specializing in gameplay and tool
                development. Taught introductory game development courses in a university
                Master`s program.
              </p>
            </div>
          </div>
          <div className="company-info">
            <h2>How did it start?</h2>
            <p>
              Haunted Cleaner began as a part-time hobby project, the concept of which
              originated in early 2024 when we agreed to collaborate to make a personally
              meaningful game and sharpen our development skills to bring our vision to
              life. The game idea took shape as we continued to explore our working
              dynamic as a team and the potential for making the co-operation more
              permanent. This is when the idea of HeadKino Games came together.{' '}
            </p>

            <h2>How do we work together?</h2>
            <p>
              Joy`s art and design background sets her up to lead the creative direction
              of the project, while Philipp takes on the technical development. The
              project strategy, management, business vision and administration work is a
              shared responsibility, with Joy focusing on marketing, promotion and studio
              concept and Philipp focusing on legal and financial management.
            </p>

            <h2>Vision</h2>
            <p>
              Create inspiring and beautiful games that tell meaningful, down-to-earth,
              diverse and relatable stories with elements of fantastical mystery that
              affect and captivate players.
            </p>
            <span>Reach out to us</span>
            <br />
            <i
              onClick={() => openContactForm()}
              className="fas fa-envelope social-icon small"
            ></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
