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

const BlogCreate = () => {
  // Variables
	const navigate = useNavigate()

  // State Variables
  const [check, setCheck] = useState(false)

  // Redux
	const Redux = {
		state: useSelector((fullState) => fullState.BlogCreateState),
		dispatch: useDispatch(),
		action: Action,
	};

	// API Calls
	const APICalls = {
		BlogCreateAPICall: () => APIs.BlogCreateAPI(Redux, navigate),
    BlogCardListAPICall: index => APIs.BlogCardListAPI(Redux, index),
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
    APICalls.BlogCardListAPICall()
  }, [check])

	// Submit Render
	useEffect(() => {
		submitFormObject(Redux, APICalls.BlogCreateAPICall)
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
                  <label for="inputEmail3" class="col-sm-12 col-form-label">Blog Cards</label>
                  <Select 
                    options={Redux.state.RequiredObject.BlogCardList && Redux.state.RequiredObject.BlogCardList}
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
            title: "Blog Create",
            button: {
              title: "Create Blog",
              click: event => handleSubmit(event, Redux, validateFormValues)
            },
            back: {
              to: FinalRouteName.Content.Sidebar.Model.Blog.ListRoute
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

export default BlogCreate