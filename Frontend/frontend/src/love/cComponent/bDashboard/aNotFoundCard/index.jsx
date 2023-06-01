import React from 'react'

const NotFoundCard = ({head, message, size}) => {
  return (
    <div class={size}>
      <div class="card h-100">
        <div class="card-header d-flex align-items-center justify-content-between pb-0">
          <div class="card-title mb-0">
            <div class="d-flex">
              <div class="avatar flex-shrink-0 me-3">
                <span class="avatar-initial rounded bg-label-secondary"
                  ><i class="bx bx-cycling"></i
                ></span>
              </div>
              <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                <div class="me-2">
                  <h5 class="mb-0">{head}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-body text-center">
          <h6 class="card-title text-muted mt-4">{message}</h6>
        </div>
      </div>
    </div>
  )
}

export default NotFoundCard