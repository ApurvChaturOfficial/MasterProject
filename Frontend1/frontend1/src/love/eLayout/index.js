import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './index.css'
import Avatar from '../hAsset/profile.png'

const Layout = () => {
  return (
    <div className='container mx-auto'>
      <div className='flex justify-center items-center h-screen'>
        <div className='glass'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout