import React from 'react'
import { Link } from 'react-router-dom'
import Select from 'react-select'
import JoditEditor from 'jodit-react';
import parse from 'html-react-parser';
import validateFormObject from '../../../../../../../dFunction/bValidateFormObject'
import handleInput from '../../../../../../../dFunction/dHandleInput'
import EventHandler from './EventHandler'

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

export const Create = ({ Redux, validateFormValues, close1, editor1, editor2 }) => {
  return (
   <div class="modal fade" id="createModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-xl modal-dialog-scrollable" role="document">
        <div class="modal-content bg-light">
          <div class="modal-header">
            <h5 class="modal-title" id="modalFullTitle">PortfolioCard Create</h5>
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
              <div class="col-xl">
                <div class="card mb-4">
                  <div class="card-header d-flex justify-content-between align-items-center">
                    <h5 class="mb-0">More Info</h5>
                    <small class="text-muted float-end">Default label</small>
                  </div>
                  <div class="card-body">
                    <form noValidate>                          
                      {/* Description */}
                      <div class="mb-3">
                        <label class="form-label" for="description">Description</label>
                        <JoditEditor
                          ref={editor1}
                          value={Redux.state.FormObject.FormValue.description}
                          tabIndex={1} // tabIndex of textarea
                          onChange={value => Redux.dispatch({
                            type: Redux.action.FormObject,
                            payload: {
                              ...Redux.state.FormObject,
                              FormValue: {
                                ...Redux.state.FormObject?.FormValue,
                                description: value,
                              },
                            },
                          })}
                        />
                        <div class="form-text text-danger">{Redux.state.FormObject.FormError.description}</div>
                      </div>

                      {/* Detail */}
                      <div class="mb-3">
                        <label class="form-label" for="detail">Detail</label>
                        <JoditEditor
                          ref={editor2}
                          value={Redux.state.FormObject.FormValue.detail}
                          tabIndex={1} // tabIndex of textarea
                          onChange={value => Redux.dispatch({
                            type: Redux.action.FormObject,
                            payload: {
                              ...Redux.state.FormObject,
                              FormValue: {
                                ...Redux.state.FormObject?.FormValue,
                                detail: value,
                              },
                            },
                          })}
                        />
                        <div class="form-text text-danger">{Redux.state.FormObject.FormError.description}</div>
                      </div>

                      {/* Links */}
                      <div class="mb-3">
                        <label class="form-label" for="links">
                          Links
                          {Redux.state.FormObject.FormValue.links && 
                            Redux.state.FormObject.FormValue.links.length < 3 && 
                            <i class='bx bxs-plus-circle ms-2' onClick={() => EventHandler.Link.Add(Redux)}></i>
                          }
                        </label><br />
                        {Redux.state.FormObject.FormValue.links && 
                          Redux.state.FormObject.FormValue.links.map((each, index) => {
                            return (
                              <React.Fragment>
                                <div class="card mb-4 bg-light">
                                  <div class="card-header">
                                    {Redux.state.FormObject.FormValue.links && 
                                      Redux.state.FormObject.FormValue.links.length > 0 && 
                                      <i class='bx bxs-minus-circle me-2' onClick={() => EventHandler.Link.Remove(Redux, index)}></i>
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
                                        onChange={event => EventHandler.Link.Change(event, Redux, index)}
                                      />
                                      <div class="form-text text-danger">{Redux.state.FormObject.FormError.title}</div>
                                    </div>
                                    
                                    <div class="mb-3">
                                      <label class="form-label" for="icon">Icon</label>
                                      <input 
                                        type="text" 
                                        class="form-control" 
                                        id="icon" 
                                        placeholder="Enter Icon" 
                                        name='icon'
                                        value={each.icon || ""}
                                        onChange={event => EventHandler.Link.Change(event, Redux, index)}
                                      />
                                      <div class="form-text text-danger">{Redux.state.FormObject.FormError.title}</div>
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
                                        onChange={event => EventHandler.Link.Change(event, Redux, index)}
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

                      {/* Reference */}
                      <div class="mb-3">
                        <label class="form-label" for="reference">
                          Reference
                          {Redux.state.FormObject.FormValue.references && 
                            Redux.state.FormObject.FormValue.references.length < 3 && 
                            <i class='bx bxs-plus-circle ms-2' onClick={() => EventHandler.Reference.Add(Redux)}></i>
                          }
                        </label><br />
                        {Redux.state.FormObject.FormValue.references && 
                          Redux.state.FormObject.FormValue.references.map((each, index) => {
                            return (
                              <React.Fragment>
                                <div class="card mb-4 bg-light">
                                  <div class="card-header">
                                    {Redux.state.FormObject.FormValue.references && 
                                      Redux.state.FormObject.FormValue.references.length > 0 && 
                                      <i class='bx bxs-minus-circle me-2' onClick={() => EventHandler.Reference.Remove(Redux, index)}></i>
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
                                        onChange={event => EventHandler.Reference.Change(event, Redux, index)}
                                      />
                                      <div class="form-text text-danger">{Redux.state.FormObject.FormError.title}</div>
                                    </div>
                                    
                                    <div class="mb-3">
                                      <label class="form-label" for="image">Image</label>
                                      <input 
                                        type="text" 
                                        class="form-control" 
                                        id="image" 
                                        placeholder="Enter Image" 
                                        name='image'
                                        value={each.image || ""}
                                        onChange={event => EventHandler.Reference.Change(event, Redux, index)}
                                      />
                                      <div class="form-text text-danger">{Redux.state.FormObject.FormError.image}</div>
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
                                        onChange={event => EventHandler.Reference.Change(event, Redux, index)}
                                      />
                                      <div class="form-text text-danger">{Redux.state.FormObject.FormError.title}</div>
                                    </div>
                                    
                                  </div>
                                </div>
                              </React.Fragment>
                            )
                          })
                        }
                        <div class="form-text text-danger">{Redux.state.FormObject.FormError.reference}</div>
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
              <div class="col-xl">
                <div class="card mb-4">
                  <div class="card-header d-flex justify-content-between align-items-center">
                    <h5 class="mb-0">More Info</h5>
                    <small class="text-muted float-end">Default label</small>
                  </div>
                  <div class="card-body">
                    <dl class="row mt-2">
                      <dt class="col-sm-4">Description :</dt>
                      <dd class="col-sm-12">{Redux.state.ReceivedObject.Retrieve?.description ? parse(Redux.state.ReceivedObject.Retrieve?.description) : ""}</dd>

                      <dt class="col-sm-4">Details :</dt>
                      <dd class="col-sm-12">{Redux.state.ReceivedObject.Retrieve?.detail ? parse(Redux.state.ReceivedObject.Retrieve?.detail) : ""}</dd>

                      <dt class="col-sm-12 mb-2">Links :</dt>
                      {Redux.state.ReceivedObject.Retrieve &&
                        Redux.state.ReceivedObject.Retrieve.links.map((each, index) => {
                          return (
                            <div class="bg-white rounded h-100 p-3 mb-3">
                              <dl class="row mb-0">
                                <dt class="col-sm-4">Icon :</dt>
                                <dd class="col-sm-8">{each.icon}</dd>

                                <dt class="col-sm-4">Label :</dt>
                                <dd class="col-sm-8">{each.label}</dd>

                                <dt class="col-sm-4">URL :</dt>
                                <dd class="col-sm-8">{each.url}</dd>
                              </dl>
                            </div>
                          )
                        })
                      }

                      <dt class="col-sm-12 mb-2">References :</dt>
                      {Redux.state.ReceivedObject.Retrieve &&
                        Redux.state.ReceivedObject.Retrieve.references.map((each, index) => {
                          return (
                            <div class="bg-white rounded h-100 p-3 mb-3">
                              <dl class="row mb-0">
                                <dt class="col-sm-4">Image :</dt>
                                <dd class="col-sm-8">{each.image}</dd>

                                <dt class="col-sm-4">Label :</dt>
                                <dd class="col-sm-8">{each.label}</dd>

                                <dt class="col-sm-4">URL :</dt>
                                <dd class="col-sm-8">{each.url}</dd>
                              </dl>
                            </div>
                          )
                        })
                      }
                    </dl>
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

export const Update = ({ Redux, validateFormValues, close3, editor1, editor2 }) => {
  return (
    <div class="modal fade" id="updateModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-xl modal-dialog-scrollable" role="document">
        <div class="modal-content bg-light">
          <div class="modal-header">
            <h5 class="modal-title" id="modalFullTitle">PortfolioCard Update</h5>
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
              <div class="col-xl">
                <div class="card mb-4">
                  <div class="card-header d-flex justify-content-between align-items-center">
                    <h5 class="mb-0">More Info</h5>
                    <small class="text-muted float-end">Default label</small>
                  </div>
                  <div class="card-body">
                    <form noValidate>                          
                      {/* Description */}
                      <div class="mb-3">
                        <label class="form-label" for="description">Description</label>
                        <JoditEditor
                          ref={editor1}
                          value={Redux.state.FormObject.FormValue.description}
                          tabIndex={1} // tabIndex of textarea
                          onChange={value => Redux.dispatch({
                            type: Redux.action.FormObject,
                            payload: {
                              ...Redux.state.FormObject,
                              FormValue: {
                                ...Redux.state.FormObject?.FormValue,
                                description: value,
                              },
                            },
                          })}
                        />
                        <div class="form-text text-danger">{Redux.state.FormObject.FormError.description}</div>
                      </div>

                      {/* Detail */}
                      <div class="mb-3">
                        <label class="form-label" for="detail">Detail</label>
                        <JoditEditor
                          ref={editor1}
                          value={Redux.state.FormObject.FormValue.detail}
                          tabIndex={1} // tabIndex of textarea
                          onChange={value => Redux.dispatch({
                            type: Redux.action.FormObject,
                            payload: {
                              ...Redux.state.FormObject,
                              FormValue: {
                                ...Redux.state.FormObject?.FormValue,
                                detail: value,
                              },
                            },
                          })}
                        />
                        <div class="form-text text-danger">{Redux.state.FormObject.FormError.description}</div>
                      </div>

                      {/* Links */}
                      <div class="mb-3">
                        <label class="form-label" for="links">
                          Links
                          {Redux.state.FormObject.FormValue.links && 
                            Redux.state.FormObject.FormValue.links.length < 3 && 
                            <i class='bx bxs-plus-circle ms-2' onClick={() => EventHandler.Link.Add(Redux)}></i>
                          }
                        </label><br />
                        {Redux.state.FormObject.FormValue.links && 
                          Redux.state.FormObject.FormValue.links.map((each, index) => {
                            return (
                              <React.Fragment>
                                <div class="card mb-4 bg-light">
                                  <div class="card-header">
                                    {Redux.state.FormObject.FormValue.links && 
                                      Redux.state.FormObject.FormValue.links.length > 0 && 
                                      <i class='bx bxs-minus-circle me-2' onClick={() => EventHandler.Link.Remove(Redux, index)}></i>
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
                                        onChange={event => EventHandler.Link.Change(event, Redux, index)}
                                      />
                                      <div class="form-text text-danger">{Redux.state.FormObject.FormError.title}</div>
                                    </div>
                                    
                                    <div class="mb-3">
                                      <label class="form-label" for="icon">Icon</label>
                                      <input 
                                        type="text" 
                                        class="form-control" 
                                        id="icon" 
                                        placeholder="Enter Icon" 
                                        name='icon'
                                        value={each.icon || ""}
                                        onChange={event => EventHandler.Link.Change(event, Redux, index)}
                                      />
                                      <div class="form-text text-danger">{Redux.state.FormObject.FormError.title}</div>
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
                                        onChange={event => EventHandler.Link.Change(event, Redux, index)}
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

                      {/* Reference */}
                      <div class="mb-3">
                        <label class="form-label" for="reference">
                          Reference
                          {Redux.state.FormObject.FormValue.references && 
                            Redux.state.FormObject.FormValue.references.length < 3 && 
                            <i class='bx bxs-plus-circle ms-2' onClick={() => EventHandler.Reference.Add(Redux)}></i>
                          }
                        </label><br />
                        {Redux.state.FormObject.FormValue.references && 
                          Redux.state.FormObject.FormValue.references.map((each, index) => {
                            return (
                              <React.Fragment>
                                <div class="card mb-4 bg-light">
                                  <div class="card-header">
                                    {Redux.state.FormObject.FormValue.references && 
                                      Redux.state.FormObject.FormValue.references.length > 0 && 
                                      <i class='bx bxs-minus-circle me-2' onClick={() => EventHandler.Reference.Remove(Redux, index)}></i>
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
                                        onChange={event => EventHandler.Reference.Change(event, Redux, index)}
                                      />
                                      <div class="form-text text-danger">{Redux.state.FormObject.FormError.title}</div>
                                    </div>
                                    
                                    <div class="mb-3">
                                      <label class="form-label" for="image">Image</label>
                                      <input 
                                        type="text" 
                                        class="form-control" 
                                        id="image" 
                                        placeholder="Enter Image" 
                                        name='image'
                                        value={each.image || ""}
                                        onChange={event => EventHandler.Reference.Change(event, Redux, index)}
                                      />
                                      <div class="form-text text-danger">{Redux.state.FormObject.FormError.image}</div>
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
                                        onChange={event => EventHandler.Reference.Change(event, Redux, index)}
                                      />
                                      <div class="form-text text-danger">{Redux.state.FormObject.FormError.title}</div>
                                    </div>
                                    
                                  </div>
                                </div>
                              </React.Fragment>
                            )
                          })
                        }
                        <div class="form-text text-danger">{Redux.state.FormObject.FormError.reference}</div>
                      </div>
                    </form>
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

