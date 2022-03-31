import React from 'react'
import classes from './Home.module.css'
import Laptop from '../Img/Laptop.svg'
import Construction from '../Img/Construction.jpg'
import DownArrow from '../Img/DownArrow.svg'

const Home = () => {
  return (
    <div className={classes.Home} id="Home">
      <div className={classes.Container}>
        <h1>
          Welcome! My name is Weston Isheim.
        </h1>
        <h1>
          I am a Full-Stack web devloper.
        </h1>
        <div className={classes.Btn}>
          <a href="#Projects">
            <button>
              View my Work
              <img className={classes.Arrow} src={DownArrow} alt="Down Arrow" />
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