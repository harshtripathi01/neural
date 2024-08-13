import Image from 'next/image'
import React from 'react'
import { FACEBOOK_URL, INSTAGRAM_URL, LINKDIEN_FOOTER_URL, LOGO_URL, X_FOOTER_URL } from '../utils/constant'
import { FOOTER_SOCIAL_HEIGHT, FOOTER_SOCIAL_WIDTH, LOGO_HEIGHT, LOGO_WIDTH } from '../utils/width'

const Footer = () => {
    return (
        <section className='px-[145px] py-[101px]'>
            <div className='flex justify-between items-center'>
                <div>
                <p className='text-[#212B36] font-normal text-[14px] '>© 2025. All rights reserved</p>
                </div>
                <div className='col-span-2 flex items-center gap-2'>

<div className='w-fit h-auto'>
    <Image src={LOGO_URL} width={LOGO_WIDTH} height={LOGO_HEIGHT} alt='Logo' />
</div>

<div className='text-[32px] font-bold text-[#3C23B5]'>
    neural
</div>
</div>

                    <div className=''>
                        <p className='text-[#212B36] font-bold text-[12px]'>Contact- <span className='text-[#212B36] font-normal  text-[12px]'>support@neural.com</span></p>
                        {/* <div className='text-[#212B36] font-normal text-[14px] flex flex-col gap-3'>
                            <p>support@neural.com</p>
                            <p>Los Angeles, 359  Hidden Valley Road</p>
                        </div> */}
                    </div>
                    {/* <div className='flex gap-6 mt-[18px]'>
                        <div className='h-auto'>
                            <Image width={FOOTER_SOCIAL_WIDTH} height={FOOTER_SOCIAL_HEIGHT} src={FACEBOOK_URL} alt='Social Media Url' />
                        </div>
                        <div className='h-auto'>
                            <Image width={FOOTER_SOCIAL_WIDTH} height={FOOTER_SOCIAL_HEIGHT} src={INSTAGRAM_URL} alt='Social Media Url' />
                        </div>
                        <div className='h-auto'>
                            <Image width={FOOTER_SOCIAL_WIDTH} height={FOOTER_SOCIAL_HEIGHT} src={LINKDIEN_FOOTER_URL} alt='Social Media Url' />
                        </div>
                        <div className='h-auto'>
                            <Image width={FOOTER_SOCIAL_WIDTH} height={FOOTER_SOCIAL_HEIGHT} src={X_FOOTER_URL} alt='Social Media Url' />
                        </div>
                    </div> 
                    
                <div className='flex gap-20 mt-8'>
                    <div className='flex flex-col gap-6'>
                        <p className='text-[#212B36] font-bold text-[12px]'>Neural</p>
                        <div className='text-[#212B36] font-normal text-[14px] flex flex-col gap-3'>
                            <p>About us</p>
                            <p>Contact us</p>
                            <p>FAQ</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <p className='text-[#212B36] font-bold text-[12px]'>Legal</p>
                        <div className='text-[#212B36] font-normal text-[14px] flex flex-col gap-3'>
                            <p>Terms and Condition</p>
                            <p>Privacy Policy</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <p className='text-[#212B36] font-bold text-[12px]'>Contact</p>
                        <div className='text-[#212B36] font-normal text-[14px] flex flex-col gap-3'>
                            <p>support@neural.com</p>
                            <p>Los Angeles, 359  Hidden Valley Road</p>
                        </div>
                    </div>
                    
                </div>*/}
            </div>
        </section>
    )
}

export default Footer