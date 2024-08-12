import { HOMEPAGE_HOW_WORKS } from '@/component/utils/constant'
import Image from 'next/image'
import React from 'react'

const HowHelp = () => {
    return (
        <div className='px-[195px] w-full'>
            <hr />
            <div className='flex flex-col justify-center items-center mt-[74px]'>
                <p className='font-bold text-[12px] text-[#637381]'>FOR BUSINESS</p>
                <p className='font-bold text-[40px] text-[#3C23B5]'>How neural helps your business? </p>
            </div>
            <div className='flex justify-evenly items-center'>
                <div className='max-w-[450px] w-full h-auto'>
                    <Image src={HOMEPAGE_HOW_WORKS} width={451} height={451} alt='Bussines' />
                </div>
                <div className='h-[310px] max-w-[633px] w-full flex justify-start'>
                    <ul className='list-disc'>
                        <li className='text-[#212832] font-bold text-[25px]'>High-quality insights:<span className='text-[#212832] font-normal text-[25px]'>Use our RAG based GenAI, NEURON, to get quick on-demand insights from highly vetted experts
                        </span></li>
                        <li className='text-[#212832] font-bold text-[25px]'>Real-time access:<span className='text-[#212832] font-normal text-[25px]'>Our professional network model allows experts to answer questions as they get it
                        </span></li>
                        <li className='text-[#212832] font-bold text-[25px]'>Cost-effective solutions:<span className='text-[#212832] font-normal text-[25px]'>Our clients save 50% on their research spend by eliminating low-quality interactions and content
                        </span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HowHelp