import { LOGO_URL } from '@/component/utils/constant'
import { LOGO_HEIGHT, LOGO_WIDTH } from '@/component/utils/width'
import Image from 'next/image'
import React from 'react'

const AuthHeader = () => {
    return (
        <section className='w-full'>
            {/* Logo section starts here */}
            <div className='flex items-center px-8 pt-8 gap-5'>
                {/* Logo Image */}
                <div className='w-fit h-auto'>
                    <Image src={LOGO_URL} width={LOGO_WIDTH} height={LOGO_HEIGHT} alt='Logo' />
                </div>
                {/* Logo Name */}
                <div className='text-[32px] font-bold text-[#3C23B5]'>
                    neural
                </div>
            </div>
            {/* Logo section ends here */}
        </section>
    )
}

export default AuthHeader