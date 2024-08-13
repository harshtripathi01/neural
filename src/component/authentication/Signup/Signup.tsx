'use client';

import { GOOGLE_URL, LINKDIEN_URL, LOGO_URL, X_URL } from '@/component/utils/constant';
import { ICON_HEIGHT, ICON_WIDTH, LOGO_HEIGHT, LOGO_WIDTH } from '@/component/utils/width';
import Image from 'next/image';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Link from 'next/link';

// Validation schema using yup
const signupSchema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
});

const Signup = ({ handleSignup }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(signupSchema),
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmit = (data) => {
    console.log(data);
    handleSignup({...data,login_type:'email'});
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
            <form className='flex flex-col gap-6' onSubmit={handleSubmit(onSubmit)}>
              <div className='flex gap-4'>
                <Controller
                  name="firstName"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      id="outlined-basic"
                      className='w-full'
                      label="First name"
                      variant="outlined"
                      error={!!errors.firstName}
                      helperText={errors.firstName?.message}
                    />
                  )}
                />
                <Controller
                  name="lastName"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      id="outlined-basic1"
                      className='w-full'
                      label="Last name"
                      variant="outlined"
                      error={!!errors.lastName}
                      helperText={errors.lastName?.message}
                    />
                  )}
                />
              </div>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="outlined-basic2"
                    className='w-full'
                    label="Email address"
                    variant="outlined"
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />
                )}
              />
              {/* <Controller
                name="invitationCode"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="outlined-basic3"
                    className='w-full'
                    label="Invitation Code"
                    variant="outlined"
                    error={!!errors.invitationCode}
                    helperText={errors.invitationCode?.message}
                  />
                )}
              /> */}
              <FormControl className='w-full' variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <OutlinedInput
                      {...field}
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
                      error={!!errors.password}
                    />
                  )}
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
              </FormControl>
              <button type='submit' className='w-full bg-[#3C23B5] text-white py-3 px-5 rounded text-center'>
                Register
              </button>
            </form>
            <p className='text-[#637381] font-normal text-[14px] ml-4'>
              By signing up, I agree to Neural <span className='text-[#212B36] text-[14px] font-semi-med'>Terms of Service</span> and <span className='text-[#212B36] text-[14px] font-semi-med'>Privacy Policy.</span>
            </p>
            <p className='text-[#212B36] text-[14px] font-semi-med text-end'>Already have an account? <Link href='/login' className='text-[#3C23B5] text-[14px] font-semi-med'>Login</Link></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
