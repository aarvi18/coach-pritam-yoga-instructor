import React from "react";

interface MainButtonProps {
    text: string;
    icon?: React.ReactNode;
    onClick?: () => void;
}

const MainButton: React.FC<MainButtonProps> = ({ text, icon, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-semibold py-4 px-4 md:px-6 rounded-lg text-sm md:text-base transition-all duration-200"

        >
            <span>{text}</span>
            {icon && <span>{icon}</span>}
        </button>
    );
};

export default MainButton;
