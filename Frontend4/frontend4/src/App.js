import React, { useEffect } from 'react';
import "./App.css"
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthLayout from './love/eLayout/aAuthLayout';
import ContentLayout from './love/eLayout/bContentLayout';
import { Action } from './love/eLayout/bContentLayout/extra/State';
import GlobalLayout from './love/eLayout/cGlobalLayout';
import Login from './love/fPage/aAuth/aLoginRegister/aLogin';
import Register from './love/fPage/aAuth/aLoginRegister/bRegister';
import Dashboard from './love/fPage/bContent/aDashboard';
import RouteName from './love/gRoute/RouteName';

function App() {
  // Redux
	const Redux = {
		state: useSelector((fullState) => fullState.ContentLayoutState),
		dispatch: useDispatch(),
		action: Action,
	};

  // JSX
  return (
		<BrowserRouter>
			<React.Fragment>
				<Routes>
					<Route element={<GlobalLayout />} >
						<Route element={<AuthLayout />}>
							<Route element={<Login />} path={RouteName.Auth.LoginRegister.LoginRoute} />
							<Route element={<Register />} path={RouteName.Auth.LoginRegister.RegisterRoute} />
						</Route>

						<Route element={<ContentLayout />}>
							<Route element={<Dashboard />} path={RouteName.Content.DashboardRoute} />
						</Route>
					</Route>
				</Routes>
			</React.Fragment>
		</BrowserRouter>
  );
}

export default App;
