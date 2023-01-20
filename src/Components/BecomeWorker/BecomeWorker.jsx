import React, { useRef, useState } from 'react';
import swal from 'sweetalert';
import primaryAxios from '../../Hooks/primaryAxios';


const BecomeWorker = () => {

    const [pending, setPending] = useState(false);


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setPending(true);


        const info = {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.phone.value,
            expert: e.target.expert.value,
            place: e.target.place.value,
            dob: e.target.dob.value,
            nid: e.target.nid.value,
            edu: e.target.edu.value,
            address: e.target.address.value,
        }

        // console.log(info);

        swal({
            title: "Are you sure?",
            text: "Once Send, you will not be able to recover this imaginary data!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                (async () => {
                    const { data } = await primaryAxios.post(`/apply`, info);
                    // console.log(data);
                    if (data?.insertedId) {
                        swal("The Information has been successfully Saved", {
                            icon: "success",
                            className: "rounded-xl",
                        });

                        e.target.reset();
                        // window.location.href = "/";
                    }
                })();
            } else {
                swal("Your imaginary file is safe!");
            }
        })



    };

    return (
        <div>
            <div style={{
                backgroundImage: "url(https://img.freepik.com/free-vector/recruiting-professionals-studying-candidate-profiles_1262-21404.jpg?w=2000)"
            }} className="bg-cover object-cover bg-no-repeat lg:h-96 h-40 lg:z-0">
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 lg:mx-44 lg:my-24 my-5 p-5'>
                <div>
                    <img className='object-cover' src="https://img.freepik.com/free-psd/flat-design-we-are-hiring-template_23-2149698070.jpg?w=740&t=st=1672427963~exp=1672428563~hmac=9f21fca98e14aad4c870c9adfbb0fb9e5ed7d54deaaf51bd46a0a5fb04cbfcac" alt="" />
                </div>
                <div className=' px-12 pt-10 pb-5 shadow-lg text-[#222222] lg:mt-[-220px] lg:z-40 bg-white'>
                    <h2 className=' text-4xl font-semibold mb-4'>Fill Out For Apply as Worker</h2>
                    <p>Fill-in the contact form and get immediate assistance from our educational consultant.</p>

                    <form ref={form} onSubmit={sendEmail} >
                        <select name="expert" className=' block w-full h-10 pl-2 border-2 border-[#d8dada] my-5' type="text" id="" placeholder="Your Name">
                            <option disabled selected class="place">Select Your Expert in</option>
                            <option class="place">Maid</option>
                            <option class="place">Nurse</option>
                            <option class="place">Governess</option>
                            <option class="place">Cook</option>
                            <option class="place">Babysitter</option>
                            <option class="place">Driver</option>
                            <option class="place">Laborer</option>
                            <option class="place">Builder</option>
                            <option class="place">Painter</option>
                            <option class="place">Electrician </option>
                            <option class="place">Carpenter(কাঠমিস্ত্রি)</option>
                            <option class="place">Plumber</option>
                            <option class="place">Night Guard</option>


                        </select>
                        <select name="place" className=' block w-full h-10 pl-2 border-2 border-[#d8dada] my-5' type="text" id="" placeholder="Your Name">
                            <option disabled selected class="place">Select Your Place</option>
                            <option class="place">Dhanmondi</option>
                            <option class="place">Kolabagan</option>
                            <option class="place">Uttra</option>
                            <option class="place">Mohammadpur</option>
                            <option class="place">Shamoli</option>
                            <option class="place">Kayllanpur</option>
                            <option class="place">Gulshan</option>
                            <option class="place">Bonani</option>


                        </select>

                        <input name="name" className=' block w-full h-10 pl-2 border-2 border-[#d8dada] my-5' type="text" id="" placeholder="Your Name" />

                        <input name="email" className=' block w-full h-10 pl-2 border-2 border-[#d8dada] mb-5' type="email" id="" placeholder="Email address" />

                        <input name="phone" className=' block w-full h-10 pl-2 border-2 border-[#d8dada] mb-5' type="text" id="" placeholder="Enter Your Phone" />
                        <input name="dob" className=' block w-full h-10 pl-2 border-2 border-[#d8dada] mb-5' type="date" id="" placeholder="Enter Your Date of Birth" />
                        <input name="nid" className=' block w-full h-10 pl-2 border-2 border-[#d8dada] mb-5' type="text" id="" placeholder="Enter Your NID No." />
                        <input name="edu" className=' block w-full h-10 pl-2 border-2 border-[#d8dada] mb-5' type="text" id="" placeholder="Enter Your Last Edu. Qualification" />
                        <textarea name="address" className=' block w-full h-20 pl-2 border-2 border-[#d8dada] mb-5' type="text" id="" placeholder="Enter Your Address" />

                        <input disabled={pending ? true : false} className=' block h-10 px-7 bg-[#015abd] text-white cursor-pointer uppercase my-4' type="submit" value="Apply for Join" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default BecomeWorker;