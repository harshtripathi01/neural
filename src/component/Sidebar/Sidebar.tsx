import React from 'react';
import Image from 'next/image'
import { LOGO_URL } from '@/component/utils/constant'
import { LOGO_HEIGHT, LOGO_WIDTH } from '@/component/utils/width'
import DashboardIcon from '@mui/icons-material/Dashboard';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const Sidebar = () => {
  return (
    <div className='h-full bg-white text-black '>
      {/* Logo Section */}
      <div className='col-span-2 flex items-center gap-2 px-9'>

                    <div className='w-fit h-auto'>
                        <Image src={LOGO_URL} width={LOGO_WIDTH} height={LOGO_HEIGHT} alt='Logo' />
                    </div>

                    <div className='text-[32px] font-bold text-[#3C23B5]'>
                        neural
                    </div>
                </div>

      {/* Sidebar Items */}
      <ul className='mt-6 flex flex-col'>
    <li className='mb-2 hover:bg-[#B4BAE5] hover:font-bold hover:border-e-4 border-[#1826D8] w-full py-2 flex items-center justify-start px-6'>
        <DashboardIcon className='mr-2' />
        <a href='#' className='text-black'>Dashboard</a>
    </li>
    <li className='mb-2 hover:bg-[#B4BAE5] hover:font-bold hover:border-e-4 border-[#1826D8] w-full py-2 flex items-center justify-start px-6'>
        <NetworkCheckIcon className='mr-2' />
        <a href='#' className='text-black'>Network</a>
    </li>
    <li className='mb-2 hover:bg-[#B4BAE5] hover:font-bold hover:border-e-4 border-[#1826D8] w-full py-2 flex items-center justify-start px-6'>
        <MonetizationOnIcon className='mr-2' />
        <a href='#' className='text-black'>My Earnings</a>
    </li>
</ul>

    </div>
  );
}

export default Sidebar;
