// components/yoga_asanas/AsanaGrid.tsx
import React from "react";
import AsanaCard from "./AsanaCard";

const asanas = [
  {
    image: "https://reflexi.vercel.app/static/media/ardha_padmasana.c58d1e3f9fc5b2f0fa01.png",
    name: "Tadasana",
    description: "Improves posture, balance, and calm focus.",
  },
  {
    image: "https://reflexi.vercel.app/static/media/bhujangasana.d8490222779eb44d5a8c.png",
    name: "Vrikshasana",
    description: "Strengthens thighs, calves, ankles, and spine.",
  },
  {
    image: "https://reflexi.vercel.app/static/media/halasana.7e7c706873fb7a2c42ce.png",
    name: "Bhujangasana",
    description: "Boosts flexibility, opens chest and shoulders.",
  },
  {
    image: "https://reflexi.vercel.app/static/media/natarajasana.0d058733372cbf5a96be.png",
    name: "Adho Mukha Svanasana",
    description: "Energizes the body and stretches hamstrings.",
  },
];

const AsanaGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      {asanas.map((asana, idx) => (
        <AsanaCard
          key={idx}
          image={asana.image}
          name={asana.name}
          description={asana.description}
        />
      ))}
    </div>
  );
};

export default AsanaGrid;
