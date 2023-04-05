import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import List from '../../../../../../cComponent/eLCRUD/aList';
import FinalRouteName from '../../../../../../gRoute/FinalRouteName'
import APIs from './extra/APIs';
import { Action } from './extra/State';

const HomeList = () => {
	// Redux
	const Redux = {
		state: useSelector((fullState) => fullState.HomeListState),
		dispatch: useDispatch(),
		action: Action,
	};

	// API Calls
	const APICalls = {
		HomeListAPICall: () => APIs.HomeListAPI(Redux)
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
    <React.Fragment>
			<List 
				data = {{
					header: {
						title: "Home List",
						button: {
							title: "Create Home",
							to: FinalRouteName.Content.Sidebar.Model.Home.CreateRoute
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
						items: Redux.state.ReceivedObject.HomeList
					}
				}}
			/>
    </React.Fragment>
  )
}

export default HomeList