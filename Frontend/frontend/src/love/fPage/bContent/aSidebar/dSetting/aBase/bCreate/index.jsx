import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Create from '../../../../../../cComponent/eLCRUD/bCreate';
import clearFormObject from '../../../../../../dFunction/clearFormObject';
import { handleInput } from '../../../../../../dFunction/handleInput';
import handleSubmit from '../../../../../../dFunction/handleSubmit';
import submitFormObject from '../../../../../../dFunction/submitFormObject';
import FinalRouteName from '../../../../../../gRoute/FinalRouteName';
import APIs from './extra/APIs';
import { Action } from './extra/State';

const BaseCreate = () => {
  // Variables
	const navigate = useNavigate()

  // Redux
	const Redux = {
		state: useSelector((fullState) => fullState.BaseCreateState),
		dispatch: useDispatch(),
		action: Action,
	};

	// API Calls
	const APICalls = {
		BaseCreateAPICall: () => APIs.BaseCreateAPI(Redux, navigate)
	}

	// Validate Values
	const validateFormValues = FormValue => {
		const errors = {}

		// title
		if (!FormValue.title) {
			errors.title = "Please enter title"
		}
		// sub title
		if (!FormValue.subTitle) {
      errors.subTitle = "Please enter sub title"
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
    clearFormObject(Redux)
  }, [])
  
	// Submit Render
	useEffect(() => {
		submitFormObject(Redux, APICalls.BaseCreateAPICall)
	}, [Redux.state.FormObject.FormError])

	// Extra Render
	useEffect(() => {
		console.log(Redux.state)
	}, [Redux.state])

	// JSX	
  return (
    <React.Fragment>
      <Create 
        data = { {
          header: {
            title: "Base Create",
            button: {
              title: "Create Base",
              click: event => handleSubmit(event, Redux, validateFormValues)
            },
            back: {
              to: FinalRouteName.Content.Sidebar.Setting.Base.ListRoute
            }
          },
          create: {
            inputs: {
              basicInfo: [
                {
                  name: "title",
                  onChange: event => handleInput(event, Redux),
                  type: "text",
                  placeholder: "Hello there...",
                  label: "Title",
                  error: Redux.state.FormObject.FormError.title
                },
                {
                  name: "subTitle",
                  onChange: event => handleInput(event, Redux),
                  type: "text",
                  placeholder: "Hello there...",
                  label: "Sub Title",
                  error: Redux.state.FormObject.FormError.subTitle
                },
                {
                  name: "isActive",
                  onChange: event => handleInput(event, Redux),
                  type: "radio",
                  label: "Status",
                  error: Redux.state.FormObject.FormError.isActive
                },                 
              ]
            }
          }
        }}
      />
    </React.Fragment>
  )
}

export default BaseCreate