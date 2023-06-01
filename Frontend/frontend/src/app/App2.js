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
import Sample1 from '../love/fPage/bContent/aSidebar/cMain/App2/aSample1';
import Sample2 from '../love/fPage/bContent/aSidebar/cMain/App2/bSample2';
import Sample3 from '../love/fPage/bContent/aSidebar/cMain/App2/cSample3';
import Sample4 from '../love/fPage/bContent/aSidebar/cMain/App2/dSample4';
import Sample5 from '../love/fPage/bContent/aSidebar/cMain/App2/eSample5';
import Dashboard from '../love/fPage/bContent/aSidebar/dDashboard/App2';
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
            <Route path={RouteName.Content.Sidebar.Main.Sample1Route} element={<Sample1 Redux1={Redux} />} />
            <Route path={RouteName.Content.Sidebar.Main.Sample2Route} element={<Sample2 Redux1={Redux} />} />
            <Route path={RouteName.Content.Sidebar.Main.Sample3Route} element={<Sample3 Redux1={Redux} />} />
            <Route path={RouteName.Content.Sidebar.Main.Sample4Route} element={<Sample4 Redux1={Redux} />} />
            <Route path={RouteName.Content.Sidebar.Main.Sample5Route} element={<Sample5 Redux1={Redux} />} />
          </Route>

          <Route path={RouteName.Content.Topbar.ProfileRoute} element={<Profile Redux1={Redux}/>} />
        </Route>

        <Route path='*' element={<PageNotFoundCard />} />
      </Routes>
    </BrowserRouter>   
  );
}

export default App;
