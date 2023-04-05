import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './love/eLayout';
import Login from './love/fPage/aAuth/aLoginRegister/aLogin';
import Register from './love/fPage/aAuth/aLoginRegister/bRegister';
import ForgotPassword from './love/fPage/aAuth/bForgotResetPassword/aForgotPassword';
import ResetPassword from './love/fPage/aAuth/bForgotResetPassword/bResetPassword';
import ProfileUpdate from './love/fPage/bContent/aProfile';
import PageNotFound from './love/fPage/cExtra/aPageNotFound';
import RouteName from './love/gRoute/RouteName';

function App() {
  return (
    <BrowserRouter>
    <ToastContainer />
      <Routes>
        <Route element={<Layout />} >
          <Route path={RouteName.Auth.LoginRegister.LoginRoute} element={<Login />} />
          <Route path={RouteName.Auth.LoginRegister.RegisterRoute} element={<Register />} />

          <Route path={RouteName.Auth.ForgotResetPassword.ForgotPasswordRoute} element={<ForgotPassword />} />
          <Route path={RouteName.Auth.ForgotResetPassword.ResetPasswordRoute} element={<ResetPassword />} />

          <Route path={RouteName.Content.Profile.UpdateRoute} element={<ProfileUpdate />} />
        </Route>

        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>   
  );
}

export default App;
