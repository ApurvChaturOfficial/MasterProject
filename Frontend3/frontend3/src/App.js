import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './love/fPage/aLanding';
import PortfolioList from './love/fPage/bPortfolio/aList';
import PortfolioRetrieve from './love/fPage/bPortfolio/bRetrieve';
import EventList from './love/fPage/cEvent/aList';
import EventRetrieve from './love/fPage/cEvent/bRetrieve';
import BlogList from './love/fPage/dBlog/aList';
import BlogRetrieve from './love/fPage/dBlog/bRetrieve';
import RouteName from './love/gRoute/RouteName';


function App() {
    return (
		<BrowserRouter>
			<React.Fragment>
				<Routes>
					<Route element={<Landing />} path="" />
					
					<Route path={`portfolio/${RouteName.Portfolio.ListRoute}`} >
						<Route element={<PortfolioList />} index />
						<Route element={<PortfolioRetrieve />} path={`${RouteName.Portfolio.RetrieveRoute}/:id`} />
					</Route>
					
					<Route path={`event/${RouteName.Event.ListRoute}`} >
						<Route element={<EventList />} index />
						<Route element={<EventRetrieve />} path={`${RouteName.Event.RetrieveRoute}/:id`} />
					</Route>
					
					<Route path={`blog/${RouteName.Blog.ListRoute}`} >
						<Route element={<BlogList />} index />
						<Route element={<BlogRetrieve />} path={`${RouteName.Blog.RetrieveRoute}/:id`} />
					</Route>
					
				</Routes>
			</React.Fragment>
		</BrowserRouter>
	);
}

export default App;
