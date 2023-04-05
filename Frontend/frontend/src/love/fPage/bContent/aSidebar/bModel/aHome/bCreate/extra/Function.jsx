import JoditEditor from 'jodit-react';
import { handleInput } from '../../../../../../../dFunction/handleInput';
import EventHandler from './EventHandler';

const Function = {
  // Extra JSX
  MoreInfo: (Redux) => {
    return (
      <div class="container-fluid pt-4 px-4">
        <div class="row g-4">
          <div class="col-sm-12 col-xl-6">
            <div class="bg-light rounded h-100 p-4">
              <h6 class="mb-4">More Form</h6>
              <form>
                <div class="mb-3">
                  <label for="inputEmail3" class="col-sm-2 col-form-label">Description</label>
                  <textarea 
                    class="form-control" 
                    id="inputEmail3" 
                    placeholder="Hello there..."
                    name="description"
                    value={Redux.state.FormObject.FormValue?.description}
                    onChange={event => handleInput(event, Redux)}
                  ></textarea>
                  <div className="form-text text-danger text-start">{Redux.state.FormObject.FormError.description}</div>
                </div>

                <div class="mb-3">
                  <label for="inputEmails3" class="col-sm-2 col-form-label">
                    Links 
                    {Redux.state.FormObject.FormValue.links && 
                      Redux.state.FormObject.FormValue.links.length < 3 && 
                      <i class="fas fa-plus-circle p-1" onClick={() => EventHandler.Links.Add(Redux)}></i>
                    }
                  </label>
                  {Redux.state.FormObject.FormValue.links && 
                    Redux.state.FormObject.FormValue.links.map((each, index) => {
                      return (
                        <div class="input-group mb-3">
                          <div class="input-group">
                            <span class="input-group-text" id="basic-addon1">Label</span>
                            <input 
                              type="text" 
                              class="form-control" 
                              placeholder="Hello there..." 
                              aria-label="Label"
                              aria-describedby="basic-addon1" 
                              name="label"
                              value={each.label}
                              onChange={event => EventHandler.Links.Change(event, Redux, index)}
                            />
                            {Redux.state.FormObject.FormValue.links && 
                              Redux.state.FormObject.FormValue.links.length > 1 && 
                              <i class="fas fa-minus-circle p-2" onClick={() => EventHandler.Links.Remove(Redux, index)}></i>
                            }
                          </div>
                          <div class="input-group">
                            <span class="input-group-text" id="basic-addon1">Icon</span>
                            <input 
                              type="text" 
                              class="form-control" 
                              placeholder="Hello there..." 
                              aria-label="Icon"
                              aria-describedby="basic-addon1" 
                              name="icon"
                              value={each.icon}
                              onChange={event => EventHandler.Links.Change(event, Redux, index)}
                            />
                          </div>
                          <div class="input-group">
                            <span class="input-group-text" id="basic-addon1">URL</span>
                            <input 
                              type="text" 
                              class="form-control" 
                              placeholder="Hello there..." 
                              aria-label="URL"
                              aria-describedby="basic-addon1" 
                              name="url"
                              value={each.url}
                              onChange={event => EventHandler.Links.Change(event, Redux, index)}
                            />
                          </div>
                        </div>
                      )
                    })
                  }
                  {/* <div className="form-text text-danger text-start">{"each.error"}</div> */}
                </div>

                <div className="mb-3">
                  <label for="inputEmail3" class="col-sm-2 col-form-label">Resume</label>
                  <div>
                    <div class="mb-2 d-flex">
                      {Redux.state.FormObject.FormValue?.resume ?
                        <img 
                          src={Redux.state.FormObject.FormValue?.resume.url}
                          alt="placeholder" 
                          style={{width: "200px"}} 
                        />
                        :
                        <img 
                          src="https://mdbootstrap.com/img/Photos/Others/placeholder.jpg"
                          alt="placeholder" 
                          style={{width: "200px"}} 
                        />
                      }
                    </div>
                    <div class="d-flex">
                      <div class="btn btn-sm btn-primary rounded-pill">
                        <label class="form-label text-white m-1" for="customFile1">Choose File</label>
                        <input 
                          type="file" 
                          class="form-control d-none" 
                          id="customFile1" 
                          name='resume'
                          onChange={event => handleInput(event, Redux)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Function
