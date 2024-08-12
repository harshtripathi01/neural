"use client";
import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import HtmlEditor from '@/component/htmlEditor';




function ChevronUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m18 15-6-6-6 6" />
    </svg>
  )
}
const EditorSection = () => {
  


  return (
    <div>
  <div className="flex flex-col items-center justify-center mt-8">
  {/* <div className="flex items-center justify-between w-full max-w-4xl mb-8">
        <h1 className="text-2xl font-bold">Help your network understand better</h1>
        <hr className="w-[34%] border-t-2 border-[#C0C0C0] mt-4" />
        <Button variant="ghost" className="flex items-center">
          <ChevronUpIcon className="w-4 h-4 mr-1 text-[16px] text-[#000000]" />
          Close
        </Button>
      </div> */}
     <div className="w-auto h-auto pt-6 mt-10 mb-4">
        <div className="space-y-4">
          <div className="flex flex-col items-center space-x-2 space-y-8">
            <h2 className="w-full h-auto  text-[18px] font-bold text-[#000000]" >Q1 What is the difference between Symmetric and Asymmetric encryption?</h2>

<HtmlEditor/>
           
          </div>
          <div className='w-full h-full flex justify-end gap-3 mt-6'>
                    
                    <button className='py-2 text-[#3C23B5] rounded-full font-bold text-[16px]'>Cancel</button>
                    <button className='bg-[#3C23B5] px-12 py-2 text-white rounded-[50px] text-[16px] font-bold'>Add</button>
                    </div>
        
        </div>
      </div>
    </div>

    </div>
)
}

export default EditorSection