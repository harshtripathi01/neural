import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import {PROFILE} from '@/component/utils/constant'
import Link from 'next/link';

const LoginHeader = () => {
    return (
        <div className="h-20 flex justify-end items-center px-6 bg-white text-[#000000]">
        <div className="flex items-center space-x-4 text-[14px] font-bold">
        <div className="flex items-center space-x-2 cursor-pointer text-[14px] font-bold">
                <span>Credits</span>
                <span className='text-[#6B6B6B] font-normal'>1000</span>
            </div>
            <div className="border-r-2 border-[#6B6B6B] h-4"></div>
            <Link href="/expert" className=" text-[#3C23B5] font-bold text-[14px] rounded">
                Switch to expert
            </Link>

            <button className=" text-[#000000] rounded flex items-center">
                <MailIcon className="w-5 h-5" />
               
            </button>
            <button className="text-[#000000] rounded flex items-center">
                <NotificationsIcon className="w-5 h-5 " />
               
            </button>
            
            <div className="flex items-center space-x-2 cursor-pointer text-[14px] font-bold">
                <span>Jenie James</span>
                <img
                    src={PROFILE}
                    alt="Profile"
                    className="w-8 h-8 rounded-full"
                />
            </div>
        </div>
    </div>
);
};

export default LoginHeader