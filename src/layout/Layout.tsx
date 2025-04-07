import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components'
import { Footer } from '../components'

const Layout: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen px-4">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
