import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/dibble1.png'
import IMG2 from '../../assets/dribble2.png'
import IMG3 from '../../assets/dribble3.png'
import IMG4 from '../../assets/dribble4.png'
import IMG5 from '../../assets/dribble5.png'
import IMG6 from '../../assets/dibble1.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="portfolio1" />
          </div>
          <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="https://www.github.com" className="btn" target='__blank'>Github</a>
              <a href="https://dribble.com" className="btn btn-primary" target='__blank'>Live Demo</a>
            </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="portfolio1" />
          </div>
          <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="https://www.github.com" className="btn" target='__blank'>Github</a>
              <a href="https://dribble.com" className="btn btn-primary" target='__blank'>Live Demo</a>
            </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="portfolio1" />
          </div>
          <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="https://www.github.com" className="btn" target='__blank'>Github</a>
              <a href="https://dribble.com" className="btn btn-primary" target='__blank'>Live Demo</a>
            </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="portfolio1" />
          </div>
          <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="https://www.github.com" className="btn" target='__blank'>Github</a>
              <a href="https://dribble.com" className="btn btn-primary" target='__blank'>Live Demo</a>
            </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="portfolio1" />
          </div>
          <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="https://www.github.com" className="btn" target='__blank'>Github</a>
              <a href="https://dribble.com" className="btn btn-primary" target='__blank'>Live Demo</a>
            </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="portfolio1" />
          </div>
          <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="https://www.github.com" className="btn" target='__blank'>Github</a>
              <a href="https://dribble.com" className="btn btn-primary" target='__blank'>Live Demo</a>
            </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio