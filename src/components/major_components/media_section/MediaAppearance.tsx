// MediaAppearance.tsx

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MediaAppearance: React.FC = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  const imageWidth = 128; // pixel width of image (w-32 = 128px)

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  return (
    <div className="w-full h-[50%] flex flex-col items-center justify-center bg-white px-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-black">
        Media Appearance
      </h2>

      <div className="overflow-hidden w-full h-40 relative">
        {/* Left gradient */}
        <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10" />
        {/* Right gradient */}
        <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10" />

        {screenWidth > 0 && (
          <motion.div
            className="absolute top-0"
            initial={{ x: screenWidth }}
            animate={{ x: -imageWidth }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/en/b/bb/DDBiharLogo.jpg"
              alt="Media Appearance"
              className="h-full w-22 md:w-32 object-contain"
            />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default MediaAppearance;
