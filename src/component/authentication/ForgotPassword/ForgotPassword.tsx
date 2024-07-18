import { TextField } from '@mui/material'
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
                    <button className='w-full bg-[#3C23B5] mt-6 text-white py-3 px-5 rounded'>Reset Password</button>
                    <button className='w-full mt-2 text-[#3C23B5] bg-white py-3 px-5 rounded font-bold'>Back</button>
                </div>
            </div>
            
        </section>
    )
}

export default ForgotPassword