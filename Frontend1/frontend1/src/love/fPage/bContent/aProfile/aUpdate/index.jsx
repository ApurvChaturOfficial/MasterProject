import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import validateFormObject from '../../../../dFunction/bValidateFormObject';
import submitFormObject from '../../../../dFunction/cSubmitFormObject';
import handleInput from '../../../../dFunction/dHandleInput';
import regex from '../../../../dFunction/eRegex';
import APIs from './extra/APIs';
import { Action } from './extra/State';

const Update = ({ Redux1 }) => {
  // Redux
  const Redux = {
    state: useSelector((fullState) => fullState.UpdateState),
    dispatch: useDispatch(),
    action: Action,
  };

  // API Calls
  const APICalls = {
    ProfileRetrieveAPICall: () => APIs.ProfileRetrieveAPI(Redux),
    ProfileUpdateAPICall: () => APIs.ProfileUpdateAPI(Redux, Redux1)
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

    return errors;
  }	

  // All Render
  // First Render
  useEffect(() => {
    APICalls.ProfileRetrieveAPICall()
  }, [])

  // Submit Render
  useEffect(() => {
    submitFormObject(Redux, APICalls.ProfileUpdateAPICall
    )
  }, [Redux.state.FormObject.FormError])

  // Extra Render
  useEffect(() => {
    console.log(Redux.state)
  }, [Redux.state])

  // JSX  
  return (
    <div class="form-container">
      <h2>Profile Update</h2>
      <form onSubmit={event => validateFormObject(event, Redux, validateFormValues)} noValidate>
        <div style={{textAlign: 'center', alignContent: 'center'}} >
				  <img src={Redux.state.FormObject.FormValue?.image?.url} alt="profile" width={"100px"} />
        </div>

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
          value={Redux.state.FormObject.FormValue?.firstName}
          onChange={event => handleInput(event, Redux)}
        />
        <small className='danger' >{Redux.state.FormObject.FormError.firstName}</small>

        <input 
          type="text" 
          name="lastName" 
          placeholder="Last Name" 
          value={Redux.state.FormObject.FormValue?.lastName}
          onChange={event => handleInput(event, Redux)}
        />
        <small className='danger' >{Redux.state.FormObject.FormError.lastName}</small>

        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={Redux.state.FormObject.FormValue?.email}
          onChange={event => handleInput(event, Redux)}
        />
        <small className='danger' >{Redux.state.FormObject.FormError.email}</small>

        <button type="submit">Update</button>
      </form>
    </div>
  )
}

export default Update