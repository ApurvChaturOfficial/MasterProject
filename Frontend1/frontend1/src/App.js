import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import AuthLayout from './love/eLayout/aAuthLayout';
import ContentLayout from './love/eLayout/bContentLayout';
import { Action } from './love/eLayout/bContentLayout/extra/State';
import GlobalLayout from './love/eLayout/cGlobalLayout';
import Login from './love/fPage/aAuth/aLoginRegister/aLogin';
import Register from './love/fPage/aAuth/aLoginRegister/bRegister';
import ForgotPassword from './love/fPage/aAuth/bForgotResetPassword/aForgotPassword';
import ResetPassword from './love/fPage/aAuth/bForgotResetPassword/bResetPassword';
import Update from './love/fPage/bContent/aProfile/aUpdate';
import UpdatePasswod from './love/fPage/bContent/aProfile/bUpdatePassword';
import Delete from './love/fPage/bContent/aProfile/cDelete';
import PageNotFound from './love/fPage/cExtra/aPageNotFound';
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
      <ToastContainer />
      <Routes>
        <Route element={<GlobalLayout />} >

          <Route element={<AuthLayout />} >
            <Route path={RouteName.Auth.LoginRegister.LoginRoute} element={<Login />} />
            <Route path={RouteName.Auth.LoginRegister.RegisterRoute} element={<Register />} />

            <Route path={RouteName.Auth.ForgotResetPassword.ForgotPasswordRoute} element={<ForgotPassword />} />
            <Route path={`${RouteName.Auth.ForgotResetPassword.ResetPasswordRoute}/:token`} element={<ResetPassword />} />
          </Route>

          <Route element={<ContentLayout />} >
            <Route path={RouteName.Content.Profile.RetrieveRoute} />
            <Route path={RouteName.Content.Profile.UpdateRoute} element={<Update Redux1={Redux} />} />
            <Route path={RouteName.Content.Profile.UpdatePasswordRoute} element={<UpdatePasswod Redux1={Redux} />} />
            <Route path={RouteName.Content.Profile.DeleteRoute} element={<Delete Redux1={Redux} />} />
          </Route>
        </Route>

        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>   
  );
}

export default App;
