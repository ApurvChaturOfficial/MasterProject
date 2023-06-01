import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Action } from './extra/State';
import clearFormObject from '../../../../dFunction/aClearFormObject';
import validateFormObject from '../../../../dFunction/bValidateFormObject';
import submitFormObject from '../../../../dFunction/cSubmitFormObject';
import handleInput from '../../../../dFunction/dHandleInput';
import regex from '../../../../dFunction/eRegex';
import FinalRouteName from '../../../../gRoute/FinalRouteName';
import APIs from './extra/APIs'


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
		ForgotPasswordAPICall: () => APIs.ForgotPasswordAPI(Redux, navigate),
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

  // All Render
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
    <div class="form-container">
      <h2>Forgot Password</h2>
      <form onSubmit={event => validateFormObject(event, Redux, validateFormValues)} noValidate >
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          onChange={event => handleInput(event, Redux)}
        />
        <small className='danger' >{Redux.state.FormObject.FormError.email}</small>

        {Redux.state.ExtraObject.active && Redux.state.ExtraObject.active === "email" &&
          <button type="submit">Reset Password</button>
        }
      </form>

      {Redux.state.ExtraObject.active && Redux.state.ExtraObject.active === "otp" &&
        <form onSubmit={event => validateFormObject(event, Redux, validateFormValues)} noValidate >
          <input 
            type="text" 
            name="otp" 
            placeholder="Enter OTP" 
            onChange={event => handleInput(event, Redux)}
          />
          <small className='danger' >{Redux.state.FormObject.FormError.otp}</small>
  
          <button type="submit">Reset Password</button>
        </form>
      }
      <p>
        Don't receive OTP? <Link to={FinalRouteName.Auth.LoginRegister.RegisterRoute}>Resend</Link>
      </p>
      <p>
        Don't have an account? <Link to={FinalRouteName.Auth.LoginRegister.RegisterRoute}>Register</Link>
      </p>
    </div>
  )
}

export default ForgotPassword