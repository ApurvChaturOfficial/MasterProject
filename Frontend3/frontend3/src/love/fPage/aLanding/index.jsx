import React, { useEffect } from 'react'
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


const Landing = ({Redux1}) => {
	// JSX
	return (
		<React.Fragment>
			<Home Redux={Redux1} />
			<About Redux={Redux1} />
			<Experience Redux={Redux1} />
			<Service Redux={Redux1} />
			<Portfolio Redux={Redux1} />
			<Event Redux={Redux1} />
			<Blog Redux={Redux1} />
			{/* <Testimonial Redux={Redux1} /> */}
			{/* <Contact Redux={Redux1} /> */}
		</React.Fragment>
	)
}

export default Landing