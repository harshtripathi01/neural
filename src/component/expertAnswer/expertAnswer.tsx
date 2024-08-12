"use client";
import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"




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
const ExpertAnswer = () => {
  const [questionType, setQuestionType] = useState('multiple');
  const [editingIndex, setEditingIndex] = useState(null);
  const [optionLabels, setOptionLabels] = useState([
    'Option1',
    'Option2',
    'Option3',
    'Option4',
  ]);


  return (
    <div>
  <div className="flex flex-col items-center justify-center mt-8">
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
     <Card className="w-[665px] h-auto pt-6 shadow-lg border-l-2 border-r-2 border-b-4 border-[#c6c6c6] border-t-0 mt-10">
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <h2 className="w-full h-auto  text-[18px] font-bold text-[#000000]" >Q1 What is the difference between Symmetric and Asymmetric encryption?</h2>


            
          </div>
          <RadioGroup>
            <div className="space-y-4 px-6">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="10M" id="10M" />
                <Label className='text-[#34364A] font-[400] text-[14px]' htmlFor="10M">Encryption is fast but more vulnerable.</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="10-30M" id="10-30M" />
                <Label className='text-[#34364A] font-[400] text-[14px]' htmlFor="10-30M">Encryption is slow due to high computation.</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="30-50M" id="30-50M" />
                <Label className='text-[#34364A] font-[400] text-[14px]' htmlFor="30-50M">Symmetric encryption is Used for bulk data transmission.</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="other" id="other" />
                <Label className='text-[#34364A] font-[400] text-[14px]' htmlFor="other">Add option or add 'Other'</Label>
              </div>
            </div>
          </RadioGroup>
          <div className="flex justify-end">
            <Button variant="link" className="text-[#3C23B5] text-[16px] font-bold">
              Ask Perspective
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>

    </div>
)
}

export default ExpertAnswer