import React from 'react'
import { Link } from 'react-router-dom'
import FinalRouteName from '../../../../../gRoute/FinalRouteName'

const Dashboard = ({ Redux1 }) => {
  return (
    <div class="content-wrapper">

      <div class="container-xxl flex-grow-1 container-p-y">
        {Redux1.state.ReceivedObject.ProfileRetrieve &&
          <div class="row">
            <div class="col-12 mb-4 order-0">
              <div class="card">
                <div class="d-flex align-items-end row">
                  <div class="col-sm-7">
                    <div class="card-body">
                      <h5 class="card-title text-primary">Welcome Back {Redux1.state.ReceivedObject.ProfileRetrieve.first_name} {Redux1.state.ReceivedObject.ProfileRetrieve.last_name}! 🎉</h5>
                      <p class="mb-4">
                        You are doing very well, our best wishes with you. Check your overall profile glance on this dashboard below.
                      </p>

                      <Link to={FinalRouteName.Content.Sidebar.Administration.UserRoute} class="btn btn-sm btn-outline-primary">Start Journey <i class="bx bx-chevrons-right ms-1"></i></Link>
                    </div>
                  </div>
                  <div class="col-sm-5 text-center text-sm-left">
                    <div class="card-body pb-0 px-0 px-md-4">
                      <img
                        src="../assets/img/illustrations/man-with-laptop-light.png"
                        height="140"
                        alt="View Badge User"
                        data-app-dark-img="illustrations/man-with-laptop-dark.png"
                        data-app-light-img="illustrations/man-with-laptop-light.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </div>

      <div class="content-backdrop fade"></div>
    </div>
  )
}

export default Dashboard