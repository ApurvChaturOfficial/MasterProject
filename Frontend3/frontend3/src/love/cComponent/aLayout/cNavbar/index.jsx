import React, { useState } from 'react'
import './index.css';
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import FinalRouteName from '../../../gRoute/FinalRouteName';
import { HashLink } from 'react-router-hash-link';


const Navbar = () => {
	// State Variables
	const [activeNav, setActiveNav] = useState('#')

	// JSX
	return (
		<nav>
			<HashLink to={`${FinalRouteName.Home.HomeRoute}#`} className={activeNav === '#' ? 'active' : ''} onClick={() => setActiveNav('#')} ><AiOutlineHome /></HashLink>
			<HashLink to={`${FinalRouteName.Home.HomeRoute}#about`} className={activeNav === '#about' ? 'active' : ''} onClick={() => setActiveNav('#about')} ><AiOutlineUser /></HashLink>
			<HashLink to={`${FinalRouteName.Home.HomeRoute}#experience`} className={activeNav === '#experience' ? 'active' : ''} onClick={() => setActiveNav('#experience')} ><BiBook /></HashLink>
			<HashLink to={`${FinalRouteName.Home.HomeRoute}#service`} className={activeNav === '#service' ? 'active' : ''} onClick={() => setActiveNav('#service')} ><RiServiceLine /></HashLink>
			<HashLink to={`${FinalRouteName.Home.HomeRoute}#contact`} className={activeNav === '#contact' ? 'active' : ''} onClick={() => setActiveNav('#contact')} ><BiMessageSquareDetail /></HashLink>
		</nav>
	)
}

export default Navbar