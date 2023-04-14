import React, { useState } from 'react'
import './index.css';
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";



const Navbar = () => {
	// State Variables
	const [activeNav, setActiveNav] = useState('#')

	// JSX
	return (
		<nav>
			<a href='/#' className={activeNav === '#' ? 'active' : ''} onClick={() => setActiveNav('#')} ><AiOutlineHome /></a>
			<a href='#about' className={activeNav === '#about' ? 'active' : ''} onClick={() => setActiveNav('#about')} ><AiOutlineUser /></a>
			<a href='#experience' className={activeNav === '#experience' ? 'active' : ''} onClick={() => setActiveNav('#experience')} ><BiBook /></a>
			<a href='#service' className={activeNav === '#service' ? 'active' : ''} onClick={() => setActiveNav('#service')} ><RiServiceLine /></a>
			<a href='#contact' className={activeNav === '#contact' ? 'active' : ''} onClick={() => setActiveNav('#contact')} ><BiMessageSquareDetail /></a>
		</nav>
	)
}

export default Navbar