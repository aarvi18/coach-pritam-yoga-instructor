import React from 'react'
import { motion } from 'framer-motion'

const CompanyTagline: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="backdrop-blur-md bg-purple/300 border border-white/20 shadow-lg rounded-md px-3 py-1.5 mx-auto lg:ml-0 lg:mr-auto w-fit mt-20 mb-2 text-center"
        >
            <p className="text-xs text-white">
                Coach Pritam - Your Yoga Instructor
            </p>
        </motion.div>
    )
}

export default CompanyTagline
