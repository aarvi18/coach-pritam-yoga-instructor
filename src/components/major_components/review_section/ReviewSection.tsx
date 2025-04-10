// components/review_section/ReviewSection.tsx
import React from "react";
import ReviewGrid from "./ReviewGrid";

const ReviewSection: React.FC = () => {
  return (
    <section className="w-full px-4 py-16 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          What Our Students Say
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Real stories from real people who have experienced transformation through our yoga programs.
        </p>

        <ReviewGrid />
      </div>
    </section>
  );
};

export default ReviewSection;
