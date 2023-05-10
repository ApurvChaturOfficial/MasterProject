import React from 'react'
import './index.css';
import {BsInstagram, BsLinkedin} from 'react-icons/bs'
import { FaGithub } from "react-icons/fa";

const Home = ({Redux}) => {
	// Variables
	const object = Redux?.state?.ReceivedObject?.HomeList

	// JSX
	return (
		object && 
		<header>
			<div class="container header__container">
				<h5>{object.title}</h5>
				<h1>{object.subTitle}</h1>
				<h4 class="text-light" >{object.description}</h4>

				<div className='cta' >
					<a href={object.resume.url} download target='_blank' className='btn' rel="noreferrer" >Download CV</a>
					<a href='#contact'  className='btn btn-primary' >Let's Talk</a>
				</div>

				<div className='header__socials' >
					{object.links &&
						object.links.map(each => {
							const Icon = each.icon
							return (
								<a href={each.url} target="_blank" rel='noreferrer' ><Icon /></a>
							)
						})
					}
					<a href='https://linkedin.com' target="_blank" rel='noreferrer'  ><BsLinkedin /></a>
					<a href='https://linkedin.com' target="_blank" rel='noreferrer' ><FaGithub /></a>
					<a href='https://linkedin.com' target="_blank" rel='noreferrer' ><BsInstagram /></a>
				</div>

				<div className="me">
					<img src={object.image.url} alt="" className="" />
				</div>
				
				<a href="#contact" className='scroll__down'>Scroll Down</a>
			</div>
		</header>
	)
}

export default Home