import React from 'react';
import Marquee from 'react-fast-marquee';
import { usps } from '../../../assets/data/uspData';

const USPCard = ({ icon: Icon, text, color, shape }) => (
  <div className={`flex flex-col items-center p-6 rounded-lg w-72 mx-4 transition-all duration-300 hover:shadow-xl hover:shadow-white hover:-translate-y-2 relative overflow-hidden ${color}`}>
    <div className={`absolute ${shape} opacity-10`}></div>
    <Icon className="w-12 h-12 text-white mb-4 relative z-10" />
    <h3 className="text-lg font-semibold text-white mb-2 text-center relative z-10">{text}</h3>
  </div>
);

const USPSection = () => {

  return (
    <div className="py-12 md:py-16 px-4 md:px-16 bg-white">
      <div>
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Why Choose Us?</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Experience unparalleled service with our cutting-edge solutions designed to streamline your workflow and ensure compliance.
        </p>
        
        <Marquee gradient={false} speed={40}>
          <div className="flex space-x-4 md:space-x-10 py-4">
            {usps?.map((usp, index) => (
              <USPCard key={index} {...usp} />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default USPSection;