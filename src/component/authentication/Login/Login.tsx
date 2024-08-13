'use client'
import { GOOGLE_URL, LINKDIEN_URL, LOGO_URL, X_URL } from '@/component/utils/constant';
import { ICON_HEIGHT, ICON_WIDTH, LOGO_HEIGHT, LOGO_WIDTH } from '@/component/utils/width';
import Image from 'next/image';
import React from 'react';
import TextField from '@mui/material/TextField';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Checkbox} from '@mui/material';
import Link from 'next/link'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const Login = () => {

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [role, setRole] = React.useState('');

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const handleRoleChange = (event) => {
    setRole(event.target.value);
};
  return (
    <section className='w-full h-full'>

      <div className='w-full h-fit flex flex-col items-center justify-center mt-10'>
        {/* Login starts */}
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
            <div className='flex flex-col gap-6'>

              <TextField id="outlined-basic" className='w-full' label="Email address" variant="outlined" />
              <FormControl variant="outlined" className='w-full'>
                                <InputLabel id="role-select-label">Select Role</InputLabel>
                                <Select
                                    labelId="role-select-label"
                                    value={role}
                                    onChange={handleRoleChange}
                                    label="Select Role"
                                >
                                    <MenuItem value="" disabled>Select Role</MenuItem>
                                    <MenuItem value="client">Client</MenuItem>
                                    <MenuItem value="expert">Expert</MenuItem>
                                </Select>
                            </FormControl>
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

              <div className='flex items-center justify-between'>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
                <Link href='/reset-password' className='text-[#181E4B] font-bold text-[14px] cursor-pointer'>Forgot password?</Link>
              </div>

              <button className='w-full bg-[#3C23B5] text-white py-3 px-5 rounded'>Login</button>
              <p className='text-[#212B36] text-[14px] font-semi-med text-end'>Don't have an account ? <Link href='/signup' className='text-[#3C23B5] text-[14px] font-semi-med'>Get Started</Link>
              </p>

            </div>
          </div>
        </div>
        {/* Login ends */}
      </div>
    </section>
  );
}

export default Login;
