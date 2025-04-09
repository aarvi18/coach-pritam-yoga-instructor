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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="fixed top-13 left-0 w-full z-40 p-6 md:hidden bg-white border-b border-white/20 shadow-lg rounded-xl"
    >

      <ul className="flex flex-col gap-4 text-lg font-medium text-black">
        {menuItems.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-2 px-2 py-1 rounded-md transition-colors duration-200 ${isActive ? 'text-orange-500 font-semibold' : 'hover:text-orange/90'
                }`
              }
            >
              {item.icon}
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <button className="mt-6 bg-gradient-to-r from-red-500 to-orange-500 text-white px-5 py-2 rounded-md shadow-lg hover:brightness-110 transition duration-300">
        Book Now
      </button>
    </motion.div>
  )
}
