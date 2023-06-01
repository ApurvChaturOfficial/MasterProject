import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageNotFoundCard from '../love/cComponent/ePageNotFoundCard';
import AuthLayout from '../love/eLayout/aAuthLayout';
import ContentLayout from '../love/eLayout/bContentLayout';
import { Action } from '../love/eLayout/bContentLayout/extra/State';
import Login from '../love/fPage/aAuth/aLoginRegister/aLogin';
import Register from '../love/fPage/aAuth/aLoginRegister/bRegister';
import ForgotPassword from '../love/fPage/aAuth/bForgotResetPassword/aForgotPassword';
import ResetPassword from '../love/fPage/aAuth/bForgotResetPassword/bResetPassword';
import Base from '../love/fPage/bContent/aSidebar/aSetting/aBase';
import User from '../love/fPage/bContent/aSidebar/bAdministration/aUser';
import Role from '../love/fPage/bContent/aSidebar/bAdministration/bRole';
import Menu from '../love/fPage/bContent/aSidebar/bAdministration/cMenu';
import Home from '../love/fPage/bContent/aSidebar/cMain/App3/aHome';
import About from '../love/fPage/bContent/aSidebar/cMain/App3/bAbout';
import Experience from '../love/fPage/bContent/aSidebar/cMain/App3/cExperience';
import Service from '../love/fPage/bContent/aSidebar/cMain/App3/dService';
import Portfolio from '../love/fPage/bContent/aSidebar/cMain/App3/ePortfolio';
import PortfolioCard from '../love/fPage/bContent/aSidebar/cMain/App3/fPortfolioCard';
import Event from '../love/fPage/bContent/aSidebar/cMain/App3/gEvent';
import EventCard from '../love/fPage/bContent/aSidebar/cMain/App3/hEventCard';
import Blog from '../love/fPage/bContent/aSidebar/cMain/App3/iBlog';
import BlogCard from '../love/fPage/bContent/aSidebar/cMain/App3/jBlogCard';
import Dashboard from '../love/fPage/bContent/aSidebar/dDashboard/App3';
import DirectHome from '../love/fPage/bContent/aSidebar/eDirect/App3/aDirectHome';
import Profile from '../love/fPage/bContent/bTopbar/aProfile';
import RouteName from '../love/gRoute/RouteName';


function App() {
  // Redux
	const Redux = {
		state: useSelector((fullState) => fullState.ContentLayoutState),
		dispatch: useDispatch(),
		action: Action,
	};

  // All Renders
  // Redux Render
  useEffect(() => {
    let myObj = {}

    Redux.state.ReceivedObject?.ProfileRetrieve?.relation_info?.role?.relation_info?.menus?.map(each => {
      myObj = {
        ...myObj,
        [each.menu.basic_info.title]: {
          ...myObj?.[each.menu.basic_info.title],
          list: each.access.list,
          create: each.access.create,
          retrieve: each.access.retrieve,
          update: each.access.update,
          delete: each.access.delete,
        }
      }

      Redux.dispatch({ type: Redux.action.ReceivedObject, payload: {
        ...Redux.state.ReceivedObject,
        UserAccess: myObj
      }})
		})
  }, [Redux.state.ReceivedObject?.ProfileRetrieve])

  // Extra Render
  // useEffect(() => {
  //   console.log(Redux.state)
  // }, [Redux.state])  

  // JSX
  return (    
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route element={<AuthLayout />} >
          <Route path={RouteName.Auth.LoginRegister.LoginRoute} element={<Login />} />
          <Route path={RouteName.Auth.LoginRegister.RegisterRoute} element={<Register />} />

          <Route path={RouteName.Auth.ForgotResetPassword.ForgotPasswordRoute} element={<ForgotPassword />} />
          <Route path={`${RouteName.Auth.ForgotResetPassword.ResetPasswordRoute}/:token`} element={<ResetPassword />} />
        </Route>

        <Route element={<ContentLayout />} >
          <Route path={RouteName.Content.Sidebar.DashboardRoute} element={<Dashboard Redux1={Redux} />} />

          <Route path='/setting'>
            <Route path={RouteName.Content.Sidebar.Setting.BaseRoute} element={<Base Redux1={Redux} />} />
          </Route>

          <Route path='/administration'>
            <Route path={RouteName.Content.Sidebar.Administration.UserRoute} element={<User Redux1={Redux} />} />
            <Route path={RouteName.Content.Sidebar.Administration.RoleRoute} element={<Role Redux1={Redux} />} />
            <Route path={RouteName.Content.Sidebar.Administration.MenuRoute} element={<Menu Redux1={Redux} />} />
          </Route>

          <Route path='/main'>
            <Route path={RouteName.Content.Sidebar.Main.HomeRoute} element={<Home Redux1={Redux} />} />
            <Route path={RouteName.Content.Sidebar.Main.AboutRoute} element={<About Redux1={Redux} />} />
            <Route path={RouteName.Content.Sidebar.Main.ExperienceRoute} element={<Experience Redux1={Redux} />} />
            <Route path={RouteName.Content.Sidebar.Main.ServiceRoute} element={<Service Redux1={Redux} />} />
            <Route path={RouteName.Content.Sidebar.Main.PortfolioRoute} element={<Portfolio Redux1={Redux} />} />
            <Route path={RouteName.Content.Sidebar.Main.PortfolioCardRoute} element={<PortfolioCard Redux1={Redux} />} />
            <Route path={RouteName.Content.Sidebar.Main.EventRoute} element={<Event Redux1={Redux} />} />
            <Route path={RouteName.Content.Sidebar.Main.EventCardRoute} element={<EventCard Redux1={Redux} />} />
            <Route path={RouteName.Content.Sidebar.Main.BlogRoute} element={<Blog Redux1={Redux} />} />
            <Route path={RouteName.Content.Sidebar.Main.BlogCardRoute} element={<BlogCard Redux1={Redux} />} />
          </Route>

          <Route path={RouteName.Content.Topbar.ProfileRoute} element={<Profile Redux1={Redux} />} />

          <Route path='/direct'>
            <Route path={RouteName.Content.Sidebar.Main.HomeRoute} element={<DirectHome Redux1={Redux} />} />
            <Route path={RouteName.Content.Sidebar.Main.AboutRoute} element={<About Redux1={Redux} />} />
            <Route path={RouteName.Content.Sidebar.Main.ExperienceRoute} element={<Experience Redux1={Redux} />} />
            <Route path={RouteName.Content.Sidebar.Main.ServiceRoute} element={<Service Redux1={Redux} />} />
            <Route path={RouteName.Content.Sidebar.Main.PortfolioRoute} element={<Portfolio Redux1={Redux} />} />
            <Route path={RouteName.Content.Sidebar.Main.EventRoute} element={<Event Redux1={Redux} />} />
            <Route path={RouteName.Content.Sidebar.Main.BlogRoute} element={<Blog Redux1={Redux} />} />
          </Route>

        </Route>

        <Route path='*' element={<PageNotFoundCard />} />
      </Routes>
    </BrowserRouter>   
  );
}

export default App;
