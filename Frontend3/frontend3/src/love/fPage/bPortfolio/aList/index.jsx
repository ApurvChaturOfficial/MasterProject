import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../../cComponent/aLayout/aHeader'
import Footer from '../../../cComponent/aLayout/bFooter'
import Navbar from '../../../cComponent/aLayout/cNavbar';
import Portfolio from '../../../cComponent/bPage/aLanding/ePortfolio'
import APIs from './extra/APIs';
import { Action } from './extra/State';

const PortfolioList = () => {
	// Redux
	const Redux = {
		state: useSelector((fullState) => fullState.PortfolioListState),
		dispatch: useDispatch(),
		action: Action,
	};

	// API Calls
	const APICalls = {
		PortfolioListAPICall: () => APIs.PortfolioListAPI(Redux),
	}

	// All Renders
	// First Render
	useEffect(() => {
		APICalls.PortfolioListAPICall()
	}, [])

	// Extra Render
	useEffect(() => {
		console.log(Redux.state)
	}, [Redux.state])
	
	// JSX
  return (
		Redux.state.ReceivedObject.PortfolioList &&
    <React.Fragment>
			<Navbar Redux={Redux} />
			<Header Redux={Redux.state.ReceivedObject.PortfolioList} />
			<Portfolio Redux={Redux} disable />
			<Footer />
    </React.Fragment>
  )
}

export default PortfolioList