import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import List from '../../../../../../cComponent/eLCRUD/aList';
import FinalRouteName from '../../../../../../gRoute/FinalRouteName'
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
		EventListAPICall: () => APIs.EventListAPI(Redux)
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
			<List 
				data = {{
					header: {
						title: "Event List",
						button: {
							title: "Create Event",
							to: FinalRouteName.Content.Sidebar.Model.Event.CreateRoute
						}
					},
					list: {
						columns: [
							{title: "Image"},
							{title: "Title"},
							{title: "Sub Title"},
							{title: "Slug"},
							{title: "Status"},
							{title: ""},
						],
						items: Redux.state.ReceivedObject.EventList
					}
				}}
			/>
    </React.Fragment>
  )
}

export default EventList