import React from 'react'
import classes from './Home.module.css'
import Laptop from '../Img/Laptop.svg'
import Construction from '../Img/Construction.jpg'
import Arrow from '../Img/Arrow.svg'

const Home = () => {
  return (
    <div className={classes.Home} id="Home">
      <div className={classes.Container}>
        <h1>
          Weston Isheim.
        </h1>
        <h1>
          Full-Stack Web Developer.
        </h1>
        <div className={classes.Btn}>
          <a href="#Projects">
            <button>
              View my Work
              <img className={classes.Arrow} src={Arrow} alt="Down Arrow" />
            </button>
          </a>
        </div>
      </div>
      <img className={classes.Construction} src={Construction} alt="Website Construction" />
      <img className={classes.Laptop} src={Laptop} alt="Phone with code symbol" />
    </div>
  )
}

export default Home