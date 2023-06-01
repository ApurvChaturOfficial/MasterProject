import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Action } from "./extra/State";
import APIs from "./extra/APIs";
import FinalRouteName from "../../gRoute/FinalRouteName";


const ContentLayout = (props) => {
	// Variables
	const navigate = useNavigate()

	// Redux
	const Redux = {
		state: useSelector((fullState) => fullState.ContentLayoutState),
		dispatch: useDispatch(),
		action: Action,
	};

	// API Calls
	const APICalls = {
		ProfileRetrieveAPICall: () => APIs.ProfileRetrieveAPI(Redux, navigate),
		LogoutAPICall: () => APIs.LogoutAPI(Redux, navigate)
	}

	// All Renders
	// First Render
	useEffect(() => {
		APICalls.ProfileRetrieveAPICall()
	}, [])

	// Extra Render
	useEffect(() => {
		console.log(Redux.state)
	}, [Redux.state])

	// JSX
	return (
		<React.Fragment>
			<div class="form-container" style={{textAlign: 'center', alignContent: 'center'}}>

				<img src={Redux.state.ReceivedObject?.ProfileRetrieve?.image?.url} alt="profile" width={"100px"} />
				<h4>{Redux.state.ReceivedObject?.ProfileRetrieve?.first_name} {Redux.state.ReceivedObject?.ProfileRetrieve?.last_name}</h4>
				<h4>{Redux.state.ReceivedObject?.ProfileRetrieve?.email}</h4>

				<button onClick={() => APICalls.LogoutAPICall()} >Logout</button>
				<p>
					Change profile details <Link to={FinalRouteName.Content.Profile.UpdateRoute} >Edit Profile</Link>
				</p>
				<p>
					Change profile password <Link to={FinalRouteName.Content.Profile.UpdatePasswordRoute}>Change Password</Link>
				</p>

				
			</div>

			<Outlet />
		</React.Fragment>
	);
};

export default ContentLayout;
