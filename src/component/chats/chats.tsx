import React from 'react';
import { Search, ArrowLeft, Edit,Send, X } from 'lucide-react';
import { PROFILE } from '@/component/utils/constant';
import ChatWindow from "./chatWindow";
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { Button } from '@/components/ui/button';


const Chats = ({chats,users,addchat,sendMessage,getAllmsgs}) => {
  const conversations = [
    { id: 1, name: 'Xian Zhou', lastMessage: 'How To Boost...', time: '3 days' },
    { id: 2, name: 'Valdemar Forsberg', lastMessage: 'How To Boost Traffic...', time: '1 hours' },
   ...chats
  ];
  const [isOpen, setIsOpen] = React.useState(false);
  const [newUser, setNewUser] = React.useState('');
  const [chat, setChat] = React.useState(null as any);
  const handleOk =async () => {
   const res = await addchat(newUser)
   setChat(res)
    setIsOpen(false);
  };
  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleChange = (event) => {
    setNewUser(event.target.value);
  };


  return (

    <div>

        <div className="flex items-start justify-start w-full max-w-4xl m-12 mt-8">
      <h1 className="text-2xl font-bold">Messaging</h1>
    </div>
    <div className="flex h-auto w-[80%] bg-white m-10 p-6 shadow-lg border-l-2 border-r-2 border-b-4 border-[#c6c6c6] border-t-0 mt-10">
      {/* Left sidebar */}
      <div className="w-[28%] bg-white border-r">
        <div className="flex items-center justify-between p-4 bg-white">
        <img
                    src={PROFILE}
                    alt="Profile"
                    className="w-[55px] h-[55px] rounded-full"
                  
                />
          <div className="flex space-x-4 text-[#637381] text-[14px]">
            <button><ArrowLeft /></button>
            <button onClick={() => {
              setIsOpen(true);
            }}><Edit /></button>
            {isOpen && (
              <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-bold">New Chat</h2>
                    <button className="text-gray-500" onClick={handleCancel}>
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="mt-4">
                    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Users</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={newUser}
        label="Age"
        onChange={handleChange}
      >
          {users.map(user => (
        <MenuItem key={user._id} value={user._id}>{user.firstName+' '+user.lastName}</MenuItem>
      ))}
      </Select>
    </FormControl>
                  </div>
                  <div className="mt-4 flex items-center justify-end">
                    <Button variant="outline" onClick={handleCancel}>Cancel</Button>
                    <Button className="ml-2" onClick={() => handleOk()}>Ok</Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="p-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-2 pl-10 border border-[#99A7B4] rounded-lg text-[#919EAB]"
            />
            <Search className="absolute top-3 left-3 text-[#919EAB]" />
          </div>
        </div>
        <div className="overflow-y-auto">
          {chats.map((convo) => (
            <div key={convo._id} className="flex items-center p-3 hover:bg-gray-100 cursor-pointer" onClick={() => setChat(convo)}>
               <img
                    src={PROFILE}
                    alt="Profile"
                    className="w-[55px] h-[55px] rounded-full"
                  
                />
              <div className="flex-2">
                <h3 className="font-bold text-[14px] text-[#212B36]">{convo.users[0].firstName+' '+convo.users[0].lastName}</h3>
                <p className="text-normal text-[14px] text-[#637381]">{convo.chatName}</p>
              </div>
              {/* <span className="text-normal text-[12px] text-[#919EAB]">{convo.updatedAt}</span> */}
            </div>
          ))}
        </div>
      </div>
    {!!chat &&  <ChatWindow chat={chat} sendMe={sendMessage} getAllChats={getAllmsgs} />}
      {/* Right chat area */}
         
    </div>
    </div>
  );
};

export default Chats;