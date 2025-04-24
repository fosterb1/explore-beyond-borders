
import React from 'react';

interface ExperienceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const ExperienceCard = ({ icon, title, description, color }: ExperienceCardProps) => {
  return (
    <div className="card-hover bg-white rounded-xl p-6 shadow">
      <div className={`w-14 h-14 rounded-full mb-6 flex items-center justify-center ${color}`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  );
};

export default ExperienceCard;
