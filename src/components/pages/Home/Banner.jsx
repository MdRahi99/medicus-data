import React from 'react';
import banner_video from "../../../assets/banner_video.mp4";
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="relative bg-primary bg-opacity-10 overflow-hidden py-8 md:py-28">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-sky-600 to-secondary opacity-80"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center md:gap-20 justify-between px-4 py-4 md:px-16 mx-auto text-white space-y-10 md:space-y-0">

        {/* Text Section */}
        <div className="md:w-[50%] text-center md:text-left space-y-4 md:space-y-6">
          <h1 className="text-4xl md:text-[3.5rem] font-bold md:font-extrabold leading-tight">
            Automate Doctor Practices for <br /> Unmatched Efficiency
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-xl">
            Empower healthcare professionals by simplifying administrative tasks. Schedule your demo today!
          </p>
          <div className='pt-4'>
            <Link to='/contact' className="px-12 py-3.5 bg-secondary text-white text-lg font-medium rounded-full shadow-sm hover:bg-primary hover:text-white transition duration-300 ease-in-out">
              Book Demo
            </Link>
          </div>
        </div>

        {/* Video Section */}
        <div className="md:w-[50%]">
          <div className="relative w-full aspect-w-16 aspect-h-9 bg-white rounded-lg shadow-lg overflow-hidden">
            <video
              className="w-full h-full object-cover hover:opacity-100 opacity-90 transition-opacity duration-500"
              src={banner_video}
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>
      </div>

      {/* Enhanced Decorative Blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 bg-opacity-40 rounded-full mix-blend-multiply filter blur-2xl opacity-80 animate-blob"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 bg-opacity-50 rounded-full mix-blend-multiply filter blur-3xl opacity-80 animate-blob animation-delay-4000"></div>
    </div>
  );
};

export default Banner;
