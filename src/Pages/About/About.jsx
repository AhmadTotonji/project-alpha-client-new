import React from 'react';
import Banner from '../Components/Banner';
import Review from '../Components/Review';
import AboutInfo from './AboutInfo';
import AboutMission from './AboutMission';
import AboutusBanner from './AboutusBanner';

const About = () => {
    return (
        <div className='w-full h-full'>
            <AboutusBanner></AboutusBanner>
            <AboutMission />
            <AboutInfo></AboutInfo>
            <Review></Review>

        </div>
    );
};

export default About;