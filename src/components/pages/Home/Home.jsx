import React from 'react';
import Banner from './Banner';
import Contact from '../Contact/Contact';
import Reviews from '../Reviews/Reviews';
import Products from '../Products/Products';
import FAQ from '../FAQ/FAQ';
import USP from '../USP/USP';

const Home = () => {
    return (
        <div className=''>
            <Banner />
            <Products />
            <USP />
            <Reviews />
            <FAQ />
            <Contact />
        </div>
    );
};

export default Home;