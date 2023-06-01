import React from 'react'
import { Link } from 'react-router-dom'
import FinalRouteName from '../../gRoute/FinalRouteName';
import Logo from "../../hAsset/aImage/beer2.png";
import styles from './index.module.css';
import { FaBeer } from 'react-icons/fa';

const Navigation = () => {
  // Inline Style
  const brandStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: "22px",
    display: 'flex',
    alignItems: 'center'
  }

  const logoImageStyle = {
    color: "#FF7F50",
    fontSize: "1.5em",
    rotate: "15deg"
  }

  const logoTextStyle = {
    marginLeft: '10px'
  }

  // JSX
  return (
    <nav className={`${styles.navbar} container`}>
    <Link style={brandStyle} to={FinalRouteName.Content.DashboardRoute} >
      <img src={Logo} alt="Logo" width="40px" />      
      <span style={logoTextStyle}>Gossipy</span>
    </Link>

  </nav>
)
}

export default Navigation