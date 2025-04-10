import React from "react";

interface SecondaryButtonProps {
  text: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ text, icon, onClick }) => {
  return (
    <div className="inline-block p-[2px] bg-gradient-to-r from-orange-500 to-red-600 rounded-lg transition-all duration-200 hover:from-red-600 hover:to-orange-500">
      <button
        onClick={onClick}
        className="flex items-center justify-center gap-2 bg-black text-white font-medium py-4 px-4 md:px-6 rounded-lg text-sm md:text-base w-full h-full"
      >
        <span>{text}</span>
        {icon && <span>{icon}</span>}
      </button>
    </div>
  );
};

export default SecondaryButton;
