import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Classes', path: '/classes' },
]

export const NavbarMenu: React.FC = () => {
  return (
    <ul className="flex gap-8 text-[16px] font-semibold text-gray-700">
      {navItems.map((item) => (
        <li key={item.name} className="relative">
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              `pb-1 transition-colors duration-300 ${
                isActive ? 'text-primary' : 'hover:text-primary'
              }`
            }
          >
            {({ isActive }) => (
              <>
                {item.name}
                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute left-0 bottom-0 h-[2px] w-full bg-primary rounded-full"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </>
            )}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}
