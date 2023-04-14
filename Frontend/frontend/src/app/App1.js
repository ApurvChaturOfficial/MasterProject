import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthLayout from '../love/eLayout/aAuthLayout';
import ContentLayout from '../love/eLayout/bContentLayout';
import Login from '../love/fPage/aAuth/aLoginRegister/aLogin';
import Register from '../love/fPage/aAuth/aLoginRegister/bRegister';
import ForgotPassword from '../love/fPage/aAuth/bForgotResetPassword/aForgotPassword';
import ResetPassword from '../love/fPage/aAuth/bForgotResetPassword/bResetPassword';
import Base from '../love/fPage/bContent/aSidebar/aSetting/aBase';
import User from '../love/fPage/bContent/aSidebar/bAdministration/aUser';
import Role from '../love/fPage/bContent/aSidebar/bAdministration/bRole';
import Menu from '../love/fPage/bContent/aSidebar/bAdministration/cMenu';
import Profile from '../love/fPage/bContent/bTopbar/aProfile';
import RouteName from '../love/gRoute/RouteName';


function App() {
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
          <Route path={RouteName.Content.Sidebar.DashboardRoute} element={<h1>Dashboard</h1>} />

          <Route path='/setting'>
            <Route path={RouteName.Content.Sidebar.Setting.BaseRoute} element={<Base />} />
          </Route>

          <Route path='/administration'>
            <Route path={RouteName.Content.Sidebar.Administration.UserRoute} element={<User />} />
            <Route path={RouteName.Content.Sidebar.Administration.RoleRoute} element={<Role />} />
            <Route path={RouteName.Content.Sidebar.Administration.MenuRoute} element={<Menu />} />
          </Route>

          <Route path={RouteName.Content.Topbar.ProfileRoute} element={<Profile />} />
        </Route>

        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>   
  );
}

export default App;
