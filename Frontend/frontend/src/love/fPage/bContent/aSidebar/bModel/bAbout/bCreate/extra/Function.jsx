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
              <h6 class="mb-4">More Info</h6>
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
                    Cards 
                    {Redux.state.FormObject.FormValue.cards && 
                      Redux.state.FormObject.FormValue.cards.length < 3 && 
                      <i class="fas fa-plus-circle p-1" onClick={() => EventHandler.Cards.Add(Redux)}></i>
                    }
                  </label>
                  {Redux.state.FormObject.FormValue.cards && 
                    Redux.state.FormObject.FormValue.cards.map((each, index) => {
                      return (
                        <div class="input-group mb-3">
                          <div class="input-group">
                            <span class="input-group-text" id="basic-addon1">Title</span>
                            <input 
                              type="text" 
                              class="form-control" 
                              placeholder="Hello there" 
                              aria-label="Title"
                              aria-describedby="basic-addon1" 
                              name="title"
                              value={each.title}
                              onChange={event => EventHandler.Cards.Change(event, Redux, index)}
                            />
                            {Redux.state.FormObject.FormValue.cards && 
                              Redux.state.FormObject.FormValue.cards.length > 1 && 
                              <i class="fas fa-minus-circle p-2" onClick={() => EventHandler.Cards.Remove(Redux, index)}></i>
                            }
                          </div>
                          <div class="input-group">
                            <span class="input-group-text" id="basic-addon1">Sub Title</span>
                            <input 
                              type="text" 
                              class="form-control" 
                              placeholder="Hello there..." 
                              aria-label="SubTitle"
                              aria-describedby="basic-addon1" 
                              name="sub_title"
                              value={each.sub_title}
                              onChange={event => EventHandler.Cards.Change(event, Redux, index)}
                            />
                          </div>
                          <div class="input-group">
                            <span class="input-group-text" id="basic-addon1">Icon</span>
                            <input 
                              type="text" 
                              class="form-control" 
                              placeholder="Hello there..." 
                              aria-label="Ion"
                              aria-describedby="basic-addon1" 
                              name="icon"
                              value={each.icon}
                              onChange={event => EventHandler.Cards.Change(event, Redux, index)}
                            />
                          </div>
                        </div>
                      )
                    })
                  }
                  {/* <div className="form-text text-danger text-start">{"each.error"}</div> */}
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
