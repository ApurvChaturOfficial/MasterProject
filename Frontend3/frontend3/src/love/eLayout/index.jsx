import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Footer from '../cComponent/aLayout/bFooter'
import Navbar from '../cComponent/aLayout/cNavbar'
import Loader from '../cComponent/cLoader'
import APIs from './extra/APIs'
import { Action } from './extra/State'

const Layout = () => {
  // Redux
	const Redux = {
		state: useSelector((fullState) => fullState.LayoutState),
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
		Redux.state.ExtraObject?.loading ?
			<Loader />
			:
			<React.Fragment>
				<Navbar Redux={Redux} />
				<Outlet />
				<Footer Redux={Redux} />
			</React.Fragment>
  )
}

export default Layout