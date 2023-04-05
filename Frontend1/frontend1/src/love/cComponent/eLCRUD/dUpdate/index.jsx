import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Update = ({data}) => {
  // const data = {
	// 	header: {
	// 		title: "New Base Update",
  //     link: {
  //       title: "Delete",
  //       to: `${FinalRouteName.Content.Sidebar.Setting.Base.DeleteRoute}/${id}`
  //     },
  //     button: {
  //       title: "Update",
  //       onClick: `${FinalRouteName.Content.Sidebar.Setting.Base.UpdateRoute}/${id}`
  //     },       
  //     back: {
  //       to: event => handleSubmit(event, Redux, validateFormValues)
  //     }
	// 	},
	// 	update: {
	// 		inputs: {
  //       basicInfo: [
  //         {
  //           name: "title",
  //           value: Redux.state.FormObject.FormValue.title,
  //           onChange: event => handleInput(event, Redux),
  //           type: "text",
  //           placeholder: "Hello there...",
  //           label: "Title",
  //           error: Redux.state.FormObject.FormError.title
  //         },
  //         {
  //           name: "subTitle",
  //           value: Redux.state.FormObject.FormValue.subTitle,
  //           onChange: event => handleInput(event, Redux),
  //           type: "text",
  //           placeholder: "Hello there...",
  //           label: "Sub Title",
  //           error: Redux.state.FormObject.FormError.subTitle
  //         },
  //         {
  //           name: "slug",
  //           value: Redux.state.FormObject.FormValue.slug,
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
              <Link to={data.header.link.to} class="btn btn-outline-danger rounded-pill">
                <i class="fas fa-trash me-2"></i> 
                {data.header.link.title}
              </Link>
              <button onClick={data.header.button.onClick} class="btn btn-primary rounded-pill ms-2">
                <i class="fas fa-pen me-2"></i> 
                {data.header.button.title}
              </button>
            </div>
          </div>
        </div>
      </div>

      {data.update.inputs.basicInfo &&
        <div class="container-fluid pt-4 px-4">
          <div class="row g-4">
            <div class="col-sm-12 col-xl-6">
              <div class="bg-light rounded h-100 p-4">
                <h6 class="mb-4">Basic Info</h6>
                <form>
                  {data.update.inputs.basicInfo.map(each => {
                    switch (each.type) {
                      case 'radio':
                        return (
                          <fieldset class="row mb-3">
                            <legend class="col-form-label col-sm-2 pt-0">Status</legend>
                            <div class="col-sm-10">
                              <div class="form-check">
                                <input 
                                  class="form-check-input" 
                                  type="radio" 
                                  name="isActive"
                                  id="gridRadios1" 
                                  value="active"
                                  checked={each.value === 'active' ? true : false}
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
                                  checked={each.value === 'inactive' ? true : false}
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
                                  <div class="btn btn-primary rounded-pill">
                                    <label class="form-label text-white m-1 " for="customFile2">Edit Image</label>
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
                          <div class="row mb-3">
                            <label for="inputEmail3" class="col-sm-2 col-form-label">{each.label}</label>
                            <div class="col-sm-10">
                              <input 
                                type={each.type} 
                                class="form-control" 
                                id="inputEmail3" 
                                placeholder={each.placeholder}
                                name={each.name}
                                value={each.value}
                                onChange={each.onChange}
                              />
                              <div className="form-text text-danger text-start">{each.error}</div>
                            </div>
                          </div>
                        )
                    }
                  }) }
                </form>
              </div>
            </div>
          </div>
        </div>
      }

      {data.update.inputs.moreInfo &&
        data.update.inputs.moreInfo
      }

      {data.update.inputs.relationInfo &&
        data.update.inputs.relationInfo
      }

      {data.update.values.personalInfo &&
        <div class="container-fluid pt-4 px-4">
          <div class="row g-4">
            <div class="col-sm-12 col-xl-6">
              <div class="bg-light rounded h-100 p-4">
                <h6 class="mb-4">Personal Info</h6>
                <dl class="row mb-0">
                  {data.update.values.personalInfo.map(each => {
                    return (
                      <React.Fragment>
                        <dt class="col-sm-4">{each.title} :</dt>
                        <dd class="col-sm-8">{each.value}</dd>
                      </React.Fragment>
                    )
                  }) }
                </dl>
              </div>
            </div>
          </div>
        </div>
      }

    </React.Fragment>
  )
}

export default Update