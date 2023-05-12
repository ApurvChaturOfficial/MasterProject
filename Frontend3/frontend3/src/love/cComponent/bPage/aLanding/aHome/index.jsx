import React from 'react'
import './index.css';
import {BsInstagram, BsLinkedin} from 'react-icons/bs'
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { RiTwitterFill } from 'react-icons/ri';
import { BiLink } from "react-icons/bi";


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
							return (
								<a href={each.url} target="_blank" rel='noreferrer' >
									{
										each.icon === "github" ? <FaGithub /> :
										each.icon === "linkedin" ? <BsLinkedin /> :
										each.icon === "facebook" ? <FaFacebookF /> :
										each.icon === "instagram" ? <BsInstagram /> :
										each.icon === "twitter" ? <RiTwitterFill /> : <BiLink />
									}
								</a>
							)
						})
					}
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