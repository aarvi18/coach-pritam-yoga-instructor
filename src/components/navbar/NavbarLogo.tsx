// NavbarLogo.tsx
import React from 'react';
import { main } from '../../data/main';
import { Logo } from '../../assets'; // adjust the path according to your project structure

export const NavbarLogo: React.FC = () => (
  <div className="flex items-center space-x-2">
    <img
      src={Logo}
      alt="Logo"
      className="h-8 w-8 sm:h-12 sm:w-12 object-contain"
    />
    <span className="text-md sm:text-2xl font-bold text-primary">
      {main.companyName}
    </span>
  </div>
);
