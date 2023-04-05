import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import List from '../../../../../../cComponent/eLCRUD/aList';
import FinalRouteName from '../../../../../../gRoute/FinalRouteName'
import APIs from './extra/APIs';
import { Action } from './extra/State';

const AboutList = () => {
	// Redux
	const Redux = {
		state: useSelector((fullState) => fullState.AboutListState),
		dispatch: useDispatch(),
		action: Action,
	};

	// API Calls
	const APICalls = {
		AboutListAPICall: () => APIs.AboutListAPI(Redux)
	}

	// All Renders
	// First Render
	useEffect(() => {
		APICalls.AboutListAPICall()
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
						title: "About List",
						button: {
							title: "Create About",
							to: FinalRouteName.Content.Sidebar.Model.About.CreateRoute
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
						items: Redux.state.ReceivedObject.AboutList
					}
				}}
			/>
    </React.Fragment>
  )
}

export default AboutList