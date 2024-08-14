'use client';
import React from 'react';
import Clientquestion from '@/component/clientQuestion/clientQuestion'
import Networktalk from '@/component/networkTalk/networkTalk'


import { postQuestion } from '@/component/utils/api'
import { enqueueSnackbar } from 'notistack';






const page = () => {

  const handlePostQuestion = async (data) => {
    try {
    
      const response = await postQuestion({...data,image:''});
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

  return (
    <>
<Clientquestion postQustion = {handlePostQuestion}/>
<Networktalk/>




    </>
)
}

export default page