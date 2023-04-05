import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import clearFormObject from '../../../../dFunction/aClearFormObject'
import validateFormObject from '../../../../dFunction/bValidateFormObject'
import submitFormObject from '../../../../dFunction/cSubmitFormObject'
import handleInput from '../../../../dFunction/dHandleInput'
import regex from '../../../../dFunction/eRegex'
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

    // image
    if (!FormValue.image) {
      errors.image = "Please select image"
    } 
    // firstName
    if (!FormValue.firstName) {
      errors.firstName = "Please enter first name"
    } else if (FormValue.password.length < 3 || FormValue.password.length > 15) {
      errors.firstName = "First name should be 3 to 15 characters"
    } else if (!regex.name.test(FormValue.firstName)) {
      errors.firstName = "Please enter valid first name"
    }
    // lastName
    if (!FormValue.lastName) {
      errors.lastName = "Please enter last name"
    } else if (FormValue.password.length < 3 || FormValue.password.length > 15) {
      errors.lastName = "Last name should be 3 to 15 characters"
    } else if (!regex.name.test(FormValue.lastName)) {
      errors.lastName = "Please enter valid last name"
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
    submitFormObject(Redux, APICalls.RegisterAPICall
    )
  }, [Redux.state.FormObject.FormError])

  // Extra Render
  useEffect(() => {
    console.log(Redux.state)
  }, [Redux.state])

  // JSX
  return (
	  <React.Fragment>
      <div className="title flex flex-col items-center">
        <h4 className='text-5xl font-bold'>Register</h4>
        <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
          Happy to join you!
        </span>
      </div>

      <form className='py-1' onSubmit={event => validateFormObject(event, Redux, validateFormValues)} noValidate>
        <div className='profile flex justify-center py-4'>
          <label htmlFor="profile">
            <img 
              src={Redux.state.FormObject.FormValue.image?.url || Avatar} 
              className='profile_img' 
              alt="avatar" 
            />
          </label>
          
          <input 
            type="file" 
            id='profile' 
            name='image' 
            onChange={event => handleInput(event, Redux)}
          />
        </div>
        <p className='text-sm text-red-500 pl-4 pt-1' >{Redux.state.FormObject.FormError?.image}</p>

        <div className="textbox flex flex-col items-center gap-6">
          <input 
            className='my_textbox' 
            type='text' 
            name='firstName'
            placeholder='Enter First Name'
            onChange={event => handleInput(event, Redux)}
          />
          <p className='text-sm text-red-500 pl-4 pt-1' >{Redux.state.FormObject.FormError?.firstName}</p>

          <input 
            className='my_textbox' 
            type='text' 
            name='lastName'
            placeholder='Enter Last Name'
            onChange={event => handleInput(event, Redux)}
          />
          <p className='text-sm text-red-500 pl-4 pt-1' >{Redux.state.FormObject.FormError?.lastName}</p>

          <input 
            className='my_textbox' 
            type='email' 
            name='email'
            placeholder='Enter Email'
            onChange={event => handleInput(event, Redux)}
          />
          <p className='text-sm text-red-500 pl-4 pt-1' >{Redux.state.FormObject.FormError?.email}</p>

          <input 
            className='my_textbox' 
            type='password' 
            name='password'
            placeholder='Enter Password'
            onChange={event => handleInput(event, Redux)}
          />
          <p className='text-sm text-red-500 pl-4 pt-1' >{Redux.state.FormObject.FormError?.password}</p>

          <button className='my_btn' type='submit'>Register</button>
        </div>

        <div className="text-center py-4">
          <span className='text-gray-500'>Already Register? <Link className='text-red-500' to="/">Login Now</Link></span>
        </div>

      </form>
    </React.Fragment>
  )
}

export default Register