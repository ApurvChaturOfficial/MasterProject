import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import LCRUD from '../../../../../cComponent/aLCRUD';
import clearFormObject from '../../../../../dFunction/aClearFormObject';
import submitFormObject from '../../../../../dFunction/cSubmitFormObject';
import regex from '../../../../../dFunction/eRegex';
import FinalRouteName from '../../../../../gRoute/FinalRouteName';
import APIs from './extra/APIs';
import { Create, Delete, List, Retrieve, Update } from './extra/Component';
import { Action } from './extra/State';

const User = ({ Redux1 }) => {
  // Normal Variable
  const close1 = useRef()
  const close2 = useRef()
  const close3 = useRef()
  const close4 = useRef()

  // Redux
	const Redux = {
		state: useSelector((fullState) => fullState.UserState),
		dispatch: useDispatch(),
		action: Action,
	};

	// API Calls
	const APICalls = {
		ListAPICall: () => APIs.ListAPI(Redux),
		CreateAPICall: () => APIs.CreateAPI(Redux, close1),
		RetrieveAPICall: id => APIs.RetrieveAPI(Redux, id, close2),
		UpdateAPICall: id => APIs.UpdateAPI(Redux, id, close3),
		DeleteAPICall: id => APIs.DeleteAPI(Redux, id, close4),

		RoleListAPICall: () => APIs.RoleListAPI(Redux),
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

    if (Redux.state.ExtraObject.submitType === "create") {
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
    }
		// role
		if (!FormValue.role) {
			errors.role = "Please select role"
		}

		return errors;
	}			

	// All Renders
  // First Render
  useEffect(() => {
    APICalls.ListAPICall()
    APICalls.RoleListAPICall()
    clearFormObject(Redux)
  }, [])
  
	// Submit Render
	useEffect(() => {
		submitFormObject(Redux, () => {
      Redux.state.ExtraObject?.submitType === "create" ?
      APICalls.CreateAPICall()
      :
      Redux.state.ExtraObject?.submitType === "update" ?
      APICalls.UpdateAPICall(Redux.state.ReceivedObject?.Retrieve?.id)
      :
      APICalls.CreateAPICall()
    })
	}, [Redux.state.FormObject.FormError])

	// Extra Render
	useEffect(() => {
		console.log(Redux.state)
	}, [Redux.state])

  // JSX
  return (
    <LCRUD 
      Redux={Redux}
      APICalls={APICalls}
      validateFormValues={validateFormValues}
      List={List}
      Create={Create}
      Retrieve={Retrieve}
      Update={Update}
      Delete={Delete}
      close1={close1}
      close2={close2}
      close3={close3}
      close4={close4}
      header={{
        title: "Welcome to User Section !  🎉",
        subTitle: "You are doing very well, create a stunning user section for your career gallery.",
        next: FinalRouteName.Content.Sidebar.Administration.RoleRoute,
        breadcrumb: "User"
      }}
      access={{
				name: "User",
				Redux1: Redux1
			}}
    />
  )
}

export default User