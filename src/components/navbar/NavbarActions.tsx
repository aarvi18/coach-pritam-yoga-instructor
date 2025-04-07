// NavbarActions.tsx
import React from 'react'

export const NavbarActions: React.FC = () => (
  <div className="flex items-center gap-4">
    <span className="text-gray-700 cursor-pointer hover:text-primary">Contact Us</span>
    <button className="bg-primary text-white px-4 py-2 rounded-md shadow-md hover:bg-primary-dark transition cursor-pointer">
      Book Now
    </button>
  </div>
)