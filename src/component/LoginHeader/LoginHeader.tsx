"use client";

import React, { useState } from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import {PROFILE} from '@/component/utils/constant'
import Link from 'next/link';
import { usePathname} from 'next/navigation';

const LoginHeader = () => {
    const pathname = usePathname();
    return (
        <div className="h-20 flex justify-end items-center px-6 bg-white text-[#000000]">
        <div className="flex items-center space-x-4 text-[14px] font-bold">
        <div className="flex items-center space-x-2 cursor-pointer text-[14px] font-bold">
                <span >{pathname === '/expert' ? <Link href="#">Earnings</Link> : <Link href="/expert">Credits</Link>}</span>
                <span className='text-[#6B6B6B] font-normal'>1000</span>
            </div>
            <div className="border-r-2 border-[#6B6B6B] h-4"></div>
            <Link 
            href={pathname === '/expert' ? '/client' : '/expert'} 
            className="text-[#3C23B5] font-bold text-[14px] rounded"
        >
            {pathname === '/expert' ? 'Switch to Client' : 'Switch to Expert'}
        </Link>

            <button className=" text-[#000000] rounded flex items-center">
                <MailIcon className="w-5 h-5" />
               
            </button>
            <button className="text-[#000000] rounded flex items-center">
                <NotificationsIcon className="w-5 h-5 " />
               
            </button>
            
            <div className="flex items-center space-x-2 cursor-pointer text-[14px] font-bold">
               <Link href="/profile"><span>Jenie James</span></Link>
               <Link href="/profile"> <img
                    src={PROFILE}
                    alt="Profile"
                    className="w-8 h-8 rounded-full"
                />
                </Link>
            </div>
        </div>
    </div>
);
};

export default LoginHeader