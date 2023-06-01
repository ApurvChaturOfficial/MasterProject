import { combineReducers } from 'redux'

import AuthLayoutState from '../eLayout/aAuthLayout/extra/State';
import ContentLayoutState from '../eLayout/bContentLayout/extra/State';

import LoginState from '../fPage/aAuth/aLoginRegister/aLogin/extra/State';
import RegisterState from '../fPage/aAuth/aLoginRegister/bRegister/extra/State';
import ForgotPasswordState from '../fPage/aAuth/bForgotResetPassword/aForgotPassword/extra/State';
import ResetPasswordState from '../fPage/aAuth/bForgotResetPassword/bResetPassword/extra/State';

import UpdateState from '../fPage/bContent/aProfile/aUpdate/extra/State';
import UpdatePasswordState from '../fPage/bContent/aProfile/bUpdatePassword/extra/State';


const RootReducer = combineReducers({
  AuthLayoutState,
  ContentLayoutState,

  LoginState,
  RegisterState,
  ForgotPasswordState,
  ResetPasswordState,

  UpdateState,
  UpdatePasswordState,
})  

export default RootReducer;
