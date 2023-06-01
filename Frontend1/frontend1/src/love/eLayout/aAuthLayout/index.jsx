import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom'
import APIs from './extra/APIs';
import { Action } from './extra/State';

const AuthLayout = () => {
  // Variables
	const navigate = useNavigate()

	// Redux
	const Redux = {
		state: useSelector((fullState) => fullState.AuthLayoutState),
		dispatch: useDispatch(),
		action: Action,
	};

	// API Calls
	const APICalls = {
		UserProfileRetrieveAPICall: () => APIs.UserProfileRetrieveAPI(Redux, navigate)
	}

	// All Renders
	// First Render
	useEffect(() => {
		APICalls.UserProfileRetrieveAPICall()
	}, [])

	// Extra Render
	useEffect(() => {
		console.log(Redux.state)
	}, [Redux.state])


  return (
    <Outlet />
  )
}

export default AuthLayout