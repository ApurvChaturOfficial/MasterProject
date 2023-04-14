import React from 'react'
import './index.css';
import CTA from './extra/CTA'
import ME from '../../../../hAssets/me.png'
import ME1 from '../../../../hAssets/me.png'
import HeaderSocials from './extra/Socials'

const Home = ({Redux}) => {
	// Variables
	const object = Redux.state.ReceivedObject.HomeList

	// JSX
	return (
		object && 
		<header>
			<div class="container header__container">
				<h5>{object.title}</h5>
				<h1>{object.subTitle}</h1>
				<h4 class="text-light" >{object.description}</h4>

				<CTA object={object}/>
				<HeaderSocials object={object} />

				<div className="me">
					<img src={object.image.url} alt="" className="" />
				</div>
				
				<a href="#contact" className='scroll__down'>Scroll Down</a>
			</div>
		</header>
	)
}

export default Home