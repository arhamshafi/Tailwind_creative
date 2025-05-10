import React from 'react'
import logo from "../images/logo.svg"
import { CiStar } from "react-icons/ci";
import { FaBars } from "react-icons/fa";

function Navbar() {
    return (
        <>

            <div className='w-full h-16 flex items-center justify-between px-2 sm:px-4 fixed top-0 left-0 bg-white shadow-md z-10'>
                <div className='w-[150px] flex justify-evenly items-center text-lg'><img className='h-1/2' src={logo} alt="logo" /><h2 className='font-bold cursor-default'>LandWind</h2></div>
                <ul className='w-fit hidden lg:flex jutify-center items-center gap-4 list-none'>
                    <li
                        style={{ cursor: "pointer" }}
                        className="font-light transition-all ease-in-out duration-200 hover:text-purple-700 hover:tracking-wider text-black"
                    >
                        Home
                    </li>
                    <li
                        style={{ cursor: "pointer" }}
                        className="font-light transition-all ease-in-out duration-200 hover:text-purple-700 hover:tracking-wider text-black"
                    >
                        Company
                    </li>
                    <li
                        style={{ cursor: "pointer" }}
                        className="font-light transition-all ease-in-out duration-200 hover:text-purple-700 hover:tracking-wider text-black"
                    >
                        Feature
                    </li>
                    <li
                        style={{ cursor: "pointer" }}
                        className="font-light transition-all ease-in-out duration-200 hover:text-purple-700 hover:tracking-wider text-black"
                    >
                        Team
                    </li>
                    <li
                        style={{ cursor: "pointer" }}
                        className="font-light transition-all ease-in-out duration-200 hover:text-purple-700 hover:tracking-wider text-black"
                    >
                        Contact
                    </li>


                </ul>
                <div className='w-fit flex justify-center items-center gap-4'>

                    <div className='flex w-[100px] border-2 border-gray-300 rounded h-[25px] hidden md:flex ' style={{ cursor: "context-menu" }}>
                        <div className=' w-[60%] bg-gray-100 border-r-2 rounded-2 border-r-gray-300 flex  justify-center items-center gap-1 text-xs font-bold'> <CiStar /> <p>Star</p> </div>
                        <div className=' w-[40%] text-xs flex justify-center items-center'> <b>963</b> </div>
                    </div>

                    <button className='px-4 bg-purple-700 h-[40px] text-white border-0 rounded hidden sm:block '>Download</button>
                    <button className='px-2 py-2 bg-gray-100 text-black border-2 border-gray-200 rounded block lg:hidden '> <FaBars /> </button>

                </div>
            </div>

        </>
    )
}

export default Navbar