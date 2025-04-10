// components/about_section/StatsGrid.tsx
import React from "react";
import {
  Users,
  Clock,
  MapPin,
  HeartHandshake,
} from "lucide-react";
import StatCard from "./StatCard";

const stats = [
  {
    icon: <Users className="text-orange-500 w-10 h-10" />,
    label: "Total Students",
    value: "400+",
  },
  {
    icon: <Clock className="text-orange-500 w-10 h-10" />,
    label: "Yoga Hours",
    value: "6000+ hrs",
  },
  {
    icon: <MapPin className="text-orange-500 w-10 h-10" />,
    label: "Cities Served",
    value: "25+",
  },
  {
    icon: <HeartHandshake className="text-orange-500 w-10 h-10" />,
    label: "Success Stories",
    value: "1000+",
  },
];

const StatsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map((item, idx) => (
        <StatCard
          key={idx}
          icon={item.icon}
          label={item.label}
          value={item.value}
        />
      ))}
    </div>
  );
};

export default StatsGrid;
