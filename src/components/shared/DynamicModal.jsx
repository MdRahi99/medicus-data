import React, { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import not_found from "../../assets/images/not_found.jpg";

const DynamicModal = ({ service, onClose }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    console.log(service?.image);


    useEffect(() => {
        setLoading(true)
        if (service) {
            setIsVisible(true);
            setLoading(false)
        }
    }, [service]);

    if (!service) return null;

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(onClose, 300);
    };

    return (
        <div
            className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            onClick={handleClose}
        >
            <div
                className={`bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl transition-all duration-300 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="relative h-full">
                    {/* Close button */}
                    <button
                        onClick={handleClose}
                        className="absolute top-4 right-4 text-primary hover:text-secondary transition-colors duration-300 z-10"
                    >
                        <FaTimes size={24} />
                    </button>

                    {/* Content */}
                    <div className="flex flex-col-reverse gap-4 md:flex-row h-full">
                        {/* Left side - Image */}
                        <div className="md:w-1/2 p-4 md:p-8 overflow-y-auto">
                            <div className="max-w-none flex flex-col gap-4 justify-between h-full">
                                <div className='flex flex-col gap-4'>
                                    <h2 className="text-2xl truncate font-bold text-primary">{service.title}</h2>
                                    <p className="text-gray-600 text-justify mb-6 leading-relaxed h-40 md:max-h-96 overflow-y-auto scrollbar-hide">{service.extendedDescription}</p>
                                </div>
                                <div className="bg-primary p-3 rounded-3xl shadow-inner">
                                    <p className="font-semibold text-center text-white">{service.stat}</p>
                                </div>
                            </div>
                        </div>

                        {/* Right side - Content */}
                        {
                            loading ?
                                <div className='h-full w-full flex items-center justify-center'>
                                    Loading...
                                </div>
                                :
                                <div className="md:w-1/2 h-64 md:h-full my-auto relative overflow-hidden">
                                    <img
                                        src={service?.image ? service?.image : not_found}
                                        alt={service.title}
                                    />
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DynamicModal;