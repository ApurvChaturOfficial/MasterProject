import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NotFoundCard from '../../../../../cComponent/bDashboard/aNotFoundCard';
import FinalRouteName from '../../../../../gRoute/FinalRouteName';
import APIs from './extra/APIs';
import { Action } from './extra/State';

const Dashboard = ({ Redux1 }) => {
    // Redux
	const Redux = {
		state: useSelector((fullState) => fullState.DashboardState),
		dispatch: useDispatch(),
		action: Action,
	};

	// API Calls
	const APICalls = {
		HomeListAPICall: () => APIs.HomeListAPI(Redux),
	}

	// All Renders
	// First Render
	useEffect(() => {
		APICalls.HomeListAPICall()
	}, [])

	// Extra Render
	useEffect(() => {
		console.log(Redux.state)
	}, [Redux.state])
	
  return (
    <div class="content-wrapper">

      <div class="container-xxl flex-grow-1 container-p-y">
        {Redux.state.ReceivedObject.HomeList &&
          <div class="row">
            <div class="col-12 mb-4 order-0">
              <div class="card">
                <div class="d-flex align-items-end row">
                  <div class="col-sm-7">
                    <div class="card-body">
                      <h5 class="card-title text-primary">Welcome Back {Redux.state.ReceivedObject.HomeList.subTitle}! 🎉</h5>
                      <p class="mb-4">
                        You are doing very well, our best wishes with you. Check your overall profile glance on this dashboard below.
                      </p>

                      <Link to={FinalRouteName.Content.Sidebar.Main.HomeRoute} class="btn btn-sm btn-outline-primary">Start Journey <i class="bx bx-chevrons-right ms-1"></i></Link>
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

        <div class="row">
          {Redux.state.ReceivedObject.HomeList ?
            <div class="col-md-6 col-lg-6 order-2 mb-4">
              <div class="card h-100">
                <div class="card-header d-flex align-items-center justify-content-between pb-0">
                  <div class="card-title mb-0">
                    <div class="d-flex">
                      <div class="avatar flex-shrink-0 me-3">
                        <span class="avatar-initial rounded bg-label-primary"
                          ><i class="bx bx-home-circle"></i
                        ></span>
                      </div>
                      <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                        <div class="me-2">
                          <h5 class="mb-0">Home</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button class="btn p-0" type="button" ><i class="bx bx-edit"></i></button>
                </div>
                <div class="card-body text-center">
                  <div class="d-flex justify-content-center my-4">
                    <img src={Redux.state.ReceivedObject.HomeList.image.url} class="rounded-circle" alt="example placeholder" style={{width: "125px", height: "125px", objectFit: "contain"}} />
                  </div>

                  <h6 class="card-title text-muted">{Redux.state.ReceivedObject.HomeList.title}</h6>
                  <h5 class="card-title">{Redux.state.ReceivedObject.HomeList.subTitle}</h5>
                  <p class="card-text">{Redux.state.ReceivedObject.HomeList.description}</p>

                  <a href={Redux.state.ReceivedObject.HomeList.resume.url} target="_blank" rel='noreferrer' class="btn btn-sm btn-outline-primary my-4">Check Resume</a>

                  <ul class="list-group list-group-flush mb-4">
                    <li class="list-group-item"></li>
                    {Redux.state.ReceivedObject.HomeList.links &&
                      Redux.state.ReceivedObject.HomeList.links.map(each => {
                        return (
                          <li class="list-group-item">Link to
                            <Link to={each.url} class="ms-2 card-link">{each.label}</Link>
                          </li>                      
                        )
                      })
                    }
                    <li class="list-group-item"></li>
                  </ul>
                </div>
              </div>
            </div>
            :
            <NotFoundCard
              head="Home"
              message="No Home Item Found!"
              size="col-md-6 col-lg-6 order-2 mb-4"
            />
          }

          {Redux.state.ReceivedObject.AboutList ?
            <div class="col-md-6 col-lg-6 order-2 mb-4">
              <div class="card h-100">
                <div class="card-header d-flex align-items-center justify-content-between pb-0">
                  <div class="card-title mb-0">
                    <div class="d-flex">
                      <div class="avatar flex-shrink-0 me-3">
                        <span class="avatar-initial rounded bg-label-danger"
                          ><i class="bx bx-user"></i
                        ></span>
                      </div>
                      <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                        <div class="me-2">
                          <h5 class="mb-0">About</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button class="btn p-0" type="button" ><i class="bx bx-edit"></i></button>
                </div>
                <div class="card-body text-center">
                  <div class="d-flex justify-content-center my-4">
                    <img src={Redux.state.ReceivedObject.AboutList.image.url} class="rounded" alt="example placeholder" style={{width: "125px", height: "125px", objectFit: "contain"}} />
                  </div>

                  <h6 class="card-title text-muted">{Redux.state.ReceivedObject.AboutList.title}</h6>
                  <h5 class="card-title">{Redux.state.ReceivedObject.AboutList.subTitle}</h5>
                  <p class="card-text">{Redux.state.ReceivedObject.AboutList.description}</p>

                  <ul class="list-group list-group-flush mb-4">
                    <li class="list-group-item"></li>
                    {Redux.state.ReceivedObject.AboutList.cards &&
                      Redux.state.ReceivedObject.AboutList.cards.map(each => {
                        return (
                          <li class="list-group-item">{each.title} {each.sub_title}</li>                      
                        )
                      })
                    }
                    <li class="list-group-item"></li>
                  </ul>
                </div>
              </div>
            </div>
            :
            <NotFoundCard
              head="About"
              message="No About Item Found!"
              size="col-md-6 col-lg-6 order-2 mb-4"
            />
          }
        </div>

        <div class="row">
          {Redux.state.ReceivedObject.ExperienceList ?
            <div class="col-md-6 col-lg-6 order-2 mb-4">
              <div class="card h-100">
                <div class="card-header d-flex align-items-center justify-content-between pb-0">
                  <div class="card-title mb-0">
                    <div class="d-flex">
                      <div class="avatar flex-shrink-0 me-3">
                        <span class="avatar-initial rounded bg-label-warning"
                          ><i class="bx bx-brain"></i
                        ></span>
                      </div>
                      <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                        <div class="me-2">
                          <h5 class="mb-0">Experience</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button class="btn p-0" type="button"><i class="bx bx-edit"></i></button>
                </div>
                <div class="card-body text-center">
                  <h6 class="card-title text-muted mt-4">{Redux.state.ReceivedObject.ExperienceList.title}</h6>
                  <h5 class="card-title">{Redux.state.ReceivedObject.ExperienceList.subTitle}</h5>
                  <p class="card-text">{Redux.state.ReceivedObject.ExperienceList.description}</p>

                  <div class="accordion mt-4" id="accordionExample">
                    {Redux.state.ReceivedObject.ExperienceList.cards &&
                      Redux.state.ReceivedObject.ExperienceList.cards.map((each, index) => {
                        return (
                          <div class="card accordion-item" style={{textAlign: "start"}}>
                            <h2 class="accordion-header" id="headingOne">
                              <button
                                type="button"
                                class="accordion-button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#accordion${index}`}
                                aria-expanded="true"
                                aria-controls={`accordion${index}`}
                              >
                                {each.title}
                              </button>
                            </h2>
        
                            <div
                              id={`accordion${index}`}
                              class="accordion-collapse collapse"
                              data-bs-parent="#accordionExample"
                            >
                              <div class="accordion-body">
                                {each.points &&
                                  each.points.map(each1 => {
                                    return (
                                      <div>
                                        <h6 class="card-title mb-1">{each1.title}</h6>
                                        <p class="text-muted">{each1.sub_title}</p>
                                      </div>
                                    )
                                  })
                                }
                              </div>
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
            :
            <NotFoundCard
              head="Experience"
              message="No Experience Item Found!"
              size="col-md-6 col-lg-6 order-2 mb-4"
            />
          }

          {Redux.state.ReceivedObject.ServiceList ?
            <div class="col-md-6 col-lg-6 order-2 mb-4">
              <div class="card h-100">
                <div class="card-header d-flex align-items-center justify-content-between pb-0">
                  <div class="card-title mb-0">
                    <div class="d-flex">
                      <div class="avatar flex-shrink-0 me-3">
                        <span class="avatar-initial rounded bg-label-success"
                          ><i class="bx bx-cycling"></i
                        ></span>
                      </div>
                      <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                        <div class="me-2">
                          <h5 class="mb-0">Service</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    class="btn p-0"
                    type="button"
                  >
                    <i class="bx bx-edit"></i>
                  </button>
                </div>
                <div class="card-body text-center">
                  <h6 class="card-title text-muted mt-4">{Redux.state.ReceivedObject.ServiceList.title}</h6>
                  <h5 class="card-title">{Redux.state.ReceivedObject.ServiceList.subTitle}</h5>
                  <p class="card-text">{Redux.state.ReceivedObject.ServiceList.description}</p>

                  <div class="accordion mt-4" id="accordionExample">
                    {Redux.state.ReceivedObject.ServiceList.cards &&
                      Redux.state.ReceivedObject.ServiceList.cards.map((each, index) => {
                        return (
                          <div class="card accordion-item" style={{textAlign: "start"}}>
                            <h2 class="accordion-header" id="headingOne">
                              <button
                                type="button"
                                class="accordion-button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#accordionService${index}`}
                                aria-expanded="true"
                                aria-controls={`accordionService${index}`}
                              >
                                {each.title}
                              </button>
                            </h2>
        
                            <div
                              id={`accordionService${index}`}
                              class="accordion-collapse collapse"
                              data-bs-parent="#accordionExample"
                            >
                              <div class="accordion-body">
                                {each.points &&
                                  each.points.map(each1 => {
                                    return (
                                      <p class="card-title">{each1.title}</p>
                                    )
                                  })
                                }
                              </div>
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>              
                </div>
              </div>
            </div>
            :
            <NotFoundCard
              head="Service"
              message="No Service Item Found!"
              size="col-md-6 col-lg-6 order-2 mb-4"
            />
          }
        </div>

        <div class="row">
          {Redux.state.ReceivedObject.PortfolioList ?
            <div class="col-md-4 col-lg-4 order-2 mb-4">
              <div class="card h-100">
                <div class="card-header d-flex align-items-center justify-content-between pb-0">
                  <div class="card-title mb-0">
                    <div class="d-flex">
                      <div class="avatar flex-shrink-0 me-3">
                        <span class="avatar-initial rounded bg-label-info"
                          ><i class="bx bx-briefcase"></i
                        ></span>
                      </div>
                      <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                        <div class="me-2">
                          <h5 class="mb-0">Portfolio</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    class="btn p-0"
                    type="button"
                    id="orederStatistics"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="bx bx-edit"></i>
                  </button>
                </div>
                <div class="card-body text-center">
                  <h6 class="card-title text-muted mt-4">{Redux.state.ReceivedObject.PortfolioList.title}</h6>
                  <h5 class="card-title">{Redux.state.ReceivedObject.PortfolioList.subTitle}</h5>
                  <p class="card-text">{Redux.state.ReceivedObject.PortfolioList.description}</p>

                  <div class="accordion mt-4" id="accordionExample">
                    {Redux.state.ReceivedObject.PortfolioList.cards &&
                      Redux.state.ReceivedObject.PortfolioList.cards.map((each, index) => {
                        return (
                          <div class="card accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                              <button
                                type="button"
                                class="accordion-button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#accordionPortfolio${index}`}
                                aria-expanded="true"
                                aria-controls={`accordionPortfolio${index}`}
                              >
                                Project {index+1}
                              </button>
                            </h2>
        
                            <div
                              id={`accordionPortfolio${index}`}
                              class="accordion-collapse collapse"
                              data-bs-parent="#accordionExample"
                            >
                              <div class="accordion-body">
                                <div>
                                    <h6 class="card-title mt-2">{each.basic_info.title}</h6>
                                    <p class="text-muted">{each.basic_info.sub_title}</p>
                                  </div>
                              </div>
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>              
                </div>
              </div>
            </div>
            :
            <NotFoundCard
              head="Portfolio"
              message="No Portfolio Item Found!"
              size="col-md-4 col-lg-4 order-2 mb-4"
            />
          }

          {Redux.state.ReceivedObject.EventList ?
            <div class="col-md-4 col-lg-4 order-2 mb-4">
              <div class="card h-100">
                <div class="card-header d-flex align-items-center justify-content-between pb-0">
                  <div class="card-title mb-0">
                    <div class="d-flex">
                      <div class="avatar flex-shrink-0 me-3">
                        <span class="avatar-initial rounded bg-label-warning"
                          ><i class="bx bx-calendar-star"></i
                        ></span>
                      </div>
                      <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                        <div class="me-2">
                          <h5 class="mb-0">Event</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    class="btn p-0"
                    type="button"
                    id="orederStatistics"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="bx bx-edit"></i>
                  </button>
                </div>
                <div class="card-body text-center">
                  <h6 class="card-title text-muted mt-4">{Redux.state.ReceivedObject.EventList.title}</h6>
                  <h5 class="card-title">{Redux.state.ReceivedObject.EventList.subTitle}</h5>
                  <p class="card-text">{Redux.state.ReceivedObject.EventList.description}</p>

                  <div class="accordion mt-4" id="accordionExample">
                    {Redux.state.ReceivedObject.EventList.cards &&
                      Redux.state.ReceivedObject.EventList.cards.map((each, index) => {
                        return (
                          <div class="card accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                              <button
                                type="button"
                                class="accordion-button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#accordionPortfolio${index}`}
                                aria-expanded="true"
                                aria-controls={`accordionPortfolio${index}`}
                              >
                                Event {index+1}
                              </button>
                            </h2>
        
                            <div
                              id={`accordionPortfolio${index}`}
                              class="accordion-collapse collapse"
                              data-bs-parent="#accordionExample"
                            >
                              <div class="accordion-body">
                                <div>
                                    <h6 class="card-title mt-2">{each.basic_info.title}</h6>
                                    <p class="text-muted">{each.basic_info.sub_title}</p>
                                  </div>
                              </div>
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>              
                </div>
              </div>
            </div>
            :
            <NotFoundCard
              head="Event"
              message="No Event Item Found!"
              size="col-md-4 col-lg-4 order-2 mb-4"
            />
          }

          {Redux.state.ReceivedObject.BlogList ?
            <div class="col-md-4 col-lg-4 order-2 mb-4">
              <div class="card h-100">
                <div class="card-header d-flex align-items-center justify-content-between pb-0">
                  <div class="card-title mb-0">
                    <div class="d-flex">
                      <div class="avatar flex-shrink-0 me-3">
                        <span class="avatar-initial rounded bg-label-success"
                          ><i class="bx bx-chat"></i
                        ></span>
                      </div>
                      <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                        <div class="me-2">
                          <h5 class="mb-0">Blog</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    class="btn p-0"
                    type="button"
                    id="orederStatistics"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="bx bx-edit"></i>
                  </button>
                </div>
                <div class="card-body text-center">
                  <h6 class="card-title text-muted mt-4">{Redux.state.ReceivedObject.BlogList.title}</h6>
                  <h5 class="card-title">{Redux.state.ReceivedObject.BlogList.subTitle}</h5>
                  <p class="card-text">{Redux.state.ReceivedObject.BlogList.description}</p>

                  <div class="accordion mt-4" id="accordionExample">
                    {Redux.state.ReceivedObject.BlogList.cards &&
                      Redux.state.ReceivedObject.BlogList.cards.map((each, index) => {
                        return (
                          <div class="card accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                              <button
                                type="button"
                                class="accordion-button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#accordionPortfolio${index}`}
                                aria-expanded="true"
                                aria-controls={`accordionPortfolio${index}`}
                              >
                                Blog {index+1}
                              </button>
                            </h2>
        
                            <div
                              id={`accordionPortfolio${index}`}
                              class="accordion-collapse collapse"
                              data-bs-parent="#accordionExample"
                            >
                              <div class="accordion-body">
                                <div>
                                    <h6 class="card-title mt-2">{each.basic_info.title}</h6>
                                    <p class="text-muted">{each.basic_info.sub_title}</p>
                                  </div>
                              </div>
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>              
                </div>
              </div>
            </div>
            :
            <NotFoundCard
              head="Blog"
              message="No Blog Item Found!"
              size="col-md-4 col-lg-4 order-2 mb-4"
            />
          }
        </div>
      </div>

      <div class="content-backdrop fade"></div>
    </div>
  )
}

export default Dashboard