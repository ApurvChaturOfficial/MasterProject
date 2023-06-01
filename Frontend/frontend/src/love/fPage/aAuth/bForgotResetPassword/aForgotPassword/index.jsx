import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import clearFormObject from '../../../../dFunction/aClearFormObject';
import validateFormObject from '../../../../dFunction/bValidateFormObject';
import submitFormObject from '../../../../dFunction/cSubmitFormObject';
import handleInput from '../../../../dFunction/dHandleInput'
import regex from '../../../../dFunction/eRegex';
import FinalRouteName from '../../../../gRoute/FinalRouteName';
import APIs from './extra/APIs';
import { Action } from './extra/State';

const ForgotPassword = () => {
	// Normal Variables
	const navigate = useNavigate()

  // Redux
	const Redux = {
		state: useSelector((fullState) => fullState.ForgotPasswordState),
		dispatch: useDispatch(),
		action: Action,
	};

	// API Calls
	const APICalls = {
		ForgotPasswordAPICall: () => APIs.ForgotPasswordAPI(Redux),
		ValidateOTPAPICall: () => APIs.ValidateOTPAPI(Redux, navigate)
	}

	// Validate Values
	const validateFormValues = FormValue => {
		const errors = {}

    if (Redux.state.ExtraObject.active === 'email') {
      // email
      if (!FormValue.email) {
        errors.email = "Please enter email"
      } else if (!regex.email.test(FormValue.email)) {
        errors.email = "Please enter valid email"
      }
    } else if (Redux.state.ExtraObject.active === 'otp') {
      // otp
      if (!FormValue.otp) {
        errors.otp = "Please enter OTP"
      } else if (FormValue.otp.length !== 6) {
          errors.otp = "OTP should be 6 digit"
      }
    }

		return errors;
	}			

	// All Renders
	// First Render
	useEffect(() => {
		clearFormObject(Redux)

		Redux.dispatch({ type: Redux.action.ExtraObject, payload: {
			...Redux.state.ExtraObject,
			active: "email",
		} })
	}, [])
	
	
	// Submit Render
	useEffect(() => {
		submitFormObject(Redux, () => {
      if (Redux.state.ExtraObject?.active === 'email') {
        return APICalls.ForgotPasswordAPICall()
      } else if (Redux.state.ExtraObject?.active === 'otp')
        return  APICalls.ValidateOTPAPICall()
      }
    )
	}, [Redux.state.FormObject.FormError])

	// Extra Render
	useEffect(() => {
		console.log(Redux.state)
	}, [Redux.state])

	// JSX
  return (
    <React.Fragment>
      <h4 class="mb-2">Forgot Password? 🔒</h4>
      <p class="mb-4">Enter your email and we'll send you OTP to reset your password</p>
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

				{Redux.state.ExtraObject.active && Redux.state.ExtraObject.active === "email" &&
        	<button class="btn btn-primary d-grid w-100" type="submit">Send OTP</button>
				}
			</form>

      {Redux.state.ExtraObject.active && Redux.state.ExtraObject.active === "otp" &&
				<form id="formAuthentication2323" class="mb-3" onSubmit={event => validateFormObject(event, Redux, validateFormValues)} noValidate>
					<div class="mb-3">
						<label for="otp" class="form-label">OTP</label>
						<input
							type="number"
							class="form-control"
							id="otp"
							name="otp"
							placeholder="Enter your OTP"
							autofocus
							onChange={event => handleInput(event, Redux)}
						/>
						<div class="form-text text-danger">{Redux.state.FormObject.FormError.otp}</div>
					</div>

					<button class="btn btn-primary d-grid w-100" type="submit">Reset Password</button>
				</form>
			}
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