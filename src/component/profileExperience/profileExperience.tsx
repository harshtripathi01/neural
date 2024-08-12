"use client";


import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import {  PROFILE_EXPERIENCE } from '@/component/utils/constant'






  
export default function ProfileExperience() {

  return (
    <div>
    {[1,2,3,4].map((item) => (
        <div className="w-full h-auto mx-6 my-6">
        <div className="flex items-center p-4">
         
            <img src={PROFILE_EXPERIENCE} alt="James Heathfield"  className="w-[85px] h-[85px] rounded-full"/>
          
          <div className="ml-4">
            <div className="font-bold text-[20px]">Head of Design</div>
            <div className="font-semibold text-[16px]">BMW / Full Time</div>
            <div className="font-normal text-[14px] text-[#7A757D]">Jun 2024 -Present / London. England. UK</div>
          </div>
        </div>
        <div className='h-auto flex justify-end max-w-[945px] w-full ml-4'>
                        <ul className='list-disc ml-20'>
                            <li className='text-[#7A757D] font-medium text-[16px]'>A Botnet is a group of internet-connected devices such as servers, PCs, mobile devices, etc., that are affected and controlled by malware.
                           </li>
                            <li className='text-[#7A757D] font-medium text-[16px]'>It is used for stealing data, sending spam, performing distributed denial-of-service attack (DDoS attack), and more, and also to enable the user to access the device and its connection.
                            </li>
                           
                           
                        </ul>
                    </div>
      </div> 
    ))}
   
    </div>
  )
}


