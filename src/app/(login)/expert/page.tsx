'use client';
import React, { useEffect, useState } from 'react';
import ExpertAnswer from '@/component/expertAnswer/expertAnswer';
import EditorSection from '@/component/editorSection/editorSection';
import ExpertTalk from '@/component/expertTalk/expertTalk';
import { enqueueSnackbar } from 'notistack';
import { answerQuestion, getAllQuesstion } from '@/component/utils/api'
import { set } from 'react-hook-form';
import { Button } from "@/components/ui/button"









const page = () => {

  const [dta,useDta] = useState([])

useEffect( () => {

  (async () => {
    try {
    
      const response = await getAllQuesstion();
      if (response.success) {
        enqueueSnackbar(response.message, { variant: 'success' })
useDta(response.data)
      } else {
        // Handle error response
        console.log(response.error);
      }
    } catch (error) {
      // Handle network error
      console.log(error);
    }
  })()

},[])

  const handleAnswerQuestion = async (data) => {
    try {
    
      const response = await answerQuestion({...data});
      if (response.success) {
        enqueueSnackbar(response.message, { variant: 'success' })

      } else {
        // Handle error response
        console.log(response.error);
      }
    } catch (error) {
      // Handle network error
      console.log(error);
    }
  };


  function ChevronUpIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m18 15-6-6-6 6" />
      </svg>
    )
  }
  return (
    <>

<div className='flex flex-col items-center justify-center mt-8'>
<div className="flex items-center justify-between w-full max-w-4xl mb-8">
  <h1 className="text-2xl font-bold flex items-center w-full">
    Help your network understand better
    <span className="flex-grow ml-4">
      <hr className="border-t-2 border-[#C0C0C0] mt-4" />
    </span>
  </h1>
       
        <Button variant="ghost" className="flex items-center">
          <ChevronUpIcon className="w-4 h-4 mr-1 text-[16px] text-[#000000]" />
          Close
        </Button>
      </div>
      </div>
{
dta.length > 0 && dta.map((item) => {

  return (
    <>
    
  <ExpertAnswer answerQuestion = {handleAnswerQuestion} data={item} />
    </>
  )
})
}
{/* <EditorSection/> */}
<ExpertTalk/>




    </>
)
}

export default page