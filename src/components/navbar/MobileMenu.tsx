import React from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { Home, Info, HeartHandshake, Dumbbell } from 'lucide-react'

interface Props {
  isOpen: boolean
  onClose: () => void
}

const menuItems = [
  { name: 'Home', path: '/', icon: <Home size={20} /> },
  { name: 'About Us', path: '/about', icon: <Info size={20} /> },
  { name: 'Services', path: '/services', icon: <HeartHandshake size={20} /> },
  { name: 'Classes', path: '/classes', icon: <Dumbbell size={20} /> },
]

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
        {menuItems.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-2 px-2 py-1 rounded-md transition-colors duration-200 ${
                  isActive ? 'text-primary font-semibold' : 'hover:text-primary'
                }`
              }
            >
              {item.icon}
              {item.name}
            </NavLink>
          </li>
        ))}
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
