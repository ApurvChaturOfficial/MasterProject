import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';

const Retrieve = ({data}) => {
  // const data = {
	// 	header: {
	// 		title: "New Base Retrieve",
	// 		buttons: [
  //       {
  //         title: "Delete",
  //         to: `${FinalRouteName.Content.Sidebar.Setting.Base.DeleteRoute}/${id}`
  //       },
  //       {
  //         title: "Update",
  //         to: `${FinalRouteName.Content.Sidebar.Setting.Base.UpdateRoute}/${id}`,
  //         icon: <i class="fas fa-edit me-2"></i>,
  //         class: 'btn-primary'
  //       },
  //     ],
  //     back: {
  //       to: FinalRouteName.Content.Sidebar.Setting.Base.ListRoute
  //     }
	// 	},
  //   retrieve: {
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

	// JSX
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
              {data.header.buttons.map(each => {
                return (
                  <Link to={each.to} class={`btn ${each.class ? each.class : "btn-outline-danger"} rounded-pill ms-2`}>
                    {each.icon ? each.icon : <i class="fas fa-trash me-2"></i>}
                    {each.title}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {data.retrieve.basicInfo && 
        <div class="container-fluid pt-4 px-4">
          <div class="row g-4">
            <div class="col-sm-12 col-xl-6">
              <div class="bg-light rounded h-100 p-4">
                <h6 class="mb-4">Basic Info</h6>
                <dl class="row mb-0">
                  {data.retrieve.basicInfo.values.map(each => {
                    return (
                      <React.Fragment>
                        <dt class="col-sm-4">{each.title} :</dt>
                        <dd class="col-sm-8">
                          {each.title === "Image" ?
                            <img class="rounded-circle" src={each.value ? each.value.url : "https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg"} alt="" style={{width: "40px", height: "40px"}} />
                            :
                            each.value  
                          }
                        </dd>
                      </React.Fragment>
                    )
                  }) }
                </dl>
              </div>
            </div>
          </div>
        </div>
      }

      {data.retrieve.moreInfo &&
        data.retrieve.moreInfo
      }

      {data.retrieve.relationInfo &&
        data.retrieve.relationInfo
      }

      {data.retrieve.personalInfo &&
        <div class="container-fluid pt-4 px-4">
          <div class="row g-4">
            <div class="col-sm-12 col-xl-6">
              <div class="bg-light rounded h-100 p-4">
                <h6 class="mb-4">Personal Info</h6>
                <dl class="row mb-0">
                  {data.retrieve.personalInfo.values.map(each => {
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

export default Retrieve