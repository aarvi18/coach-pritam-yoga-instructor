// pages/Home.tsx
import React from 'react'
import HeroSection from '../components/major_components/hero_section/HeroSection'
import { AboutSection } from '../components'
import YogaAsanas from '../components/major_components/yoga_asanas_section/YogaAsanas'
import ReviewSection from '../components/major_components/review_section/ReviewSection'
import { FounderSection } from '../components/major_components/founder_section/FounderSection'
const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <YogaAsanas />
      <ReviewSection />
      <FounderSection />
    </>
  )
}

export default Home
