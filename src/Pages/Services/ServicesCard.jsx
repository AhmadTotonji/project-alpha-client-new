import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { ServicesData } from '../../Data/ServicesData';
import useServices from '../../Hooks/useServices';

const ServicesCard = () => {
    const navigate = useNavigate();
    const { data } = useServices();

    const Services = data && data?.data;

    return (
        <div className="w-full h-auto my-16">
            <div className="max-w-[1240px] m-auto">
                <div className="text-center">
                    <h2 className="text-3xl capitalize font-bold">
                        The leading global marketplace <br />
                        for hiring people
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 my-14 md:mx-4 sm:mx-4 gap-y-14 ">
                        {
                            Services?.map(service => (
                                <div key={service?.id} className="flex  items-center justify-around sm:flex-col md:flex-row gap-4 lg:gap-0">
                                        <div className="md:w-44 lg:w-72 w-3/4 lg:h-60 md:h-40 h-72 lg:flex-shrink-0 md:flex-shrink-0   bg-transparent cursor-pointer group perspective">
                                            <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 object-contain">
                                                <div className="absolute backface-hidden w-full h-full">
                                                    <div onClick={() => navigate(`/service/${service?.id}`)} className="h-full w-full relative">
                                                        <img
                                                            src={service?.img}
                                                            className="w-full h-full rounded-lg " alt=''
                                                        />
                                                        <div className="w-full h-full absolute top-0 bg-opacity-20 rounded-lg bg-black">
                                                            <img
                                                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/VisualEditor_-_Icon_-_Search-big_-_white.svg/1200px-VisualEditor_-_Icon_-_Search-big_-_white.svg.png"
                                                                alt="dd"
                                                                className="shadow w-1/3 h-1/3 absolute top-[33%] left-[33%] bg-opacity-70 "
                                                            />
                                                            <h1 style={{ fontFamily: "Rajdhani" }} className="text-white shadow-md text-3xl p-5 font-bold font-mono">
                                                                {service?.name}
                                                            </h1>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div onClick={() => navigate(`/service/${service?.id}`)} className="absolute hover:shadow-lg my-rotate-y-180 backface-hidden rounded-lg w-full h-full bg-gray-700 overflow-hidden">
                                                    <div className="h-full w-full relative">
                                                        {/* <img src="https://themes-themegoods.b-cdn.net/coursector/wp-content/uploads/2019/04/creative-business-people-working-on-business-WGCU95A-768x512.jpg"
                                                    className="w-full h-full" alt=''
                                                    /> */}
                                                        <div onClick={() => navigate(`/service/${service?.id}`)} className="w-full h-full p-2 absolute top-0 bg-opacity-30 rounded-lg bg-black flex flex-col space-y-2 items-center justify-center">
                                                            <h1 style={{ fontFamily: "Rajdhani" }} className="text-info text-3xl font-bold font-mono">
                                                                {service?.name}
                                                            </h1>
                                                            <p className="text-sm text-white">{service?.desc}</p>
                                                            <button onClick={() => navigate(`/service/${service?.id}`)} className="btn btn-outline btn-info px-7 ">View all Provider</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="divider w-full md:w-5/6 m-auto opacity-30"></div>
        </div>
    );
};

export default ServicesCard;