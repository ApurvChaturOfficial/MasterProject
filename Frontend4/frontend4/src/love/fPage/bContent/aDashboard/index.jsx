import React from 'react'
import { FaArrowRight, FaBeer } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import FinalRouteName from '../../../gRoute/FinalRouteName';
import Logo from '../../../hAsset/aImage/beer2.png'
import styles from "./index.module.css";

const Dashboard = () => {
  // JSX
  return (
    <div className={styles.card}>
      <div className={styles.headingWrapper}>
        <img src={Logo} alt="logo"  width="40px" />
        <h1>Welcome to Gossipy!</h1>
      </div>

      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
    
      <div>
        <button>
          <span>Get Your Username</span>
          <FaArrowRight />
        </button>
      </div>

      <div>
        <span>Have an invite text?</span>
        <Link to={FinalRouteName.Auth.LoginRegister.LoginRoute}>Sign In</Link>
      </div>
    </div>
  )
}

export default Dashboard