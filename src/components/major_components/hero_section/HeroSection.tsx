import React from 'react'
import { motion } from 'framer-motion'
import HeroImage from './HeroImage'
import CompanyTagline from './CompanyTagline'
import { ArrowRight, PhoneCall } from 'lucide-react'
import { Primary_Button, Secondary_Button } from '../../../components'

const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden flex items-center justify-center py-10 px-6 md:px-16">

      {/* Glowing Blur Circles */}
      <div className="absolute w-[500px] h-[500px] bg-purple-500 opacity-20 blur-[180px] rounded-full top-[-100px] left-[-100px]"></div>
      <div className="absolute w-[400px] h-[400px] bg-pink-500 opacity-20 blur-[150px] rounded-full top-[200px] right-[-150px]"></div>
      <div className="absolute w-[300px] h-[300px] bg-yellow-500 opacity-10 blur-[120px] rounded-full bottom-[-100px] left-[20%]"></div>

      {/* Main Content Layout */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full max-w-7xl">

        {/* Left Side Text Content */}
        <motion.div
          className="text-white max-w-xl mx-auto lg:mx-0 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <CompanyTagline />
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl sm:leading-20 font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text mt-10 md:mt-0"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Transform Your Body & Mind
          </motion.h1>

          <motion.p
            className="text-sm md:text-base text-gray-300 mb-8"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Join me on a holistic journey to better health. With 10+ years of experience and 1,000+ lives transformed, I offer personalized coaching that blends yoga, nutrition, and mindset to help you grow physically, mentally, and spiritually.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <Primary_Button text='Book a 15 min call' icon={<PhoneCall size={18} />} onClick={() => console.log("Clicked")} />
            <Secondary_Button text='Explore' icon={<ArrowRight size={18} />} />
          </motion.div>
        </motion.div>

        {/* Right Side Animated Image */}
        <div className="max-w-full w-full mx-auto">
          <HeroImage />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
