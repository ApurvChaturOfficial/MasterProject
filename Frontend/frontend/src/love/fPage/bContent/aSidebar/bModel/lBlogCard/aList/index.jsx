import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import List from '../../../../../../cComponent/eLCRUD/aList';
import FinalRouteName from '../../../../../../gRoute/FinalRouteName'
import APIs from './extra/APIs';
import { Action } from './extra/State';

const BlogCardList = () => {
	// Redux
	const Redux = {
		state: useSelector((fullState) => fullState.BlogCardListState),
		dispatch: useDispatch(),
		action: Action,
	};

	// API Calls
	const APICalls = {
		BlogCardListAPICall: () => APIs.BlogCardListAPI(Redux)
	}

	// All Renders
	// First Render
	useEffect(() => {
		APICalls.BlogCardListAPICall()
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
						title: "Blog Card List",
						button: {
							title: "Create Blog Card",
							to: FinalRouteName.Content.Sidebar.Model.BlogCard.CreateRoute
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
						items: Redux.state.ReceivedObject.BlogCardList
					}
				}}
			/>
    </React.Fragment>
  )
}

export default BlogCardList