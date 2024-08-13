"use client"
import Signup from '@/component/authentication/Signup/Signup'
import React, { useState } from 'react'
import { signupExpert } from '../../../component/utils/api';
import { signupClient } from '../../../component/utils/api';

import { useRouter } from 'next/navigation'; 
import { useSearchParams } from 'next/navigation';
import { useSnackbar } from 'notistack';


const Page = () => {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  const searchParams = useSearchParams();

  // Get a specific query parameter value
  const role = searchParams.get('role');
  // const { showToaster } = useToaster();

  const handleSignup = async (formData) => {
    try {
      let response:any = {}
      if (role === 'expert') {
        response = await signupExpert(formData);
      }else{
      response = await signupClient(formData);
      }
      if (response?.success) {
        enqueueSnackbar(response.message, { variant: 'success' })

       let id = '';
        if(role === 'expert') {
          id = response?.user_id;
        }else{
          id = response?.admin?.adminId;
        }

        router.push(`/otp-verification/?role=${role}&id=${id}`);
      } else {
        // showToaster(response.error, 'error');
        router.push('/signup'); 
      }
    } catch (error) {
      // showToaster('An error occurred. Please try again later.', 'error');
    } finally {
      // Any cleanup actions if needed
    }
  };

  return (
    <>
      <Signup handleSignup={handleSignup}/>
    
    </>
  )
}

export default Page;
