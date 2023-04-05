import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Retrieve from '../../../../../../cComponent/eLCRUD/cRetrieve';
import Update from '../../../../../../cComponent/eLCRUD/dUpdate';
import clearFormObject from '../../../../../../dFunction/clearFormObject';
import { handleInput } from '../../../../../../dFunction/handleInput';
import handleSubmit from '../../../../../../dFunction/handleSubmit';
import submitFormObject from '../../../../../../dFunction/submitFormObject';
import FinalRouteName from '../../../../../../gRoute/FinalRouteName';
import APIs from './extra/APIs';
import { Action } from './extra/State';

const BaseUpdate = () => {
	// Variables
	const { id } = useParams()
	const navigate = useNavigate()

	// Redux
	const Redux = {
			state: useSelector((fullState) => fullState.BaseUpdateState),
			dispatch: useDispatch(),
			action: Action,
	};
  
	// API Calls
	const APICalls = {
		BaseRetrieveAPICall: () => APIs.BaseRetrieveAPI(Redux, id),
		BaseUpdateAPICall: () => APIs.BaseUpdateAPI(Redux, id, navigate)
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
		APICalls.BaseRetrieveAPICall()
	}, [])
    
	// Submit Render
	useEffect(() => {
			submitFormObject(Redux, APICalls.BaseUpdateAPICall)
	}, [Redux.state.FormObject.FormError])
  
	// Extra Render
	useEffect(() => {
			console.log(Redux.state)
	}, [Redux.state])
  
	// JSX
  return (
    <React.Fragment>
      <Update 
          data = {{
            header: {
              title: "New Base Update",
              link: {
                title: "Delete",
                to: `${FinalRouteName.Content.Sidebar.Setting.Base.DeleteRoute}/${id}`
              },
              button: {
                title: "Update",
                onClick: event => handleSubmit(event, Redux, validateFormValues)
              },       
              back: {
                to: `${FinalRouteName.Content.Sidebar.Setting.Base.RetrieveRoute}/${id}`
              }
            },
            update: {
              inputs: {
                basicInfo: [
                  {
                    name: "title",
                    value: Redux.state.FormObject.FormValue.title,
                    onChange: event => handleInput(event, Redux),
                    type: "text",
                    placeholder: "Hello there...",
                    label: "Title",
                    error: Redux.state.FormObject.FormError.title
                  },
                  {
                    name: "subTitle",
                    value: Redux.state.FormObject.FormValue.subTitle,
                    onChange: event => handleInput(event, Redux),
                    type: "text",
                    placeholder: "Hello there...",
                    label: "Sub Title",
                    error: Redux.state.FormObject.FormError.subTitle
                  },
                  {
                    name: "isActive",
                    value: Redux.state.FormObject.FormValue.isActive,
                    onChange: event => handleInput(event, Redux),
                    type: "radio",
                    label: "Status",
                    error: Redux.state.FormObject.FormError.isActive
                  },                                   
                ]
              },
              values: {
                personalInfo: [
                  {
                    title: "Created By",
                    value: Redux.state.ReceivedObject.BaseRetrieve?.createdBy
                  },
                  {
                    title: "Created At",
                    value: Redux.state.ReceivedObject.BaseRetrieve?.createdAt
                  },
                  {
                    title: "Updated By",
                    value: Redux.state.ReceivedObject.BaseRetrieve?.updatedBy
                  },
                  {
                    title: "Updated At",
                    value: Redux.state.ReceivedObject.BaseRetrieve?.updatedAt
                  },
                ]
              }
            }
          }}
        
      />
    </React.Fragment>
  )
}

export default BaseUpdate