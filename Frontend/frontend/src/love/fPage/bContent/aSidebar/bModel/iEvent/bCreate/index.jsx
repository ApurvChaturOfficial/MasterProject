import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Select from 'react-select'
import Create from '../../../../../../cComponent/eLCRUD/bCreate';
import clearFormObject from '../../../../../../dFunction/clearFormObject';
import { handleInput } from '../../../../../../dFunction/handleInput';
import handleSubmit from '../../../../../../dFunction/handleSubmit';
import submitFormObject from '../../../../../../dFunction/submitFormObject';
import FinalRouteName from '../../../../../../gRoute/FinalRouteName';
import APIs from './extra/APIs';
import { Action } from './extra/State';

const EventCreate = () => {
  // Variables
	const navigate = useNavigate()

  // State Variables
  const [check, setCheck] = useState(false)

  // Redux
	const Redux = {
		state: useSelector((fullState) => fullState.EventCreateState),
		dispatch: useDispatch(),
		action: Action,
	};

	// API Calls
	const APICalls = {
		EventCreateAPICall: () => APIs.EventCreateAPI(Redux, navigate),
    EventCardListAPICall: index => APIs.EventCardListAPI(Redux, index),
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
    APICalls.EventCardListAPICall()
  }, [check])

	// Submit Render
	useEffect(() => {
		submitFormObject(Redux, APICalls.EventCreateAPICall)
	}, [Redux.state.FormObject.FormError])

	// Extra Render
	useEffect(() => {
		console.log(Redux.state)
	}, [Redux.state])

  // Extra JSX
  const relationInfo = () => {
    return (
      <div class="container-fluid pt-4 px-4">
        <div class="row g-4">
          <div class="col-sm-12 col-xl-6">
            <div class="bg-light rounded h-100 p-4">
              <h6 class="mb-4">Relation Info</h6>
              <form>
                <div class="mb-3">
                  <label for="inputEmail3" class="col-sm-12 col-form-label">Event Cards</label>
                  <Select 
                    options={Redux.state.RequiredObject.EventCardList && Redux.state.RequiredObject.EventCardList}
                    isMulti
                    onChange={obj => {
                      console.log(obj)
                      return (
                        Redux.dispatch({
                          type: Redux.action.FormObject,
                          payload: {
                            ...Redux.state.FormObject,
                            FormValue: {
                              ...Redux.state.FormObject?.FormValue,
                              cards: obj.map(each => {
                                return {
                                  _id: each.value 
                                }
                              })
                            },
                          }
                        })
                      )
                    } }
                  />
                  <div className="form-text text-danger text-start">{Redux.state.FormObject.FormError.description}</div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }

	// JSX	
  return (
    <React.Fragment>
      <Create 
        data = { {
          header: {
            title: "Event Create",
            button: {
              title: "Create Event",
              click: event => handleSubmit(event, Redux, validateFormValues)
            },
            back: {
              to: FinalRouteName.Content.Sidebar.Model.Event.ListRoute
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
              relationInfo: relationInfo()
            }
          }
        }}
      />
    </React.Fragment>
  )
}

export default EventCreate