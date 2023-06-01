import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import LCRUD from '../../../../../../cComponent/aLCRUD';
import Header from '../../../../../../cComponent/cHeader';
import clearFormObject from '../../../../../../dFunction/aClearFormObject';
import submitFormObject from '../../../../../../dFunction/cSubmitFormObject';
import FinalRouteName from '../../../../../../gRoute/FinalRouteName';
import APIs from './extra/APIs';
import { Create, Delete, List, Retrieve, Update } from './extra/Component';
import { Action } from './extra/State';

const About = ({ Redux1 }) => {
  // Normal Variable
  const close1 = useRef()
  const close4 = useRef()

  // Redux
	const Redux = {
		state: useSelector((fullState) => fullState.AboutState),
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
        cards: [{
          title: "",
          sub_title: "",
          icon: ""
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
    <div class="content-wrapper">
      <div class="container-xxl flex-grow-1 container-p-y">
        <Header 
          Redux={Redux}
          header={{
            title: "Welcome to Home Section !  🎉",
            subTitle: "You are doing very well, create a stunning home section for your career gallery.",
            next: FinalRouteName.Content.Sidebar.Direct.AboutRoute,
            breadcrumb: "Home"
          }}
        />

        {Object.keys(Redux.state.FormObject.FormValue).length > 0 ? 
          <div class="card">
            <div class="card-body">
              <form noValidate>
                {/* Image */}
                <div class="mb-3">
                  <div class="d-flex justify-content-center mb-4">
                    <img src={Redux.state.FormObject.FormValue?.image?.url || "../assets/img/avatars/1.png"}
                      class="rounded-circle" alt="example placeholder" style={{width: "125px", height: "125px", objectFit: "contain"}} />
                  </div>
                  <div class="d-flex justify-content-center">
                    <div class="btn btn-sm btn-primary btn-rounded">
                      <label class="form-label text-white m-1" for="customFile2">Choose file</label>
                      <input 
                        type="file" 
                        class="form-control d-none" 
                        id="customFile2" 
                        name='image'
                        onChange={event => handleInput(event, Redux)}
                      />
                    </div>
                  </div>
                </div>
                  
                {/* Title */}
                <div class="mb-3">
                  <label for="formFile" class="form-label">Greeting</label>
                  <input 
                    type="text" 
                    class="form-control" 
                    id="title" 
                    placeholder="Enter Pre Heading" 
                    name='title'
                    value={Redux.state.FormObject.FormValue?.title || ""}
                    onChange={event => handleInput(event, Redux)}
                  />
                  <div class="form-text text-danger">{Redux.state.FormObject.FormError.title}</div>
                
                </div>

                {/* Sub Title */}
                <div class="mb-3">
                  <label for="formFile" class="form-label">Name</label>
                  <input 
                    type="text" 
                    class="form-control" 
                    id="sub-title" 
                    placeholder="Enter Name" 
                    name='subTitle'
                    value={Redux.state.FormObject.FormValue?.subTitle || ""}
                    onChange={event => handleInput(event, Redux)}
                  />
                  <div class="form-text text-danger">{Redux.state.FormObject.FormError.subTitle}</div>
                </div>
                    
                {/* Description */}
                <div class="mb-3">
                  <label for="formFile" class="form-label">Designation</label>
                  <input 
                    type="text" 
                    class="form-control" 
                    id="description" 
                    placeholder="Enter Description" 
                    name='description'
                    value={Redux.state.FormObject.FormValue?.description || ""}
                    onChange={event => handleInput(event, Redux)}
                  />
                  <div class="form-text text-danger">{Redux.state.FormObject.FormError.description}</div>
                </div>

                {/* Resume */}
                <div class="mb-3">
                  <label for="formFile" class="form-label">Resume</label>
                  <input 
                    class="form-control" 
                    type="file" 
                    id="formFile" 
                    name='resume'
                    onChange={event => handleInput(event, Redux)}
                  />
                  <div class="form-text"><a href={Redux.state.FormObject.FormValue?.resume?.url || ""} target="_blank" rel='noreferrer'>Click to Preview</a></div>
                  <div class="form-text text-danger">{Redux.state.FormObject.FormError.resume}</div>
                </div>

                {/* Links */}
                <div class="mb-3">
                  <label class="form-label" for="links">
                    Links
                    {Redux.state.FormObject.FormValue.links && 
                      Redux.state.FormObject.FormValue.links.length < 3 && 
                      <i class='bx bxs-plus-circle ms-2' onClick={() => EventHandler.Links.Add(Redux)}></i>
                    }
                  </label><br />
                  {Redux.state.FormObject.FormValue.links && 
                    Redux.state.FormObject.FormValue.links.map((each, index) => {
                      return (
                        <React.Fragment>
                          <div class="card mb-4 bg-light">
                            <div class="card-header">
                              {Redux.state.FormObject.FormValue.links && 
                                Redux.state.FormObject.FormValue.links.length > 1 && 
                                <i class='bx bxs-minus-circle me-2' onClick={() => EventHandler.Links.Remove(Redux, index)}></i>
                              }
                              <small class="text-light fw-semibold">Link {index+1}</small>
                            </div>
                            <div class="card-body">
                              <div class="mb-3">
                                <label class="form-label" for="label">Label</label>
                                <input 
                                  type="text" 
                                  class="form-control" 
                                  id="label" 
                                  placeholder="Enter Label" 
                                  name='label'
                                  value={each.label || ""}
                                  onChange={event => EventHandler.Links.Change(event, Redux, index)}
                                />
                                <div class="form-text text-danger">{Redux.state.FormObject.FormError.title}</div>
                              </div>
                              
                              <div class="mb-3">
                                <label for="icon" class="form-label">Icon</label>
                                <select 
                                  id="icon" 
                                  class="form-select" 
                                  name="icon"
                                  onChange={event => EventHandler.Links.Change(event, Redux, index)}
                                >
                                  <option disabled selected>--Select Icon--</option>
                                  <option value="github" selected={each.icon === "github"} ><i class='bx bxl-github'></i> Github</option>
                                  <option value="linkedin" selected={each.icon === "linkedin"} ><i class='bx bxl-linkedin'></i> LinkedIn</option>
                                  <option value="facebook" selected={each.icon === "facebook"} ><i class='bx bxl-facebook'></i> Facebook</option>
                                  <option value="instagram" selected={each.icon === "instagram"} ><i class='bx bxl-instagram'></i> Instagram</option>
                                  <option value="twitter" selected={each.icon === "twitter"} ><i class='bx bxl-twitter'></i> Twitter</option>
                                  <option value="other" selected={each.icon === "other"} ><i class='bx bxl-link'></i> Other</option>
                                </select>
                                <div class="form-text text-danger">{Redux.state.FormObject.FormError.role}</div>
                              </div>
                              
                              <div class="mb-3">
                                <label class="form-label" for="url">URL</label>
                                <input 
                                  type="text" 
                                  class="form-control" 
                                  id="url" 
                                  placeholder="Enter URL" 
                                  name='url'
                                  value={each.url || ""}
                                  onChange={event => EventHandler.Links.Change(event, Redux, index)}
                                />
                                <div class="form-text text-danger">{Redux.state.FormObject.FormError.title}</div>
                              </div>
                              
                            </div>
                          </div>
                        </React.Fragment>
                      )
                    })
                  }
                  <div class="form-text text-danger">{Redux.state.FormObject.FormError.links}</div>
                </div>
              </form>

              <button type="button" onClick={event => validateFormObject(event, Redux, validateFormValues, "update")} class="btn btn-primary">Save changes</button>
            </div>
          </div>
          :
          <div class="card text-center">
            <div class="card-header">
              <h6 class="my-4 text-danger">Stupid! No Home Item Found.</h6>
              <Link 
                class="btn btn-sm btn-outline-primary me-2 mt-2"
                data-bs-toggle="modal"
                data-bs-target="#createModal"
                onClick={() => {
                  clearFormObject(Redux)
                  return Redux.dispatch({ type: Redux.action.ExtraObject, payload: {
                    ...Redux.state.ExtraObject,
                    Next: true
                  } })
                }}
              > 
                <i class="bx bx-plus-circle me-1"></i>Create New Instance 
              </Link>
            </div>
          </div>
        }
      </div>

      <div class="content-backdrop fade"></div>

      {/* Create */}
      <Create 
        Redux={Redux}
        validateFormValues={validateFormValues}
        close1={close1}
      />
    </div>
  )
}

export default About