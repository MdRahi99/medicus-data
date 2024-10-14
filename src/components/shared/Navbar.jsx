import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { HiMenu } from 'react-icons/hi';
import { RiCloseFill } from "react-icons/ri";
import logo from '../../assets/images/logo.png';
import { routesData } from '../../assets/data/routesData';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const pathname = location.pathname;
    const mainRoutes = routesData.filter(route => route.route !== '/contact');
    const contactRoute = routesData.find(route => route.route === '/contact');

    const toggleMenu = () => setIsOpen(!isOpen);

    const isActiveRoute = (route) => {
        return pathname === route;
    };

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <nav className={`sticky top-0 z-50 bg-white ${scrolled ? 'shadow-md' : ''}`}>
            <div className='flex items-center justify-between px-4 py-4 md:px-16'>
                <Link to="/" className=''>
                    <img
                        src={logo}
                        alt='Logo'
                        className='w-44 h-6'
                    />
                </Link>

                {/* Desktop Menu */}
                <div className='hidden md:flex items-center justify-center gap-16'>
                    {mainRoutes.map((route, index) => (
                        <div key={index} className="relative group">
                            <Link
                                to={route.route}
                                className={`transition-colors duration-300 ease-in-out truncate font-medium hover:text-primary ${isActiveRoute(route.route) ? 'text-primary' : 'text-gray-800'} pb-1 block`}>
                                {route.title}
                            </Link>
                            <div
                                className={`absolute bottom-0 left-0 w-full h-0.5 transition-all duration-300 ease-in-out ${isActiveRoute(route.route) ? 'bg-primary scale-x-100' : 'bg-primary scale-x-0 group-hover:scale-x-100'}`} />
                        </div>
                    ))}
                </div>

                <Link to={contactRoute.route} className='hidden md:flex items-center justify-end truncate'>
                    {contactRoute && (
                        <div className='flex items-center gap-2 px-8 py-2 rounded-3xl font-medium text-white hover:text-primary bg-primary hover:bg-white border-2 border-white hover:border-primary'>
                            <div>{contactRoute.title}</div>
                        </div>
                    )}
                </Link>

                {/* Mobile Menu Button */}
                {!isOpen ? (
                    <div className="md:hidden flex items-center justify-end col-span-2">
                        <button onClick={toggleMenu} className="text-2xl">
                            <HiMenu />
                        </button>
                    </div>
                ) : (
                    <div className="md:hidden flex items-center justify-end col-span-2">
                        <button onClick={toggleMenu} className="text-2xl">
                            <RiCloseFill />
                        </button>
                    </div>
                )}
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
                        <Link to="/">
                            <img
                                src={logo}
                                alt='Logo'
                                className='h-6 w-auto'
                            />
                        </Link>
                        <div>
                            {mainRoutes.map((route, index) => (
                                <div key={index} className="mb-8">
                                    <Link
                                        to={route.route}
                                        onClick={toggleMenu}
                                        className={`${isActiveRoute(route.route) ? 'text-primary' : ''}`}
                                    >
                                        {route.title}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Link to={contactRoute.route}>
                        {contactRoute && (
                            <div className='bg-gradient-to-b from-primary to-secondary hover:bg-gradient-to-b text-white px-4 py-2 rounded-3xl font-medium text-center'>
                                <div to={contactRoute.route} onClick={toggleMenu}>{contactRoute.title}</div>
                            </div>
                        )}
                    </Link>
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