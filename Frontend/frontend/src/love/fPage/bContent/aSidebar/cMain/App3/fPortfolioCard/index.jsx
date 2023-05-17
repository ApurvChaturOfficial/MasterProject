import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import JoditEditor from 'jodit-react';
import parse from 'html-react-parser';
import clearFormObject from '../../../../../../dFunction/aClearFormObject';
import validateFormObject from '../../../../../../dFunction/bValidateFormObject';
import submitFormObject from '../../../../../../dFunction/cSubmitFormObject';
import handleInput from '../../../../../../dFunction/dHandleInput';
import regex from '../../../../../../dFunction/eRegex';
import APIs from './extra/APIs';
import EventHandler from './extra/EventHandler';
import { Action } from './extra/State';
import LCRUD from '../../../../../../cComponent/aLCRUD';
import { Create, Delete, List, Retrieve, Update } from './extra/Component';
import FinalRouteName from '../../../../../../gRoute/FinalRouteName';

const PortfolioCard = () => {
  // Normal Variable
  const close1 = useRef()
  const close2 = useRef()
  const close3 = useRef()
  const close4 = useRef()
  const editor1 = useRef(null);
  const editor2 = useRef(null);

  // Redux
	const Redux = {
		state: useSelector((fullState) => fullState.PortfolioCardState),
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
    clearFormObject(Redux)
  }, [])
  
  // Second Render
  useEffect(() => {
    Redux.state.ExtraObject.Next &&
    Redux.dispatch({ type: Redux.action.FormObject, payload: {
      ...Redux.state.FormObject,
      FormValue: {
        ...Redux.state.FormObject.FormValue,
        links: [{
          label: "",
          icon: "",
          url: ""
        }],
        references: [{
          label: "",
          image: "",
          url: ""
        }],
      }
    } })
  }, [Redux.state.ExtraObject])

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
      editor1={editor1}
      editor2={editor2}
      header={{
        title: "Welcome to Portfolio Card Section ! 🎉",
        subTitle: "You are doing very well, add impressive portfolio cards to your career gallery.",
        next: FinalRouteName.Content.Sidebar.Main.EventRoute,
        breadcrumb: "Portfolio Card"
      }}
    />
  )
}

export default PortfolioCard