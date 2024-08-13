import React from 'react'

const KeyFeatures = () => {

  const data = [
    {
      "title": "Insights Platform",
      "description": "Engage in real-time question and answer sessions with experts."
    },
    {
      "title": "Advanced Search",
      "description": "Find relevant experts and content with powerful search and filter options."
    },
    {
      "title": "Neuron",
      "description": "Find intelligent answers to difficult questions using our RAG based Gen-AI system NEURON."
    },
    {
      "title": "Networking",
      "description": "Connect and collaborate with other vetted professionals on the platform"
    },
    {
      "title": "Exclusivity & Network Protection",
      "description": "Ensure a clean and high-quality network by connecting only with top professionals globally."
    },
    {
      "title": "Earnings",
      "description": "Earn money on every bit of knowledge contribution, perpetually"
    }
  ]


  return (
    <div className='w-full h-full bg-[#3C23B5CC] px-[195px] pb-[191px] mt-10'>
      <p className='text-[#FCFCFC] text-center font-bold text-[40px] pt-[104px] pb-[69px]'>Key Features</p>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
        {
          data?.map((item: any, index: any) => {
            return(
              <div key={index} className='bg-white rounded-xl px-6 py-5 h-[161px]'>
                <div className='h-full flex flex-col gap-3'>
                  <p className='text-[#3C23B5] text-[18px] font-bold'>{item?.title}</p>
                  <p className='text-[#181E4B] font-normal text-[16px]'>{item?.description}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default KeyFeatures


