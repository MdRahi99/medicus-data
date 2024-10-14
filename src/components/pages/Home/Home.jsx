import React from 'react';
import Banner from './Banner';
import Contact from '../Contact/Contact';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div className=''>
            <Banner />
            <Reviews />
            <Contact />
        </div>
    );
};

export default Home;