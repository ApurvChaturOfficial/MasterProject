import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import List from '../../../../../../cComponent/eLCRUD/aList';
import FinalRouteName from '../../../../../../gRoute/FinalRouteName'
import APIs from './extra/APIs';
import { Action } from './extra/State';

const ServiceList = () => {
	// Redux
	const Redux = {
		state: useSelector((fullState) => fullState.ServiceListState),
		dispatch: useDispatch(),
		action: Action,
	};

	// API Calls
	const APICalls = {
		ServiceListAPICall: () => APIs.ServiceListAPI(Redux)
	}

	// All Renders
	// First Render
	useEffect(() => {
		APICalls.ServiceListAPICall()
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
						title: "Service List",
						button: {
							title: "Create Service",
							to: FinalRouteName.Content.Sidebar.Model.Service.CreateRoute
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
						items: Redux.state.ReceivedObject.ServiceList
					}
				}}
			/>
    </React.Fragment>
  )
}

export default ServiceList