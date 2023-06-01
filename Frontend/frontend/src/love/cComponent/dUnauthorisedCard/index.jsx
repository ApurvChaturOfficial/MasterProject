import React from 'react'
import { Link } from 'react-router-dom'
import FinalRouteName from '../../gRoute/FinalRouteName'

const UnauthorisedCard = () => {
  return (
    <div class="content-wrapper">
      <div class="container-xxl flex-grow-1 container-p-y">
        <div class="card p-4">
          <div class="misc-wrapper">
            <h2 class="mb-2 mx-2">Unauthorised Access!</h2>
            <p class="mb-4 mx-2">Sorry for the inconvenience but your role is not authorised to access this route.</p>
            <Link to={FinalRouteName.Content.Sidebar.DashboardRoute} class="btn btn-primary">Back to Dashboard</Link>
            <div class="mt-4">
              <img
                src="../assets/img/illustrations/girl-doing-yoga-light.png"
                alt="girl-doing-yoga-light"
                width="500"
                class="img-fluid"
                data-app-dark-img="illustrations/girl-doing-yoga-dark.png"
                data-app-light-img="illustrations/girl-doing-yoga-light.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UnauthorisedCard