import React, { useEffect } from 'react'
import { PROFILE } from '../utils/constant'
import { Send } from 'lucide-react'

const ChatWindow = ({chat,sendMe,getAllChats}) => {

    const [user, setUser] = React.useState(null);

    const [message, setMessage] = React.useState('');
    const[allmsg,setAllmsg] = React.useState([])


    useEffect(() => {

      (async () => {
        fetmesg();
        setUser(chat?.users[0])
      
      })()

    
      
    }, [chat])
    
const fetmesg = async () => {
    const response = await getAllChats(chat?._id)
    if(!!response){
      setAllmsg(response)
      }}

    const sendMmms = async () => {
      if (!!message) {
        const res = await sendMe({chatId:chat?._id,content: message,file:null,template:null})
        fetmesg();
        if (!!res) {
          setMessage('')
        }
      }
    }

  return (
    <div className="flex-1 flex flex-col ">
    <div className="p-4 flex items-center border-b-2 ">
    <img
                src={PROFILE}
                alt="Profile"
                className="w-[35px] h-[35px] rounded-full"
              
            />
      <div className='ml-4 text-[14px]'>
        <h2 className="font-bold text-[#212B36] ">{!!user && user?.firstName + ' ' + user?.lastName}</h2>
        <p className="text-normal text-[#637381]">{!!chat &&  chat?.chatName}</p>
      </div>
    </div>
    <div className="flex-1 overflow-y-auto p-4">

{!!allmsg && allmsg.map((msg:any) => (


  msg?.senderModel === 'Admin' ? (
    <div className="bg-[#C8FACD] p-3 rounded-lg max-w-xs ml-auto mb-2">
    <p>{msg?.content}</p>
    <p className="text-right text-xs text-gray-500 mt-1">{msg?.createdAt}</p>
  </div>

  ) : (

    <div className="bg-[#F4F6F8] p-3 rounded-lg max-w-xs mb-2">
    <p>{msg?.content}</p>
    <p className="text-right text-xs text-gray-500 mt-1">{msg?.createdAt}</p>
  </div>
  )

))}

    </div>
    <div className="flex items-center bg-white rounded-full w-3/4">
        <input
          type="text"
          placeholder="Type a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 p-4 border border-[#99A7B4] rounded-lg ml-2"
        />
        <button className="p-4  text-[#637381] border border-[#99A7B4] rounded-full  ml-4">
          <Send onClick={() => sendMmms()} size={20} />
        </button>
      </div>
  </div>
  )
}

export default ChatWindow