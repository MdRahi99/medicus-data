import React from 'react';
import { GrLocation } from "react-icons/gr";
import { MdOutlineMailOutline } from "react-icons/md";
import { useForm } from 'react-hook-form';

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="px-4 md:px-16 bg-gray-50">
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center justify-between py-8 md:py-16">
                
                {/* Info Section */}
                <div className="w-full md:w-[45%] flex flex-col gap-8">
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-snug">
                        Ready to <span className="text-primary">Collaborate</span> <br />with us?
                    </h1>
                    <div className="flex flex-col gap-8">
                        {/* Location */}
                        <div className="flex items-center gap-4">
                            <GrLocation className="p-2 text-4xl bg-white rounded-full border-2 border-primary text-primary" />
                            <p className="text-lg leading-relaxed text-gray-700">
                                2345, Studhaldenstrasse 75, <br /> Les Breuleux, Switzerland
                            </p>
                        </div>

                        {/* Email */}
                        <div className="flex items-center gap-4">
                            <MdOutlineMailOutline className="p-2 text-4xl bg-white rounded-full border-2 border-primary text-primary" />
                            <p className="text-lg leading-relaxed text-gray-700">company@gmail.com</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form Section */}
                <div className="w-full md:w-[50%] md:bg-white rounded-lg md:shadow-md md:p-8">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                        
                        {/* Name Field */}
                        <div className="flex flex-col">
                            <label className="text-base font-semibold mb-2 text-gray-700" htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                {...register('name', { required: 'Name is required' })}
                                className={`p-3 rounded-lg border focus:outline-none focus:border-primary ${
                                    errors.name ? 'border-red-500' : 'border-gray-300'
                                }`}
                                placeholder="Enter your name"
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                        </div>

                        {/* Email Field */}
                        <div className="flex flex-col">
                            <label className="text-base font-semibold mb-2 text-gray-700" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                {...register('email', { 
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                        message: 'Please enter a valid email address',
                                    },
                                })}
                                className={`p-3 rounded-lg border focus:outline-none focus:border-primary ${
                                    errors.email ? 'border-red-500' : 'border-gray-300'
                                }`}
                                placeholder="Enter your email"
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                        </div>

                        {/* Message Field */}
                        <div className="flex flex-col">
                            <label className="text-base font-semibold mb-2 text-gray-700" htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                rows="6"
                                {...register('message', { required: 'Message is required' })}
                                className={`p-3 rounded-lg border focus:outline-none focus:border-primary ${
                                    errors.message ? 'border-red-500' : 'border-gray-300'
                                }`}
                                placeholder="Type your message"
                            ></textarea>
                            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="px-6 py-3 mt-4 truncate bg-gradient-to-r from-primary to-secondary text-white rounded-3xl shadow-md hover:bg-gradient-to-l transition duration-300 ease-in-out w-full md:w-1/3 text-lg font-semibold">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
