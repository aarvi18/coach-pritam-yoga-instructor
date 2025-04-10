// components/about_section/AboutSection.tsx
import React from "react";
import AboutImage from "./AboutImage";
import { motion } from "framer-motion";
import StatsGrid from "./StatsGrid";

export const AboutSection: React.FC = () => {
    return (
        <section className="w-[90%] md:w-[95%] m-auto px-4 py-4 md:py-5 bg-white rounded-3xl">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
                {/* Left Side - Image */}
                <div className="w-full md:w-1/2">
                    <AboutImage />
                </div>

                {/* Right Side - Content */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-1/2"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Discover the Power of Yoga
                    </h2>
                    <p className="text-gray-600 mb-6 text-md">
                        We bring a holistic yoga experience that connects the mind, body, and soul.
                        Guided by experienced instructors, our sessions are tailored for your personal journey.
                    </p>

                    <StatsGrid />
                </motion.div>
            </div>
        </section>
    );
};
