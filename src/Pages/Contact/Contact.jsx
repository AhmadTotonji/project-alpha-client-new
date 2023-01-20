import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhoneFlip, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import SimpleMap from './SimpleMap';
import ContactBanner from './ContactBanner';

const Contact = () => {
    return (
        <>
            <ContactBanner></ContactBanner>

            <div>
                <h1 className='text-center text-5xl font-semibold mt-8'>Contacts</h1>
                <div className='divider w-14 mt-2 bg-cyan-400 h-1 mx-auto'></div>
                <div className='grid md:grid-cols-3 grid-cols-1 mx-auto w-full md:mt-12'>
                    <div className='md:border-r-2 px-3 py-6 flrx justify-center text-center items-center w-full mx-auto'>
                        <FontAwesomeIcon icon={faLocationDot} className="text-cyan-400 text-5xl mb-3" />
                        <p>4321 Dhaka, <br />
                            Bangladesh, 3850</p>
                    </div>
                    <div className='md:border-r-2 text-center px-3 py-6'>
                        <FontAwesomeIcon icon={faPhoneFlip} className="text-cyan-400 text-5xl mb-3" />
                        <p>8 800 2336 7811 <br />
                            8 988 2737 1132</p>
                    </div>
                    <div className='py-6 text-center px-3'>
                        <FontAwesomeIcon icon={faEnvelope} className="text-cyan-400 text-5xl mb-2" />
                        <p>support@hospisearch.com</p>
                    </div>
                </div>
            </div>
            <SimpleMap></SimpleMap>
        </>

    );
};

export default Contact;