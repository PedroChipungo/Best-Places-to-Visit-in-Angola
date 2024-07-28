import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import { Outlet, Link } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

const Layout = () => {

  return (
    <>
       <NavBar/>
       <Outlet/>
       <Footer/>
    </>
  )
}

export default Layout
