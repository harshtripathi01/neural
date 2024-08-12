import { HERO, PROFESSIONAL } from '@/component/utils/constant'
import Image from 'next/image'
import React from 'react'


const HeroSection = () => {
    const heroStyle = {
        backgroundImage: `url(${HERO})`,
        width: '100%',
        height: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top right', // Aligns the background image to the top-left corner
        backgroundSize: 'auto', // Adjust based on your needs
    }

    return (
        <div className='w-full h-auto' style={heroStyle}>
            

            <div>
                <div className='flex flex-col gap-3 px-20 pt-20'>
                    <div>
                    <p className='font-bold max-w-[604px] max-h-[152px] w-full h-full text-[55px] text-[#3C23B5]'>Unlock Expertise, Growth Your Network, Monteise Knowledge</p>
                    </div>
                    </div>
                </div>
                <div className='flex flex-col gap-3 px-20 pt-[90px]'>
                    <p className='text-[#212832] font-semibold text-[18px] max-w-[576px] max-h-[86px] w-full h-full'>Join The Most Exclusive Network Of Top Professionals.</p>
            
                    <div className='w-full h-full flex gap-3 pt-4'>
                    <button className='bg-[#3C23B5] py-2 text-white rounded-[10px] max-w-[134px] max-h-[40px] w-full h-full shadow-custom hover:shadow-custom-hover transition-shadow duration-300'>Apply</button>
                    <button className='py-1 text-[#3C23B5] rounded-[10px] max-w-[134px] max-h-[35px] w-full h-full font-bold'>Learn More</button>
                    </div>
                </div>
           

            <div className='px-[195px] mt-96 w-full'>
                <div className='flex flex-col justify-center items-center mt-[74px]'>
                    <p className='font-bold text-[12px] text-[#637381]'>FOR EXPERTS</p>
                    <p className='font-bold text-[40px] text-[#3C23B5] text-center max-w-[678px] w-full'>How neural helps your professional growth? </p>
                </div>
                <div className='flex justify-center items-center w-full'>
                    <div className='h-[217px] flex justify-end max-w-[551px] w-full'>
                        <ul className='list-disc'>
                            <li className='text-[#212832] font-bold text-[25px]'>Monetize knowledge: <span className='text-[#212832] font-normal text-[25px]'>Our experts make $1K+ every month through Neural, through content direct sales and royalties
                            </span></li>
                            <li className='text-[#212832] font-bold text-[25px]'>Exclusive network: <span className='text-[#212832] font-normal text-[25px]'>Our invite-only model ensures only top industry professionals are part of the platform
                            </span></li>
                           
                        </ul>
                    </div>
                    <div className='max-w-[460px] w-full h-auto'>
                        <Image src={PROFESSIONAL} width={460} height={451} alt='Bussines' />
                    </div>
                </div>
            </div>
            </div>
    )
}

export default HeroSection