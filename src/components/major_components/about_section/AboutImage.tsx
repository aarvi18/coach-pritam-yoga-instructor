// components/AboutImage.tsx
import React from "react";
import { motion } from "framer-motion";

const AboutImage: React.FC = () => {
    return (
        <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full h-64 md:h-auto rounded-2xl overflow-hidden shadow-lg"
        >
            <img
                src="https://t4.ftcdn.net/jpg/04/27/89/33/360_F_427893301_xtXnK0FtbJrgmIZlKuZzV6zIETUlZD9M.jpg"
                alt="Yoga Pose"
                className="object-cover w-full h-full"
            />
        </motion.div>
    );
};

export default AboutImage;
