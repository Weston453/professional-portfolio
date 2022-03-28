import React from 'react'
import classes from './Home.module.css'
import Laptop from '../Img/Laptop.svg'
import Construction from '../Img/Construction.jpg'

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
          <a href="#About"><button>View my Work</button></a>
        </div>
      </div>
      <img className={classes.Construction} src={Construction} alt="Website Construction" />
      <img className={classes.Laptop} src={Laptop} alt="Phone with code symbol" />
    </div>
  )
}

export default Home