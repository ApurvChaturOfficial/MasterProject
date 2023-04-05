import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import List from '../../../../../../cComponent/eLCRUD/aList';
import FinalRouteName from '../../../../../../gRoute/FinalRouteName'
import APIs from './extra/APIs';
import { Action } from './extra/State';

const BaseList = () => {
	// Redux
	const Redux = {
		state: useSelector((fullState) => fullState.BaseListState),
		dispatch: useDispatch(),
		action: Action,
	};

	// API Calls
	const APICalls = {
		BaseListAPICall: () => APIs.BaseListAPI(Redux)
	}

	// All Renders
	// First Render
	useEffect(() => {
		APICalls.BaseListAPICall()
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
						title: "Base List",
						button: {
							title: "Create Base",
							to: FinalRouteName.Content.Sidebar.Setting.Base.CreateRoute
						}
					},
					list: {
						columns: [
							{title: "Title"},
							{title: "Sub Title"},
							{title: "Slug"},
							{title: "Status"},
							{title: ""},
						],
						items: Redux.state.ReceivedObject.BaseList
					}
				}}
			/>
    </React.Fragment>
  )
}

export default BaseList