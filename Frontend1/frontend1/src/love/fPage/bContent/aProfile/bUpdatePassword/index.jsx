import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import validateFormObject from '../../../../dFunction/bValidateFormObject';
import clearFormObject from '../../../../dFunction/aClearFormObject';
import submitFormObject from '../../../../dFunction/cSubmitFormObject';
import handleInput from '../../../../dFunction/dHandleInput';
import regex from '../../../../dFunction/eRegex';
import APIs from './extra/APIs';
import { Action } from './extra/State';

const UpdatePasswod = () => {
  // Redux
  const Redux = {
    state: useSelector((fullState) => fullState.UpdatePasswordState),
    dispatch: useDispatch(),
    action: Action,
  };

  // API Calls
  const APICalls = {
    ProfileUpdatePasswordAPICall: () => APIs.ProfileUpdatePasswordAPI(Redux),
  }

  // Validate Values
  const validateFormValues = FormValue => {
    const errors = {}

		// oldPassword
		if (!FormValue.oldPassword) {
			errors.oldPassword = "Please enter old password"
		} else if (!regex.password.test(FormValue.oldPassword)) {
			errors.oldPassword = "Old password should have 1 lowercase, 1 uppercase, 1 number, and be 8 to 16 characters long"
		} 
		// newPassword
		if (!FormValue.newPassword) {
			errors.newPassword = "Please enter new password"
		} else if (!regex.password.test(FormValue.newPassword)) {
			errors.newPassword = "New Password should have 1 lowercase, 1 uppercase, 1 number, and be 8 to 16 characters long"
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

  // All Render
  // First Render
  useEffect(() => {
    clearFormObject(Redux)
  }, [])

  // Submit Render
  useEffect(() => {
    submitFormObject(Redux, APICalls.ProfileUpdatePasswordAPICall
    )
  }, [Redux.state.FormObject.FormError])

  // Extra Render
  useEffect(() => {
    console.log(Redux.state)
  }, [Redux.state])

  // JSX  
  return (
    <div class="form-container">
      <h2>Change Password</h2>
      <form onSubmit={event => validateFormObject(event, Redux, validateFormValues)} noValidate>
        <input 
          type="password" 
          name="oldPassword" 
          placeholder="Old Password" 
          value={Redux.state.FormObject.FormValue?.oldPassword}
          onChange={event => handleInput(event, Redux)}
        />
        <small className='danger' >{Redux.state.FormObject.FormError.oldPassword}</small>

        <input 
          type="password" 
          name="newPassword" 
          placeholder="New Password" 
          value={Redux.state.FormObject.FormValue?.newPassword}
          onChange={event => handleInput(event, Redux)}
        />
        <small className='danger' >{Redux.state.FormObject.FormError.newPassword}</small>

        <input 
          type="password" 
          name="confirmPassword" 
          placeholder="Confirm Password" 
          value={Redux.state.FormObject.FormValue?.confirmPassword}
          onChange={event => handleInput(event, Redux)}
        />
        <small className='danger' >{Redux.state.FormObject.FormError.confirmPassword}</small>

        <button type="submit">Change Password</button>
      </form>
    </div>
  )
}

export default UpdatePasswod