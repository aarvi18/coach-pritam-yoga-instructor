// components/yoga_asanas/AsanaCard.tsx
import React from "react";

interface AsanaCardProps {
  image: string;
  name: string;
  description: string;
}

const AsanaCard: React.FC<AsanaCardProps> = ({ image, name, description }) => {
  return (
    <div className="overflow-hidden transition-all duration-300">
      <img src={image} alt={name} className="w-60 h-60 m-auto object-cover p-3" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default AsanaCard;
