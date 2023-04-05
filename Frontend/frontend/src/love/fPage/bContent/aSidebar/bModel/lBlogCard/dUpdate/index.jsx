import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Update from '../../../../../../cComponent/eLCRUD/dUpdate';
import clearFormObject from '../../../../../../dFunction/clearFormObject';
import { handleInput } from '../../../../../../dFunction/handleInput';
import handleSubmit from '../../../../../../dFunction/handleSubmit';
import submitFormObject from '../../../../../../dFunction/submitFormObject';
import FinalRouteName from '../../../../../../gRoute/FinalRouteName';
import APIs from './extra/APIs';
import { Action } from './extra/State';

const BlogCardUpdate = () => {
	// Variables
	const { id } = useParams()
	const navigate = useNavigate()

	// Redux
	const Redux = {
			state: useSelector((fullState) => fullState.BlogCardUpdateState),
			dispatch: useDispatch(),
			action: Action,
	};
  
	// API Calls
	const APICalls = {
		BlogCardRetrieveAPICall: () => APIs.BlogCardRetrieveAPI(Redux, id),
		BlogCardUpdateAPICall: () => APIs.BlogCardUpdateAPI(Redux, id, navigate)
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
		APICalls.BlogCardRetrieveAPICall()
	}, [])
    
	// Submit Render
	useEffect(() => {
			submitFormObject(Redux, APICalls.BlogCardUpdateAPICall)
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
              title: "Blog Card Update",
              link: {
                title: "Delete",
                to: `${FinalRouteName.Content.Sidebar.Model.BlogCard.DeleteRoute}/${id}`
              },
              button: {
                title: "Update",
                onClick: event => handleSubmit(event, Redux, validateFormValues)
              },       
              back: {
                to: `${FinalRouteName.Content.Sidebar.Model.BlogCard.RetrieveRoute}/${id}`
              }
            },
            update: {
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
                    value: Redux.state.ReceivedObject.BlogCardRetrieve?.createdBy
                  },
                  {
                    title: "Created At",
                    value: Redux.state.ReceivedObject.BlogCardRetrieve?.createdAt
                  },
                  {
                    title: "Updated By",
                    value: Redux.state.ReceivedObject.BlogCardRetrieve?.updatedBy
                  },
                  {
                    title: "Updated At",
                    value: Redux.state.ReceivedObject.BlogCardRetrieve?.updatedAt
                  },
                ]
              }
            }
          }}
        
      />

    </React.Fragment>
  )
}

export default BlogCardUpdate