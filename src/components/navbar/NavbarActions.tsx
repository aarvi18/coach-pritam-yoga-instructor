import React from 'react'

export const NavbarActions: React.FC = () => (
  <div className="flex items-center gap-4">
    <span className="text-white cursor-pointer">Contact Us</span>
    <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-5 py-2 rounded-md shadow-lg hover:brightness-150 transition duration-300 cursor-pointer">
      Book Now
    </button>
  </div>
)
