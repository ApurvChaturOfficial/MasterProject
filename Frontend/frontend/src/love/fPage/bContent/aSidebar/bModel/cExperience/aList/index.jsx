import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import List from '../../../../../../cComponent/eLCRUD/aList';
import FinalRouteName from '../../../../../../gRoute/FinalRouteName'
import APIs from './extra/APIs';
import { Action } from './extra/State';

const ExperienceList = () => {
	// Redux
	const Redux = {
		state: useSelector((fullState) => fullState.ExperienceListState),
		dispatch: useDispatch(),
		action: Action,
	};

	// API Calls
	const APICalls = {
		ExperienceListAPICall: () => APIs.ExperienceListAPI(Redux)
	}

	// All Renders
	// First Render
	useEffect(() => {
		APICalls.ExperienceListAPICall()
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
						title: "Experience List",
						button: {
							title: "Create Experience",
							to: FinalRouteName.Content.Sidebar.Model.Experience.CreateRoute
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
						items: Redux.state.ReceivedObject.ExperienceList
					}
				}}
			/>
    </React.Fragment>
  )
}

export default ExperienceList