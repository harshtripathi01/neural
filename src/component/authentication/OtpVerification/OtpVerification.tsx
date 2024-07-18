'use client'
import React , {useState} from 'react'
import OtpInput from 'react-otp-input';
import MaximizeIcon from '@mui/icons-material/Maximize';
import Image from 'next/image';
import { LEFT_URL } from '@/component/utils/constant';
import { ARROW_HEIGHT, ARROW_WIDTH } from '@/component/utils/width';

const inputStyle: any = {
    width: "50px",
    height: "50px",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2px',
    border: '1px solid grey',
    borderRadius: '4px',
    outline: 'none',
    padding: '0',
    fontSize: '16px',
    textAlign: 'center'
}

const containerStyle = {
    width: "100%",
    height: "100%",
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'end',
    gap: '5px',
    marginTop: '20px'
}


const OtpVerification = () => {
    
    const [otp, setOtp] = useState('');

    return (
        <section className='flex justify-center items-center w-full h-[85vh]'>
            <div className='max-w-[480px]'>
                <div className='flex items-center'>
                    <Image src={LEFT_URL} width={ARROW_WIDTH} height={ARROW_HEIGHT} alt='left' />
                    <span className='text-[#3C23B5] font-bold text-[13px]'>back</span>
                </div>
                <div className='flex flex-col gap-10'>
                    <div className='flex flex-col gap-4'>
                        <p className='font-bold text-[32px] text-[#212B36]'>Please check your email!</p>
                        <p className='text-[#637381] text-[16px] font-normal'>We&apos;ve emailed a 6-digit confirmation code to acb@domain, please enter the code in below box to verify your email.</p>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <OtpInput
                            value={otp}
                            onChange={setOtp}
                            numInputs={6}
                            // renderSeparator={<MaximizeIcon />}
                            renderInput={(props) => <input {...props} />}
                            containerStyle={containerStyle}
                            inputStyle={inputStyle}
                        />
                         <button className='w-full bg-[#3C23B5] mt-6 text-white py-3 px-5 rounded'>Verify</button>
                         <p className='text-[#212B36] text-[14px] font-normal cursor-pointer'>Don&apos;t have a code? <span className='text-[#3C23B5] font-bold text-[14px]'>Resend code</span></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OtpVerification