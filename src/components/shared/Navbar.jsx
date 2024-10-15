import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { HiMenu } from 'react-icons/hi';
import { RiCloseFill } from "react-icons/ri";
import logo from '../../assets/images/logo.png';
import { routesData } from '../../assets/data/routesData';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const mainRoutes = routesData.filter(route => route.route !== '/contact');
    const contactRoute = routesData.find(route => route.route === '/contact');

    const toggleMenu = () => setIsOpen(!isOpen);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(sectionId);
            if (isOpen) toggleMenu();
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }

            // Determine active section based on scroll position
            const sections = mainRoutes.map(route => document.getElementById(route.route.slice(1)));
            const currentSection = sections.find(section => {
                if (section) {
                    const rect = section.getBoundingClientRect();
                    return rect.top <= 50 && rect.bottom > 50;
                }
                return false;
            });

            if (currentSection) {
                setActiveSection(currentSection.id);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled, mainRoutes]);

    return (
        <nav className={`sticky top-0 z-50 bg-white ${scrolled ? 'shadow-md' : ''}`}>
            <div className='flex items-center justify-between px-4 py-4 md:px-16'>
                <div onClick={() => scrollToSection('home')} className='cursor-pointer'>
                    <img src={logo} alt='Logo' className='w-44 h-6' />
                </div>

                {/* Desktop Menu */}
                <div className='hidden md:flex items-center justify-center gap-16'>
                    {mainRoutes.map((route, index) => (
                        <div key={index} className="relative group">
                            <button
                                onClick={() => scrollToSection(route.route.slice(1))}
                                className={`transition-colors duration-300 ease-in-out truncate font-medium hover:text-primary ${activeSection === route.route.slice(1) ? 'text-primary' : 'text-gray-800'} pb-1 block`}
                            >
                                {route.title}
                            </button>
                            <div
                                className={`absolute bottom-0 left-0 w-full h-0.5 transition-all duration-300 ease-in-out ${activeSection === route.route.slice(1) ? 'bg-primary scale-x-100' : 'bg-primary scale-x-0 group-hover:scale-x-100'}`}
                            />
                        </div>
                    ))}
                </div>

                <button onClick={() => scrollToSection('contact')} className='hidden md:flex items-center justify-end truncate'>
                    {contactRoute && (
                        <div className='flex items-center gap-2 px-8 py-2 rounded-3xl font-medium text-white hover:text-primary bg-primary hover:bg-white border-2 border-white hover:border-primary'>
                            <div>{contactRoute.title}</div>
                        </div>
                    )}
                </button>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center justify-end col-span-2">
                    <button onClick={toggleMenu} className="text-2xl">
                        {isOpen ? <RiCloseFill /> : <HiMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: isOpen ? 0 : '-100%' }}
                transition={{ duration: 0.3 }}
                className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 md:hidden"
            >
                <div className="px-4 py-6 h-full flex flex-col justify-between">
                    <div className="flex flex-col gap-10">
                        <div onClick={() => scrollToSection('home')} className='cursor-pointer'>
                            <img src={logo} alt='Logo' className='h-6 w-auto' />
                        </div>
                        <div>
                            {mainRoutes.map((route, index) => (
                                <div key={index} className="mb-8">
                                    <button
                                        onClick={() => scrollToSection(route.route.slice(1))}
                                        className={`${activeSection === route.route.slice(1) ? 'text-primary' : ''}`}
                                    >
                                        {route.title}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button onClick={() => scrollToSection('contact')}>
                        {contactRoute && (
                            <div className='bg-gradient-to-b from-primary to-secondary hover:bg-gradient-to-b text-white px-4 py-2 rounded-3xl font-medium text-center'>
                                <div>{contactRoute.title}</div>
                            </div>
                        )}
                    </button>
                </div>
            </motion.div>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={toggleMenu}
                />
            )}
        </nav>
    );
};

export default Navbar;