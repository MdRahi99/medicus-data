import React from 'react';
import Banner from './Banner';
import Contact from '../Contact/Contact';
import Reviews from '../Reviews/Reviews';
import Products from '../Products/Products';
import FAQ from '../FAQ/FAQ';
import USP from '../USP/USP';
import TrustedCompanies from '../TrustedCompanies/TrustedCompanies';

const Home = () => {
    return (
        <div className=''>
            <div id="home"><Banner /></div>
            <div id="companies"><TrustedCompanies /></div>
            <div id="products"><Products /></div>
            <div id="reviews"><Reviews /></div>
            <div id="usp"><USP /></div>
            <div id="faq"><FAQ /></div>
            <div id="contact"><Contact /></div>
        </div>
    );
};

export default Home;