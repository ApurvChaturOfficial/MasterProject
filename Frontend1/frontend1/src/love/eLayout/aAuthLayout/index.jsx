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
    <div className="container-xxl position-relative bg-white d-flex p-0">
        <div className="container-fluid">
            <div className="row h-100 align-items-center justify-content-center" style={{ minHeight: "100vh"}}>
                <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                    <Outlet />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AuthLayout