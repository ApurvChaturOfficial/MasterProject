import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../../cComponent/aLayout/aHeader'
import Footer from '../../../cComponent/aLayout/bFooter'
import Blog from '../../../cComponent/bPage/aLanding/gBlog';
import APIs from './extra/APIs';
import { Action } from './extra/State';

const BlogList = () => {
	// Redux
	const Redux = {
		state: useSelector((fullState) => fullState.BlogListState),
		dispatch: useDispatch(),
		action: Action,
	};

	// API Calls
	const APICalls = {
		BlogListAPICall: () => APIs.BlogListAPI(Redux),
	}

	// All Renders
	// First Render
	useEffect(() => {
		APICalls.BlogListAPICall()
	}, [])

	// Extra Render
	useEffect(() => {
		console.log(Redux.state)
	}, [Redux.state])
	
	// JSX
  return (
    <React.Fragment>
			<Header heading={"My Blogs"} />
			<Blog Redux={Redux} disable />
			<Footer />
    </React.Fragment>
  )
}

export default BlogList