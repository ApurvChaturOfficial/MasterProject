import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import List from '../../../../../../cComponent/eLCRUD/aList';
import FinalRouteName from '../../../../../../gRoute/FinalRouteName'
import APIs from './extra/APIs';
import { Action } from './extra/State';

const EventCardList = () => {
	// Redux
	const Redux = {
		state: useSelector((fullState) => fullState.EventCardListState),
		dispatch: useDispatch(),
		action: Action,
	};

	// API Calls
	const APICalls = {
		EventCardListAPICall: () => APIs.EventCardListAPI(Redux)
	}

	// All Renders
	// First Render
	useEffect(() => {
		APICalls.EventCardListAPICall()
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
						title: "Event Card List",
						button: {
							title: "Create Event Card",
							to: FinalRouteName.Content.Sidebar.Model.EventCard.CreateRoute
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
						items: Redux.state.ReceivedObject.EventCardList
					}
				}}
			/>
    </React.Fragment>
  )
}

export default EventCardList