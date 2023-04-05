import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import List from '../../../../../../cComponent/eLCRUD/aList';
import FinalRouteName from '../../../../../../gRoute/FinalRouteName'
import APIs from './extra/APIs';
import { Action } from './extra/State';

const BlogList = () => {
	// Redux
	const Redux = {
		state: useSelector((fullState) => fullState.BlogListState),
		dispatch: useDispatch(),
		action: Action,
	};

	// API Calls
	const APICalls = {
		BlogListAPICall: () => APIs.BlogListAPI(Redux)
	}

	// All Renders
	// First Render
	useEffect(() => {
		APICalls.BlogListAPICall()
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
						title: "Blog List",
						button: {
							title: "Create Blog",
							to: FinalRouteName.Content.Sidebar.Model.Blog.CreateRoute
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
						items: Redux.state.ReceivedObject.BlogList
					}
				}}
			/>
    </React.Fragment>
  )
}

export default BlogList