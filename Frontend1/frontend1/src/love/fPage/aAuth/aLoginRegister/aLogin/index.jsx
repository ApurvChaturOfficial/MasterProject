import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Avatar from '../../../../hAsset/profile.png'
import { useDispatch, useSelector } from 'react-redux';
import { Action } from './extra/State';
import clearFormObject from '../../../../dFunction/aClearFormObject';
import validateFormObject from '../../../../dFunction/bValidateFormObject';
import submitFormObject from '../../../../dFunction/cSubmitFormObject';
import handleInput from '../../../../dFunction/dHandleInput';
import regex from '../../../../dFunction/eRegex';
import FinalRouteName from '../../../../gRoute/FinalRouteName';
import APIs from './extra/APIs';


const Login = () => {
  // Normal Variables
  const navigate = useNavigate()

  // Redux
	const Redux = {
		state: useSelector((fullState) => fullState.LoginState),
		dispatch: useDispatch(),
		action: Action,
	};

  // API Calls
	const APICalls = {
		LoginAPICall: () => APIs.LoginAPI(Redux, navigate)
	}

  // Validate Values
	const validateFormValues = FormValue => {
		const errors = {}

    // email
    if (!FormValue.email) {
      errors.email = "Please enter email"
    } else if (!regex.email.test(FormValue.email)) {
      errors.email = "Please enter valid email"
    }
    // password
    if (!FormValue.password) {
      errors.password = "Please enter password"
    } else if (FormValue.password.length < 8 || FormValue.password.length > 16) {
        errors.password = "Password length should be 8 to 16 characters"
    } else if (!regex.password.test(FormValue.password)) {
        errors.password = "Password should have 1 lowercase, 1 uppercase, 1 number, and be 8 to 16 characters long"
    } 

		return errors;
	}	

  // All Render
  // First Render
  useEffect(() => {
    clearFormObject(Redux)
  }, [])

  // Submit Render
  useEffect(() => {
		submitFormObject(Redux, APICalls.LoginAPICall)
	}, [Redux.state.FormObject.FormError])

  // Extra Render
  useEffect(() => {
    console.log(Redux.state)
  }, [Redux.state])

  // JSX
  return (
    <div class="form-container">
      <h2>Login</h2>
      <form onSubmit={event => validateFormObject(event, Redux, validateFormValues)} noValidate>
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          onChange={event => handleInput(event, Redux)}
        />
        <small className='danger' >{Redux.state.FormObject.FormError.email}</small>

        <input 
          type="password" 
          name="password" 
          placeholder="Password"
          onChange={event => handleInput(event, Redux)}
        />
        <small className='danger' >{Redux.state.FormObject.FormError.password}</small>

        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to={FinalRouteName.Auth.LoginRegister.RegisterRoute}>Register</Link>
      </p>
      <p>
        Forgot your password? <Link to={FinalRouteName.Auth.ForgotResetPassword.ForgotPasswordRoute}>Reset Password</Link>
      </p>
    </div>


)
}

export default Login