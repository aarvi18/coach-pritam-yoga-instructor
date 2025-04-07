// src/App.tsx
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import { HomePage, NotFoundPage } from './pages'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          {/* Add 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
