import React from 'react'
import { Link } from 'react-router-dom'
import validateFormObject from '../../../../../../../dFunction/bValidateFormObject'
import handleInput from '../../../../../../../dFunction/dHandleInput'
import EventHandler from './EventHandler'


export const Create = ({ Redux, validateFormValues, close1 }) => {
  return (
    <div class="modal fade" id="createModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-xl modal-dialog-scrollable" role="document">
        <div class="modal-content bg-light">
          <div class="modal-header">
            <h5 class="modal-title" id="modalFullTitle">Home Create</h5>
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
                        <div class="form-text text-danger">{Redux.state.FormObject.FormError.resume}</div>
                      </div>
                         
                      {/* Description */}
                      <div class="mb-3">
                        <label class="form-label" for="description">Description</label>
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

