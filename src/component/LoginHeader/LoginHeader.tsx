"use client";

import React, { useState } from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import {PROFILE} from '@/component/utils/constant'
import Link from 'next/link';
import { usePathname} from 'next/navigation';
import {  MessageCircle, Package, Mail, Truck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';


const LoginHeader = () => {


    const NotificationItem = ({ icon, title, description, time}) => (
        <div className="flex items-start space-x-4 mb-4">
          <div className="bg-blue-100 p-2 rounded-full">
            {icon}
          </div>
          <div className="flex-1">
            <p className="font-medium">{title}</p>
            <p className="text-sm text-gray-500">{description}</p>
            <p className="text-xs text-gray-400 mt-1">{time}</p>
          </div>
        </div>
      );

    const [isOpen, setIsOpen] = useState(false);
  const [notifications] = useState([
    {
      id: 1,
      icon:  <img
      src={PROFILE}
      alt="Profile"
      className="w-8 h-8 rounded-full"
  />,
      title: "Sadou Mokaté answered to your comment on the minimal",
      description: "",
      time: "07 Sep 2020",
      isNew: true
    },
    {
      id: 2,
      icon: <Package className="h-4 w-4 text-yellow-500" />,
      title: "Your order is placed",
      description: "waiting for shipping",
      time: "07 Sep 2020",
      isNew: true
    },
    {
      id: 3,
      icon: <MessageCircle className="h-4 w-4 text-blue-500" />,
      title: "You have new message",
      description: "5 unread messages",
      time: "07 Sep 2020",
      isNew: false
    },
    {
      id: 4,
      icon: <Mail className="h-4 w-4 text-red-500" />,
      title: "You have new mail",
      description: "sent from guido padberg",
      time: "07 Sep 2020",
      isNew: false
    },
    {
      id: 5,
      icon: <Truck className="h-4 w-4 text-green-500" />,
      title: "Delivery processing",
      description: "your order is being shipped",
      time: "07 Sep 2020",
      isNew: false
    }
  ]);


  const unreadCount = notifications.filter(n => n.isNew).length;


    let name = null;
    if (sessionStorage.getItem('userData')) {
        const userData = JSON.parse(sessionStorage.getItem('userData')!);
        if (userData && userData.data) {
            name = userData.data.firstName + ' ' + userData.data.lastName;
        }
    }

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
            <button className="text-[#000000] rounded flex items-center" onClick={() => setIsOpen(!isOpen)}>
                <NotificationsIcon className="w-5 h-5 " />    
            </button>

            <div className="relative mt-20">
     
     {isOpen && (
       <Card className="absolute right-0 mt-2 w-80 max-h-[90vh] overflow-y-auto">
         <CardHeader>
           <CardTitle className="text-lg font-semibold flex justify-between items-center">
             Notifications
             <span className="text-sm text-green-500">✓</span>
           </CardTitle>
           <p className="text-sm text-gray-500">You have {unreadCount} unread messages</p>
         </CardHeader>
         <CardContent>
           <div className="mb-4">
             <h3 className="text-xs font-semibold text-gray-400 mb-2">NEW</h3>
             {notifications.filter(n => n.isNew).map(notification => (
               <NotificationItem key={notification.id} {...notification} />
             ))}
           </div>
           <div>
             <h3 className="text-xs font-semibold text-gray-400 mb-2">BEFORE THAT</h3>
             {notifications.filter(n => !n.isNew).map(notification => (
               <NotificationItem key={notification.id} {...notification} />
             ))}
           </div>
         </CardContent>
       </Card>
     )}
   </div>

            <div className="flex items-center space-x-2 cursor-pointer text-[14px] font-bold">
               <Link href="/profile"><span>{name}</span></Link>
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