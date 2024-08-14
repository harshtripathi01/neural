"use client";
import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import HtmlEditor from '@/component/htmlEditor';
import dynamic from 'next/dynamic';
import '../expertTalk/expertTalk.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';


const ExpertAnswer = ({answerQuestion,data}) => {

const [perspective,setPerspective] = useState('');
  const [showEditor, setShowEditor] = useState(false);
  const [questionType, setQuestionType] = useState(data?.answerType);
  const [editingIndex, setEditingIndex] = useState(null);
  const [optionLabels, setOptionLabels] = useState(data?.options);
  const [selectedOption, setSelectedOption] = useState(null);
  const[solution,setSolution] = useState(null);

  HtmlEditor.modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline"],
      ["link", "image"],
      ["clean"], // Remove formatting button
    ],
  };
  
  // Quill formats to be included in the editor
  HtmlEditor.formats = ["header", "bold", "italic", "underline", "link", "image"];

  const toggleEditor = () => {
    setShowEditor(!showEditor);
  };

  const closeEditor = () => {
    setShowEditor(!showEditor);
  };
  const handlePerspectiveChange = (e) => {
    setSolution(e.target.value);
  };

  const handleSolutionChange = (value) => {
    setSolution(value);

  };

  const handlePerspectiveSubmit = () => {
   
let req = {
  solution:solution,
  file:"",
  selectedOption:selectedOption,
  questionId:data?._id
}
answerQuestion(req)


    setPerspective(''); // Clear the comment after submission
    setShowEditor(false); // Close the editor
  };



  return (
    <div>
  <div className="flex flex-col items-center justify-center mt-8">
  
     <Card className="w-[665px] h-auto pt-6 shadow-lg border-l-2 border-r-2 border-b-4 border-[#c6c6c6] border-t-0 mt-10">
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <h2 className="w-full h-auto  text-[18px] font-bold text-[#000000]" >{data?.question} </h2>


            
          </div>
      { questionType === 'multiple-choice' ?   <RadioGroup>
            <div className="space-y-4 px-6">

              {optionLabels?.map((option, index) => (
                <div className="flex items-center space-x-2" key={index}>
                <RadioGroupItem value={option} id={option +'-'+index} onClick={() => setSelectedOption(option)} />
                <Label className='text-[#34364A] font-[400] text-[14px]' htmlFor={option +'-'+index}>{option}</Label>
              </div>
              ))}
            </div>
          </RadioGroup>
          :
          <ReactQuill
            value={solution}
            onChange={handleSolutionChange}
            modules={HtmlEditor.modules}
            formats={HtmlEditor.formats}
            placeholder="Write your comment here..."
             className="expert-quill"
          />
          }


         <div className="flex justify-end">
            { questionType !== 'text' &&  <Button variant="link" className="text-[#3C23B5] text-[16px] font-bold" onClick={toggleEditor}>
             {showEditor ? '' : ' Add Perspective'}
            </Button>}
           {!!!showEditor && <button className='bg-[#3C23B5] px-12 py-2 text-white rounded-[50px] text-[16px] font-bold' onClick={handlePerspectiveSubmit}>
              Save
            </button>}

            {showEditor && (
          <div className="ml-4">
          <ReactQuill
            value={perspective}
            onChange={handlePerspectiveChange}
            modules={HtmlEditor.modules}
            formats={HtmlEditor.formats}
            placeholder="Write your comment here..."
             className="expert-quill"
          />
          <div className="flex justify-end gap-3 mt-4">
          <button className='py-2 text-[#3C23B5] rounded-full font-bold text-[16px] ' onClick={closeEditor}>Cancel</button>
            <button className='bg-[#3C23B5] px-12 py-2 text-white rounded-[50px] text-[16px] font-bold' onClick={handlePerspectiveSubmit}>
              Add
            </button>
            
          </div>
        </div>
        )}
          </div>
        </CardContent>
      </Card>
    </div>

    </div>
)
}

export default ExpertAnswer