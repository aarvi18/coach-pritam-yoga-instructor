import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
    return (
        <div
            className="relative w-full h-screen bg-cover bg-center"
            style={{
                backgroundImage: "url('https://images6.alphacoders.com/126/1263719.jpg')", // Ensure this image is in your public folder
            }}
        >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-white/10"></div>

            {/* Content */}
            <div className="relative z-10 flex items-center justify-start h-full px-6 md:px-16">
                <motion.div
                    className="text-white max-w-xl"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <motion.h1
                        className="text-4xl md:text-6xl font-extrabold mb-4"
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        Transform Your Body & Mind
                    </motion.h1>

                    <motion.p
                        className="text-sm md:text-sm text-gray-300 mb-8"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        Join me on a holistic journey to better health.
                        With over 10 years of experience and more than 1,000 lives transformed, I offer personalized yoga and wellness coaching that blends yoga, nutrition, and mindset. My approach empowers you to grow physically, mentally, and spiritually — all through one balanced, transformative path.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 1 }}
                    >
                        <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-300">
                            Explore
                        </button>
                        <button className="border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white font-semibold py-3 px-6 rounded-xl transition duration-300">
                            Book Now
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default HeroSection;
