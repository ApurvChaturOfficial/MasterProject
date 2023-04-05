import React from 'react'
import { Link, useParams } from 'react-router-dom';

const Delete = ({data}) => {
  // const data = {
	// 	header: {
	// 		title: "New Base Retrieve",
  //     button: {
  //       title: "Delete",
  //       onClick: event => handleSubmit(event, Redux, validateFormValues)
  //     },       
  //     back: {
  //       to: FinalRouteName.Content.Sidebar.Setting.Base.ListRoute
  //     }
	// 	},
  //   delete: {
  //     basicInfo: {
  //       values: [
  //         {
  //           title: "Title",
  //           value: Redux.state.ReceivedObject.BaseRetrieve?.title
  //         },
  //         {
  //           title: "Sub Title",
  //           value: Redux.state.ReceivedObject.BaseRetrieve?.subTitle
  //         },
  //         {
  //           title: "Slug",
  //           value: Redux.state.ReceivedObject.BaseRetrieve?.slug
  //         },
  //       ]
  //     }
  //   }
	// }

  return (
    <React.Fragment>
      <div class="container-fluid pt-4 px-4">
        <div class="bg-light rounded p-4">
          <div class="d-flex align-items-center justify-content-between">
            <h5 class="mb-0">
              <Link to={data.header.back.to}><i class="fas fa-chevron-left me-4"></i></Link>
              {data.header.title}
            </h5>
            <div>
              <button onClick={data.header.button.onClick} class="btn btn-outline-danger rounded-pill me-0"><i class="fas fa-trash me-2"></i> Sure, Delete</button>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid pt-4 px-4">
        <div class="row g-4">
          <div class="col-sm-12 col-xl-12">
            <div class="bg-light rounded h-100 p-4">
              <h6 class="m-0 text-danger">Are you sure, you want to delete the following instance?</h6>
            </div>
          </div>
        </div>
      </div>

      {data.delete.basicInfo && 
        <div class="container-fluid pt-4 px-4">
          <div class="row g-4">
            <div class="col-sm-12 col-xl-6">
              <div class="bg-light rounded h-100 p-4">
                <h6 class="mb-4">Basic Info</h6>
                <dl class="row mb-0">
                    {data.delete.basicInfo.values.map(each => {
                      return (
                        <React.Fragment>
                          <dt class="col-sm-4">{each.title}:</dt>
                          <dd class="col-sm-8">{each.value}</dd>
                        </React.Fragment>
                      )
                    })}
                </dl>
              </div>
            </div>
          </div>
        </div>
      }

      {data.delete.personalInfo &&
        <div class="container-fluid pt-4 px-4">
          <div class="row g-4">
            <div class="col-sm-12 col-xl-6">
              <div class="bg-light rounded h-100 p-4">
                <h6 class="mb-4">Personal Info</h6>
                <dl class="row mb-0">
                  {data.delete.personalInfo.values.map(each => {
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

export default Delete