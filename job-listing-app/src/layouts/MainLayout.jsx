import React from 'react'
import { Outlet } from 'react-router-dom'

import Navbar from '../components/Navbar'

const MainLayout = ({ element }) => {
  return (
    <>
    
        <Navbar />
        <Outlet />

    </>
  )
}

export default MainLayout