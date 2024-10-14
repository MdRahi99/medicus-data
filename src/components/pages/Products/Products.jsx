import React from 'react';
import { services } from '../../../assets/data/servicesData';

const Products = () => {
    return (
        <div className='px-4 py-16 md:px-16 md:py-24 bg-gray-50'>
            <div className="">
                <h2 className='text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4'>
                    Innovative Solutions for <span className='text-primary'>Medical Practices</span>
                </h2>
                <p className='text-xl text-center text-gray-600 mb-12'>
                    Empower your medical services with cutting-edge automation
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                    {services?.map((service, index) => (
                        <div key={index} className="bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-200">
                            <div className="p-8">
                                <div className="flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-6">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                                <p className="text-gray-600 mb-6">{service.description}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium text-primary">{service.stat}</span>
                                    <button className="bg-primary truncate text-white px-6 py-2 rounded-3xl hover:bg-secondary transition-colors duration-300 focus:outline-none">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;