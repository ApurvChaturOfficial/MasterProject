import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LCRUD from '../../../../../cComponent/aLCRUD';
import clearFormObject from '../../../../../dFunction/aClearFormObject';
import validateFormObject from '../../../../../dFunction/bValidateFormObject';
import submitFormObject from '../../../../../dFunction/cSubmitFormObject';
import handleInput from '../../../../../dFunction/dHandleInput';
import regex from '../../../../../dFunction/eRegex';
import FinalRouteName from '../../../../../gRoute/FinalRouteName';
import APIs from './extra/APIs';
import { Create, Delete, List, Retrieve, Update } from './extra/Component';
import EventHandlers from './extra/EventHandlers';
import { Action } from './extra/State';

const Role = ({ Redux1 }) => {
  // Normal Variable
  const close1 = useRef()
  const close2 = useRef()
  const close3 = useRef()
  const close4 = useRef()

  // Redux
	const Redux = {
		state: useSelector((fullState) => fullState.RoleState),
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

		MenuListAPICall: () => APIs.MenuListAPI(Redux),
	}

	// Validate Values
	const validateFormValues = FormValue => {
		const errors = {}

		// image
		if (!FormValue.image) {
			errors.image = "Please select image"
		}
		// title
		if (!FormValue.title) {
			errors.title = "Please enter title"
		} else if (FormValue.title.length < 3 || FormValue.title.length > 100) {
			errors.title = "Please enter 3-100 characters"
		}
		// subTitle
		if (!FormValue.subTitle) {
			errors.subTitle = "Please enter sub title"
		} else if (FormValue.subTitle.length < 3 || FormValue.subTitle.length > 300) {
			errors.subTitle = "Please enter 3-300 characters"
		}
		// isActive
		if (!FormValue.isActive) {
			errors.isActive = "Please select status"
		}

		return errors;
	}			

	// All Renders
  // First Render
  useEffect(() => {
    APICalls.ListAPICall()
    APICalls.MenuListAPICall()
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
        title: "Welcome to Role Section !  🎉",
        subTitle: "You are doing very well, create a stunning role section for your career gallery.",
        next: FinalRouteName.Content.Sidebar.Administration.MenuRoute,
        breadcrumb: "Role",
				onClick: () => EventHandlers.SetForm(Redux)
      }}
			access={{
				name: "Role",
				Redux1: Redux1
			}}
    />
  )
}

export default Role