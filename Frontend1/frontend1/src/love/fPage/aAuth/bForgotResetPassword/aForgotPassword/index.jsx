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


const ForgotPassword = () => {
  // Normal Variables
  const navigate = useNavigate()

  // Redux
	const Redux = {
		state: useSelector((fullState) => fullState.ForgotPasswordState),
		dispatch: useDispatch(),
		action: Action,
	};

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
        return Redux.dispatch({ type: Redux.action.ExtraObject, payload: {
          ...Redux.state.ExtraObject,
          active: "otp",
        } })
      } else if (Redux.state.ExtraObject?.active === 'otp')
        return navigate(FinalRouteName.Auth.ForgotResetPassword.ResetPasswordRoute)
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
      {Redux.state.ExtraObject.active &&
        Redux.state.ExtraObject.active === 'email' ?
          <React.Fragment>
            <div className='title flex flex-col items-center'>
              <h4 className='text-5xl font-bold'>Recover Password!</h4>
              <span className='pt-28 py-4 text-xl w-2/3 text-center text-gray-500' >
                Enter your email to receive OTP.
              </span>
            </div>

            <form className='py-1' onSubmit={event => validateFormObject(event, Redux, validateFormValues)} noValidate>
              <div className='textbox flex flex-col items-center gap-6'>
                <div className='flex flex-col items-center gap-1'>
                  <input 
                    className={Redux.state.FormObject.FormError?.email ? 'my_textbox my_textbox_error' : 'my_textbox'} 
                    type='email' 
                    name='email'
                    placeholder='Enter email'
                    value={Redux.state.FormObject.FormValue?.email || ""}
                    onChange={event => handleInput(event, Redux)}
                  />
                  <p className='text-red-500 pl-4 pt-1' >{Redux.state.FormObject.FormError?.email}</p>
                </div>
                <button className='my_btn' type='submit'>Send OTP</button>
              </div>

              <div className='text-center py-4'>
                <span className='text-gray-500'>
                  Not a member 
                  <Link to={FinalRouteName.Auth.LoginRegister.RegisterRoute} className='text-red-500 ml-2'>
                    Register Now
                  </Link>
                </span>
              </div>
            </form>
          </React.Fragment>
        :
        Redux.state.ExtraObject.active === 'otp' ?
          <React.Fragment>
            <div className='title flex flex-col items-center'>
              <h4 className='text-5xl font-bold'>Recover Password!</h4>
              <span className='pt-28 py-4 text-xl w-2/3 text-center text-gray-500' >
                Enter OTP received on your email.
              </span>
            </div>


            <form className='py-1' onSubmit={event => validateFormObject(event, Redux, validateFormValues)} noValidate>
              <div className='textbox flex flex-col items-center gap-6'>
                <div className='flex flex-col items-center gap-1'>
                  <input 
                    className={Redux.state.FormObject.FormError?.otp ? 'my_textbox my_textbox_error' : 'my_textbox'} 
                    type='number' 
                    name='otp'
                    placeholder='Enter OTP'
                    value={Redux.state.FormObject.FormValue?.otp || ""}
                    onChange={event => handleInput(event, Redux)}
                  />
                  <p className='text-red-500 pl-4 pt-1' >{Redux.state.FormObject.FormError?.otp}</p>
                </div>
                <button className='my_btn' type='submit'>Submit OTP</button>
              </div>

              <div className='text-center py-4'>
                <span className='text-gray-500'>
                  Didn't receive OTP? 
                  <Link to={FinalRouteName.Auth.ForgotResetPassword.ForgotPasswordRoute} className='text-red-500 ml-2'>
                    Resend OTP
                  </Link>
                </span>
              </div>
            </form>
          </React.Fragment>
        :
        <div className='text-center py-4'>Loading...</div>
      }
    </React.Fragment>
  )
}

export default ForgotPassword