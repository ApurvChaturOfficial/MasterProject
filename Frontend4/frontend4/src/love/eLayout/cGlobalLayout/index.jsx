import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navigation from '../../cComponent/aNavigation';


const GlobalLayout = () => {


  // JSX
  return (
    <React.Fragment>
      <Navigation />
      <Outlet />
    </React.Fragment>
  )
}

export default GlobalLayout