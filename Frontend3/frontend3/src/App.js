import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './love/eLayout';
import { Action } from './love/eLayout/extra/State';
import Landing from './love/fPage/aLanding';
import PortfolioList from './love/fPage/bPortfolio/aList';
import PortfolioRetrieve from './love/fPage/bPortfolio/bRetrieve';
import EventList from './love/fPage/cEvent/aList';
import EventRetrieve from './love/fPage/cEvent/bRetrieve';
import BlogList from './love/fPage/dBlog/aList';
import BlogRetrieve from './love/fPage/dBlog/bRetrieve';
import RouteName from './love/gRoute/RouteName';


function App() {
	// Redux
	const Redux = {
		state: useSelector((fullState) => fullState.LayoutState),
		dispatch: useDispatch(),
		action: Action,
	};

	// JSX
	return (
		<BrowserRouter>
			<React.Fragment>
				<Routes>
					<Route element={<Layout />}>
						<Route element={<Landing Redux1={Redux} />} path="" />
						
						<Route path={`portfolio`} >
							<Route element={<PortfolioList />} Redux1={Redux} path={`${RouteName.Portfolio.ListRoute}`} />
							<Route element={<PortfolioRetrieve />} Redux1={Redux} path={`${RouteName.Portfolio.RetrieveRoute}/:id`} />
						</Route>
						
						<Route path={`event`} >
							<Route element={<EventList />} Redux1={Redux} path={`${RouteName.Event.ListRoute}`} />
							<Route element={<EventRetrieve />} Redux1={Redux} path={`${RouteName.Event.RetrieveRoute}/:id`} />
						</Route>
						
						<Route path={`blog`} >
							<Route element={<BlogList />} Redux1={Redux} path={`${RouteName.Blog.ListRoute}`} />
							<Route element={<BlogRetrieve />} Redux1={Redux} path={`${RouteName.Blog.RetrieveRoute}/:id`} />
						</Route>
					</Route>
				</Routes>
			</React.Fragment>
		</BrowserRouter>
	);
}

export default App;
