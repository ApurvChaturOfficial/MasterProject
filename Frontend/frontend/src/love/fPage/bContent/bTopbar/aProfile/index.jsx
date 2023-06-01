import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../../../../cComponent/cHeader';
import validateFormObject from '../../../../dFunction/bValidateFormObject';
import submitFormObject from '../../../../dFunction/cSubmitFormObject';
import handleInput from '../../../../dFunction/dHandleInput';
import regex from '../../../../dFunction/eRegex';
import FinalRouteName from '../../../../gRoute/FinalRouteName';
import APIs from './extra/APIs';
import { Action } from './extra/State';

const Profile = ({ Redux1 }) => {
	// Redux
	const Redux = {
		state: useSelector((fullState) => fullState.ProfileUpdateState),
		dispatch: useDispatch(),
		action: Action,
	};

	// API Calls
	const APICalls = {
    ProfileRetrieveAPICall: () => APIs.ProfileRetrieveAPI(Redux),
    ProfileUpdateAPICall: () => APIs.ProfileUpdateAPI(Redux, Redux1),
    ProfileUpdatePasswordAPICall: () => APIs.ProfileUpdatePasswordAPI(Redux)
	}

	// Validate Values
	const validateFormValues = FormValue => {
		const errors = {}

		// firstName
		if (!FormValue.firstName) {
			errors.firstName = "Please enter first name"
		} else if (!regex.name.test(FormValue.firstName)) {
			errors.email = "Please enter valid first name"
		}
		// lastName
		if (!FormValue.lastName) {
			errors.lastName = "Please enter last name"
		} else if (!regex.name.test(FormValue.lastName)) {
			errors.email = "Please enter valid last name"
		}
		// image
		if (!FormValue.image) {
			errors.image = "Please select image"
		}
		// email
		if (!FormValue.email) {
			errors.email = "Please enter email"
		} else if (!regex.email.test(FormValue.email)) {
			errors.email = "Please enter valid email"
		}

		return errors;
	}	

	const validateFormValues1 = FormValue => {
		const errors = {}

		// oldPassword
		if (!FormValue || !FormValue.oldPassword) {
			errors.oldPassword = "Please enter old password"
		} else if (!regex.password.test(FormValue.oldPassword)) {
			errors.oldPassword = "Old password should have 1 lowercase, 1 uppercase, 1 number, and be 8 to 16 characters long"
		} 
		// newPassword
		if (!FormValue || !FormValue.newPassword) {
			errors.newPassword = "Please enter new password"
		} else if (!regex.password.test(FormValue.newPassword)) {
			errors.newPassword = "New Password should have 1 lowercase, 1 uppercase, 1 number, and be 8 to 16 characters long"
		} 
		// confirmPassword
		if (!FormValue || !FormValue.confirmPassword) {
			errors.confirmPassword = "Please enter confirm password"
		} else if (!regex.password.test(FormValue.confirmPassword)) {
			errors.confirmPassword = "Confirm password should have 1 lowercase, 1 uppercase, 1 number, and be 8 to 16 characters long"
		} else if (FormValue.newPassword !== FormValue.confirmPassword) {
			errors.confirmPassword = "Please match the password"
		}

		return errors;
	}	

	// All Renders
	// First Render
	useEffect(() => {
		APICalls.ProfileRetrieveAPICall()
	}, [])

	// Submit Render
	useEffect(() => {
		submitFormObject(Redux, APICalls.ProfileUpdateAPICall)
	}, [Redux.state.FormObject.FormError])

	useEffect(() => {
    if (Redux.state.FormObject?.FormError1 && Object.keys(Redux.state.FormObject?.FormError1).length === 0 && Redux.state.FormObject?.FormIsValid1) {
      return APICalls.ProfileUpdatePasswordAPICall
    }  
  }, [Redux.state.FormObject?.FormError1])

	// Extra Render
  useEffect(() => {
    console.log(Redux.state)
  }, [Redux.state])
  
	// JSX
  return (
    <div class="content-wrapper">

      <div class="container-xxl flex-grow-1 container-p-y">
        <Header 
          Redux={Redux}
          header={{
            title: "Welcome to Profile Section !  🎉",
            subTitle: "You are doing very well, create a stunning profile section for your career gallery.",
            breadcrumb: "Profile",
            onClick: "disable"
          }}
        />

        <div class="row">
          <div class="col-md-12">
            <ul class="nav nav-pills" role="tablist">
              <li class="nav-item">
                <button
                  type="button"
                  class="nav-link active"
                  role="tab"
                  data-bs-toggle="tab"
                  data-bs-target="#navs-pills-top-home"
                  aria-controls="navs-pills-top-home"
                  aria-selected="true"
                >
                  <i class="bx bx-user me-1"></i> Profile Details
                </button>
              </li>
              <li class="nav-item">
                <button
                  type="button"
                  class="nav-link"
                  role="tab"
                  data-bs-toggle="tab"
                  data-bs-target="#navs-pills-top-profile"
                  aria-controls="navs-pills-top-profile"
                  aria-selected="false"
                >
                  <i class="bx bx-bell me-1"></i> Role Access
                </button>
              </li>
              <li class="nav-item">
                <button
                  type="button"
                  class="nav-link"
                  role="tab"
                  data-bs-toggle="tab"
                  data-bs-target="#navs-pills-top-messages"
                  aria-controls="navs-pills-top-messages"
                  aria-selected="false"
                >
                  <i class="bx bx-link-alt me-1"></i> Change Password
                </button>
              </li>
            </ul>

            <div class="tab-content px-0">
              <div class="tab-pane fade show active" id="navs-pills-top-home" role="tabpanel">
                <div class="card mb-4">
                  <div class="card-body">
                    <div class="d-flex align-items-start align-items-sm-center gap-4">
                      <img
                        src={Redux.state.FormObject.FormValue.image?.url}
                        alt="user-avatar"
                        class="d-block rounded"
                        height="100"
                        width="100"
                        id="uploadedAvatar"
                        style={{objectFit: "contain"}}
                      />
                      <div class="button-wrapper">
                        <label for="upload" class="btn btn-primary me-2 mb-4" tabindex="0">
                          <span class="d-none d-sm-block">Upload new photo</span>
                          <i class="bx bx-upload d-block d-sm-none"></i>
                          <input
                            type="file"
                            id="upload"
                            name="image"
                            class="account-file-input"
                            hidden
                            onChange={event => handleInput(event, Redux)}
                            accept="image/png, image/jpeg"
                          />
                        </label>
                        {/* <button type="button" class="btn btn-outline-secondary account-image-reset mb-4">
                          <i class="bx bx-reset d-block d-sm-none"></i>
                          <span class="d-none d-sm-block">Reset</span>
                        </button> */}

                        <p class="text-muted mb-0">Allowed JPG, GIF or PNG. Max size of 800K</p>
                      </div>
                    </div>
                  </div>
                  <hr class="my-0" />
                  <div class="card-body">
                    <form id="formAccountSettings" onSubmit={event => validateFormObject(event, Redux, validateFormValues)} noValidate>
                      <div class="row">
                        <div class="mb-3 col-md-6">
                          <label for="firstName" class="form-label">First Name</label>
                          <input
                            class="form-control"
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={Redux.state.FormObject.FormValue.firstName}
                            placeholder="Enter your first name"
                            autofocus
                            onChange={event => handleInput(event, Redux)}
                          />
                          <div class="form-text text-danger">{Redux.state.FormObject.FormError.firstName}</div>
                        </div>
                        <div class="mb-3 col-md-6">
                          <label for="lastName" class="form-label">Last Name</label>
                          <input
                            class="form-control"
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={Redux.state.FormObject.FormValue.lastName}
                            placeholder="Enter your last name"
                            autofocus
                            onChange={event => handleInput(event, Redux)}
                          />
                          <div class="form-text text-danger">{Redux.state.FormObject.FormError.lastName}</div>
                        </div>
                        {/* <div class="mb-3 col-md-6">
                          <label for="lastName" class="form-label">Last Name</label>
                          <input class="form-control" type="text" name="lastName" id="lastName" value="Doe" />
                        </div> */}
                        <div class="mb-3 col-md-6">
                          <label for="email" class="form-label">E-mail</label>
                          <input
                            class="form-control"
                            type="text"
                            id="email"
                            name="email"
                            value={Redux.state.FormObject.FormValue.email}
                            placeholder="Enter your email"
                            disabled
                          />
                          <div class="form-text text-danger">{Redux.state.FormObject.FormError.email}</div>
                        </div>
                        {/* <div class="mb-3 col-md-6">
                          <label for="organization" class="form-label">Organization</label>
                          <input
                            type="text"
                            class="form-control"
                            id="organization"
                            name="organization"
                            value="ThemeSelection"
                          />
                        </div>
                        <div class="mb-3 col-md-6">
                          <label class="form-label" for="phoneNumber">Phone Number</label>
                          <div class="input-group input-group-merge">
                            <span class="input-group-text">US (+1)</span>
                            <input
                              type="text"
                              id="phoneNumber"
                              name="phoneNumber"
                              class="form-control"
                              placeholder="202 555 0111"
                            />
                          </div>
                        </div>
                        <div class="mb-3 col-md-6">
                          <label for="address" class="form-label">Address</label>
                          <input type="text" class="form-control" id="address" name="address" placeholder="Address" />
                        </div>
                        <div class="mb-3 col-md-6">
                          <label for="state" class="form-label">State</label>
                          <input class="form-control" type="text" id="state" name="state" placeholder="California" />
                        </div>
                        <div class="mb-3 col-md-6">
                          <label for="zipCode" class="form-label">Zip Code</label>
                          <input
                            type="text"
                            class="form-control"
                            id="zipCode"
                            name="zipCode"
                            placeholder="231465"
                            maxlength="6"
                          />
                        </div>
                        <div class="mb-3 col-md-6">
                          <label class="form-label" for="country">Country</label>
                          <select id="country" class="select2 form-select">
                            <option value="">Select</option>
                            <option value="Australia">Australia</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Belarus">Belarus</option>
                            <option value="Brazil">Brazil</option>
                            <option value="Canada">Canada</option>
                            <option value="China">China</option>
                            <option value="France">France</option>
                            <option value="Germany">Germany</option>
                            <option value="India">India</option>
                            <option value="Indonesia">Indonesia</option>
                            <option value="Israel">Israel</option>
                            <option value="Italy">Italy</option>
                            <option value="Japan">Japan</option>
                            <option value="Korea">Korea, Republic of</option>
                            <option value="Mexico">Mexico</option>
                            <option value="Philippines">Philippines</option>
                            <option value="Russia">Russian Federation</option>
                            <option value="South Africa">South Africa</option>
                            <option value="Thailand">Thailand</option>
                            <option value="Turkey">Turkey</option>
                            <option value="Ukraine">Ukraine</option>
                            <option value="United Arab Emirates">United Arab Emirates</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="United States">United States</option>
                          </select>
                        </div>
                        <div class="mb-3 col-md-6">
                          <label for="language" class="form-label">Language</label>
                          <select id="language" class="select2 form-select">
                            <option value="">Select Language</option>
                            <option value="en">English</option>
                            <option value="fr">French</option>
                            <option value="de">German</option>
                            <option value="pt">Portuguese</option>
                          </select>
                        </div>
                        <div class="mb-3 col-md-6">
                          <label for="timeZones" class="form-label">Timezone</label>
                          <select id="timeZones" class="select2 form-select">
                            <option value="">Select Timezone</option>
                            <option value="-12">(GMT-12:00) International Date Line West</option>
                            <option value="-11">(GMT-11:00) Midway Island, Samoa</option>
                            <option value="-10">(GMT-10:00) Hawaii</option>
                            <option value="-9">(GMT-09:00) Alaska</option>
                            <option value="-8">(GMT-08:00) Pacific Time (US & Canada)</option>
                            <option value="-8">(GMT-08:00) Tijuana, Baja California</option>
                            <option value="-7">(GMT-07:00) Arizona</option>
                            <option value="-7">(GMT-07:00) Chihuahua, La Paz, Mazatlan</option>
                            <option value="-7">(GMT-07:00) Mountain Time (US & Canada)</option>
                            <option value="-6">(GMT-06:00) Central America</option>
                            <option value="-6">(GMT-06:00) Central Time (US & Canada)</option>
                            <option value="-6">(GMT-06:00) Guadalajara, Mexico City, Monterrey</option>
                            <option value="-6">(GMT-06:00) Saskatchewan</option>
                            <option value="-5">(GMT-05:00) Bogota, Lima, Quito, Rio Branco</option>
                            <option value="-5">(GMT-05:00) Eastern Time (US & Canada)</option>
                            <option value="-5">(GMT-05:00) Indiana (East)</option>
                            <option value="-4">(GMT-04:00) Atlantic Time (Canada)</option>
                            <option value="-4">(GMT-04:00) Caracas, La Paz</option>
                          </select>
                        </div>
                        <div class="mb-3 col-md-6">
                          <label for="currency" class="form-label">Currency</label>
                          <select id="currency" class="select2 form-select">
                            <option value="">Select Currency</option>
                            <option value="usd">USD</option>
                            <option value="euro">Euro</option>
                            <option value="pound">Pound</option>
                            <option value="bitcoin">Bitcoin</option>
                          </select>
                        </div> */}
                      </div>
                      <div class="mt-2">
                        <button type="submit" class="btn btn-primary me-2">Save changes</button>
                        {/* <button type="reset" class="btn btn-outline-secondary">Cancel</button> */}
                      </div>
                    </form>
                  </div>
                </div>

                {/* <div class="card">
                  <h5 class="card-header">Delete Account</h5>
                  <div class="card-body">
                    <div class="mb-3 col-12 mb-0">
                      <div class="alert alert-warning">
                        <h6 class="alert-heading fw-bold mb-1">Are you sure you want to delete your account?</h6>
                        <p class="mb-0">Once you delete your account, there is no going back. Please be certain.</p>
                      </div>
                    </div>
                    <form id="formAccountDeactivation" onsubmit="return false">
                      <div class="form-check mb-3">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="accountActivation"
                          id="accountActivation"
                        />
                        <label class="form-check-label" for="accountActivation"
                          >I confirm my account deactivation</label
                        >
                      </div>
                      <button type="submit" class="btn btn-danger deactivate-account">Deactivate Account</button>
                    </form>
                  </div>
                </div>  */}
              </div>

              <div class="tab-pane fade" id="navs-pills-top-profile" role="tabpanel">
                {Redux1?.state.ReceivedObject?.UserAccess &&
                  <div class="card">
                    <h5 class="card-header">Assigned Role: {Redux1.state.ReceivedObject?.ProfileRetrieve?.relation_info?.role?.basic_info?.title}</h5>
                    <div class="card-body">
                      <span
                        >Following are the permissions for your activities on this site from your assigned role {" "}
                        <span class="notificationRequest"><strong>i.e. {Redux1.state.ReceivedObject?.ProfileRetrieve?.relation_info?.role?.basic_info?.title}</strong></span>.
                        </span>
                      <div class="error"></div>
                    </div>
                    <div class="table-responsive">
                      <table class="table table-striped table-borderless border-bottom">
                        <thead>
                          <tr>
                            <th class="text-nowrap">Access</th>
                            <th class="text-nowrap text-center">List</th>
                            <th class="text-nowrap text-center">Create</th>
                            <th class="text-nowrap text-center">Retrieve</th>
                            <th class="text-nowrap text-center">Update</th>
                            <th class="text-nowrap text-center">Delete</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Object.keys(Redux1.state.ReceivedObject?.UserAccess)?.map(each => {
                            return (
                              <tr>
                                <td class="text-nowrap">{each}</td>
                                <td>
                                  <div class="d-flex justify-content-center">
                                    {Redux1.state.ReceivedObject?.UserAccess[each].list ? 
                                      <i class='bx bx-check' ></i>
                                      : 
                                      "No"
                                    }
                                  </div>
                                </td>
                                <td>
                                  <div class="d-flex justify-content-center">
                                    {Redux1.state.ReceivedObject?.UserAccess[each].create ? 
                                      <i class='bx bx-check' ></i>
                                      : 
                                      "No"
                                    }
                                  </div>
                                </td>
                                <td>
                                  <div class="d-flex justify-content-center">
                                    {Redux1.state.ReceivedObject?.UserAccess[each].retrieve ? 
                                      <i class='bx bx-check' ></i>
                                      : 
                                      "No"
                                    }
                                  </div>
                                </td>
                                <td>
                                  <div class="d-flex justify-content-center">
                                    {Redux1.state.ReceivedObject?.UserAccess[each].update ? 
                                      <i class='bx bx-check' ></i>
                                      : 
                                      "No"
                                    }
                                  </div>
                                </td>
                                <td>
                                  <div class="d-flex justify-content-center">
                                    {Redux1.state.ReceivedObject?.UserAccess[each].delete ? 
                                      <i class='bx bx-check' ></i>
                                      : 
                                      "No"
                                    }
                                  </div>
                                </td>
                              </tr>
                            )
                          })}
                        </tbody>
                      </table>
                    </div>
                    {/* <div class="card-body">
                      <h6>When should we send you notifications?</h6>
                      <form action="javascript:void(0);">
                        <div class="row">
                          <div class="col-sm-6">
                            <select id="sendNotification" class="form-select" name="sendNotification">
                              <option selected>Only when I'm online</option>
                              <option>Anytime</option>
                            </select>
                          </div>
                          <div class="mt-4">
                            <button type="submit" class="btn btn-primary me-2">Save changes</button>
                            <button type="reset" class="btn btn-outline-secondary">Discard</button>
                          </div>
                        </div>
                      </form>
                    </div> */}
                  </div>
                }
              </div>
              
              <div class="tab-pane fade" id="navs-pills-top-messages" role="tabpanel">
                <div class="card mb-4">
                  <div class="card-body">
                    <form 
                      id="formAccountSettings2" 
                      noValidate
                    >
                      <div class="row">
                        <div class="mb-3 col-md-6">
                          <label for="oldPassword" class="form-label">Old Password</label>
                          <input
                            class="form-control"
                            type="password"
                            id="oldPassword"
                            name="oldPassword"
                            value={Redux.state.FormObject?.FormValue1?.oldPassword}
                            placeholder="Enter your old password"
                            autofocus
                            onChange={event =>  Redux.dispatch({
                              type: Redux.action.FormObject,
                              payload: {
                                ...Redux.state.FormObject,
                                FormValue1: {
                                  ...Redux.state.FormObject?.FormValue1,
                                  oldPassword: event.target.value,
                                },
                              },
                            })}
                          />
                          <div class="form-text text-danger">{Redux.state.FormObject?.FormError1?.oldPassword}</div>
                        </div>
                        <div class="mb-3 col-md-6">
                          <label for="newPassword" class="form-label">New Password</label>
                          <input
                            class="form-control"
                            type="password"
                            id="newPassword"
                            name="newPassword"
                            value={Redux.state.FormObject?.FormValue1?.newPassword}
                            placeholder="Enter your new password"
                            onChange={event =>  Redux.dispatch({
                              type: Redux.action.FormObject,
                              payload: {
                                ...Redux.state.FormObject,
                                FormValue1: {
                                  ...Redux.state.FormObject?.FormValue1,
                                  newPassword: event.target.value,
                                },
                              },
                            })}
                          />
                          <div class="form-text text-danger">{Redux.state.FormObject?.FormError1?.newPassword}</div>
                        </div>
                        <div class="mb-3 col-md-6">
                          <label for="confirmPassword" class="form-label">Confiirm Password</label>
                          <input
                            class="form-control"
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={Redux.state.FormObject?.FormValue1?.confirmPassword}
                            placeholder="Enter your confirm password"
                            onChange={event =>  Redux.dispatch({
                              type: Redux.action.FormObject,
                              payload: {
                                ...Redux.state.FormObject,
                                FormValue1: {
                                  ...Redux.state.FormObject?.FormValue1,
                                  confirmPassword: event.target.value,
                                },
                              },
                            })}
                          />
                          <div class="form-text text-danger">{Redux.state.FormObject?.FormError1?.confirmPassword}</div>
                        </div>
                      </div>
                      <div class="mt-2">
                        <button 
                          type="button" 
                          class="btn btn-primary me-2"
                          onClick={event => Redux.dispatch({ type: Redux.action.FormObject, payload: {
                            ...Redux.state.FormObject,
                            FormError1: validateFormValues1(Redux.state.FormObject.FormValue1),
                            FormIsValid1: true
                          } })}     
                        >Change Password</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="content-backdrop fade"></div>
    </div>
  )
}

export default Profile