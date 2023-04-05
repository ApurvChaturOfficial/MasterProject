
const Function = {
  MoreInfo: (Redux, EventHandler) => {
    return (
      <div class="container-fluid pt-4 px-4">
        <div class="row g-4">
          <div class="col-sm-12 col-xl-6">
            <div class="bg-light rounded h-100 p-4">
              <h6 class="mb-4">More Info</h6>
              <form>
                <div class="mb-3">
                  <label for="inputEmail3" class="col-sm-2 col-form-label">
                    Card
                    {Redux.state.FormObject?.FormValue?.cards && 
                      Redux.state.FormObject?.FormValue?.cards.length < 2 && 
                      <i class="fas fa-plus-circle p-1" onClick={() => EventHandler.Card.Add(Redux)}></i>
                    }
                  </label>

                  {Redux.state.FormObject?.FormValue?.cards && 
                    Redux.state.FormObject?.FormValue?.cards.map((each, index) => {
                      return (
                        <form class="bg-white rounded p-4 mb-3">

                          {Redux.state.FormObject.FormValue.cards && 
                            Redux.state.FormObject.FormValue.cards.length > 1 && 
                            <i class="fas fa-minus-circle mb-2" onClick={() => EventHandler.Card.Remove(Redux, index)}></i>
                          }

                          <div class="mb-3">
                            <label for="inputEmail3" class="col-sm-2 col-form-label">Title</label>
                            <div class="col-sm-12">
                              <input 
                                type="text" 
                                class="form-control" 
                                id="inputEmail3" 
                                placeholder="Hello there..."
                                name="title"
                                value={each.title}
                                onChange={event => EventHandler.Card.Change(event, Redux, index)}
                              />
                              {/* <div className="form-text text-danger text-start">{each.error}</div> */}
                            </div>
                          </div>

                          <div class="mb-3">
                            <label for="inputEmail3" class="col-sm-2 col-form-label">Sub Title</label>
                            <div class="col-sm-12">
                              <input 
                                type="text" 
                                class="form-control" 
                                id="inputEmail3" 
                                placeholder="Hello there..."
                                name="sub_title"
                                value={each.sub_title}
                                onChange={event => EventHandler.Card.Change(event, Redux, index)}
                              />
                              {/* <div className="form-text text-danger text-start">{each.error}</div> */}
                            </div>
                          </div>

                          <div class="mb-3">
                            <label for="inputEmails3" class="col-sm-2 col-form-label">
                              Points 
                              {each.points && 
                                each.points.length < 10 && 
                                <i class="fas fa-plus-circle p-1" onClick={() => EventHandler.Points.Add(Redux, index)}></i>
                              }
                            </label>
                            {each && 
                              each.points.map((each1, index1) => {
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
                                        value={each1.title}
                                        onChange={event => EventHandler.Points.Change(event, Redux, index, index1)}
                                      />
                                      {each && 
                                        each.points.length > 1 && 
                                        <i class="fas fa-minus-circle p-2" onClick={() => EventHandler.Points.Remove(Redux, index, index1)}></i>
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
                                        value={each1.sub_title}
                                        onChange={event => EventHandler.Points.Change(event, Redux, index, index1)}
                                      />
                                    </div>
                                  </div>
                                )
                              })
                            }
                          </div>
                        </form>
                      )
                    }) 
                  }
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