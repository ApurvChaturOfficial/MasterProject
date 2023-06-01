import React from 'react'
import { Link } from 'react-router-dom'
import validateFormObject from '../../../../../../dFunction/bValidateFormObject'
import handleInput from '../../../../../../dFunction/dHandleInput'

export const List = ({ Redux, APICalls, access }) => {
  return (
    <div class="card">
      <div class="table-responsive text-nowrap">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Sub Title</th>
              <th>Status</th>
              <th></th>
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
                        <img src={each.image?.url || "../assets/img/avatars/1.png"} alt="" class="w-px-40 h-100 w-100 rounded-circle" style={{objectFit: "contain"}}  />
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
                      <div class="d-flex">
                      {access?.Redux1.state.ReceivedObject?.UserAccess?.[access.name]?.retrieve &&
                          <Link 
                            class="btn btn-sm btn-outline-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#exLargeModal"
                            onClick={() => APICalls.RetrieveAPICall(each.id)}
                          ><i class="bx bx-spreadsheet me-1"></i> Read
                          </Link>
                        }

                        {access?.Redux1.state.ReceivedObject?.UserAccess?.[access.name]?.update &&
                          <Link 
                            class="btn btn-sm btn-outline-primary ms-2"
                            data-bs-toggle="modal"
                            data-bs-target="#updateModal"
                            onClick={() => APICalls.RetrieveAPICall(each.id)}
                          ><i class="bx bx-edit-alt me-1"></i> Edit
                          </Link>
                        }

                        {access?.Redux1.state.ReceivedObject?.UserAccess?.[access.name]?.delete &&
                          <Link
                            class="btn btn-sm btn-outline-danger ms-2"
                            data-bs-toggle="modal"
                            data-bs-target="#modalCenter"
                            onClick={() => APICalls.RetrieveAPICall(each.id)}
                          ><i class="bx bx-trash me-1"></i> Delete
                          </Link> 
                        }
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
  )
}

export const Create = ({ Redux, validateFormValues, close1 }) => {
  return (
    <div class="modal fade" id="createModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-xl modal-dialog-scrollable" role="document">
        <div class="modal-content bg-light">
          <div class="modal-header">
            <h5 class="modal-title" id="modalFullTitle">User Create</h5>
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
                    <h5 class="mb-0">Critical Info</h5>
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

                      {/* First Name */}
                      <div class="mb-3">
                        <label for="firstName" class="form-label">First Name</label>
                        <input
                          type="text"
                          class="form-control"
                          id="firstName"
                          name="firstName"
                          placeholder="Enter your first name"
                          autofocus
                          value={Redux.state.FormObject.FormValue?.firstName || ""}
                          onChange={event => handleInput(event, Redux)}
                        />
                        <div class="form-text text-danger">{Redux.state.FormObject.FormError.firstName}</div>
                      </div>

                      {/* Last Name */}
                      <div class="mb-3">
                        <label for="lastName" class="form-label">Last Name</label>
                        <input
                          type="text"
                          class="form-control"
                          id="lastName"
                          name="lastName"
                          placeholder="Enter your last name"
                          value={Redux.state.FormObject.FormValue?.lastName || ""}
                          onChange={event => handleInput(event, Redux)}
                        />
                        <div class="form-text text-danger">{Redux.state.FormObject.FormError.lastName}</div>
                      </div>

                      {/* Email */}
                      <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input
                          type="text"
                          class="form-control"
                          id="email"
                          name="email"
                          placeholder="Enter your email"
                          value={Redux.state.FormObject.FormValue?.email || ""}
                          onChange={event => handleInput(event, Redux)}
                        />
                        <div class="form-text text-danger">{Redux.state.FormObject.FormError.email}</div>
                      </div>

                      {/* Password */}
                      <div class="mb-3 form-password-toggle">
                        <label class="form-label" for="password">Password</label>
                        <div class="input-group input-group-merge">
                          <input
                            type="password"
                            id="password"
                            class="form-control"
                            name="password"
                            placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                            aria-describedby="password"
                            value={Redux.state.FormObject.FormValue?.password || ""}
                            onChange={event => handleInput(event, Redux)}
                          />
                          <span class="input-group-text cursor-pointer"><i class="bx bx-hide"></i></span>
                        </div>
                        <div class="form-text text-danger">{Redux.state.FormObject.FormError.password}</div>
                      </div>

                      {/* Confirm Password */}
                      <div class="mb-3 form-password-toggle">
                        <label class="form-label" for="confirmPassword">Confirm Password</label>
                        <div class="input-group input-group-merge">
                          <input
                            type="password"
                            id="confirmPassword"
                            class="form-control"
                            name="confirmPassword"
                            placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                            aria-describedby="password"
                            value={Redux.state.FormObject.FormValue?.confirmPassword || ""}
                            onChange={event => handleInput(event, Redux)}
                          />
                          <span class="input-group-text cursor-pointer"><i class="bx bx-hide"></i></span>
                        </div>
                        <div class="form-text text-danger">{Redux.state.FormObject.FormError.confirmPassword}</div>
                      </div>

                      {/* Role */}
                      <div class="mb-3">
                        <label for="defaultSelect" class="form-label">Role</label>
                        <select 
                          id="defaultSelect" 
                          class="form-select" 
                          name="role"
                          onChange={event => handleInput(event, Redux)}
                        >
                          <option disabled selected>--Select Role--</option>
                          {Redux.state.RequiredObject.RoleList &&
                            Redux.state.RequiredObject.RoleList.map(each => {
                              return (
                                <option value={each.id}>{each.title}</option>
                              )
                            })
                          }
                        </select>
                        <div class="form-text text-danger">{Redux.state.FormObject.FormError.role}</div>
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
  )
}

export const Retrieve = ({ Redux, close2 }) => {
  return (
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
  )
}

export const Update = ({ Redux, validateFormValues, close3 }) => {
  return (
    <div class="modal fade" id="updateModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-xl modal-dialog-scrollable" role="document">
        <div class="modal-content bg-light">
          <div class="modal-header">
            <h5 class="modal-title" id="modalFullTitle">User Update</h5>
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

                        {/* First Name */}
                        <div class="mb-3">
                          <label for="firstName" class="form-label">First Name</label>
                          <input
                            type="text"
                            class="form-control"
                            id="firstName"
                            name="firstName"
                            placeholder="Enter your first name"
                            autofocus
                            value={Redux.state.FormObject.FormValue?.firstName || ""}
                            onChange={event => handleInput(event, Redux)}
                          />
                          <div class="form-text text-danger">{Redux.state.FormObject.FormError.firstName}</div>
                        </div>

                        {/* Last Name */}
                        <div class="mb-3">
                          <label for="lastName" class="form-label">Last Name</label>
                          <input
                            type="text"
                            class="form-control"
                            id="lastName"
                            name="lastName"
                            placeholder="Enter your last name"
                            value={Redux.state.FormObject.FormValue?.lastName || ""}
                            onChange={event => handleInput(event, Redux)}
                          />
                          <div class="form-text text-danger">{Redux.state.FormObject.FormError.lastName}</div>
                        </div>

                        {/* Email */}
                        <div class="mb-3">
                          <label for="email" class="form-label">Email</label>
                          <input
                            type="text"
                            class="form-control"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            value={Redux.state.FormObject.FormValue?.email || ""}
                            onChange={event => handleInput(event, Redux)}
                          />
                          <div class="form-text text-danger">{Redux.state.FormObject.FormError.email}</div>
                        </div>

                        {/* Role */}
                        <div class="mb-3">
                          <label for="defaultSelect" class="form-label">Role</label>
                          <select 
                            id="defaultSelect" 
                            class="form-select" 
                            name="role"
                            onChange={event => handleInput(event, Redux)}
                          >
                            <option disabled selected>--Select Role--</option>
                            {Redux.state.RequiredObject.RoleList &&
                              Redux.state.RequiredObject.RoleList.map(each => {
                                return (
                                  <option value={each.id}>{each.title}</option>
                                )
                              })
                            }
                          </select>
                          <div class="form-text text-danger">{Redux.state.FormObject.FormError.role}</div>
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
  )
}

export const Delete = ({ Redux, APICalls, close4 }) => {
  return (
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
  )
}

