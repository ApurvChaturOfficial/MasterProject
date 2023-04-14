import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../../cComponent/aLayout/aHeader'
import Footer from '../../../cComponent/aLayout/bFooter'
import Event from '../../../cComponent/bPage/aLanding/fEvent';
import APIs from './extra/APIs';
import { Action } from './extra/State';

const EventList = () => {
	// Redux
	const Redux = {
		state: useSelector((fullState) => fullState.EventListState),
		dispatch: useDispatch(),
		action: Action,
	};

	// API Calls
	const APICalls = {
		EventListAPICall: () => APIs.EventListAPI(Redux),
	}

	// All Renders
	// First Render
	useEffect(() => {
		APICalls.EventListAPICall()
	}, [])

	// Extra Render
	useEffect(() => {
		console.log(Redux.state)
	}, [Redux.state])
	
	// JSX
  return (
    <React.Fragment>
			<Header heading={"My Events"} />
			<Event Redux={Redux} disable />
			<Footer />
    </React.Fragment>
  )
}

export default EventList