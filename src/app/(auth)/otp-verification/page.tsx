'use client';
import OtpVerification from '@/component/authentication/OtpVerification/OtpVerification'
import { verifiedWithEmail,loginVerifyOTP } from '@/component/utils/api'
import { useRouter, useSearchParams } from 'next/navigation';

import React from 'react'



const page = () => {

    const router = useRouter();
    const searchParams = useSearchParams();
  
    // Get a specific query parameter value
    const role = searchParams.get('role');
    const id = searchParams.get('id');


    const handleVerifyOTP = async (data) => {

        let req:any = {
            otp:data,
            verify_type: 'signup'
        }
        if(role === 'expert') {
            req.userId = id;
        }else{
            req.adminId = id;
        }

        try {
          let response:any ={}
   
         if(role === 'expert') {
           response = await loginVerifyOTP(req);
         }else{
           response = await verifiedWithEmail(req);
         }
          if (response.success) {
            router.push(`/login/?role=${role}`);

          } else {
            // showToaster(response.error, 'error');
         
          }
          // Handle successful login
        } catch (error) {
          // Handle login error
        } finally {
         
        }
      };

  
    return (
        <>
            <OtpVerification verifyOTP = {handleVerifyOTP} />
        </>
    )
}

export default page