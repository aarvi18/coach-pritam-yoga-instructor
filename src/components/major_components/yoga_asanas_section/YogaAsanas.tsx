// components/yoga_asanas/YogaAsanas.tsx
import React from "react";
import AsanaGrid from "./AsanaGrid";

const YogaAsanas: React.FC = () => {
  return (
    <section className="w-full px-4 py-16 bg-gray-50 mt-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          Popular Yoga Asanas
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Explore our curated list of beginner-friendly yoga poses to help you
          find balance and harmony.
        </p>

        <AsanaGrid />
      </div>
    </section>
  );
};

export default YogaAsanas;
