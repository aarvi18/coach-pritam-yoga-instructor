// components/review_section/ReviewGrid.tsx
import React from "react";
import ReviewCard from "./ReviewCard";

const reviews = [
  {
    userPhoto: "https://randomuser.me/api/portraits/women/44.jpg",
    userName: "Ananya Sharma",
    reviewText: "Joining this yoga studio has been life-changing! The instructors are amazing and the sessions are always refreshing.",
    rating: 5,
  },
  {
    userPhoto: "https://randomuser.me/api/portraits/men/32.jpg",
    userName: "Rohit Mehra",
    reviewText: "Best place for yoga in the city. Great vibes, great people, and very professional guidance.",
    rating: 4,
  },
  {
    userPhoto: "https://randomuser.me/api/portraits/women/68.jpg",
    userName: "Megha Kapoor",
    reviewText: "The yoga routines helped me get fit and manage stress better. Highly recommend this place!",
    rating: 5,
  },
  {
    userPhoto: "https://randomuser.me/api/portraits/men/75.jpg",
    userName: "Aditya Singh",
    reviewText: "Wonderful experience. The online sessions are as good as offline ones!",
    rating: 4,
  },
];

const ReviewGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      {reviews.map((review, index) => (
        <ReviewCard key={index} {...review} />
      ))}
    </div>
  );
};

export default ReviewGrid;
