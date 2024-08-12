import { TextField } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const ForgotPassword = () => {
    return (
        <section className='flex justify-center items-center w-full h-[85vh]'>
            <div className='max-w-[480px] flex flex-col gap-10'>
                <div className='w-full flex flex-col gap-1'>
                    <p className='text-[#212B36] text-[32px] font-bold'>Forgot your password?</p>
                    <p className='font-normal text-[#637381] text-[16px]'>Please enter the email address associated with your account, and we&apos;ll email you a link to reset your password.</p>
                </div>
                <div className='flex flex-col'>
                    <TextField id="outlined-basic" className='w-full' label="Email address" variant="outlined" />
                    <Link href='/otp-verification' className='w-full bg-[#3C23B5] mt-6 text-center text-white py-3 px-5 rounded'>Reset Password</Link>
                    <Link href='/login' className='w-full mt-2 text-[#3C23B5] text-center bg-white py-3 px-5 rounded font-bold'>Back</Link>
                </div>
            </div>
            
        </section>
    )
}

export default ForgotPassword