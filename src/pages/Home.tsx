// pages/Home.tsx
import React from 'react'
import HeroSection from '../components/major_components/hero_section/HeroSection'
import { AboutSection } from '../components'
const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
    </>
  )
}

export default Home
