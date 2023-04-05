import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import validateFormObject from '../../../../dFunction/bValidateFormObject';
import submitFormObject from '../../../../dFunction/cSubmitFormObject';
import handleInput from '../../../../dFunction/dHandleInput'
import regex from '../../../../dFunction/eRegex';
import FinalRouteName from '../../../../gRoute/FinalRouteName';
import APIs from './extra/APIs';
import { Action } from './extra/State';

const ResetPassword = () => {
	// Normal Variable
	const { token } = useParams()
	const navigate = useNavigate()

  // Redux
	const Redux = {
		state: useSelector((fullState) => fullState.ResetPasswordState),
		dispatch: useDispatch(),
		action: Action,
	};

	// API Calls
	const APICalls = {
		ResetPasswordAPICall: () => APIs.ResetPasswordAPI(Redux, navigate, token)
	}

	// Validate Values
	const validateFormValues = FormValue => {
		const errors = {}

		// password
		if (!FormValue.newPassword) {
			errors.newPassword = "Please enter new password"
		} else if (!regex.password.test(FormValue.newPassword)) {
			errors.newPassword = "Password should have 1 lowercase, 1 uppercase, 1 number, and be 8 to 16 characters long"
		} 
		// confirmPassword
		if (!FormValue.confirmPassword) {
			errors.confirmPassword = "Please enter confirm password"
		} else if (!regex.password.test(FormValue.confirmPassword)) {
			errors.confirmPassword = "Confirm password should have 1 lowercase, 1 uppercase, 1 number, and be 8 to 16 characters long"
		} else if (FormValue.newPassword !== FormValue.confirmPassword) {
			errors.confirmPassword = "Please match the password"
		}

		return errors;
	}			

	// All Renders
	// Submit Render
	useEffect(() => {
		submitFormObject(Redux, APICalls.ResetPasswordAPICall)
	}, [Redux.state.FormObject.FormError])

	// Extra Render
	useEffect(() => {
		console.log(Redux.state)
	}, [Redux.state])

	// JSX
  return (
    <React.Fragment>
      <h4 class="mb-2">Reset Password! 🔒</h4>
      <p class="mb-4">Enter your new password and also confirm your new password</p>
      <form id="formAuthentication" class="mb-3" onSubmit={event => validateFormObject(event, Redux, validateFormValues)} noValidate>
				<div class="mb-3">
          <label for="newPassword" class="form-label">New Password</label>
          <input
            type="password"
            class="form-control"
            id="newPassword"
            name="newPassword"
            placeholder="Enter your new password"
            autofocus
						onChange={event => handleInput(event, Redux)}
          />
					<div class="form-text text-danger">{Redux.state.FormObject.FormError.newPassword}</div>
        </div>
        <div class="mb-3">
          <label for="confirmPassword" class="form-label">Confirm Password</label>
          <input
            type="password"
            class="form-control"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Enter your confirm password"
						onChange={event => handleInput(event, Redux)}
          />
					<div class="form-text text-danger">{Redux.state.FormObject.FormError.confirmPassword}</div>
        </div>
        <button class="btn btn-primary d-grid w-100" type="submit">Reset Password</button>
      </form>
      <div class="text-center">
				<Link to={FinalRouteName.Auth.LoginRegister.RegisterRoute}>
					<span>Create an account</span>
				</Link>
      </div>
    </React.Fragment>
  )
}

export default ResetPassword