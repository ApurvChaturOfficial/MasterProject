import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import List from '../../../../../../cComponent/eLCRUD/aList';
import FinalRouteName from '../../../../../../gRoute/FinalRouteName'
import APIs from './extra/APIs';
import { Action } from './extra/State';

const PortfolioCardList = () => {
	// Redux
	const Redux = {
		state: useSelector((fullState) => fullState.PortfolioCardListState),
		dispatch: useDispatch(),
		action: Action,
	};

	// API Calls
	const APICalls = {
		PortfolioCardListAPICall: () => APIs.PortfolioCardListAPI(Redux)
	}

	// All Renders
	// First Render
	useEffect(() => {
		APICalls.PortfolioCardListAPICall()
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
						title: "Portfolio Card List",
						button: {
							title: "Create Portfolio Card",
							to: FinalRouteName.Content.Sidebar.Model.PortfolioCard.CreateRoute
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
						items: Redux.state.ReceivedObject.PortfolioCardList
					}
				}}
			/>
    </React.Fragment>
  )
}

export default PortfolioCardList