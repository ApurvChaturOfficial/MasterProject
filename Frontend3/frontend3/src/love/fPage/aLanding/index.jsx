import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../../cComponent/aLayout/bFooter'
import Navbar from '../../cComponent/aLayout/cNavbar';
import Home from '../../cComponent/bPage/aLanding/aHome'
import About from '../../cComponent/bPage/aLanding/bAbout'
import Experience from '../../cComponent/bPage/aLanding/cExperience'
import Service from '../../cComponent/bPage/aLanding/dService'
import Portfolio from '../../cComponent/bPage/aLanding/ePortfolio'
import Event from '../../cComponent/bPage/aLanding/fEvent';
import Blog from '../../cComponent/bPage/aLanding/gBlog';
import Testimonial from '../../cComponent/bPage/aLanding/hTestimonial';
import Contact from '../../cComponent/bPage/aLanding/iContact';
import APIs from './extra/APIs';
import { Action } from './extra/State';

const Landing = () => {
	// Redux
	const Redux = {
		state: useSelector((fullState) => fullState.LandingState),
		dispatch: useDispatch(),
		action: Action,
	};

	// API Calls
	const APICalls = {
		HomeListAPICall: () => APIs.HomeListAPI(Redux),
	}

	// All Renders
	// First Render
	useEffect(() => {
		APICalls.HomeListAPICall()
	}, [])

	// Extra Render
	useEffect(() => {
		console.log(Redux.state)
	}, [Redux.state])
	
	// JSX
	return (
		<React.Fragment>
			<Navbar Redux={Redux} />
			<Home Redux={Redux} />
			<About Redux={Redux} />
			<Experience Redux={Redux} />
			<Service Redux={Redux} />
			<Portfolio Redux={Redux} />
			<Event Redux={Redux} />
			<Blog Redux={Redux} />
			{/* <Testimonial Redux={Redux} /> */}
			{/* <Contact Redux={Redux} /> */}
			<Footer Redux={Redux} />
		</React.Fragment>
	)
}

export default Landing