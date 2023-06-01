import React from 'react'
import { Outlet } from 'react-router-dom'
import "./index.module.css"

const AuthLayout = () => {
  return (
    <div class="my_bg">
      AuthLayout
      <Outlet />
    </div>
  )
}

export default AuthLayout