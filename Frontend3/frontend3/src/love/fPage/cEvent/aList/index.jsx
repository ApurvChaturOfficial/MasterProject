import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../../cComponent/aLayout/aHeader'
import Footer from '../../../cComponent/aLayout/bFooter'
import Event from '../../../cComponent/bPage/aLanding/fEvent';
import Loader from '../../../cComponent/cLoader';
import APIs from './extra/APIs';
import { Action } from './extra/State';

const EventList = ({ Redux1 }) => {
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
		Redux.state.ExtraObject?.loading ?
		<Loader />
		:
		Redux.state.ReceivedObject.EventList &&
    <React.Fragment>
			<Header heading={Redux.state.ReceivedObject.EventList.subTitle} />
			<Event Redux={Redux} disable />
    </React.Fragment>
  )
}

export default EventList