import React from 'react'
import { Link } from 'react-router-dom'
import clearFormObject from '../../dFunction/aClearFormObject'
import FinalRouteName from '../../gRoute/FinalRouteName'

const Header = ({Redux, header, access}) => {
  return (
    <div class="row">
      <div class="col-12 mb-4 order-0">
        <div class="card">
          <div class="d-flex align-items-end row">
            <div class="col-sm-7">
              <div class="card-body">
                <span class="fw-bold"><small class="text-muted fw-light"><Link to={FinalRouteName.Content.Sidebar.DashboardRoute}>Dashboard</Link> /</small> <small>{header.breadcrumb}</small></span>
                <h5 class="card-title text-primary mt-3">{header.title}</h5>
                <p class="mb-2">{header.subTitle}</p>

                {header.onClick && header.onClick !== "disable" && access?.Redux1.state.ReceivedObject?.UserAccess?.[access.name]?.create ?
                  <Link 
                    class="btn btn-sm btn-outline-primary me-2 mt-2"
                    data-bs-toggle="modal"
                    data-bs-target="#createModal"
                    onClick={header.onClick}
                  > <i class="bx bx-plus-circle me-1"></i>Create New Instance </Link>
                  :
                  header.onClick && header.onClick === "disable" ?
                  null
                  :
                  access?.Redux1.state.ReceivedObject?.UserAccess?.[access.name]?.create ?
                    <Link 
                      class="btn btn-sm btn-outline-primary me-2 mt-2"
                      data-bs-toggle="modal"
                      data-bs-target="#createModal"
                      onClick={() => {
                        clearFormObject(Redux)
                        return Redux.dispatch({ type: Redux.action.ExtraObject, payload: {
                          ...Redux.state.ExtraObject,
                          Next: true
                        } })
                      }}
                    > <i class="bx bx-plus-circle me-1"></i>Create New Instance </Link>
                  :
                  null             
                }

                {header.next &&
                  <Link 
                    class="btn btn-sm btn-primary mt-2"
                    to={header.next}
                  >Next Section  <i class="bx bx-chevrons-right ms-1"></i></Link>
                } 
              </div>
            </div>
            {/* <div class="col-sm-5 text-center text-sm-left">
              <div class="card-body pb-0 px-0 px-md-4">
                <img
                  src="../assets/img/illustrations/man-with-laptop-light.png"
                  height="140"
                  alt="View Badge User"
                  data-app-dark-img="illustrations/man-with-laptop-dark.png"
                  data-app-light-img="illustrations/man-with-laptop-light.png"
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header