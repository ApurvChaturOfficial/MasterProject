import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';


const Create = ({data}) => {

  // const data = {
	// 	header: {
	// 		title: "New Base List",
	// 		button: {
	// 			title: "Create New Base",
	// 			click: event => handleSubmit(event, Redux, validateFormValues)
	// 		},
  //     back: {
  //       to: FinalRouteName.Content.Sidebar.Setting.Base.ListRoute
  //     }
	// 	},
	// 	create: {
	// 		inputs: {
  //       basicInfo: [
  //         {
  //           name: "title",
  //           onChange: event => handleInput(event, Redux),
  //           type: "text",
  //           placeholder: "Hello there...",
  //           label: "Title",
  //           error: Redux.state.FormObject.FormError.title
  //         },
  //         {
  //           name: "subTitle",
  //           onChange: event => handleInput(event, Redux),
  //           type: "text",
  //           placeholder: "Hello there...",
  //           label: "Sub Title",
  //           error: Redux.state.FormObject.FormError.subTitle
  //         },
  //         {
  //           name: "slug",
  //           onChange: event => handleInput(event, Redux),
  //           type: "text",
  //           placeholder: "Hello there...",
  //           label: "Slug",
  //           error: Redux.state.FormObject.FormError.slug
  //         },
          
  //       ]
  //     }
  //   }
	// }

	// JSX	
  return (
    <React.Fragment>
      <div class="container-fluid pt-4 px-4">
        <div class="bg-light text-center rounded p-4">
          <div class="d-flex align-items-center justify-content-between">
            <h5 class="mb-0">
              <Link to={data.header.back.to}><i class="fas fa-chevron-left me-4"></i></Link>
              {data.header.title}
            </h5>
            <div>
              <button onClick={data.header.button.click} class="btn btn-primary rounded-pill"><i class="fas fa-pen me-2"></i>{data.header.button.title}</button>
            </div>
          </div>
        </div>
      </div>

      {data.create.inputs.basicInfo &&
        <div class="container-fluid pt-4 px-4">
          <div class="row g-4">
            <div class="col-sm-12 col-xl-6">
              <div class="bg-light rounded h-100 p-4">
                <h6 class="mb-4">Basic Info</h6>
                <form>
                  {data.create.inputs.basicInfo.map(each => {
                      switch (each.type) {
                        case 'radio':
                          return (
                            <fieldset class="mb-3">
                              <legend class="col-form-label col-sm-2 pt-0">Status</legend>
                              <div class="col-sm-12">
                                <div class="form-check">
                                  <input 
                                    class="form-check-input" 
                                    type="radio" 
                                    name="isActive"
                                    id="gridRadios1" 
                                    value="active"
                                    onChange={each.onChange}
                                  />
                                  <label class="form-check-label" for="isActive">Active</label>
                                </div>
                                <div class="form-check">
                                  <input 
                                    class="form-check-input" 
                                    type="radio" 
                                    name="isActive"
                                    id="gridRadios2" 
                                    value="inactive"
                                    onChange={each.onChange}
                                  />
                                  <label class="form-check-label" for="isActive">Inactive</label>
                                </div>
                                <div className="form-text text-danger text-start">{each.error}</div>
                              </div>
                            </fieldset>
                          )
                        case 'file':
                          return (
                            <div class="mb-3">
                              <div>
                                <div class="d-flex justify-content-center mb-3">
                                {each.Redux.state.FormObject.FormValue?.[each.name] ?
                                  <img 
                                    src={each.Redux.state.FormObject.FormValue?.[each.name].url}
                                    class="rounded-circle" 
                                    alt="placeholder" 
                                    style={{width: "100px", height: "100px"}} 
                                  />
                                  :
                                  <img 
                                    src="https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg"
                                    class="rounded-circle" 
                                    alt="placeholder" 
                                    style={{width: "100px", height: "100px"}} 
                                  />
                                }
                                </div>
                                <div class="d-flex justify-content-center">
                                    <div class="btn btn-sm btn-primary rounded-pill">
                                      <label class="form-label text-white m-1 " for="customFile2">Select Image</label>
                                      <input 
                                        type={each.type} 
                                        class="form-control d-none" 
                                        id="customFile2"
                                        name={each.name}
                                        onChange={each.onChange}
                                      />
                                    </div>
                                </div>
                              </div>

                              <div className="form-text text-danger text-start">{each.error}</div>
                            </div>
                          )
                        default:
                          return (
                            <div class="mb-3">
                              <label for="inputEmail3" class="col-sm-2 col-form-label">{each.label}</label>
                              <div class="col-sm-12">
                                <input 
                                  type={each.type} 
                                  class="form-control" 
                                  id="inputEmail3" 
                                  placeholder={each.placeholder}
                                  name={each.name}
                                  onChange={each.onChange}
                                />
                                <div className="form-text text-danger text-start">{each.error}</div>
                              </div>
                            </div>
                          )
                      }
                    })
                  }
                </form>
              </div>
            </div>
          </div>
        </div>
      }

      {data.create.inputs.moreInfo &&
        data.create.inputs.moreInfo
      }

      {data.create.inputs.relationInfo &&
        data.create.inputs.relationInfo
      }
    </React.Fragment>
  )
}

export default Create