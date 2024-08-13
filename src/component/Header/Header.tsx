
"use client"
import { LOGO_URL } from '@/component/utils/constant'
import { LOGO_HEIGHT, LOGO_WIDTH } from '@/component/utils/width'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Header = () => {

    return (
        <section className='w-full sticky top-0 bg-white z-50'>

            <div className='grid grid-cols-12 px-8 py-3  place-items-center'>

                <div className='col-span-2 flex items-center gap-2'>

                    <div className='w-fit h-auto'>
                        <Image src={LOGO_URL} width={LOGO_WIDTH} height={LOGO_HEIGHT} alt='Logo' />
                    </div>

                    <div className='text-[32px] font-bold text-[#3C23B5]'>
                        Neural
                    </div>
                </div>

                <div className='col-span-9 w-full'>
      <div className='flex gap-6 w-full items-center justify-end'>

        {/* Login Dropdown */}
        <div className='relative group'>
          <button
            className='text-[#3C23B5] font-bold text-[17px] h-[40px] w-[102px] text-center py-2 rounded-[5px]'
          >
            Log in
          </button>

          <div className='absolute right-0 mt-2 w-[120px] bg-white border border-gray-300 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform translate-y-[-10px] transition-all duration-200 ease-in-out'>
            <button
              onClick={() => window.location.href = '/login?role=client'}
              className='block px-4 py-2 text-left w-full hover:bg-gray-100'
            >
              Client
            </button>
            <button
              onClick={() => window.location.href = '/login?role=expert'}
              className='block px-4 py-2 text-left w-full hover:bg-gray-100'
            >
              Expert
            </button>
          </div>
        </div>

        {/* Sign Up Dropdown */}
        <div className='relative group'>
          <button
            className='text-[#3C23B5] h-[40px] w-[102px] rounded-[5px] font-bold text-[17px] text-center border border-[#3C23B5] py-2'
          >
            Sign Up
          </button>

          <div className='absolute right-0 mt-2 w-[120px] bg-white border border-gray-300 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform translate-y-[-10px] transition-all duration-200 ease-in-out'>
            <button
              onClick={() => window.location.href = '/signup?role=client'}
              className='block px-4 py-2 text-left w-full hover:bg-gray-100'
            >
              Client
            </button>
            <button
              onClick={() => window.location.href = '/signup?role=expert'}
              className='block px-4 py-2 text-left w-full hover:bg-gray-100'
            >
              Expert
            </button>
          </div>
        </div>

      </div>

    </div>
            </div>


        </section>
    )
}

export default Header