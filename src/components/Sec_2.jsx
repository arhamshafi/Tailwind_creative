import React from 'react'
import PricingCard from './Card'

function Sec_2() {
    return (
        <>
            <div className='p-1 pb-16'>

                <h1 className='text-center font-bold text-black text-4xl mt-14 p-0'>Designed for business teams like yours</h1>
                <p className='text-center w-3/4 text-gray-500 text-lg mx-auto mt-6'>Here at Landwind we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
                <div className='w-[90%] mx-auto mt-12 flex flex-wrap justify-between items-center'>
                    <PricingCard />
                    <PricingCard />
                    <PricingCard />
                </div>

            </div>
        </>
    )
}

export default Sec_2