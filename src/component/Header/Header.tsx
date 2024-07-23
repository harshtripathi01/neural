import { LOGO_URL } from '@/component/utils/constant'
import { LOGO_HEIGHT, LOGO_WIDTH } from '@/component/utils/width'
import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <section className='w-full sticky top-0 bg-white z-50 shadow-md'>

            <div className='grid grid-cols-12 px-8 py-3  place-items-center'>

                <div className='col-span-2 flex items-center gap-5'>

                    <div className='w-fit h-auto'>
                        <Image src={LOGO_URL} width={LOGO_WIDTH} height={LOGO_HEIGHT} alt='Logo' />
                    </div>

                    <div className='text-[32px] font-bold text-[#3C23B5]'>
                        neural
                    </div>
                </div>

                <div className='col-span-9 w-full'>
                    <div className='flex gap-6 w-full items-center justify-end'>
                        <button className='text-[#3C23B5] font-bold text-[17px]'>Log in</button>
                        <button className='text-[#3C23B5] h-[40px] w-[102px] rounded-[5px] font-bold text-[17px] border border-[#3C23B5]'>Log in</button>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Header