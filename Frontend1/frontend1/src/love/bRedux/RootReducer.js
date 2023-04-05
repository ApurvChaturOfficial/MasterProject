import { combineReducers } from 'redux'
import LoginState from '../fPage/aAuth/aLoginRegister/aLogin/extra/State';
import RegisterState from '../fPage/aAuth/aLoginRegister/bRegister/extra/State';
import ForgotPasswordState from '../fPage/aAuth/bForgotResetPassword/aForgotPassword/extra/State';


const RootReducer = combineReducers({
  LoginState,
  RegisterState,

  ForgotPasswordState,
})  

export default RootReducer;
