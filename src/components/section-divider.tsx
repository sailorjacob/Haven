import React from 'react';

const SectionDivider: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center pt-2 pb-8">
      <div className="absolute left-0 w-1/3 h-px bg-gradient-to-r from-transparent to-gray-300"></div>
      <div className="mx-4">
        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
      </div>
      <div className="absolute right-0 w-1/3 h-px bg-gradient-to-l from-transparent to-gray-300"></div>
    </div>
  );
};

export default SectionDivider; 