import React, { useState } from 'react';
import { usps } from '../../../assets/data/uspData';
import DynamicModal from '../../shared/DynamicModal';

const USPCard = ({ icon: Icon, title, shape, onSeeMore }) => {
  return (
    <div
      className="flex flex-col items-center p-6 rounded-lg w-full border md:border-0 md:w-1/4 transition-all duration-300 hover:shadow-lg relative overflow-hidden bg-white group h-64"
    >
      <div className={`absolute ${shape} opacity-10 transition-all duration-300 group-hover:scale-110`}></div>
      <Icon className="w-16 h-16 text-primary mb-6 relative z-10 transition-all duration-300 group-hover:scale-110" />
      <h3 className="text-lg font-semibold text-primary mb-4 text-center relative z-10">{title}</h3>
      <button
        onClick={onSeeMore}
        className="mt-auto px-6 py-2 bg-primary text-white rounded-full transition-all duration-300 hover:bg-secondary focus:outline-none"
      >
        See More  
      </button>
    </div>
  ); 
};

const USP = () => {
  const [selectedUSP, setSelectedUSP] = useState(null);

  const handleSeeMore = (usp) => {
    setSelectedUSP(usp);
  };

  const closeModal = () => {
    setSelectedUSP(null);
  };

  return (
    <div className="py-16 md:py-24 px-4 md:px-16 bg-gradient-to-b from-white to-gray-100">
      <div className="">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">
          Why <span className='text-primary'>Choose</span> Us?
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Experience unparalleled service with our cutting-edge solutions designed to streamline your workflow and ensure compliance.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {usps.map((usp, index) => (
            <USPCard 
              key={index} 
              {...usp} 
              onSeeMore={() => handleSeeMore(usp)}
            />
          ))}
        </div>

        <DynamicModal
          service={selectedUSP}
          onClose={closeModal}
        />
      </div>
    </div>
  );
};

export default USP;