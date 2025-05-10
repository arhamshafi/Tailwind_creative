import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

function Footer() {
    return (
        <div className='pt-1 bg-white pb-6'>
            <div className='w-[90%] mx-auto border-b  pb-10 border-gray-400 flex flex-wrap justify-evenly md:justify-between items-center'>

                <div className='w-[270px] md:w-[200px] mt-20' style={{ cursor: "context-menu" }} >
                    <h1 className='font-bold text-xl text-center sm:text-start'>Company</h1>
                    <p className='text-md mt-4 hover:underline cursor-pointer text-center sm:text-start'>About</p>
                    <p className='text-md mt-1 hover:underline cursor-pointer text-center sm:text-start'>Careers</p>
                    <p className='text-md mt-1 hover:underline cursor-pointer text-center sm:text-start'>Brand Center</p>
                    <p className='text-md mt-1 hover:underline cursor-pointer text-center sm:text-start'>Blog</p>
                </div>
                <div className='w-[270px] md:w-[200px] mt-20' style={{ cursor: "context-menu" }} >
                    <h1 className='font-bold text-xl text-center sm:text-start'>Help Center</h1>
                    <p className='text-md mt-4 hover:underline cursor-pointer text-center sm:text-start'>Discover Server</p>
                    <p className='text-md mt-1 hover:underline cursor-pointer text-center sm:text-start'>Twitter</p>
                    <p className='text-md mt-1 hover:underline cursor-pointer text-center sm:text-start'>Facebook</p>
                    <p className='text-md mt-1 hover:underline cursor-pointer text-center sm:text-start'>Contact Us</p>
                </div>
                <div className='w-[270px] md:w-[200px] mt-20' style={{ cursor: "context-menu" }} >
                    <h1 className='font-bold text-xl text-center sm:text-start'>Legal</h1>
                    <p className='text-md mt-4 hover:underline cursor-pointer text-center sm:text-start'>Privacy Policy</p>
                    <p className='text-md mt-1 hover:underline cursor-pointer text-center sm:text-start'>Licensing</p>
                    <p className='text-md mt-1 hover:underline cursor-pointer text-center sm:text-start'>Terms</p>
                    <p className='text-md mt-1 hover:underline cursor-pointer text-center sm:text-start'>Terms</p>
                </div>
                <div className='w-[270px] md:w-[200px] mt-20' style={{ cursor: "context-menu" }} >
                    <h1 className='font-bold text-xl text-center sm:text-start'>Company</h1>
                    <p className='text-md mt-4 hover:underline cursor-pointer text-center sm:text-start'>About</p>
                    <p className='text-md mt-1 hover:underline cursor-pointer text-center sm:text-start'>Careers</p>
                    <p className='text-md mt-1 hover:underline cursor-pointer text-center sm:text-start'>Brand Center</p>
                    <p className='text-md mt-1 hover:underline cursor-pointer text-center sm:text-start'>Blog</p>
                </div>
                <div className='w-[270px] md:w-[200px] mt-20' style={{ cursor: "context-menu" }} >
                    <h1 className='font-bold text-xl text-center sm:text-start'>Downloads</h1>
                    <p className='text-md mt-4 hover:underline cursor-pointer text-center sm:text-start'>iOS</p>
                    <p className='text-md mt-1 hover:underline cursor-pointer text-center sm:text-start'>Android</p>
                    <p className='text-md mt-1 hover:underline cursor-pointer text-center sm:text-start'>Windows</p>
                    <p className='text-md mt-1 hover:underline cursor-pointer text-center sm:text-start'>Linux</p>
                </div>
            </div>
                        <div className='flex justify-center items-center gap-4 mx-auto mt-6'><FaInstagram /><FaTwitter /><FaPinterest /><FaFacebook /></div>
        </div>
    )
}

export default Footer