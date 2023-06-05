import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../../cComponent/aLayout/aHeader'
import Portfolio from '../../../cComponent/bPage/aLanding/ePortfolio'
import Loader from '../../../cComponent/cLoader';
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
		Redux.state.ExtraObject?.loading ?
			<Loader />
			:
			Redux.state.ReceivedObject.PortfolioList &&
			<React.Fragment>
				<Header heading={Redux.state.ReceivedObject.PortfolioList.subTitle} />
				<Portfolio Redux={Redux} disable />
			</React.Fragment>
  )
}

export default PortfolioList