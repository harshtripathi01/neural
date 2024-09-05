"use client";

import { Card,CardFooter } from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { PROFILE } from '@/component/utils/constant'
import Link from "next/link";







  
export default function MyNetwork({users}) {
  return (
    <div className="flex flex-col items-start justify-start m-10">
    <div className="flex items-start justify-start w-full max-w-4xl mb-6">
      <h1 className="text-2xl font-bold">Network</h1>
    </div>

    {users.map((item) => (
        <div className="w-[665px] h-auto shadow-sm rounded-[15px] mb-4">
        <div className="flex items-center p-4">
        <img
                    src={PROFILE}
                    alt="Profile"
                    className="w-[55px] h-[55px] rounded-full"
                  
                />
          <div className="ml-4  w-full">
            <div>
            <div className="font-bold text-[20px]">{item.firstName} {item.lastName} <span className="font-bold text-[20px]">@</span>  <span className="text-muted-foreground text-[16px]">CTO / IBM</span></div>
            <div className="text-muted-foreground text-[14px]">{item.email}</div>
          
          </div>
          </div>
          <div>
        <Link href="/chats" className="text-[#3C23B5] text-[16px] font-bold">
            Message
        </Link>
        </div>
        
        </div>
      
       
      </div> 
    ))}
   
    </div>
  )
}


