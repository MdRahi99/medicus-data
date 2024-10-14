import React from 'react';
import Banner from './Banner';
import Contact from '../Contact/Contact';
import Reviews from '../Reviews/Reviews';
import Products from '../Products/Products';
import FAQ from '../FAQ/FAQ';

const Home = () => {
    return (
        <div className=''>
            <Banner />
            <Products />
            <Reviews />
            <FAQ />
            <Contact />
        </div>
    );
};

export default Home;