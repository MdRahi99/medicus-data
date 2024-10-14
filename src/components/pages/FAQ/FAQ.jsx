import React, { useState, useRef, useEffect } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import { faqData } from '../../../assets/data/faqData';
import { Link } from 'react-router-dom';

const FAQItem = ({ question, answer, isOpen, onClick, index, isLast }) => {
    const contentRef = useRef(null);
    const [contentHeight, setContentHeight] = useState(0);

    useEffect(() => {
        if (isOpen) {
            const height = contentRef.current.scrollHeight;
            setContentHeight(height);
        } else {
            setContentHeight(0);
        }
    }, [isOpen]);

    return (
        <div
            className={`transition-all duration-300 ease-in-out ${isOpen ? 'bg-primary bg-opacity-80 shadow-lg rounded-2xl p-4' : 'bg-white'
                } ${!isLast ? 'border-b md:border-b-0 border-gray-200' : ''}`}
        >
            <button
                className={`flex justify-between items-center w-full text-left focus:outline-none py-3 md:py-4 md:px-6 ${isOpen ? '' : 'rounded-2xl transition-colors duration-200'
                    }`}
                onClick={() => onClick(index)}
            >
                <span className={`text-lg font-medium ${isOpen ? 'text-white' : 'text-gray-800 hover:text-primary'}`}>
                    {question}
                </span>
                <span className={`ml-6 flex-shrink-0 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : ''}`}>
                    <HiChevronDown className={`h-6 w-6 ${isOpen ? 'text-white' : 'text-gray-800'}`} />
                </span>
            </button>
            <div
                ref={contentRef}
                style={{ maxHeight: `${contentHeight}px` }}
                className="overflow-hidden transition-all duration-300 ease-in-out"
            >
                <div className="md:px-6 pb-5">
                    <p className={`text-base ${isOpen ? 'text-gray-100' : 'text-gray-600'}`}>{answer}</p>
                </div>
            </div>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(-1);

    const handleClick = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <div className="overflow-hidden px-4 py-8 md:py-16">
            <div className="relative max-w-3xl mx-auto">
                <svg
                    className="absolute left-full transform translate-x-1/2"
                    width="404"
                    height="404"
                    fill="none"
                    viewBox="0 0 404 404"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="85737c0e-0916-41d7-917f-596dc7edfa27"
                            x="0"
                            y="0"
                            width="20"
                            height="20"
                            patternUnits="userSpaceOnUse"
                        >
                            <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
                </svg>
                <svg
                    className="absolute right-full bottom-0 transform -translate-x-1/2"
                    width="404"
                    height="404"
                    fill="none"
                    viewBox="0 0 404 404"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="85737c0e-0916-41d7-917f-596dc7edfa27"
                            x="0"
                            y="0"
                            width="20"
                            height="20"
                            patternUnits="userSpaceOnUse"
                        >
                            <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
                </svg>
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold md:font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-4">
                        Frequently Asked <span className='text-primary'>Questions</span>
                    </h2>
                    <p className="text-xl leading-7 text-gray-500">
                        Can't find the answer you're looking for?{' '}
                        <Link to="/contact" className="font-medium text-primary hover:text-secondary transition-colors duration-200">
                            Contact our support team
                        </Link>
                    </p>
                </div>
                <div className="space-y-2 md:space-y-4 md:h-96 overflow-y-auto scrollbar-hide">
                    {faqData?.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={handleClick}
                            index={index}
                            isLast={index === faqData.length - 1}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;