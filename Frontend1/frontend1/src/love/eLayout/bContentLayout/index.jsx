import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import Clock from 'react-live-clock';
import Sidebar from "../../cComponent/bSidebar/Sidebar";
import Topbar from "../../cComponent/aTopbar";
import { useDispatch, useSelector } from "react-redux";
import { Action } from "./extra/State";
import APIs from "./extra/APIs";


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
		UserProfileRetrieveAPICall: () => APIs.UserProfileRetrieveAPI(Redux, navigate)
	}

	// All Renders
	// First Render
	useEffect(() => {
		APICalls.UserProfileRetrieveAPICall()
	}, [])

	// Extra Render
	useEffect(() => {
		// console.log(Redux.state)
	}, [Redux.state])

	// JSX
	return (
		<div class="container-xxl position-relative bg-white d-flex p-0">
			<Sidebar Redux={Redux} />
			<div class="content">
				<Topbar Redux1={Redux} />

				<Outlet />
			</div>
			<a href="/#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
		</div>
	);
};

export default ContentLayout;
