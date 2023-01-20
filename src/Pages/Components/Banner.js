import React from 'react';
import 'react-animated-slider/build/horizontal.css';
import Typed from 'react-typed';



const HomeTopCarousel = () => {


    return (
        <div className='w-full bg-white object-cover mx-auto hello flex justify-center items-center'>
            <div className='flex flex-col md:flex-row gap-2 justify-between items-center py-10 px-2'>

                <div className='w-full md:w-3/6 mx-auto text-left' data-aos="fade-down-right" data-aos-duration="1000">
                    <h3 className="text-5xl lg:text-7xl font-serif font-bold pb-4 lg:pb-8"><span className='text-primary'>Welcome to </span> <br />
                        <Typed className="text-5xl lg:text-7xl font-serif font-bold pb-4 lg:pb-8"
                            strings={['Availbox', 'Availbox', 'Availbox']}
                            typeSpeed={40}
                            backSpeed={50}
                            loop
                        />
                    </h3>
                    <p className='font-bold text-1xl'>Here you can choose your service provider for your home & office.<br /></p>

                </div>

                <div className='w-full md:w-3/6 mx-auto' data-aos="fade-down-left" data-aos-duration="1000">
                    <img className='object-cover' src="https://i.ibb.co/dMCN1FK/timedeposit-01-1.png" alt="deposit img" />
                </div>

            </div>
        </div>
    );
};

export default HomeTopCarousel;