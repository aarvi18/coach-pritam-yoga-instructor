// MobileMenu.tsx
import React from 'react'
import { motion } from 'framer-motion'
import { Home, Info, HeartHandshake, Dumbbell } from 'lucide-react' // 👈 Icons

interface Props {
  isOpen: boolean
  onClose: () => void
}

export const MobileMenu: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ duration: 0.3 }}
      className="fixed top-17 right-0 h-auto w-64 bg-white shadow-lg z-50 p-6 flex flex-col gap-6 md:hidden"
    >
      <ul className="flex flex-col gap-4 text-lg font-medium text-gray-700">
        <li className="hover:text-primary cursor-pointer flex items-center gap-2">
          <Home size={20} /> Home
        </li>
        <li className="hover:text-primary cursor-pointer flex items-center gap-2">
          <Info size={20} /> About Us
        </li>
        <li className="hover:text-primary cursor-pointer flex items-center gap-2">
          <HeartHandshake size={20} /> Services
        </li>
        <li className="hover:text-primary cursor-pointer flex items-center gap-2">
          <Dumbbell size={20} /> Classes
        </li>
      </ul>
      <button
        className="mt-auto bg-primary text-white px-4 py-2 rounded-xl shadow-md hover:bg-primary-dark transition"
        onClick={onClose}
      >
        Book Now
      </button>
    </motion.div>
  )
}
