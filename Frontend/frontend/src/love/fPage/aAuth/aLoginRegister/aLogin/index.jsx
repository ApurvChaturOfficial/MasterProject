import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import APIs from './extra/APIs';
import { Action } from './extra/State';
import handleInput from '../../../../dFunction/dHandleInput';
import regex from '../../../../dFunction/eRegex';
import validateFormObject from '../../../../dFunction/bValidateFormObject';
import submitFormObject from '../../../../dFunction/cSubmitFormObject';
import FinalRouteName from '../../../../gRoute/FinalRouteName';

const Login = () => {
	// Variables
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

	// All Renders
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
		<React.Fragment>
			<h4 class="mb-2">Welcome to Assista! 👋</h4>
			<p class="mb-4">Please sign-in to your account and start the adventure</p>

			<form id="formAuthentication" class="mb-3" onSubmit={event => validateFormObject(event, Redux, validateFormValues)} noValidate>
				{/* Eamil */}
				<div class="mb-3">
					<label for="email" class="form-label">Email or Username</label>
					<input
						type="email"
						class="form-control"
						id="email"
						name="email"
						placeholder="Enter your email"
						onChange={event => handleInput(event, Redux)}
						autofocus
					/>
					<div class="form-text text-danger">{Redux.state.FormObject.FormError.email}</div>
				</div>

				{/* Password */}
				<div class="mb-3 form-password-toggle">
					<div class="d-flex justify-content-between">
						<label class="form-label" for="password">Password</label>
						<Link to={FinalRouteName.Auth.ForgotResetPassword.ForgotPasswordRoute}>
							<small>Forgot Password?</small>
						</Link>
					</div>
					<div class="input-group input-group-merge">
						<input
							type="password"
							id="password"
							class="form-control"
							name="password"
							placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
							aria-describedby="password"
							onChange={event => handleInput(event, Redux)}
						/>
						<span class="input-group-text cursor-pointer"><i class="bx bx-hide"></i></span>
					</div>
					<div class="form-text text-danger">{Redux.state.FormObject.FormError.password}</div>
				</div>

				{/* Remember Me */}
				<div class="mb-3">
					<div class="form-check">
						<input class="form-check-input" type="checkbox" id="remember-me" />
						<label class="form-check-label" for="remember-me"> Remember Me </label>
					</div>
				</div>
				<div class="mb-3">
					<button class="btn btn-primary d-grid w-100" type="submit">Sign in</button>
				</div>
			</form>

			<p class="text-center">
				<span>New on our platform?</span>{" "}
				<Link to={FinalRouteName.Auth.LoginRegister.RegisterRoute}>
					<span>Create an account</span>
				</Link>
			</p>
		</React.Fragment>
	)
}

export default Login