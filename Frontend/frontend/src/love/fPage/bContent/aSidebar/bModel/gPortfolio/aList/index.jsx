import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import List from '../../../../../../cComponent/eLCRUD/aList';
import FinalRouteName from '../../../../../../gRoute/FinalRouteName'
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
		PortfolioListAPICall: () => APIs.PortfolioListAPI(Redux)
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
    <React.Fragment>
			<List 
				data = {{
					header: {
						title: "Portfolio List",
						button: {
							title: "Create Portfolio",
							to: FinalRouteName.Content.Sidebar.Model.Portfolio.CreateRoute
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
						items: Redux.state.ReceivedObject.PortfolioList
					}
				}}
			/>
    </React.Fragment>
  )
}

export default PortfolioList