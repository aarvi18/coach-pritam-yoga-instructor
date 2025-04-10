import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const slides = [
    {
        image: 'https://imgcdn.stablediffusionweb.com/2024/5/3/d9ccc511-fd72-4fb2-acd8-da6c8bdada33.jpg',
        name: 'Ardha Padmasana',
    },
    {
        image: 'https://imgcdn.stablediffusionweb.com/2024/5/3/c81f4a72-84ff-499e-8c40-57327ceac580.jpg',
        name: 'Halasana',
    },
    {
        image: 'https://imgcdn.stablediffusionweb.com/2024/5/3/1e8058a4-fcd4-4cac-8870-48c8ab63a1e5.jpg',
        name: 'Vrikshasana',
    },
]

const HeroImage: React.FC = () => {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="relative w-full max-w-md mx-auto aspect-square overflow-hidden rounded-3xl">
            {/* Fade-in/out Image */}
            <AnimatePresence mode="wait">
                <motion.img
                    key={slides[current].image}
                    src={slides[current].image}
                    alt="Yoga Pose"
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                />
            </AnimatePresence>

            {/* Fade-in/out Text Label */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={slides[current].name}
                    className="absolute bottom-0 right-0 backdrop-blur-md bg-white/20 border border-white/30 text-black text-sm sm:text-base font-medium px-4 py-2 rounded-lg shadow-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    {slides[current].name}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default HeroImage
