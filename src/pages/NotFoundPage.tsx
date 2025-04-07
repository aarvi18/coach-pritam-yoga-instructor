import React from 'react'
import { motion } from 'framer-motion'
import { Ghost } from 'lucide-react'
import { Link } from 'react-router-dom'

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        <div className="flex justify-center mb-6">
          <Ghost size={72} className="text-primary animate-bounce" />
        </div>

        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-2">Oops! Page not found.</p>
        <p className="text-gray-500 mb-6">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-block bg-primary px-6 py-3 rounded-lg font-medium shadow-md hover:bg-primary-dark transition"
        >
          Go Back Home
        </Link>
      </motion.div>
    </div>
  )
}

export default NotFoundPage
