import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/dibble1.png'
import IMG2 from '../../assets/dribble2.png'
import IMG3 from '../../assets/dribble3.png'
import IMG4 from '../../assets/dribble4.png'
import IMG5 from '../../assets/dribble5.png'
import IMG6 from '../../assets/dibble1.png'

  const data = [
    {
      id: 1,
      image: IMG1,
      title: 'Crypto Currency Dashboard & Financial Virtualization',
      github: 'https://www.github.com',
      demo: 'https://dribbble.com/shots/18927954-Open-Tech-Week-3D-Animation'
    },
    {
      id: 2,
      image: IMG2,
      title: 'Crypto Currency Dashboard & Financial Virtualization',
      github: 'https://www.github.com',
      demo: 'https://dribbble.com/shots/18927954-Open-Tech-Week-3D-Animation'
    },
    {
      id: 3,
      image: IMG3,
      title: 'Crypto Currency Dashboard & Financial Virtualization',
      github: 'https://www.github.com',
      demo: 'https://dribbble.com/shots/18927954-Open-Tech-Week-3D-Animation'
    },
    {
      id: 4,
      image: IMG4,
      title: 'Crypto Currency Dashboard & Financial Virtualization',
      github: 'https://www.github.com',
      demo: 'https://dribbble.com/shots/18927954-Open-Tech-Week-3D-Animation'
    },
    {
      id: 5,
      image: IMG5,
      title: 'Crypto Currency Dashboard & Financial Virtualization',
      github: 'https://www.github.com',
      demo: 'https://dribbble.com/shots/18927954-Open-Tech-Week-3D-Animation'
    },
    {
      id: 6,
      image: IMG6,
      title: 'Crypto Currency Dashboard & Financial Virtualization',
      github: 'https://www.github.com',
      demo: 'https://dribbble.com/shots/18927954-Open-Tech-Week-3D-Animation'
    }
  ]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo})=>{
            return(
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target='__blank'>Github</a>
                  <a href={demo} className="btn btn-primary" target='__blank'>Live Demo</a>
                </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio