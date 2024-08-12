"use client";


import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import {  PROFILE } from '@/component/utils/constant'
import React, { useRef } from 'react';

 
export default function ProfileSection() {
    const fileInputRef = useRef(null);

    const handleUploadClick = () => {
        fileInputRef.current.click(); // Trigger the file input click
      };
    
      const handleFileChange = (event) => {
        const file = event.target.files[0]; // Get the selected file
        if (file) {
          console.log("Selected file:", file.name); // Log the file name
          // You can add further logic here to handle the file upload
        }
      };
  return (
    
        <div className="w-full h-auto mx-6 my-6">
        <div className="flex items-center p-4">
        <img
                    src={PROFILE}
                    alt="Profile"
                    className="w-[85px] h-[85px] rounded-full"
                  
                />
          <div className="ml-2">
            <div className="font-bold text-[20px]">James Heathfield <span className="font-bold text-[20px]">@</span>  <span className="text-muted-foreground text-[20px]">CTO / IBM</span></div>
            <div className="text-muted-foreground text-[14px]">CTO / IBM</div>
            <div className="text-muted-foreground text-[14px]">Level 7</div>
          </div>
         

        </div>
        <div className="flex justify-end gap-4 mr-60">
      <button className='py-2 text-[#3C23B5] rounded-full font-bold text-[14px]' onClick={handleUploadClick}>
        Download
      </button>
      <button 
        className='bg-[#3C23B5] px-10 py-2 text-white rounded-[50px] text-[14px] font-bold'
        onClick={handleUploadClick}
      >
        Upload Resume
      </button>
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileChange} 
        style={{ display: 'none' }} // Hide the file input
      />
    </div>
        
        <div className="ml-4 flex justify-start gap-2">
            <div className="font-bold text-[20px]">Experience <span className="text-muted-foreground text-[14px]">/ Last Update in 2023</span></div>
            <hr className="w-[60%] border-t-2 border-[#C0C0C0] mr-60 mt-6" />
          </div>
        
      </div> 
   
  )
}


