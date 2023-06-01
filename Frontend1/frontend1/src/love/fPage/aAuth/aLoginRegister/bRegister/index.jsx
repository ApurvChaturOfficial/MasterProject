import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import clearFormObject from '../../../../dFunction/aClearFormObject'
import validateFormObject from '../../../../dFunction/bValidateFormObject'
import submitFormObject from '../../../../dFunction/cSubmitFormObject'
import handleInput from '../../../../dFunction/dHandleInput'
import regex from '../../../../dFunction/eRegex'
import FinalRouteName from '../../../../gRoute/FinalRouteName'
import Avatar from '../../../../hAsset/profile.png'
import APIs from './extra/APIs'
import { Action } from './extra/State'

const Register = () => {
  // Normal Variables
  const navigate = useNavigate()

  // Redux
  const Redux = {
    state: useSelector((fullState) => fullState.RegisterState),
    dispatch: useDispatch(),
    action: Action,
  };

  // API Calls
  const APICalls = {
    RegisterAPICall: () => APIs.RegisterAPI(Redux, navigate)
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

    return errors;
  }	

  // All Render
  // First Render
  useEffect(() => {
    clearFormObject(Redux)
  }, [])

  // Submit Render
  useEffect(() => {
    submitFormObject(Redux, APICalls.RegisterAPICall
    )
  }, [Redux.state.FormObject.FormError])

  // Extra Render
  useEffect(() => {
    console.log(Redux.state)
  }, [Redux.state])

  // JSX
  return (
    <div class="form-container">
      <h2>Register</h2>
      <form onSubmit={event => validateFormObject(event, Redux, validateFormValues)} noValidate>
        <input 
          type="file" 
          name="image" 
          accept="image/*" 
          onChange={event => handleInput(event, Redux)}
        />
        <small className='danger' >{Redux.state.FormObject.FormError.image}</small>

        <input 
          type="text" 
          name="firstName" 
          placeholder="First Name" 
          onChange={event => handleInput(event, Redux)}
        />
        <small className='danger' >{Redux.state.FormObject.FormError.firstName}</small>

        <input 
          type="text" 
          name="lastName" 
          placeholder="Last Name" 
          onChange={event => handleInput(event, Redux)}
        />
        <small className='danger' >{Redux.state.FormObject.FormError.lastName}</small>

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

        <input 
          type="password" 
          name="confirmPassword" 
          placeholder="Confirm Password" 
          onChange={event => handleInput(event, Redux)}
        />
        <small className='danger' >{Redux.state.FormObject.FormError.confirmPassword}</small>

        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <Link to={FinalRouteName.Auth.LoginRegister.LoginRoute}>Login</Link>
      </p>
      <p>
        Forgot your password? <Link to={FinalRouteName.Auth.ForgotResetPassword.ForgotPasswordRoute}>Reset Password</Link>
      </p>

    </div>
  )
}

export default Register