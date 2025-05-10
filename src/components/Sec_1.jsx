import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import Simg from "../images/feature-1.png"
import s1img_2 from "../images/feature-2.png"
<FaCheckCircle />

function Sec_1() {
  return (
    <>
      <div className=' bg-gray-100 w-full h-max py-3 flex justify-center flex-wrap'>
        <div className='w-full lg:w-1/2 py-5 px-3 sm:px-10 flex flex-col justify-center'>

          <div className=' border-0 lg:border-b border-gray-600 pb-5'>
            <h1 className='text-xl text-center sm:text-3xl sm:text-start font-bold'>Work with tools you already use</h1>
            <p className='text-md text-center sm:text-start sm:text-xl mt-6 text-gray-700'>Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.</p>
          </div>

          <div className='w-3/4 block lg:hidden mx-auto'> <img src={Simg} alt="" /> </div>
          <div className='pb-5 mt-4'>
            <p className=' text-sm sm:text-lg mt-6 font-bold text-black flex items-center justify-start gap-3'> <FaCheckCircle style={{ color: "purple" }} /> Continuous integration and deployment </p>
            <p className=' text-sm sm:text-lg mt-3 font-bold text-black flex items-center justify-start gap-3'> <FaCheckCircle style={{ color: "purple" }} /> Development workflow </p>
            <p className=' text-sm sm:text-lg mt-3 font-bold text-black flex items-center justify-start gap-3'> <FaCheckCircle style={{ color: "purple" }} /> Knowledge management </p>
            <p className=' text-md text-center sm:text-start sm:text-xl mt-6 text-gray-700'>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.</p>
          </div>

        </div>
        <div className='w-1/2 py-5 hidden lg:block'> <img src={Simg} alt="" /> </div>

      </div>
      <div className=' bg-gray-100 w-full h-max flex justify-center flex-wrap'>
        <div className='w-1/2 py-5 hidden lg:block'> <img src={s1img_2} alt="" /> </div>
        <div className='w-full lg:w-1/2 py-5 px-3 sm:px-10 flex flex-col justify-center'>

          <div className=' border-0 lg:border-b border-gray-600 pb-5'>
            <h1 className='text-xl text-center sm:text-3xl sm:text-start font-bold'>Work with tools you already use</h1>
            <p className='text-md text-center sm:text-start sm:text-xl mt-6 text-gray-700'>Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.</p>
          </div>

          <div className='w-3/4 block lg:hidden mx-auto'> <img src={s1img_2} alt="" /> </div>
          <div className='pb-5 mt-4'>
            <p className=' text-sm sm:text-lg mt-6 font-bold text-black flex items-center justify-start gap-3'> <FaCheckCircle style={{ color: "purple" }} /> Continuous integration and deployment </p>
            <p className=' text-sm sm:text-lg mt-3 font-bold text-black flex items-center justify-start gap-3'> <FaCheckCircle style={{ color: "purple" }} /> Development workflow </p>
            <p className=' text-sm sm:text-lg mt-3 font-bold text-black flex items-center justify-start gap-3'> <FaCheckCircle style={{ color: "purple" }} /> Knowledge management </p>
            <p className=' text-md text-center sm:text-start sm:text-xl mt-6 text-gray-700'>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.</p>
          </div>

        </div>

      </div>
    </>
  )
}

export default Sec_1