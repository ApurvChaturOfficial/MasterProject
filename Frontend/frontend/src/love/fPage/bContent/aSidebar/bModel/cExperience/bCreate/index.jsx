import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Create from '../../../../../../cComponent/eLCRUD/bCreate';
import clearFormObject from '../../../../../../dFunction/clearFormObject';
import { handleInput } from '../../../../../../dFunction/handleInput';
import handleSubmit from '../../../../../../dFunction/handleSubmit';
import submitFormObject from '../../../../../../dFunction/submitFormObject';
import FinalRouteName from '../../../../../../gRoute/FinalRouteName';
import APIs from './extra/APIs';
import EventHandler from './extra/EventHandler';
import Function from './extra/Function';
import { Action } from './extra/State';

const ExperienceCreate = () => {
  // Variables
	const navigate = useNavigate()

  // State Variables
  const [check, setCheck] = useState(false)

  // Redux
	const Redux = {
		state: useSelector((fullState) => fullState.ExperienceCreateState),
		dispatch: useDispatch(),
		action: Action,
	};

	// API Calls
	const APICalls = {
		ExperienceCreateAPICall: () => APIs.ExperienceCreateAPI(Redux, navigate),
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
    setCheck(true)
  }, [])

  // Second Render
  useEffect(() => {
    check && 
    Redux.dispatch({ type: Redux.action.FormObject, payload: {
      ...Redux.state.FormObject,
      FormValue: {
        ...Redux.state.FormObject.FormValue,
        cards: [{
          title: "",
          sub_title: "",
          points: [{
            title: "",
            sub_title: ""
          }]
        }]
      }
    } })
  }, [check])
    
	// Submit Render
	useEffect(() => {
		submitFormObject(Redux, APICalls.ExperienceCreateAPICall)
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
            title: "Experience Create",
            button: {
              title: "Create Experience",
              click: event => handleSubmit(event, Redux, validateFormValues)
            },
            back: {
              to: FinalRouteName.Content.Sidebar.Model.Experience.ListRoute
            }
          },
          create: {
            inputs: {
              basicInfo: [
                {
                  name: "image",
                  onChange: event => handleInput(event, Redux),
                  type: "file",
                  label: "Image",
                  error: Redux.state.FormObject.FormError.images,
                  Redux
                },
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
              ],
              moreInfo: Function.MoreInfo(Redux, EventHandler)
            }
          }
        }}
      />
    </React.Fragment>
  )
}

export default ExperienceCreate