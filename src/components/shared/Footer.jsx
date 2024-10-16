import React from 'react';
import { FiFacebook, FiInstagram, FiYoutube, FiTwitter } from "react-icons/fi";
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const scrollToSection = (sectionId) => {
        // If we're on the home page
        if (location.pathname === '/') {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // If we're on a different route, navigate to home first
            navigate('/', { state: { scrollTo: sectionId } });
        }
    };

    return (
        <footer className="bg-primary text-white">
            <div className="container mx-auto py-8">
                <div className="grid grid-cols-1 gap-12 md:gap-0 md:grid-cols-2 justify-between items-start md:items-center px-4 pb-12 md:px-16">
                    <div className="flex flex-col gap-6">
                        <div>
                            <h1 className='text-white font-semibold text-3xl'>
                                Medicus<span>Data</span>
                            </h1>
                            <p className="text-sm pt-2">Your Trusted Medical Resource</p>
                        </div>
                        <div className="flex space-x-6">
                            <FiFacebook 
                                size={20} 
                                className='hover:text-gray-300 cursor-pointer text-gray-50' 
                                onClick={() => window.open('https://facebook.com', '_blank')}
                            />
                            <FiInstagram 
                                size={20} 
                                className='hover:text-gray-300 cursor-pointer text-gray-50' 
                                onClick={() => window.open('https://instagram.com', '_blank')}
                            />
                            <FiYoutube 
                                size={20} 
                                className='hover:text-gray-300 cursor-pointer text-gray-50' 
                                onClick={() => window.open('https://youtube.com', '_blank')}
                            />
                            <FiTwitter 
                                size={20} 
                                className='hover:text-gray-300 cursor-pointer text-gray-50' 
                                onClick={() => window.open('https://twitter.com', '_blank')}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="font-semibold mb-3">Quick Menu</h3>
                            <ul className="space-y-2 flex flex-col gap-2 text-sm">
                                <li 
                                    onClick={() => scrollToSection('home')} 
                                    className='hover:text-gray-300 cursor-pointer text-gray-50'
                                >
                                    Home
                                </li>
                                <Link 
                                    to="/privacy-policy" 
                                    className='hover:text-gray-300 cursor-pointer text-gray-50'
                                >
                                    Privacy Policy
                                </Link>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-3">Support us</h3>
                            <ul className="space-y-2 flex flex-col gap-2 text-sm">
                                <li 
                                    onClick={() => scrollToSection('faq')} 
                                    className='hover:text-gray-300 cursor-pointer text-gray-50'
                                >
                                    FAQ's
                                </li>
                                <li 
                                    onClick={() => scrollToSection('contact')} 
                                    className='hover:text-gray-300 cursor-pointer text-gray-50'
                                >
                                    Contact
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-3">Contact</h3>
                            <ul className="space-y-2 flex flex-col gap-2 text-sm">
                                <li className='text-gray-50'>+12345678910</li>
                                <li className='text-gray-50'>company@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="text-center text-sm border-t border-gray-400 pt-10">
                    © {new Date().getFullYear()} MedicusData All Rights Reserved
                </div>
            </div>
        </footer>
    );
};

export default Footer;