import { HERO, HOMEPAGE_HOW_WORKS } from '@/component/utils/constant'
import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
    const heroStyle = {
        backgroundImage: `url(${HERO})`,
        width: '100%',
        height: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right center',
        backgroundSize: 'contain', // Optional: Adjust based on your needs
    }

    return (
        <div className='w-full h-auto'>
            <div style={heroStyle}>
                <div className='flex flex-col gap-3 px-20 pt-9'>
                    <p className='font-bold max-w-[774px] max-h-[152px] w-full h-full text-[55px] text-[#3C23B5]'>Unlock Expertise, Elevate  Your Knowledge</p>
                    <p className='text-[#212832] font-semibold text-[18px] max-w-[576px] max-h-[86px] w-full h-full'>Connect with top experts, get real-time insights and monetise your knowledge</p>
                    <div className='w-full h-full flex gap-3'>
                        <button className='bg-[#3C23B5] py-1 text-white rounded-[10px] max-w-[134px] max-h-[35px] w-full h-full'>Apply</button>
                        <button className='py-1 text-[#3C23B5] rounded-[10px] max-w-[134px] max-h-[35px] w-full h-full font-bold'>Learn More</button>
                    </div>
                </div>
            </div>

            <div className='px-[195px] mt-96 w-full'>
                <div className='flex flex-col justify-center items-center mt-[74px]'>
                    <p className='font-bold text-[12px] text-[#637381]'>FOR EXPERTS</p>
                    <p className='font-bold text-[40px] text-[#3C23B5] text-center max-w-[678px] w-full'>How neural helps your professional growth? </p>
                </div>
                <div className='flex justify-center items-center w-full'>
                    <div className='h-[200px] flex justify-end max-w-[390px] w-full'>
                        <ul className='list-disc'>
                            <li className='text-[#212832] font-bold text-[25px]'>High-quality insights</li>
                            <li className='text-[#212832] font-bold text-[25px]'>Real-time access</li>
                            <li className='text-[#212832] font-bold text-[25px]'>Cost-effective solutions</li>
                        </ul>
                    </div>
                    <div className='max-w-[460px] w-full h-auto'>
                        <Image src={HOMEPAGE_HOW_WORKS} width={460} height={451} alt='Bussines' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HeroSection