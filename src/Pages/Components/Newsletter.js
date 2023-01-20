import React from 'react';
import { useNavigate } from 'react-router';
import "./Newsletter.css";
const Newsletter = () => {
    const navigate = useNavigate();
    return (
        <div className="container py-10 px-5 w-full mx-auto">
        <div className="border flex flex-col md:flex-row gap-3 mx-auto w-full border-dotted rounded space-y-2 bg-[#fffff] border-[#06b6d4] py-10 p-7">
            <div className="mx-auto">
                <img draggable="false" src="https://i.ibb.co/dft5PJJ/Whats-App-Image-2022-12-29-at-8-22-48-PM-1.jpg" alt="" className="object-cover rounded-xl" />
            </div>
            <div className="w-full mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold fw-bold text-center capitalize" style={{ fontFamily: "Rajdhani" }}>A WEBBASE EMERGENCY HOUSEHOLD SERVICE PLATFORM</h1>
                <p className="text-gray-400 text-center pt-5 mb-5">Anyone can easily get and hire worker. Workers like "Electricians, Cookers, Babysitters, Plumbers, House cleaner, Carpenter, Maidservant etc. Anyone can easily pay the bill through Online or in cash.</p>
                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-2xl font-bold mb-5 mr-5">Want to Join? Click Join US Button </h2> <br />
                    <button onClick={() => navigate("/joinus")} type="button" className="bg-primary text-white px-7 text-md font-semibold py-4 rounded">Join US</button>
                </div>

            </div>
        </div>
    </div>
    );
};

export default Newsletter;
