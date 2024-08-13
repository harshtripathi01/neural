"use client";
import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import MuiAlert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'





function ChevronUpIcon(props) {
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
const ClientQuestion = ({postQustion}) => {
  const [questionType, setQuestionType] = useState('multiple-choice');
  const [editingIndex, setEditingIndex] = useState(null);
const[qusteion, setQustion] = useState('')
 
  const [optionLabels, setOptionLabels] = useState([
    'Option1',
    'Option2',
    'Option3',
    'Option4',
  ]);

  const handleSelectChange = (value) => {
    setQuestionType(value);
  };

  const handleLabelChange = (index, value) => {
    const newLabels = [...optionLabels];
    newLabels[index] = value;
    setOptionLabels(newLabels);
  };

  const handleEditClick = (index) => {
    setEditingIndex(index); // Set the index of the label being edited
  };

  const handleQuestionSubmit = () => {

   let  req = {
      answerType:questionType,
      question:qusteion,
      options: questionType === 'multiple-choice' ? optionLabels : undefined

    }
    postQustion(req);
 
  setEditingIndex(null); // Exit edit mode
  };

  const handleBlur = () => {
    setEditingIndex(null); // Exit edit mode when input loses focus
  };
  return (
    <div>
  <div className="flex flex-col items-center justify-center mt-8">
      <div className="flex items-center justify-between w-full max-w-4xl mb-14">
        <h1 className="text-2xl font-bold">Whats Questions Do You Want To Ask Today?</h1>
        <Button variant="ghost" className="flex items-center">
          <ChevronUpIcon className="w-4 h-4 mr-1 text-[16px] text-[#000000]" />
          Close
        </Button>
      </div>
      <Card className="w-auto h-auto p-6 shadow-lg border-l-2 border-r-2 border-b-4 border-[#c6c6c6] border-t-0 mt-10" >
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-6">
            <Input onChange={(e) => setQustion(e.target.value)} placeholder="Enter your question here." className="w-[374px] h-auto py-4 text-[14px] font-semibold" />

            <Select onValueChange={handleSelectChange} value={questionType}>
            <SelectTrigger className="w-[194px] h-auto py-4 text-[14px]">
              <SelectValue placeholder="Multiple choice" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="multiple-choice">Multiple choice</SelectItem>
              <SelectItem value="text">Text</SelectItem>
            </SelectContent>
          </Select>
          </div>
          {questionType === 'multiple-choice' && (
         <RadioGroup>
         <div className="space-y-2">
              {optionLabels.map((label, index) => (
                <div key={index} className="flex  items-center py-1 space-x-2
                 ">
                  <RadioGroupItem value={label} id={`option-${index}`} />
                  {editingIndex === index ? (
                    <input
                      type="text"
                      placeholder='Enter option here'
                      onChange={(e) => handleLabelChange(index, e.target.value)}
                      onBlur={handleBlur} // Exit edit mode on blur
                      className="border-b-2 border-[#6B6B6B] focus:outline-none  w-[200px] text-[14px] font-semibold text-[#34364A]"
                    />
                  ) : (
                    <Label 
                      htmlFor={`option-${index}`} 
                      onClick={() => handleEditClick(index)} // Enter edit mode on label click
                      className="cursor-pointer text-[#34364A] font-[400] text-[14px]"
                    >
                      {label}
                    </Label>
                  )}
                </div>
              ))}
            </div>
       </RadioGroup>
          )}


{questionType === 'text' && (
 <div className="flex items-center space-x-6">
 <input 
   type="text" 
   placeholder="Answer Text" 
   readOnly 
   className="border-b-2 border-[#6B6B6B] focus:outline-none w-[374px] h-auto py-4 text-[14px] font-semibold" 
 />
</div>
)}
          <div className="flex justify-end">
            <Button variant="link" className="text-[#3C23B5] text-[16px] font-bold"onClick={handleQuestionSubmit}>
              Ask Question
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>

    </div>

    
)
}

export default ClientQuestion