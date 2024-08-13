
'use client';
import React from 'react'
import Login from '../../../component/authentication/Login/Login'
import { loginClient, loginExpert } from '../../../component/utils/api'
import { useRouter } from 'next/navigation'; 
import { useSearchParams } from 'next/navigation';
import { useSnackbar } from 'notistack';


const page = () => {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get a specific query parameter value
  const role = searchParams.get('role');


  const handleLogin = async (data) => {
    try {
      let response:any ={}
      
     if(role === 'expert') {
      data.login_type = 'email';
       response = await loginExpert(data);
     }else{
       response = await loginClient(data);
     }
      if (response.success) {
        enqueueSnackbar(response.message, { variant: 'success' })
        if(role === 'expert') {
          let res = {
            token:response.token,
            data : response.savedUser
          }
          sessionStorage.setItem('userData', JSON.stringify(res));

          router.push('/expert');
         }else{
 let res = {
            token:response.token,
            data : response.admin
          }
          sessionStorage.setItem('userData', JSON.stringify(res));

          router.push('/client');
         } // Navigate to login page
        // showToaster('Signup successful!', 'success');
        // Navigate to login page
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
    <Login sendLogin = {handleLogin}  />
   </>
  )
}

export default page