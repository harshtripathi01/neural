import React from 'react';
import { Search, ArrowLeft, Edit,Send } from 'lucide-react';
import { PROFILE } from '@/component/utils/constant'

const Chats = () => {
  const conversations = [
    { id: 1, name: 'Xian Zhou', lastMessage: 'How To Boost...', time: '3 days' },
    { id: 2, name: 'Valdemar Forsberg', lastMessage: 'How To Boost Traffic...', time: '1 hours' },
    { id: 3, name: 'Lewis Simmons', lastMessage: 'Internet Banner...', time: '10 hours' },
    { id: 4, name: 'Mo Chun', lastMessage: 'Free Real Estate...', time: '3 days' },
    { id: 5, name: 'Mgbankwo Orjee', lastMessage: '6 Powerful Tips To...', time: '10 hours' },
  ];

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
            <button><Edit /></button>
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
          {conversations.map((convo) => (
            <div key={convo.id} className="flex items-center p-3 hover:bg-gray-100 cursor-pointer">
               <img
                    src={PROFILE}
                    alt="Profile"
                    className="w-[55px] h-[55px] rounded-full"
                  
                />
              <div className="flex-1">
                <h3 className="font-bold text-[14px] text-[#212B36]">{convo.name}</h3>
                <p className="text-normal text-[14px] text-[#637381]">{convo.lastMessage}</p>
              </div>
              <span className="text-normal text-[12px] text-[#919EAB]">{convo.time}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Right chat area */}
      <div className="flex-1 flex flex-col ">
        <div className="p-4 flex items-center border-b-2 ">
        <img
                    src={PROFILE}
                    alt="Profile"
                    className="w-[35px] h-[35px] rounded-full"
                  
                />
          <div className='ml-4 text-[14px]'>
            <h2 className="font-bold text-[#212B36] ">Lewis Simmons</h2>
            <p className="text-normal text-[#637381]">Active Now</p>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          <div className="bg-[#C8FACD] p-3 rounded-lg max-w-xs ml-auto mb-2">
            <p>Hey John, I am looking for the best admin template. Could you please help me to find it out? 🙂</p>
            <p className="text-right text-xs text-gray-500 mt-1">4:02 PM</p>
          </div>
          <div className="bg-[#F4F6F8] p-3 rounded-lg max-w-xs mb-2">
            <p>Stack admin is the responsive admin template.</p>
            <p className="text-right text-xs text-gray-500 mt-1">4:02 PM</p>
          </div>
          <div className="bg-[#C8FACD] p-3 rounded-lg max-w-xs ml-auto">
            <p>Looks clean and fresh UI. 😃</p>
            <p className="text-right text-xs text-gray-500 mt-1">4:02 PM</p>
          </div>
        </div>
        <div className="flex items-center bg-white rounded-full w-3/4">
            <input
              type="text"
              placeholder="Type a message"
              className="flex-1 p-4 border border-[#99A7B4] rounded-lg ml-2"
            />
            <button className="p-4  text-[#637381] border border-[#99A7B4] rounded-full  ml-4">
              <Send size={20} />
            </button>
          </div>
      </div>
    </div>
    </div>
  );
};

export default Chats;