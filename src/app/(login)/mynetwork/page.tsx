
"use client"
import React, { useEffect, useState } from 'react';
import MyNetwork from '@/component/myNetwork/myNetwork';
import { getAllAdmin ,getAllUser} from '@/component/utils/api';
import { enqueueSnackbar } from 'notistack';








const page = () => {
  const[users,setUsers] =useState([])

  useEffect( () => {
 
 

    (async () => {
      try {
     
        let data:any = sessionStorage.getItem('userData');
        if (data) {
          data = JSON.parse(data);
          if (data && !!data.data?.adminId ) {
           
            const anotherRespont = await getAllAdmin();
    
            if (!!anotherRespont) {
              // enqueueSnackbar(anotherRespont.message, { variant: 'success' })
              setUsers(anotherRespont.data)
            }
  
  
  
            
      }else{
       
  
        const anotherRespont = await getAllUser();
    
        if (!!anotherRespont) {
          // enqueueSnackbar(anotherRespont.message, { variant: 'success' })
          setUsers(anotherRespont.data)
        }
      }
    
      }
      } catch (error) {
        // Handle network error
        console.log(error);
      }
    })()
  
  },[])


  return (
    <>
    <MyNetwork users={users}/>


    </>
)
}

export default page