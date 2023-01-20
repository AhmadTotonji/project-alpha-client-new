import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import useServices from '../../Hooks/useServices';

const Booking = () => {
    const { id, srvid } = useParams();
    const [totalPrice, setTotalPrice] = useState();
    const [isChecked, setIsChecked] = useState(false);
    const [slct, setSlct] = useState();
    const { data } = useServices();
    const [user] = useAuthState(auth);

    // console.log(data);

    const handleChecked = (event) => {
        if (event.target.checked) {
            setIsChecked(true);
        } else {
            setIsChecked(false);
        }
    };

    const Services = data?.data?.find(s => s?.id === Number(srvid));
    const singleData = Services?.provider?.find(s => s?.id === Number(id));
    // console.log(id, srvid);
    // console.log(Services);
    // console.log(singleData);

    const handleSelectScheme = (e) => {
        const scheme = e.target.value;
        setSlct(scheme);
    };

    // console.log(slct);

    const handleInputValue = (e) => {
        let value = parseInt(e.target.value);

        if (value < 0) {
            alert('value can not be less than 0');
            value = 1;
        } else if (slct === "Hourly") {
            setTotalPrice(value * singleData?.perHour)
        } else if (slct === "Daily") {
            setTotalPrice(value * singleData?.perDay)
        } else if (slct === "Monthly") {
            setTotalPrice(value * singleData?.perMonth)
        }
        else {
            alert("Please Select a Scheme First.")
        }
    };

    // console.log(totalPrice);

    const confirmToPay = (event) => {

        event.preventDefault();

        const info = {
            service_name: singleData?.name,
            service_img: singleData?.img,
            service_desc: Services?.name,
            total_amount: totalPrice,
            cus_name: user?.displayName,
            cus_email: user?.email

        }
        const dta = {
            peoviderName: singleData?.name,
            providerImg: singleData?.img,
            cus_name: user?.displayName,
            cus_email: user?.email,
            cus_phone: event.target.phone.value,
            cus_address: event.target.address.value

        }

        // console.log(dta);

        axios.post(`https://availbox-server.vercel.app/init`, info)
            .then(res => {
                console.log(res);
                if (res?.data) {
                    window.location = res?.data
                }
            })

        axios.post(`https://availbox-server.vercel.app/hire`, dta)
            .then(res => {
                console.log(res);
            })

    };

    return (
        <div className='flex flex-col py-10 gap-7 px-4'>
            <div className='flex flex-col p-2 rounded justify-between align-middle shadow-md px-12 my-auto'>
                <div className="flex flex-col md:flex-row gap-3 w-full md:w-4/5 mx-auto items-center justify-center">
                    <div className="w-full md:w-2/5">
                        <img className='h-28 w-28 rounded-full' src={singleData?.img} alt=" " />
                    </div>
                    <div style={{ fontFamily: "Rajdhani" }} className='my-auto w-full md:w-3/5 text-2xl font-bold flex flex-col gap-2'>
                        <h4 className='text-rose-600 text-2xl md:text-5xl'>{singleData?.name}</h4>
                        <div className="text-start md:text-end py-3">
                            <p><FontAwesomeIcon icon={faDollarSign} /> {singleData?.perHour}/Hour</p>
                            <p><FontAwesomeIcon icon={faDollarSign} /> {singleData?.perDay}/Day</p>
                            <p><FontAwesomeIcon icon={faDollarSign} /> {singleData?.perMonth}/Month</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-3 w-full md:w-4/5 mx-auto items-center justify-center">
                    <div className='w-full md:w-2/6 mx-auto'>
                        <select onChange={handleSelectScheme} className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Selete a Scheme</option>
                            <option>Hourly</option>
                            <option>Daily</option>
                            <option>Monthly</option>
                        </select>
                    </div>
                    <div className='w-full md:w-2/6 mx-auto'>
                        {
                            ((slct === "Hourly") && <input onChange={handleInputValue}
                                onLoad={(e) => e.target.value = 1}
                                placeholder="Enter Total Hour"
                                className='input focus:outline-none input-bordered w-4/5' type="text" name="quantity" id="quantity" />) ||
                            ((slct === "Daily") && <input onChange={handleInputValue}
                                onLoad={(e) => e.target.value = 1}
                                placeholder="Enter Total Day"
                                className='input focus:outline-none input-bordered w-4/5' type="text" name="quantity" id="quantity" />) ||
                            ((slct === "Monthly") && <input onChange={handleInputValue}
                                onLoad={(e) => e.target.value = 1}
                                placeholder="Enter Total Month"
                                className='input focus:outline-none input-bordered w-4/5' type="text" name="quantity" id="quantity" />)
                        }
                    </div>
                    <div className='w-full md:w-2/6 mx-auto'>
                        <h4 style={{ fontFamily: "Rajdhani" }} className='text-cyan-500 text-xl font-bold'> <span className="font-bold">Total: </span> <FontAwesomeIcon icon={faDollarSign} /> {totalPrice ? totalPrice : 0.00}</h4>
                    </div>
                </div>
            </div>
            <div className='w-full mx-auto'>
                <div className="card w-full md:w-3/5 mx-auto bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-3xl font-bold">Checkout</h2>
                        <p className='font-semibold text-xl'>Shipping</p>
                        <div className="">
                            <div className="border bg-white px-5 col-span-2  shadow-sm py-5">
                                <h2 className="py-5 text-3xl text-black text-opacity-75">
                                    Personal Information
                                </h2>
                                <form onSubmit={confirmToPay}>
                                    <div className=" grid md:grid-cols-2 grid-cols-1 justify-items-stretch  gap-5  ">
                                        <div className='mt-3'>
                                            <label className="relative cursor-pointer">
                                                <input
                                                    type="text"
                                                    value={user?.displayName}
                                                    placeholder="Input"
                                                    className="h-[50px] bg-[#f3f3f3] rounded w-full px-6 text-md border outline-none focus:border-gray-700 focus:border-opacity-60 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                                                    name="username"
                                                />
                                                <span className=" text-sm bg-transparent te text-opacity-80 absolute left-0 px-2 top-[-37px] transition duration-200 input-text">
                                                    User Name
                                                </span>
                                            </label>
                                        </div>
                                        <div className='mt-3'>
                                            <label className="relative cursor-pointer">
                                                <input
                                                    type="email"
                                                    value={user?.email}
                                                    placeholder="Input"
                                                    className="h-[50px]  bg-[#f3f3f3] w-full px-6 text-md border rounded outline-none focus:border-gray-700 focus:border-opacity-60 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                                                    name="email"
                                                />
                                                <span className=" text-sm bg-transparent te text-opacity-80 absolute left-0 px-2 top-[-37px] transition duration-200 input-text">
                                                    Email
                                                </span>
                                            </label>
                                        </div>
                                        <div className='mt-3'>
                                            <label className="relative cursor-pointer">
                                                <input
                                                    type="text"
                                                    value={singleData?.name}
                                                    placeholder="Input"
                                                    className="h-[50px]  bg-[#f3f3f3] w-full px-6 text-md border rounded outline-none focus:border-gray-700 focus:border-opacity-60 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                                                    name="name"
                                                />
                                                <span className=" text-sm bg-transparent te text-opacity-80 absolute left-0 px-2 top-[-37px] transition duration-200 input-text">
                                                    Service Name
                                                </span>
                                            </label>
                                        </div>
                                        <div className='mt-3'>
                                            <label className="relative cursor-pointer">
                                                <input
                                                    type="text"
                                                    value={totalPrice ? totalPrice : 0.00}
                                                    placeholder="Input"
                                                    className="h-[50px]  bg-[#f3f3f3] w-full px-6 text-md border rounded outline-none focus:border-gray-700 focus:border-opacity-60 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                                                    name="price"
                                                />
                                                <span className=" text-sm bg-transparent te text-opacity-80 absolute left-0 px-2 top-[-37px] transition duration-200 input-text">
                                                    Service Price
                                                </span>
                                            </label>
                                        </div>
                                        <div className='mt-3'>
                                            <label className="relative cursor-pointer">
                                                <input
                                                    type="text"
                                                    placeholder="Enter Your Contact Number"
                                                    required
                                                    className="h-[50px]  bg-[#f3f3f3] w-full px-6 text-md border rounded outline-none focus:border-gray-700 focus:border-opacity-60 placeholder-gray-400 placeholder-opacity-1 transition duration-200"
                                                    name="phone"
                                                />
                                                <span className=" text-sm bg-transparent te text-opacity-80 absolute left-0 px-2 top-[-37px] transition duration-200 input-text">
                                                    Contact Number
                                                </span>
                                            </label>
                                        </div>
                                        <div className='mt-3'>
                                            <label className="relative cursor-pointer">
                                                <input
                                                    type="text"
                                                    placeholder="Enter Your Address"
                                                    required
                                                    className="h-[50px]  bg-[#f3f3f3] w-full px-6 text-md border rounded outline-none focus:border-gray-700 focus:border-opacity-60 placeholder-gray-400 placeholder-opacity-1 transition duration-200"
                                                    name="address"
                                                />
                                                <span className=" text-sm bg-transparent te text-opacity-80 absolute left-0 px-2 top-[-37px] transition duration-200 input-text">
                                                    Address
                                                </span>
                                            </label>
                                        </div>

                                    </div>
                                    <div>
                                    </div>
                                    <div>

                                        <div className="py-3">
                                            <hr />
                                        </div>
                                        <div className="">
                                            <p className="">You have to pay <span className="font-bold">50%</span> or you can pay the full Payment.</p>
                                        </div>
                                        <div className="py-4">
                                            <input
                                                type="checkbox"
                                                name=""
                                                onChange={handleChecked}
                                                id=""
                                                className="checkbox checkbox-sm border-2 checkbox-success"
                                            />
                                            <span className="ml-2">
                                                I have read and accepted{" "}
                                                <a href="!#" className="text-[#009DA6] font-semibold font-sans">
                                                    Terms & Conditions
                                                </a>
                                            </span>
                                        </div>
                                        <div>
                                            <input
                                                type="submit"
                                                disabled={!isChecked}
                                                className="btn text-white bg-[#009DA6] hover:bg-[#007bff]"
                                                value="Confirm and Pay"
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;