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

    if (Redux.state.ExtraObject.active === 'email') {
      // email
      if (!FormValue.email) {
        errors.email = "Please enter email"
      } else if (!regex.email.test(FormValue.email)) {
        errors.email = "Please enter valid email"
      }
    } else if (Redux.state.ExtraObject.active === 'password') {
      // password
      if (!FormValue.password) {
        errors.password = "Please enter password"
      } else if (FormValue.password.length < 8 || FormValue.password.length > 16) {
          errors.password = "Password length should be 8 to 16 characters"
      } else if (!regex.password.test(FormValue.password)) {
          errors.password = "Password should have 1 lowercase, 1 uppercase, 1 number, and be 8 to 16 characters long"
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
          active: "password",
        } })
      } else if (Redux.state.ExtraObject?.active === 'password')
        return APICalls.LoginAPICall()
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
      <div className='title flex flex-col items-center'>
        <h4 className='text-5xl font-bold'>Hello Again!</h4>
        <span className='py-4 text-xl w-2/3 text-center text-gray-500' >
          Explore more by connecting with us.
        </span>
      </div>

      {Redux.state.ExtraObject.active &&
        Redux.state.ExtraObject.active === 'email' ?
          <form className='py-1' onSubmit={event => validateFormObject(event, Redux, validateFormValues)} noValidate>
            <div className='profile flex justify-center py-4'>
              <img className='profile_img' src={Avatar} alt='avatar'/>
            </div>

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
                <p className='text-sm text-red-500 pl-4 pt-1' >{Redux.state.FormObject.FormError?.email}</p>
              </div>
              <button className='my_btn' type='submit'>Let's Go</button>
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
        :
        Redux.state.ExtraObject.active === 'password' ?
          <form className='py-1' onSubmit={event => validateFormObject(event, Redux, validateFormValues)} noValidate>
            <div className='profile flex justify-center py-4'>
              <img className='profile_img' src={Avatar} alt='avatar'/>
            </div>

            <div className='textbox flex flex-col items-center gap-6'>
              <div className='flex flex-col items-center gap-1'>
                <input 
                  className={Redux.state.FormObject.FormError?.password ? 'my_textbox my_textbox_error' : 'my_textbox'} 
                  type='text' 
                  name='password'
                  placeholder='Enter password'
                  value={Redux.state.FormObject.FormValue?.password || ""}
                  onChange={event => handleInput(event, Redux)}
                />
                <p className='text-red-500 pl-4 pt-1' >{Redux.state.FormObject.FormError?.password}</p>
              </div>
              <button className='my_btn' type='submit'>Sign In</button>
            </div>

            <div className='text-center py-4'>
              <span className='text-gray-500'>
                Forgot Password? 
                <Link to={FinalRouteName.Auth.ForgotResetPassword.ForgotPasswordRoute} className='text-red-500 ml-2'>
                  Recover Now
                </Link>
              </span>
            </div>
          </form>
        :
        <div className='text-center py-4'>Loading...</div>
      }
    </React.Fragment>
  )
}

export default Login