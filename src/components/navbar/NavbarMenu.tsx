// NavbarMenu.tsx
import React from 'react'

export const NavbarMenu: React.FC = () => (
  <ul className="flex gap-6 text-gray-700 font-medium">
    <li className="hover:text-primary cursor-pointer">Home</li>
    <li className="hover:text-primary cursor-pointer">About Us</li>
    <li className="hover:text-primary cursor-pointer">Services</li>
    <li className="hover:text-primary cursor-pointer">Classes</li>
  </ul>
)