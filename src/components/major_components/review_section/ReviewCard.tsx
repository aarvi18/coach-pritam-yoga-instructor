// components/review_section/ReviewCard.tsx
import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

interface ReviewCardProps {
  userPhoto: string;
  userName: string;
  reviewText: string;
  rating: number;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ userPhoto, userName, reviewText, rating }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-gradient-to-br from-orange-100 to-red-50 border border-orange-300 shadow-md hover:shadow-lg rounded-2xl p-6 transition-all duration-300"
    >
      <div className="flex items-center gap-4 mb-4">
        <img
          src={userPhoto}
          alt={userName}
          className="w-14 h-14 rounded-full border-2 border-orange-400 object-cover"
        />
        <div>
          <p className="text-lg font-semibold text-orange-800">{userName}</p>
          <div className="flex items-center">
            {Array.from({ length: rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 text-orange-500 fill-orange-400 mr-0.5" />
            ))}
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-700 leading-relaxed">
        “{reviewText}”
      </p>
    </motion.div>
  );
};

export default ReviewCard;
