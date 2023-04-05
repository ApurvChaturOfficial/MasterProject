import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import validateFormObject from '../../../../dFunction/bValidateFormObject'
import submitFormObject from '../../../../dFunction/cSubmitFormObject'
import handleInput from '../../../../dFunction/dHandleInput'
import regex from '../../../../dFunction/eRegex'
import FinalRouteName from '../../../../gRoute/FinalRouteName'
import APIs from './extra/APIs'
import { Action } from './extra/State'

const Register = () => {
	// Variables
	const navigate = useNavigate()

	// Redux
	const Redux = {
		state: useSelector((fullState) => fullState.RegisterState),
		dispatch: useDispatch(),
		action: Action,
	};

	// API Calls
	const APICalls = {
		RegisterAPICall: () => APIs.RegisterAPI(Redux, navigate),
		RoleListAPICall: () => APIs.RoleListAPI(Redux, navigate)
	}

	// Validate Values
	const validateFormValues = FormValue => {
		const errors = {}

		// firstName
		if (!FormValue.firstName) {
			errors.firstName = "Please enter first name"
		} else if (!regex.name.test(FormValue.firstName)) {
			errors.email = "Please enter valid first name"
		}
		// lastName
		if (!FormValue.lastName) {
			errors.lastName = "Please enter last name"
		} else if (!regex.name.test(FormValue.lastName)) {
			errors.email = "Please enter valid last name"
		}
		// image
		if (!FormValue.image) {
			errors.image = "Please select image"
		}
		// email
		if (!FormValue.email) {
			errors.email = "Please enter email"
		} else if (!regex.email.test(FormValue.email)) {
			errors.email = "Please enter valid email"
		}
		// password
		if (!FormValue.password) {
			errors.password = "Please enter password"
		} else if (!regex.password.test(FormValue.password)) {
			errors.password = "Password should have 1 lowercase, 1 uppercase, 1 number, and be 8 to 16 characters long"
		} 
		// confirmPassword
		if (!FormValue.confirmPassword) {
			errors.confirmPassword = "Please enter confirm password"
		} else if (!regex.password.test(FormValue.password)) {
			errors.confirmPassword = "Confirm password should have 1 lowercase, 1 uppercase, 1 number, and be 8 to 16 characters long"
		} else if (FormValue.password !== FormValue.confirmPassword) {
			errors.confirmPassword = "Please match the password"
		}
		// role
		if (!FormValue.role) {
			errors.role = "Please select role"
		}

		return errors;
	}			

	// All Renders
	// Submit Render
	useEffect(() => {
		APICalls.RoleListAPICall()
	}, [])

	useEffect(() => {
		submitFormObject(Redux, APICalls.RegisterAPICall)
	}, [Redux.state.FormObject.FormError])

	// Extra Render
	useEffect(() => {
		console.log(Redux.state)
	}, [Redux.state])

	// JSX
	return (
		<React.Fragment>
			<h4 class="mb-2">Adventure starts here 🚀</h4>
			<p class="mb-4">Make your app management easy and fun!</p>

			<form id="formAuthentication" class="mb-3" onSubmit={event => validateFormObject(event, Redux, validateFormValues)} noValidate>
				{/* First Name */}
				<div class="mb-3">
					<label for="firstName" class="form-label">First Name</label>
					<input
						type="text"
						class="form-control"
						id="firstName"
						name="firstName"
						placeholder="Enter your first name"
						autofocus
						onChange={event => handleInput(event, Redux)}
					/>
					<div class="form-text text-danger">{Redux.state.FormObject.FormError.firstName}</div>
				</div>

				{/* Last Name */}
				<div class="mb-3">
					<label for="lastName" class="form-label">Last Name</label>
					<input
						type="text"
						class="form-control"
						id="lastName"
						name="lastName"
						placeholder="Enter your last name"
						onChange={event => handleInput(event, Redux)}
					/>
					<div class="form-text text-danger">{Redux.state.FormObject.FormError.lastName}</div>
				</div>

				{/* Image */}
				<div class="mb-3">
					<label for="formFile" class="form-label">Profile Picture</label>
					<input 
						class="form-control" 
						type="file" 
						id="formFile" 
						name='image'
						onChange={event => handleInput(event, Redux)}
					/>
					<div class="form-text text-danger">{Redux.state.FormObject.FormError.image}</div>
				</div>

				{/* Email */}
				<div class="mb-3">
					<label for="email" class="form-label">Email</label>
					<input
						type="text"
						class="form-control"
						id="email"
						name="email"
						placeholder="Enter your email"
						autofocus
						onChange={event => handleInput(event, Redux)}
					/>
					<div class="form-text text-danger">{Redux.state.FormObject.FormError.email}</div>
				</div>

				{/* Password */}
				<div class="mb-3 form-password-toggle">
					<label class="form-label" for="password">Password</label>
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

				{/* Confirm Password */}
				<div class="mb-3 form-password-toggle">
					<label class="form-label" for="confirmPassword">Confirm Password</label>
					<div class="input-group input-group-merge">
						<input
							type="password"
							id="confirmPassword"
							class="form-control"
							name="confirmPassword"
							placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
							aria-describedby="password"
							onChange={event => handleInput(event, Redux)}
						/>
						<span class="input-group-text cursor-pointer"><i class="bx bx-hide"></i></span>
					</div>
					<div class="form-text text-danger">{Redux.state.FormObject.FormError.confirmPassword}</div>
				</div>

				{/* Role */}
				<div class="mb-3">
					<label for="defaultSelect" class="form-label">Role</label>
					<select 
						id="defaultSelect" 
						class="form-select" 
						name="role"
						onChange={event => handleInput(event, Redux)}
					>
						<option disabled selected>--Select Role--</option>
						{Redux.state.RequiredObject.RoleList &&
							Redux.state.RequiredObject.RoleList.map(each => {
								return (
									<option value={each.id}>{each.title}</option>
								)
							})
						}
					</select>
					<div class="form-text text-danger">{Redux.state.FormObject.FormError.role}</div>
				</div>

				{/* Terms & Policy */}
				<div class="mb-3">
					<div class="form-check">
						<input class="form-check-input" type="checkbox" id="terms-conditions" name="terms" />
						<label class="form-check-label" for="terms-conditions">
							I agree to privacy policy & terms
						</label>
					</div>
				</div>
				<button class="btn btn-primary d-grid w-100" type="submit">Sign up</button>
			</form>

			<p class="text-center">
				<span>Already have an account?</span>{' '}
				<Link to={FinalRouteName.Auth.LoginRegister.LoginRoute}>
					<span>Sign in instead</span>
				</Link>
			</p>

		</React.Fragment>
	)
}

export default Register