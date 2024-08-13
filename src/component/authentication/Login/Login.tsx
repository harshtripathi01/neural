'use client'
import { GOOGLE_URL, LINKDIEN_URL, X_URL } from '@/component/utils/constant';
import { ICON_HEIGHT, ICON_WIDTH } from '@/component/utils/width';
import Image from 'next/image';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextField, OutlinedInput, InputLabel, InputAdornment, FormControl, IconButton, FormControlLabel, Checkbox } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Link from 'next/link';

const loginSchema = yup.object().shape({
  email: yup.string().email('Invalid email address').required('Email is required'),
  password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
});

const Login = ({sendLogin}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmit = (data) => {
    console.log(data);
    sendLogin(data);
  };

  return (
    <section className='w-full h-full'>
      <div className='w-full h-fit flex flex-col items-center justify-center mt-10'>
        <div className='w-full flex justify-center items-center'>
          <div className='flex flex-col gap-10 justify-center max-w-[480px]  w-full h-full p-2'>
            <div className='flex flex-col gap-2'>
              <p className='text-[24px] font-bold'>Sign in to Neural</p>
              <p className='text-[16px] font-normal text-[#637381]'>Enter your details below</p>
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
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="outlined-basic"
                    className='w-full'
                    label="Email address"
                    variant="outlined"
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />
                )}
              />
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
              <div className='flex items-center justify-between'>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
                <Link href='/reset-password' className='text-[#181E4B] font-bold text-[14px] cursor-pointer'>Forgot password?</Link>
              </div>
              <button type='submit'  className='w-full bg-[#3C23B5] text-white py-3 px-5  text-center rounded'>Login</button>
              <p className='text-[#212B36] text-[14px] font-semi-med text-end'>
                Don't have an account? <Link href='/signup' className='text-[#3C23B5] text-[14px] font-semi-med'>Get Started</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
