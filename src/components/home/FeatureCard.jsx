
import React from 'react';

const FeatureCard = ({ icon, title, desc }) => (
  <div className="flex flex-col items-center text-center">
    <div className="bg-[#F7ECFF] rounded-full w-48 h-48 flex items-center justify-center shadow-md mb-6">
      <img src={icon} alt={title} className="w-28 h-28 object-contain" />
    </div>
    <h2 className="text-lg font-semibold mb-2">{title}</h2>
    <p className="text-sm text-gray-600">{desc}</p>
  </div>
);

export default FeatureCard;
