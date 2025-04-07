// NavbarLogo.tsx
import React from 'react'
import { main } from '../../data/main'

export const NavbarLogo: React.FC = () => (
  <div className="text-2xl font-bold text-primary">{main.companyName}</div>
)