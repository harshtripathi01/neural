"use client"
import React, { useEffect } from 'react';
import Chats from '@/component/chats/chats';
import { createGroup, createMessage, getAdminChats, getAllAdmin, getAllMessage, getAllUser, getUserChats } from '@/component/utils/api';
import { enqueueSnackbar } from 'notistack';







const page = () => {

const[chats,setChats] = React.useState([])
const[users,setUsers] = React.useState([])

  useEffect( () => {

    (async () => {
      try {
     
        let data:any = sessionStorage.getItem('userData');
        if (data) {
          data = JSON.parse(data);
          if (data && !!data.data?.adminId) {
            const response = await getAdminChats();
            if (!!response) {
             
      setChats(response.data)
            } else {
              // Handle error response
              console.log(response.error);
            }
            const anotherRespont = await getAllUser();
    
            if (anotherRespont?.statuscode == 200) {
              enqueueSnackbar(anotherRespont.message, { variant: 'success' })
              setUsers(anotherRespont.data)
            }




            
      }else{
        const response = await getUserChats();
        if (response.success) {
          enqueueSnackbar(response.message, { variant: 'success' })
  setChats(response.data)
        } else {
          // Handle error response
          console.log(response.error);
        }



        const anotherRespont = await getAllAdmin();
    
        if (anotherRespont?.statuscode == 200) {
          enqueueSnackbar(anotherRespont.message, { variant: 'success' })
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
  


const newChat = async (userId) => {
  let data:any = sessionStorage.getItem('userData');
        if (data) {
          data = JSON.parse(data);
          if (data && !!data.data?._id) {
            let adminId = data.data._id;
const response =await createGroup({adminId,userId})

if (response?._id) {
  enqueueSnackbar('New Chat created.', { variant: 'success' })

  return response;

} else {
  // Handle error response
  console.log(response.error);

}
        }
      }
    }

    //newMessage 

    const newMessage = async (data) => {
      try {
        const response = await createMessage(data);
        if (!!response) {
          enqueueSnackbar('', { variant: 'success' })
          return response;
        } else {
          // Handle error response
          console.log(response.error);
        }
      } catch (error) {
        // Handle network error
        console.log(error);
      }
    }


    const getAllmsgs = async (id) => {
      try {
        const response = await getAllMessage(id);
        if (response) {
          return response;
        } else {
          // Handle error response
          console.log(response.error);
        }
      } catch (error) {
        // Handle network error
        console.log(error);
      }
    }


  return (
    <>
<Chats chats= {chats} users = {users} addchat={newChat} sendMessage = {newMessage} getAllmsgs = {getAllmsgs} />
    </>
)
}

export default page