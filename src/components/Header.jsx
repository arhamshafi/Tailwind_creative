import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import header_img from "../images/hero.png"

function Header() {
    return (
        <>
            <div className='flex justify-center items-center bg-white w-full h-max xl:h-[80vh] flex-wrap-reverse	'>

                <div className='w-[100%] xl:w-[60%] h-full flex justify-center  flex-col gap-6 px-3 md:px-12'>
                    <h1 className='text-2xl sm:text-4xl md:text-6xl font-bold cursor-default text-center md:text-left mt-24 sm:"mt-0'>Building Digital Products & Brands</h1>
                    <p className='text-gray-500 text-sm sm:text-xl cursor-default text-center md:text-left'>This free and open-source landing page template was built using the utility classes from Tailwind CSS and based on the components from the Flowbite Library and the Blocks System.</p>

                    <div className='w-[60%] h-full flex sm:hidden justify-center items-center mx-auto'> <img className='head_img1' src={header_img} alt="" /> </div>

                    <div className='flex justify-between items-center mx-auto md:m-0 w-[90%] sm:w-[400px] flex-wrap'>
                        <button className='w-[100%] gap-4 sm:gap-0 mt-4 sm:mt-0  sm:w-[48%] border border-gray-200 shadow-sm h-[50px] rounded-md flex justify-center items-center gap-3 text-black hover:text-blue-600 transition-all duration-400 ease-in bg-transparent hover:bg-blue-100'> <FaGithub /> View On GitHub  </button>
                        <button className='w-[100%] gap-4 sm:gap-0 mt-4 sm:mt-0  sm:w-[48%] border border-gray-200 shadow-sm h-[50px] rounded-md flex justify-center items-center gap-3 text-black hover:text-blue-600 transition-all duration-400 ease-in bg-transparent hover:bg-blue-100'> <FaFigma /> Get Figma File </button>
                    </div>
                </div>
                <div className='w-[40%] h-full hidden sm:flex justify-center items-center mt-16 xl:mt-0'> <img className='head_img mt-14' src={header_img} alt="" /> </div>

            </div>
        </>
    )
}

export default Header