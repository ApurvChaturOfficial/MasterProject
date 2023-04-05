import React from 'react'

const Sample = () => {
  return (
    <div class="content-wrapper">

      <div class="container-xxl flex-grow-1 container-p-y">
        <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Tables /</span> Basic Tables</h4>

        <div class="card">
          <h5 class="card-header">Hoverable rows</h5>
          <div class="table-responsive text-nowrap">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th>Project</th>
                  <th>Client</th>
                  <th>Users</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody class="table-border-bottom-0">
                <tr>
                  <td><i class="fab fa-angular fa-lg text-danger me-3"></i> <strong>Angular Project</strong></td>
                  <td>Albert Cook</td>
                  <td>
                    <ul class="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                      <li
                        data-bs-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-bs-placement="top"
                        class="avatar avatar-xs pull-up"
                        title="Lilian Fuller"
                      >
                        <img src="../assets/img/avatars/5.png" alt="Avatar" class="rounded-circle" />
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-bs-placement="top"
                        class="avatar avatar-xs pull-up"
                        title="Sophia Wilkerson"
                      >
                        <img src="../assets/img/avatars/6.png" alt="Avatar" class="rounded-circle" />
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-bs-placement="top"
                        class="avatar avatar-xs pull-up"
                        title="Christina Parker"
                      >
                        <img src="../assets/img/avatars/7.png" alt="Avatar" class="rounded-circle" />
                      </li>
                    </ul>
                  </td>
                  <td><span class="badge bg-label-primary me-1">Active</span></td>
                  <td>
                    <div class="dropdown">
                      <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                        <i class="bx bx-dots-vertical-rounded"></i>
                      </button>
                      <div class="dropdown-menu">
                        <a 
                          class="dropdown-item" 
                          href="javascript:void(0);"
                          data-bs-toggle="modal"
                          data-bs-target="#modalScrollable"
                        ><i class="bx bx-edit-alt me-1"></i> Read</a
                        >
                        <a 
                          class="dropdown-item" 
                          href="javascript:void(0);"
                          data-bs-toggle="modal"
                          data-bs-target="#fullscreenModal"
                        ><i class="bx bx-edit-alt me-1"></i> Edit</a
                        >
                        <a 
                          class="dropdown-item" 
                          href="javascript:void(0);"
                          data-bs-toggle="modal"
                          data-bs-target="#modalCenter"
                        ><i class="bx bx-trash me-1"></i> Delete</a
                        >
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><i class="fab fa-react fa-lg text-info me-3"></i> <strong>React Project</strong></td>
                  <td>Barry Hunter</td>
                  <td>
                    <ul class="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                      <li
                        data-bs-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-bs-placement="top"
                        class="avatar avatar-xs pull-up"
                        title="Lilian Fuller"
                      >
                        <img src="../assets/img/avatars/5.png" alt="Avatar" class="rounded-circle" />
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-bs-placement="top"
                        class="avatar avatar-xs pull-up"
                        title="Sophia Wilkerson"
                      >
                        <img src="../assets/img/avatars/6.png" alt="Avatar" class="rounded-circle" />
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-bs-placement="top"
                        class="avatar avatar-xs pull-up"
                        title="Christina Parker"
                      >
                        <img src="../assets/img/avatars/7.png" alt="Avatar" class="rounded-circle" />
                      </li>
                    </ul>
                  </td>
                  <td><span class="badge bg-label-success me-1">Completed</span></td>
                  <td>
                    <div class="dropdown">
                      <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                        <i class="bx bx-dots-vertical-rounded"></i>
                      </button>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="javascript:void(0);"
                          ><i class="bx bx-edit-alt me-1"></i> Edit</a
                        >
                        <a class="dropdown-item" href="javascript:void(0);"
                          ><i class="bx bx-trash me-1"></i> Delete</a
                        >
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><i class="fab fa-vuejs fa-lg text-success me-3"></i> <strong>VueJs Project</strong></td>
                  <td>Trevor Baker</td>
                  <td>
                    <ul class="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                      <li
                        data-bs-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-bs-placement="top"
                        class="avatar avatar-xs pull-up"
                        title="Lilian Fuller"
                      >
                        <img src="../assets/img/avatars/5.png" alt="Avatar" class="rounded-circle" />
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-bs-placement="top"
                        class="avatar avatar-xs pull-up"
                        title="Sophia Wilkerson"
                      >
                        <img src="../assets/img/avatars/6.png" alt="Avatar" class="rounded-circle" />
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-bs-placement="top"
                        class="avatar avatar-xs pull-up"
                        title="Christina Parker"
                      >
                        <img src="../assets/img/avatars/7.png" alt="Avatar" class="rounded-circle" />
                      </li>
                    </ul>
                  </td>
                  <td><span class="badge bg-label-info me-1">Scheduled</span></td>
                  <td>
                    <div class="dropdown">
                      <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                        <i class="bx bx-dots-vertical-rounded"></i>
                      </button>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="javascript:void(0);"
                          ><i class="bx bx-edit-alt me-1"></i> Edit</a
                        >
                        <a class="dropdown-item" href="javascript:void(0);"
                          ><i class="bx bx-trash me-1"></i> Delete</a
                        >
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i class="fab fa-bootstrap fa-lg text-primary me-3"></i> <strong>Bootstrap Project</strong>
                  </td>
                  <td>Jerry Milton</td>
                  <td>
                    <ul class="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                      <li
                        data-bs-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-bs-placement="top"
                        class="avatar avatar-xs pull-up"
                        title="Lilian Fuller"
                      >
                        <img src="../assets/img/avatars/5.png" alt="Avatar" class="rounded-circle" />
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-bs-placement="top"
                        class="avatar avatar-xs pull-up"
                        title="Sophia Wilkerson"
                      >
                        <img src="../assets/img/avatars/6.png" alt="Avatar" class="rounded-circle" />
                      </li>
                      <li
                        data-bs-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-bs-placement="top"
                        class="avatar avatar-xs pull-up"
                        title="Christina Parker"
                      >
                        <img src="../assets/img/avatars/7.png" alt="Avatar" class="rounded-circle" />
                      </li>
                    </ul>
                  </td>
                  <td><span class="badge bg-label-warning me-1">Pending</span></td>
                  <td>
                    <div class="dropdown">
                      <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                        <i class="bx bx-dots-vertical-rounded"></i>
                      </button>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="javascript:void(0);"
                          ><i class="bx bx-edit-alt me-1"></i> Edit</a
                        >
                        <a class="dropdown-item" href="javascript:void(0);"
                          ><i class="bx bx-trash me-1"></i> Delete</a
                        >
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>

      <footer class="content-footer footer bg-footer-theme">
        <div class="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
          <div class="mb-2 mb-md-0">
            ©
            <script>
              document.write(new Date().getFullYear());
            </script>
            , made with ❤️ by
            <a href="https://themeselection.com" target="_blank" class="footer-link fw-bolder">ThemeSelection</a>
          </div>
          <div>
            <a href="https://themeselection.com/license/" class="footer-link me-4" target="_blank">License</a>
            <a href="https://themeselection.com/" target="_blank" class="footer-link me-4">More Themes</a>

            <a
              href="https://themeselection.com/demo/sneat-bootstrap-html-admin-template/documentation/"
              target="_blank"
              class="footer-link me-4"
              >Documentation</a
            >

            <a
              href="https://github.com/themeselection/sneat-html-admin-template-free/issues"
              target="_blank"
              class="footer-link me-4"
              >Support</a
            >
          </div>
        </div>
      </footer>

      <div class="content-backdrop fade"></div>

      {/* Create & Update */}
      <div class="modal fade" id="fullscreenModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen" role="document">
          <div class="modal-content bg-light">
            <div class="modal-header">
              <h5 class="modal-title" id="modalFullTitle">Modal title</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-xl">
                  <div class="card mb-4">
                    <div class="card-header d-flex justify-content-between align-items-center">
                      <h5 class="mb-0">Basic Layout</h5>
                      <small class="text-muted float-end">Default label</small>
                    </div>
                    <div class="card-body">
                      <form>
                        <div class="mb-3">
                          <label class="form-label" for="basic-default-fullname">Full Name</label>
                          <input type="text" class="form-control" id="basic-default-fullname" placeholder="John Doe" />
                        </div>
                        <div class="mb-3">
                          <label class="form-label" for="basic-default-company">Company</label>
                          <input type="text" class="form-control" id="basic-default-company" placeholder="ACME Inc." />
                        </div>
                        <div class="mb-3">
                          <label class="form-label" for="basic-default-email">Email</label>
                          <div class="input-group input-group-merge">
                            <input
                              type="text"
                              id="basic-default-email"
                              class="form-control"
                              placeholder="john.doe"
                              aria-label="john.doe"
                              aria-describedby="basic-default-email2"
                            />
                            <span class="input-group-text" id="basic-default-email2">@example.com</span>
                          </div>
                          <div class="form-text">You can use letters, numbers & periods</div>
                        </div>
                        <div class="mb-3">
                          <label class="form-label" for="basic-default-phone">Phone No</label>
                          <input
                            type="text"
                            id="basic-default-phone"
                            class="form-control phone-mask"
                            placeholder="658 799 8941"
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label" for="basic-default-message">Message</label>
                          <textarea
                            id="basic-default-message"
                            class="form-control"
                            placeholder="Hi, Do you have a moment to talk Joe?"
                          ></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Send</button>
                      </form>
                    </div>
                  </div>
                </div>
                <div class="col-xl">
                  <div class="card mb-4">
                    <div class="card-header d-flex justify-content-between align-items-center">
                      <h5 class="mb-0">Basic Layout</h5>
                      <small class="text-muted float-end">Default label</small>
                    </div>
                    <div class="card-body">
                      <form>
                        <div class="mb-3">
                          <label class="form-label" for="basic-default-fullname">Full Name</label>
                          <input type="text" class="form-control" id="basic-default-fullname" placeholder="John Doe" />
                        </div>
                        <div class="mb-3">
                          <label class="form-label" for="basic-default-company">Company</label>
                          <input type="text" class="form-control" id="basic-default-company" placeholder="ACME Inc." />
                        </div>
                        <div class="mb-3">
                          <label class="form-label" for="basic-default-email">Email</label>
                          <div class="input-group input-group-merge">
                            <input
                              type="text"
                              id="basic-default-email"
                              class="form-control"
                              placeholder="john.doe"
                              aria-label="john.doe"
                              aria-describedby="basic-default-email2"
                            />
                            <span class="input-group-text" id="basic-default-email2">@example.com</span>
                          </div>
                          <div class="form-text">You can use letters, numbers & periods</div>
                        </div>
                        <div class="mb-3">
                          <label class="form-label" for="basic-default-phone">Phone No</label>
                          <input
                            type="text"
                            id="basic-default-phone"
                            class="form-control phone-mask"
                            placeholder="658 799 8941"
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label" for="basic-default-message">Message</label>
                          <textarea
                            id="basic-default-message"
                            class="form-control"
                            placeholder="Hi, Do you have a moment to talk Joe?"
                          ></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Send</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

      {/* Retrieve */}
      <div class="modal fade" id="modalScrollable" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable" role="document">
          <div class="modal-content bg-light">
            <div class="modal-header">
              <h5 class="modal-title" id="modalScrollableTitle">Modal title</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="col-lg">
                <div class="card">
                  <h5 class="card-header">Lists</h5>
                  <div class="card-body">
                    <small class="text-light fw-semibold">Unstyled</small>
                    <ul class="list-unstyled mt-2">
                      <li>Lorem ipsum dolor sit amet</li>
                      <li>Facilisis in pretium nisl aliquet</li>
                      <li>
                        Nulla volutpat aliquam velit
                        <ul>
                          <li>Phasellus iaculis neque</li>
                          <li>Ac tristique libero volutpat at</li>
                        </ul>
                      </li>
                      <li>Faucibus porta lacus fringilla vel</li>
                    </ul>
                  </div>
                  <hr class="m-0" />
                  <div class="card-body">
                    <small class="text-light fw-semibold">Inline</small>
                    <ul class="list-inline mt-2">
                      <li class="list-inline-item">Lorem ipsum</li>
                      <li class="list-inline-item">Phasellus iaculis</li>
                      <li class="list-inline-item">Nulla volutpat</li>
                    </ul>
                  </div>
                  <hr class="m-0" />
                  <div class="card-body">
                    <small class="text-light fw-semibold">Description list alignment</small>
                    <dl class="row mt-2">
                      <dt class="col-sm-3">Description lists</dt>
                      <dd class="col-sm-9">A description list is perfect for defining terms.</dd>

                      <dt class="col-sm-3">Euismod</dt>
                      <dd class="col-sm-9">
                        <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
                      </dd>

                      <dt class="col-sm-3">Malesuada porta</dt>
                      <dd class="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>

                      <dt class="col-sm-3 text-truncate">Truncated term is truncated</dt>
                      <dd class="col-sm-9">
                        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum.
                      </dd>

                      <dt class="col-sm-3">Nesting</dt>
                      <dd class="col-sm-9">
                        <dl class="row">
                          <dt class="col-sm-4">Nested definition list</dt>
                          <dd class="col-sm-8">
                            Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.
                          </dd>
                        </dl>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

      {/* Delete */}
      <div class="modal fade" id="modalCenter" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content bg-light">
            <div class="modal-header">
              <h5 class="modal-title" id="modalCenterTitle">Modal title</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
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
            {/* <div class="modal-footer">
              <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div> */}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Sample