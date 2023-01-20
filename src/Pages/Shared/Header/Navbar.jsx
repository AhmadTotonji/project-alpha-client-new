import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import { Navigation } from '../../../Data/NavbarData';
import auth from '../../../Firebase/firebase.init';

const Navbar = () => {
    const [bg, setBg] = useState(false);
    const [user] = useAuthState(auth);


    useEffect(() => {
        window.addEventListener('scroll', () => {
            return window.scrollY > 50 ? setBg(true) : setBg(false);
        });
    });

    
  const signout = () => {
    signOut(auth);
  };

    return (
        <div className={`${bg ? "bg-indigo-500 h-16 m-0 p-0 w-full shadow-sm" : "text-black"
            } flex items-center app__navbar fixed top-0 w-full text-dark z-50 transition-all duration-300`}>
            <div className="navbar bg-slate-300 text-white">
                <div className="navbar-start">

                    <Link to="/" className="normal-case flex justify-center items-center gap-2 text-xl">
                        <img class="h-12 w-12" src="https://i.ibb.co/CBH3B6n/logo.png" alt="logo" />
                        <h2 class="logo">AvailBox</h2>
                    </Link>

                </div>
                <div className="navbar-end">
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {
                                Navigation?.map((item) => {

                                    return (
                                        <li key={item?.name} className={`${bg && 'text-neutral'} text-neutral text-xl mx-2 font-semibold cursor-pointer`}>

                                            <NavLink
                                                to={item.href}
                                                smooth={true}
                                                duration={500}
                                                offset={-70}
                                                className="flex rounded px-4 items-center py-2 text-sm text-gray-900 hover:bg-gray-100 hover:text-neutral focus:bg-gray-700 focus:text-white focus:outline-none transition duration-150 ease-in-out"
                                            > {item.name} </NavLink>
                                        </li>

                                    )
                                })
                            }

                            <li className=' text-gray-900 text-xl mx-2 font-semibold cursor-pointer'>{user ? <button className="flex rounded px-4 items-center py-2 text-sm text-gray-900 hover:bg-gray-100 hover:text-neutral focus:bg-gray-700 focus:text-white focus:outline-none transition duration-150 ease-in-out" onClick={signout}>Sign Out</button> :
                                <NavLink className="flex rounded px-4 items-center py-2 text-sm text-gray-900 hover:bg-gray-100 hover:text-neutral focus:bg-gray-700 focus:text-white focus:outline-none transition duration-150 ease-in-out" to='/signin'>Sign In</NavLink>}</li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                            </label>
                            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                {
                                    Navigation?.map((item) => {

                                        return (
                                            <li key={item?.name} className={`${bg && 'text-white'} text-white my-1 text-xl mx-2 font-semibold cursor-pointer`}>

                                                <NavLink
                                                    to={item.href}
                                                    smooth={true}
                                                    duration={500}
                                                    offset={-70}
                                                    className="flex rounded px-4 items-center py-2 text-sm text-neutral hover:bg-gray-100 hover:text-neutral focus:bg-gray-700 focus:text-white focus:outline-none transition duration-150 ease-in-out"
                                                > {item.name} </NavLink>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;