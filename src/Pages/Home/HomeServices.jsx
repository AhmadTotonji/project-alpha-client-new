import { faBangladeshiTakaSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useServices from '../../Hooks/useServices';

const HomeServices = () => {
    const navigate = useNavigate();
    const { data } = useServices();
    const Services = data && data?.data;
    return (
        <div>
<h3 className="text-center text-3xl md:text-6xl font-bold">Our Services</h3>
            <div className="py-10 w-full flex flex-col md:flex-row justify-between px-10 items-center gap-5 mx-auto">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mx-auto">
                    {
                        Services?.slice(0, 3)?.map(product => (
                            <div key={product?.id} className="bg-[#F3F3F3]  rounded-3xl p-5 rounded-tl-none shadow-lg mx-auto">
                                <div className="bg-base-100 rounded-2xl h-50 w-full mx-auto">
                                    <img className='w-[340px] h-[220px] rounded-xl mx-auto object-cover' src={product?.img} alt="" />
                                </div>
                                <div className="px-5 text-center pt-2 space-y-1">
                                    <h3 className="text-md md:text-xl capitalize font-bold text-neutral">{product?.name}</h3>
                                    <div className="h-16 pt-5">
                                        <p className="text-sm font-semibold text-neutral text-justify">{product?.desc.slice(0, 150)}</p>
                                    </div>
                                    {/* <h3 className="text-md font-bold text-primary">Price: <FontAwesomeIcon icon={faBangladeshiTakaSign} /> {product?.price}/Mo</h3> */}
                                </div>
                            </div>
                        ))
                    }

                </div>

            </div>
            <div className="py-10 w-full flex justify-center items-center">
                <button onClick={() => navigate("/services")} className="bg-primary hover:bg-gradient-to-tr hover:from-primary hover:to-info text-base-100 px-10 font-semibold py-2 rounded-xl rounded-tl-none">View All Services</button>
            </div>
        </div>
    );
};

export default HomeServices;