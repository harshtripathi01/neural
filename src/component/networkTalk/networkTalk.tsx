"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {  PICTURE } from '@/component/utils/constant'



function MessageCircleIcon(props) {
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
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
      </svg>
    )
  }
export default function NetworkTalk() {
  return (
    <div className="flex flex-col items-center justify-center mt-20 bg-[#F5F5F5]">
    <div className="flex items-center justify-between w-full max-w-4xl mb-14 mt-20">
      <h1 className="text-2xl font-bold">What’s your network talking about</h1>
    </div>
    {[1,2,3,4].map((item) => (
       <Card className="w-[665px] h-auto  p-6 shadow-sm rounded mb-8">
       <div className="flex items-center p-4">
       <img
                    src={PICTURE}
                    alt="Profile"
                    className="w-[55px] h-[55px] rounded-full"
                  
                />
         <div className="ml-4">
           <div className="font-bold text-[20px]">James Heathfield</div>
           <div className="text-muted-foreground text-[14px]">CTO / IBM</div>
         </div>
       </div>
       <CardContent className="p-4 text-[16px]">
         <p>
           A botnet is a network of internet-connected devices, each of which is running one or more bots. Botnets can
           be used to perform distributed denial-of-service (DDoS) attacks, steal data, send spam, and allow the
           attacker to access the device and its connection. The owner can control the botnet using command and control
           (C&C) software.
         </p>
       </CardContent>
       <CardFooter className="p-4">
         <Button variant="ghost" size="sm" className="text-muted-foreground">
           <MessageCircleIcon className="w-4 h-4 mr-2 text-[16px]" />
           10 Reply
         </Button>
       </CardFooter>
     </Card>  
    ))}
   
    </div>
  )
}


