import React from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceDetails = ({data, id}) => {
    const navigate = useNavigate();

    console.log(data?.data);
    console.log(`ID is ${id}`);
    const providor = data;
    const ratings = providor?.rating;

    return (
        <div data-aos="fade-up" class="card w-full bg-white hover:shadow-lg m-auto shadow-lg">
            <figure className='p-5 rounded-2xl border-dotted border-indigo-500 border-2'>
                <img className='h-fit w-2/3 rounded-xl hover:shadow-lg hover:shadow-gray-700 duration-200 object-cover' src={providor?.img} alt="Images" />
            </figure>
            <div class="card-body flex justify-start items-center">
                <h2 class="font-bold text-2xl text-center"> {providor?.name}</h2>
                <h3 className="text-center mb-2"><span className="font-bold text-gray-500">ID: </span>{providor?.idNo}</h3>
                <h3 className="text-center mb-2">{providor?.exp} Years of Experiences</h3>
                <div className="">
                    {

                        ratings === 1 &&
                        <div className="rating">
                            <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-green-500" checked />
                            <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-gray-300" />
                            <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-gray-300" />
                            <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-gray-300" />
                            <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-gray-300" />
                        </div>

                    }
                    {

                        ratings === 2 &&
                        <div className="rating">
                            <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-green-500" />
                            <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-green-500" checked />
                            <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-gray-300" />
                            <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-gray-300" />
                            <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-gray-300" />
                        </div>

                    }
                    {

                        ratings === 3 &&
                        <div className="rating">
                            <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-green-500" />
                            <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-green-500" />
                            <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-green-500" checked />
                            <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-gray-300" />
                            <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-gray-300" />
                        </div>

                    }
                    {

                        ratings === 4 &&
                        <div className="rating">
                            <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-green-500" />
                            <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-green-500" />
                            <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-green-500" />
                            <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-green-500" checked />
                            <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-gray-300" />
                        </div>

                    }
                    {

                        ratings === 5 &&
                        <div className="rating">
                            <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-green-500" />
                            <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-green-500" />
                            <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-green-500" />
                            <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-green-500" />
                            <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-green-500" checked />
                        </div>

                    }
                </div>
                <div className="text-left w-full flex flex-col justify-start">
                    <p className=""><span className="font-bold text-gray-500">Phone: </span>{providor?.phone}</p>
                    <span className="font-bold text-left text-gray-500">Expense: </span>
                    <div className="pl-5">
                        <p className="font-semibold"><span className="font-bold text-gray-500">Per Hour: $</span>{providor?.perHour}</p>
                        <p className="font-semibold"><span className="font-bold text-gray-500">Per Day: $</span>{providor?.perDay}</p>
                        <p className="font-semibold"><span className="font-bold text-gray-500">Per Month: $</span>{providor?.perMonth}</p>
                    </div>

                </div>

                <div className="mt-3">
                    <button onClick={() => navigate(`/hire/${id}/${providor?.id}`)} className="btn btn-outline btn-neutral px-7 ">Click to Hire</button>
                </div>

            </div>

        </div>
    );
};

export default ServiceDetails;