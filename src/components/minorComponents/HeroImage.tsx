import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const backgroundImage = 'https://reflexi.vercel.app/static/media/hero.595a7a35e71f541d0158.png'

const overlayImages = [
    'https://reflexi.vercel.app/static/media/halasana.7e7c706873fb7a2c42ce.png',
    'https://reflexi.vercel.app/static/media/bhujangasana.d8490222779eb44d5a8c.png',
    'https://reflexi.vercel.app/static/media/ardha_padmasana.c58d1e3f9fc5b2f0fa01.png',
    'https://reflexi.vercel.app/static/media/halasana.7e7c706873fb7a2c42ce.png',
    'https://reflexi.vercel.app/static/media/halasana.7e7c706873fb7a2c42ce.png',
]

const HeroImage: React.FC = () => {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % overlayImages.length)
        }, 4000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="relative w-80 h-80 overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-40"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            ></div>

            {/* Overlay Changing Image */}
            <div className="absolute inset-0 flex items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={overlayImages[current]}
                        src={overlayImages[current]}
                        alt="Hero Overlay"
                        className="max-w-[80%] max-h-[80%] object-contain rounded-xl shadow-2xl"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 1 }}
                    />
                </AnimatePresence>
            </div>

            {/* Optional: Caption or Control */}
            <div className="absolute bottom-10 w-full flex justify-center gap-2 z-10">
                {overlayImages.map((_, i) => (
                    <div
                        key={i}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${i === current ? 'bg-white' : 'bg-white/30'}`}
                    ></div>
                ))}
            </div>
        </div>
    )
}

export default HeroImage
