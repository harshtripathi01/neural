'use client';
import React from 'react';
import Clientquestion from '@/component/clientQuestion/clientQuestion'
import Networktalk from '@/component/networkTalk/networkTalk'


import { postQuestion } from '@/component/utils/api'






const page = () => {

  const handlePostQuestion = async (data) => {
    try {
      let xxx:any =  sessionStorage.getItem('userData')
      if(!!xxx){
        xxx = JSON.parse(xxx)
      }
      const response = await postQuestion({...data,clientId:xxx?.data?._id,image:''});
      if (response.success) {
        // Handle successful response
        console.log(response.data);
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