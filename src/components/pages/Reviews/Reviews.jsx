import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { reviewsData } from '../../../assets/data/reviewsData';

const Reviews = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            setCurrentIndex(0);
        };

        handleResize(); 
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const reviewsPerPage = isMobile ? 1 : 3;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            Math.min(prevIndex + reviewsPerPage, reviewsData.length - reviewsPerPage)
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - reviewsPerPage, 0));
    };

    const isFirstSlide = currentIndex === 0;
    const isLastSlide = currentIndex + reviewsPerPage >= reviewsData.length;

    if (reviewsData.length === 0) {
        return <p className="text-center text-gray-500">No reviews available yet.</p>;
    }

    const ReviewCard = ({ review }) => (
        <div className="bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-200 p-8">
            <div className="flex items-center mb-4">
                <img src={review.image} alt={review.name} className="w-12 h-12 object-cover rounded-full mr-4" />
                <div>
                    <h3 className="text-lg font-semibold text-gray-800">{review.name}</h3>
                    <p className="text-sm text-gray-500">{review.role}</p>
                </div>
            </div>
            <p className="text-gray-600 mb-4">{review.review}</p>
            <div className="flex items-center">
                <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={i < Math.floor(review.rating) ? 'text-yellow-500' : 'text-gray-300'} />
                    ))}
                </div>
                <span className="ml-2 text-gray-800 font-semibold">{review.rating}</span>
            </div>
        </div>
    );

    const visibleReviews = reviewsData.slice(currentIndex, currentIndex + reviewsPerPage);

    return (
        <div className="px-4 py-12 md:px-16 md:py-20 bg-white">
            <div className="text-center pb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                    Customer <span className="text-primary">Reviews</span> and <span className="text-primary">Testimonials</span>
                </h2>
                <p className="text-gray-500">Hear what our clients have to say about their experience with our healthcare management solutions</p>
            </div>

            <div className="relative overflow-hidden">
                <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-3'} gap-4 md:gap-8`}>
                    {visibleReviews.map((review) => (
                        <ReviewCard key={review.id} review={review} />
                    ))}
                </div>
            </div>

            <div className="flex justify-center items-center mt-10">
                <button
                    className={`mr-4 bg-primary text-white p-3 rounded-full transition-colors ${
                        isFirstSlide ? 'opacity-50 cursor-not-allowed' : 'hover:bg-secondary'
                    }`}
                    onClick={prevSlide}
                    disabled={isFirstSlide}
                    aria-label="Previous Reviews"
                >
                    <FaArrowLeft size={20} />
                </button>
                <button
                    className={`bg-primary text-white p-3 rounded-full transition-colors ${
                        isLastSlide ? 'opacity-50 cursor-not-allowed' : 'hover:bg-secondary'
                    }`}
                    onClick={nextSlide}
                    disabled={isLastSlide}
                    aria-label="Next Reviews"
                >
                    <FaArrowRight size={20} />
                </button>
            </div>
        </div>
    );
};

export default Reviews;