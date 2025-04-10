import React from "react";
import { motion } from "framer-motion";
import { Founder } from "../../../assets";

// Replace this with actual image path or import

export const FounderSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Founder Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <img
            src={Founder}
            alt="Coach Pritam"
            className="w-full h-auto rounded-2xl shadow-xl border-4 border-orange-200"
          />
        </motion.div>

        {/* Founder Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-4">
            Meet Coach Pritam
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed text-base md:text-lg">
            With over <span className="font-semibold text-orange-600">10 years of experience</span> in yoga,
            Coach Pritam has transformed the lives of <span className="font-semibold text-orange-600">1,000+ students</span>.
            His holistic approach, combining yoga, nutrition, and mindset coaching, creates lasting impact.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
            Having conducted over <span className="font-semibold text-orange-600">6,000+ hours</span> of training sessions,
            he’s one of the most trusted names in the wellness space. His journey from a passionate learner to a
            mentor has inspired many.
          </p>

          {/* Motivational Quote */}
          <blockquote className="border-l-4 border-orange-500 pl-4 italic text-orange-700 text-lg font-medium">
            "Yoga is the journey of the self, through the self, to the self."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};
