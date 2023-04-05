import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validateFormObject from '../../../../dFunction/bValidateFormObject';
import submitFormObject from '../../../../dFunction/cSubmitFormObject';
import handleInput from '../../../../dFunction/dHandleInput'
import regex from '../../../../dFunction/eRegex';
import FinalRouteName from '../../../../gRoute/FinalRouteName';
import APIs from './extra/APIs';
import { Action } from './extra/State';

const ForgotPassword = () => {
  // Redux
	const Redux = {
		state: useSelector((fullState) => fullState.ForgotPasswordState),
		dispatch: useDispatch(),
		action: Action,
	};

	// API Calls
	const APICalls = {
		ForgotPasswordAPICall: () => APIs.ForgotPasswordAPI(Redux)
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

		return errors;
	}			

	// All Renders
	// Submit Render
	useEffect(() => {
		submitFormObject(Redux, APICalls.ForgotPasswordAPICall)
	}, [Redux.state.FormObject.FormError])

	// Extra Render
	useEffect(() => {
		console.log(Redux.state)
	}, [Redux.state])

	// JSX
  return (
    <React.Fragment>
      <h4 class="mb-2">Forgot Password? 🔒</h4>
      <p class="mb-4">Enter your email and we'll send you instructions to reset your password</p>
      <form id="formAuthentication" class="mb-3" onSubmit={event => validateFormObject(event, Redux, validateFormValues)} noValidate>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            id="email"
            name="email"
            placeholder="Enter your email"
            autofocus
						onChange={event => handleInput(event, Redux)}
          />
					<div class="form-text text-danger">{Redux.state.FormObject.FormError.email}</div>
        </div>
        <button class="btn btn-primary d-grid w-100" type="submit">Send Reset Link</button>
      </form>
      <div class="text-center">
        <Link to={FinalRouteName.Auth.LoginRegister.LoginRoute} class="d-flex align-items-center justify-content-center">
          <i class="bx bx-chevron-left scaleX-n1-rtl bx-sm"></i>
          Back to login
        </Link>
      </div>
    </React.Fragment>
  )
}

export default ForgotPassword