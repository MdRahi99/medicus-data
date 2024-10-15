import React from 'react';
import Navbar from '../components/shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/shared/Footer';
import BackToTopButton from '../components/shared/BackToTopButton ';

const Main = () => {
    return (
        <div className='max-w-[2000px] mx-auto'>
            <BackToTopButton />
            <Navbar />
            <main className=''>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Main;