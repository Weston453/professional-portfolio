import React from 'react'
import classes from './Home.module.css'
import { FaChevronDown } from "react-icons/fa";
// import Laptop from '../Img/Laptop.svg'
import Construction from '../Img/Construction.jpg'

const Home = () => {
  return (
    <div className={classes.Home} id="Home">
      <div className={classes.Container}>
        <h1 className={classes.Name}>
          Weston Isheim.
        </h1>
        <h1 className={classes.Title}>
          Full-Stack Web Developer.
        </h1>
        <div className={classes.Btn}>
          <a href="#Projects">
            <button>
              View my work
              <FaChevronDown size="15px" className={classes.Arrow}/>
            </button>
          </a>
        </div>
      </div>
      {/* <img className={classes.Laptop} src={Laptop} alt="Phone with code symbol" /> */}
      <img className={classes.Construction} src={Construction} alt="Website Construction" />
    </div>
  )
}

export default Home