import React from 'react'
import { Outlet } from 'react-router-dom'

const GlobalLayout = () => {
  return (
    <div class="container">
      <Outlet />
    </div>
  )
}

export default GlobalLayout