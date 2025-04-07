import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components'
import { Footer } from '../components'

const Layout: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
