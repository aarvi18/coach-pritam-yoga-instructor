// components/about_section/StatCard.tsx
import React from "react";
import { motion } from "framer-motion";

interface StatCardProps {
    icon: React.ReactNode;
    label: string;
    value: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, label, value }) => {
    return (
        <motion.div
            className="flex items-center gap-3 p-4 rounded-xl transition-all duration-300"
        >
            <div>{icon}</div>
            <div>
                <p className="text-xl font-semibold text-gray-800">{value}</p>
                <p className="text-sm text-gray-500">{label}</p>
            </div>
        </motion.div>
    );
};

export default StatCard;
