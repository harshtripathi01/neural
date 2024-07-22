'use client'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import React from 'react'

const ConfirmPassword = () => {
    
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };


    return (
        <section className='flex justify-center items-center w-full h-[85vh]'>
            <div className='max-w-[480px] w-full flex flex-col gap-10'>
                <div className='w-full flex flex-col gap-1'>
                    <p className='text-[#212B36] text-[32px] font-bold'>Reset Password</p>
                </div>
                <div className='flex flex-col gap-6'>
                    <TextField id="outlined-basic" className='w-full' label="New Password" variant="outlined" />
                    <FormControl sx={{ width: '25ch' }} className='w-full' variant="outlined">
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
                    <button className='w-full bg-[#3C23B5] mt-6 text-white py-3 px-5 rounded'>Login</button>
                </div>
            </div>
        </section>
    )
}

export default ConfirmPassword