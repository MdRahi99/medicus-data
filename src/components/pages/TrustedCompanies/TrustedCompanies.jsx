import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { companies } from '../../../assets/data/companiesData';

const TrustedCompanies = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      }
    ]
  };

  return (
    <section className="bg-gray-50 py-16 md:py-20 border-b">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-12 md:mb-16">
          Trusted by <span className='text-primary'>150+ Industry</span> Leaders
        </h2>
        <Slider {...settings}>
          {companies?.map((company, index) => (
            <div key={index} className="px-4">
              <div className="h-20 flex items-center justify-center">
                <img 
                  src={company.logo} 
                  alt={`${company.name} logo`} 
                  className="max-h-full max-w-full object-contain transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TrustedCompanies;