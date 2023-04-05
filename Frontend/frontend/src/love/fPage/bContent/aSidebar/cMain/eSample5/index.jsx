import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import clearFormObject from '../../../../../dFunction/aClearFormObject';
import validateFormObject from '../../../../../dFunction/bValidateFormObject';
import submitFormObject from '../../../../../dFunction/cSubmitFormObject';
import handleInput from '../../../../../dFunction/dHandleInput';
import regex from '../../../../../dFunction/eRegex';
import APIs from './extra/APIs';
import { Action } from './extra/State';

const Sample5 = () => {
  // Normal Variable
  const close1 = useRef()
  const close2 = useRef()
  const close3 = useRef()
  const close4 = useRef()

  // Redux
	const Redux = {
		state: useSelector((fullState) => fullState.Sample5State),
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
		} else if (FormValue.title.length < 3 || FormValue.title.length > 50) {
			errors.title = "Please enter 3-50 characters"
		}
		// subTitle
		if (!FormValue.subTitle) {
			errors.subTitle = "Please enter sub title"
		} else if (FormValue.subTitle.length < 3 || FormValue.subTitle.length > 50) {
			errors.subTitle = "Please enter 3-50 characters"
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
        <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Tables /</span> Basic Tables</h4>
       
        <nav class="navbar navbar-expand-lg navbar-light bg-white rounded mb-2">
          <div class="container-fluid">
            <a class="navbar-brand" href="javascript:void(0)">Navbar</a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="javascript:void(0)">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="javascript:void(0)">Link</a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="javascript:void(0)"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="javascript:void(0)">Action</a></li>
                    <li><a class="dropdown-item" href="javascript:void(0)">Another action</a></li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li><a class="dropdown-item" href="javascript:void(0)">Something else here</a></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="javascript:void(0)" tabindex="-1">Disabled</a>
                </li>
              </ul>
              <form class="d-flex" onsubmit="return false">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                {/* <button class="btn btn-outline-primary" type="submit">Search</button> */}
                <Link 
                  class="btn btn-outline-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#createModal"
                  onClick={() => clearFormObject(Redux)}
                > Edit
                </Link>
              </form>
            </div>
          </div>
        </nav>

        <div class="card">
          <h5 class="card-header">Hoverable rows</h5>
          <div class="table-responsive text-nowrap">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Sub Title</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody class="table-border-bottom-0">
                {Redux.state.ReceivedObject.List &&
                  Redux.state.ReceivedObject.List.map(each => {
                    return (
                      <tr>
                        <td>
                          <div class="avatar">
                            <i class="fab fa-angular fa-lg text-danger me-3"></i>
                            <img src={each.image?.url || "../assets/img/avatars/1.png"} alt="" class="w-px-40 h-100 w-100 rounded-circle" />
                          </div>                        
                        </td>
                        <td> <strong>{each.title}</strong></td>
                        <td>{each.subTitle}</td>
                        <td>
                          {each.isActive === 'active' ?
                            <span class="badge bg-label-primary me-1">Active</span>
                            :
                            <span class="badge bg-label-danger me-1">Inactive</span>
                          }
                        </td>
                        <td>
                          <div class="dropdown">
                            <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i class="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div class="dropdown-menu">
                              <Link 
                                class="dropdown-item" 
                                data-bs-toggle="modal"
                                data-bs-target="#exLargeModal"
                                onClick={() => APICalls.RetrieveAPICall(each.id)}
                              ><i class="bx bx-edit-alt me-1"></i> Read
                              </Link>
                              <Link 
                                class="dropdown-item" 
                                href="javascript:void(0);"
                                data-bs-toggle="modal"
                                data-bs-target="#updateModal"
                                onClick={() => APICalls.RetrieveAPICall(each.id)}
                              ><i class="bx bx-edit-alt me-1"></i> Edit
                              </Link>
                              <Link
                                class="dropdown-item" 
                                href="javascript:void(0);"
                                data-bs-toggle="modal"
                                data-bs-target="#modalCenter"
                                onClick={() => APICalls.RetrieveAPICall(each.id)}
                              ><i class="bx bx-trash me-1"></i> Delete
                              </Link> 
                            </div>
                          </div>
                        </td>
                      </tr>    
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <footer class="content-footer footer bg-footer-theme">
        <div class="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
          <div class="mb-2 mb-md-0">
            ©
            <script>
              document.write(new Date().getFullYear());
            </script>
            , made with ❤️ by
            <a href="https://themeselection.com" target="_blank" class="footer-link fw-bolder">ThemeSelection</a>
          </div>
          <div>
            <a href="https://themeselection.com/license/" class="footer-link me-4" target="_blank">License</a>
            <a href="https://themeselection.com/" target="_blank" class="footer-link me-4">More Themes</a>

            <a
              href="https://themeselection.com/demo/sneat-bootstrap-html-admin-template/documentation/"
              target="_blank"
              class="footer-link me-4"
              >Documentation</a
            >

            <a
              href="https://github.com/themeselection/sneat-html-admin-template-free/issues"
              target="_blank"
              class="footer-link me-4"
              >Support</a
            >
          </div>
        </div>
      </footer>

      <div class="content-backdrop fade"></div>

      {/* Create */}
      <div class="modal fade" id="createModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-scrollable" role="document">
          <div class="modal-content bg-light">
            <div class="modal-header">
              <h5 class="modal-title" id="modalFullTitle">Sample5 Create</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-xl">
                  <div class="card mb-4">
                    <div class="card-header d-flex justify-content-between align-items-center">
                      <h5 class="mb-0">Basic Info</h5>
                      <small class="text-muted float-end">Default label</small>
                    </div>
                    <div class="card-body">
                      <form noValidate>
                        {/* Image */}
                        <div class="mb-3">
                          <label for="formFile" class="form-label">Image</label>
                          <div class="row">
                            <div class="col-1 ">
                              <div class="avatar">
                                <img src={Redux.state.FormObject.FormValue?.image?.url || "../assets/img/avatars/1.png"} alt="" class="w-px-40 h-100 w-100 rounded-circle" />
                              </div> 
                            </div>
                            <div class="col-11">
                              <input 
                                class="form-control" 
                                type="file" 
                                id="formFile" 
                                name='image'
                                onChange={event => handleInput(event, Redux)}
                              />
                            </div>
                          </div>
                          <div class="form-text text-danger">{Redux.state.FormObject.FormError.image}</div>
                        </div>
                          
                        {/* Title */}
                        <div class="mb-3">
                          <label class="form-label" for="title">Title</label>
                          <input 
                            type="text" 
                            class="form-control" 
                            id="title" 
                            placeholder="Enter Title" 
                            name='title'
                            value={Redux.state.FormObject.FormValue?.title || ""}
                            onChange={event => handleInput(event, Redux)}
                          />
                          <div class="form-text text-danger">{Redux.state.FormObject.FormError.title}</div>
                        
                        </div>

                        {/* Sub Title */}
                        <div class="mb-3">
                          <label class="form-label" for="sub-title">Sub Title</label>
                          <input 
                            type="text" 
                            class="form-control" 
                            id="sub-title" 
                            placeholder="Enter Sub Title" 
                            name='subTitle'
                            value={Redux.state.FormObject.FormValue?.subTitle || ""}
                            onChange={event => handleInput(event, Redux)}
                          />
                          <div class="form-text text-danger">{Redux.state.FormObject.FormError.subTitle}</div>
                        </div>

                        {/* Status */}
                        <div class="mb-3">
                          <label for="defaultSelect" class="form-label">Status</label>
                          <div class="form-check form-check-inline mt-3 ms-3">
                            <input
                              class="form-check-input"
                              type="radio"
                              id="inlineRadio1"
                              value="active"
                              name='isActive'
                              checked={Redux.state.FormObject.FormValue?.isActive === "active"}
                              onChange={event => handleInput(event, Redux)}
                            />
                            <label class="form-check-label" for="inlineRadio1">Active</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input
                              class="form-check-input"
                              type="radio"
                              id="inlineRadio2"
                              value="inactive"
                              name='isActive'
                              checked={Redux.state.FormObject.FormValue?.isActive === "inactive"}
                              onChange={event => handleInput(event, Redux)}
                            />
                            <label class="form-check-label" for="inlineRadio2">Inactive</label>
                          </div>
                          <div class="form-text text-danger">{Redux.state.FormObject.FormError.isAct}</div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" ref={close1} class="btn btn-outline-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" onClick={event => validateFormObject(event, Redux, validateFormValues, "create")} class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

      {/* Retrieve */}
      <div class="modal fade" id="exLargeModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-scrollable" role="document">
          <div class="modal-content bg-light">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel4">Modal title</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {Redux.state.ReceivedObject.Retrieve &&
              <div class="modal-body">
                <div class="row">
                    <div class="col-xl">
                      <div class="card mb-4">
                        <div class="card-header d-flex justify-content-between align-items-center">
                          <h5 class="mb-0">Basic Info</h5>
                          <small class="text-muted float-end">Default label</small>
                        </div>
                        <div class="card-body">
                          <dl class="row mt-2">
                            <dt class="col-sm-3 text-truncate">Image</dt>
                            <dd class="col-sm-9">
                              <div class="avatar">
                                <img src={Redux.state.FormObject.FormValue?.image?.url || "../assets/img/avatars/1.png"} alt="" class="w-px-40 h-100 w-100 rounded-circle" />
                              </div> 
                            </dd>
  
                            <dt class="col-sm-3 text-truncate">Title</dt>
                            <dd class="col-sm-9">{Redux.state.ReceivedObject.Retrieve?.title}</dd>
  
                            <dt class="col-sm-3 text-truncate">Sub Title</dt>
                            <dd class="col-sm-9">
                              <p>{Redux.state.ReceivedObject.Retrieve?.subTitle}</p>
                            </dd>
  
                            <dt class="col-sm-3 text-truncate">Status</dt>
                            <dd class="col-sm-9">
                              {Redux.state.ReceivedObject.Retrieve?.isActive === 'active' ?
                                <span class="badge bg-label-primary">Active</span>  
                                :
                                <span class="badge bg-label-danger">Inctive</span>
                              }
                            </dd>
                            </dl>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl">
                      <div class="card mb-4">
                        <div class="card-header d-flex justify-content-between align-items-center">
                          <h5 class="mb-0">Personal Info</h5>
                          <small class="text-muted float-end">Default label</small>
                        </div>
                        <div class="card-body">
                          <dl class="row mt-2">
                            <dt class="col-sm-3 text-truncate">Created By</dt>
                            <dd class="col-sm-9">{Redux.state.ReceivedObject.Retrieve?.createdBy}</dd>
                            
                            <dt class="col-sm-3 text-truncate">Created At</dt>
                            <dd class="col-sm-9">{Redux.state.ReceivedObject.Retrieve?.createdAt}</dd>
                            
                            <dt class="col-sm-3 text-truncate">Updated By</dt>
                            <dd class="col-sm-9">{Redux.state.ReceivedObject.Retrieve?.updatedBy}</dd>
                            
                            <dt class="col-sm-3 text-truncate">Updated At</dt>
                            <dd class="col-sm-9">{Redux.state.ReceivedObject.Retrieve?.updatedAt}</dd>
                          </dl>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            }
            <div class="modal-footer">
              <button type="button" ref={close2} class="btn btn-outline-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

      {/* Update */}
      <div class="modal fade" id="updateModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-scrollable" role="document">
          <div class="modal-content bg-light">
            <div class="modal-header">
              <h5 class="modal-title" id="modalFullTitle">Sample5 Update</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {Redux.state.ReceivedObject.Retrieve &&
              <div class="modal-body">
                <div class="row">
                  <div class="col-xl">
                    <div class="card mb-4">
                      <div class="card-header d-flex justify-content-between align-items-center">
                        <h5 class="mb-0">Basic Layout</h5>
                        <small class="text-muted float-end">Default label</small>
                      </div>
                      <div class="card-body">
                        <form noValidate>
                          {/* Image */}
                          <div class="mb-3">
                            <label for="formFile" class="form-label">Image</label>
                            <div class="row">
                              <div class="col-1 ">
                                <div class="avatar">
                                  <img src={Redux.state.FormObject.FormValue?.image?.url || "../assets/img/avatars/1.png"} alt="" class="w-px-40 h-100 w-100 rounded-circle" />
                                </div> 
                              </div>
                              <div class="col-11">
                                <input 
                                  class="form-control" 
                                  type="file" 
                                  id="formFile" 
                                  name='image'
                                  onChange={event => handleInput(event, Redux)}
                                />
                              </div>
                            </div>
                            <div class="form-text text-danger">{Redux.state.FormObject.FormError.image}</div>
                          </div>
                            
                          {/* Title */}
                          <div class="mb-3">
                            <label class="form-label" for="title">Title</label>
                            <input 
                              type="text" 
                              class="form-control" 
                              id="title" 
                              placeholder="Enter Title" 
                              name='title'
                              value={Redux.state.FormObject.FormValue?.title || ""}
                              onChange={event => handleInput(event, Redux)}
                            />
                            <div class="form-text text-danger">{Redux.state.FormObject.FormError.title}</div>
                          
                          </div>

                          {/* Sub Title */}
                          <div class="mb-3">
                            <label class="form-label" for="sub-title">Sub Title</label>
                            <input 
                              type="text" 
                              class="form-control" 
                              id="sub-title" 
                              placeholder="Enter Sub Title" 
                              name='subTitle'
                              value={Redux.state.FormObject.FormValue?.subTitle || ""}
                              onChange={event => handleInput(event, Redux)}
                            />
                            <div class="form-text text-danger">{Redux.state.FormObject.FormError.subTitle}</div>
                          </div>

                          {/* Status */}
                          <div class="mb-3">
                            <label for="defaultSelect" class="form-label">Status</label>
                            <div class="form-check form-check-inline mt-3 ms-3">
                              <input
                                class="form-check-input"
                                type="radio"
                                id="inlineRadio1"
                                value="active"
                                name='isActive'
                                checked={Redux.state.FormObject.FormValue?.isActive === "active"}
                                onChange={event => handleInput(event, Redux)}
                              />
                              <label class="form-check-label" for="inlineRadio1">Active</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                id="inlineRadio2"
                                value="inactive"
                                name='isActive'
                                checked={Redux.state.FormObject.FormValue?.isActive === "inactive"}
                                onChange={event => handleInput(event, Redux)}
                              />
                              <label class="form-check-label" for="inlineRadio2">Inactive</label>
                            </div>
                            <div class="form-text text-danger">{Redux.state.FormObject.FormError.isAct}</div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl">
                    <div class="card mb-4">
                      <div class="card-header d-flex justify-content-between align-items-center">
                        <h5 class="mb-0">Personal Info</h5>
                        <small class="text-muted float-end">Default label</small>
                      </div>
                      <div class="card-body">
                        <dl class="row mt-2">
                          <dt class="col-sm-3 text-truncate">Created By</dt>
                          <dd class="col-sm-9">{Redux.state.ReceivedObject.Retrieve?.createdBy}</dd>
                          
                          <dt class="col-sm-3 text-truncate">Created At</dt>
                          <dd class="col-sm-9">{Redux.state.ReceivedObject.Retrieve?.createdAt}</dd>
                          
                          <dt class="col-sm-3 text-truncate">Updated By</dt>
                          <dd class="col-sm-9">{Redux.state.ReceivedObject.Retrieve?.updatedBy}</dd>
                          
                          <dt class="col-sm-3 text-truncate">Updated At</dt>
                          <dd class="col-sm-9">{Redux.state.ReceivedObject.Retrieve?.updatedAt}</dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            }
            <div class="modal-footer">
             <button type="button" ref={close3} class="btn btn-outline-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" onClick={event => validateFormObject(event, Redux, validateFormValues, "update")} class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

      {/* Delete */}
      <div class="modal fade" id="modalCenter" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-scrollable" role="document">
          <div class="modal-content bg-light">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel4">Modal title</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {Redux.state.ReceivedObject.Retrieve &&
              <div class="modal-body">
                <div class="card mb-4">
                  <div class="card-body">
                    <div class="mb-3 col-12">
                      <div class="alert alert-warning">
                        <h6 class="alert-heading fw-bold mb-1">Are you sure you want to delete following instance?</h6>
                        <p class="mb-0">Once you delete your account, there is no going back. Please be certain.</p>
                      </div>
                    </div>
                    <button class="btn btn-danger deactivate-account" onClick={() => APICalls.DeleteAPICall(Redux.state.ReceivedObject.Retrieve?.id)}>Sure Delete</button>
                  </div>
                </div>

                <div class="row">
                    <div class="col-xl">
                      <div class="card mb-4">
                        <div class="card-header d-flex justify-content-between align-items-center">
                          <h5 class="mb-0">Basic Info</h5>
                          <small class="text-muted float-end">Default label</small>
                        </div>
                        <div class="card-body">
                          <dl class="row mt-2">
                            <dt class="col-sm-3 text-truncate">Image</dt>
                            <dd class="col-sm-9">
                              <div class="avatar">
                                <img src={Redux.state.FormObject.FormValue?.image?.url || "../assets/img/avatars/1.png"} alt="" class="w-px-40 h-100 w-100 rounded-circle" />
                              </div> 
                            </dd>
  
                            <dt class="col-sm-3 text-truncate">Title</dt>
                            <dd class="col-sm-9">{Redux.state.ReceivedObject.Retrieve?.title}</dd>
  
                            <dt class="col-sm-3 text-truncate">Sub Title</dt>
                            <dd class="col-sm-9">
                              <p>{Redux.state.ReceivedObject.Retrieve?.subTitle}</p>
                            </dd>
  
                            <dt class="col-sm-3 text-truncate">Status</dt>
                            <dd class="col-sm-9">
                              {Redux.state.ReceivedObject.Retrieve?.isActive === 'active' ?
                                <span class="badge bg-label-primary">Active</span>  
                                :
                                <span class="badge bg-label-danger">Inctive</span>
                              }
                            </dd>
                            </dl>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl">
                      <div class="card mb-4">
                        <div class="card-header d-flex justify-content-between align-items-center">
                          <h5 class="mb-0">Personal Info</h5>
                          <small class="text-muted float-end">Default label</small>
                        </div>
                        <div class="card-body">
                          <dl class="row mt-2">
                            <dt class="col-sm-3 text-truncate">Created By</dt>
                            <dd class="col-sm-9">{Redux.state.ReceivedObject.Retrieve?.createdBy}</dd>
                            
                            <dt class="col-sm-3 text-truncate">Created At</dt>
                            <dd class="col-sm-9">{Redux.state.ReceivedObject.Retrieve?.createdAt}</dd>
                            
                            <dt class="col-sm-3 text-truncate">Updated By</dt>
                            <dd class="col-sm-9">{Redux.state.ReceivedObject.Retrieve?.updatedBy}</dd>
                            
                            <dt class="col-sm-3 text-truncate">Updated At</dt>
                            <dd class="col-sm-9">{Redux.state.ReceivedObject.Retrieve?.updatedAt}</dd>
                          </dl>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            }
            <div class="modal-footer">
              <button type="button" ref={close4} class="btn btn-outline-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sample5