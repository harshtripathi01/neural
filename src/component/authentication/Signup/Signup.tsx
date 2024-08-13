'use client';

import { GOOGLE_URL, LINKDIEN_URL, LOGO_URL, X_URL } from '@/component/utils/constant';
import { ICON_HEIGHT, ICON_WIDTH, LOGO_HEIGHT, LOGO_WIDTH } from '@/component/utils/width';
import Image from 'next/image';
import React from 'react';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import { Checkbox } from '@mui/material';
import Link from 'next/link';

const Signup = () => {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

   
    return (
        <section className='w-full h-full'>
            <div className='w-full h-fit flex flex-col items-center justify-center mt-8'>
                <div className='w-full flex justify-center items-center'>
                    <div className='flex flex-col gap-6 justify-center max-w-[480px] w-full h-full p-2'>
                        <div className='flex flex-col gap-2'>
                            <p className='text-[24px] font-bold'>Get started</p>
                        </div>
                        <div className='flex justify-center gap-2'>
                            <div className='w-full h-[48px] border flex justify-center items-center rounded-lg cursor-pointer'>
                                <Image src={GOOGLE_URL} height={ICON_HEIGHT} width={ICON_WIDTH} alt='alt' />
                            </div>
                            <div className='w-full h-[48px] border flex justify-center items-center rounded-lg cursor-pointer'>
                                <Image src={LINKDIEN_URL} height={ICON_HEIGHT} width={ICON_WIDTH} alt='alt' />
                            </div>
                            <div className='w-full h-[48px] border flex justify-center items-center rounded-lg cursor-pointer'>
                                <Image src={X_URL} height={ICON_HEIGHT} width={ICON_WIDTH} alt='alt' />
                            </div>
                        </div>
                        <div className='flex justify-center items-center w-full gap-2'>
                            <hr className='w-full' />
                            <p className='text-[14px] font-normal text-[#637381]'>OR</p>
                            <hr className='w-full' />
                        </div>
                        <div className='flex flex-col gap-6'>
                            <div className='flex gap-4'>
                                <TextField id="outlined-basic" className='w-full' label="First name" variant="outlined" />
                                <TextField id="outlined-basic1" className='w-full' label="Last name" variant="outlined" />
                            </div>
                            <TextField id="outlined-basic2" className='w-full' label="Email address" variant="outlined" />
                            <TextField id="outlined-basic3" className='w-full' label="Invitation Code" variant="outlined" />
                            
                            <FormControl className='w-full' variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>
                            <Link href='/login' className='w-full bg-[#3C23B5] text-white py-3 px-5 rounded text-center'>Register</Link>
                            <p className='text-[#637381] font-normal text-[14px] ml-4'>
                                By signing up, I agree to Neural <span className='text-[#212B36] text-[14px] font-semi-med'>Terms of Service</span> and <span className='text-[#212B36] text-[14px] font-semi-med'>Privacy Policy.</span>
                            </p>
                            <p className='text-[#212B36] text-[14px] font-semi-med text-end'>Already have an account? <Link href='/login' className='text-[#3C23B5] text-[14px] font-semi-med'>Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Signup;