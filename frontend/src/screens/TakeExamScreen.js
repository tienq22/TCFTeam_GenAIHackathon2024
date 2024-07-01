
import React, { useState, useEffect } from 'react';

import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useGetExamDetailsQuery } from "../slices/examsApiSlice";
import './styles/takeExamScreen.css';
import CountdownTimer from '../slices/CounterDownTimer';



const TakeExamScreen = () => {
  const navigate = useNavigate();
  const { id: examId } = useParams();
  const { data: examData, isLoading, error } = useGetExamDetailsQuery(examId);
  const [answers, setAnswers] = useState(Array(50).fill(null));


  function renderQuestions(questions) {
    return questions.map((question, index) => (
      <div key={index}>
        <p>{question.question}</p>
        <ul className="options">
          {question.options.map((option, i) => (
            <li key={i}>{option}</li>
          ))}
        </ul>
      </div>
    ));
  }

  const handleAnswerChange = (questionNum, option) => {
    const updatedAnswers = [...answers];
    updatedAnswers[questionNum] = option; // Assuming questionId starts from 1
    setAnswers(updatedAnswers);
  };
 


  

  return isLoading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>
      {error?.status} {JSON.stringify(error?.data)}
    </Message>
  ) : (
    <div className="exam-container">
      <div className="header">
        <h1 className="title">Đề bài</h1>
        <div className="user-info">
          <button className="logout-btn">THOÁT</button>
        </div>
      </div>
      <div className="exam-content">

        <div className="question-section sidebar">
          <text className="questionType">{examData.parts.part1.questionType}</text>
          {renderQuestions(examData.parts.part1.questions)}

          <text className="questionType">{examData.parts.part2.questionType}</text>
          {renderQuestions(examData.parts.part2.questions)}

          <text className="questionType">{examData.parts.part3.questionType}</text>
          {renderQuestions(examData.parts.part3.questions)}

          <text className="questionType">{examData.parts.part4.questionType}</text>
          {renderQuestions(examData.parts.part4.questions)}

          <text className="questionType">{examData.parts.part5.questionType}</text>
          {renderQuestions(examData.parts.part5.questions)}

          <text className="questionType">{examData.parts.part6.questionType}</text>
          {renderQuestions(examData.parts.part6.questions)}

          <text className="questionType">{examData.parts.part7.questionType}</text>
          <text>{examData.parts.part7.passage}</text>
          {renderQuestions(examData.parts.part7.questions)}

          <text className="questionType">{examData.parts.part8.questionType}</text>
          <text>{examData.parts.part7.passage}</text>
          {renderQuestions(examData.parts.part8.questions)}

          <text className="questionType">{examData.parts.part9.questionType}</text>
          <text>{examData.parts.part9.passages[0]}</text>
          <text>{examData.parts.part9.passages[1]}</text>
          {renderQuestions(examData.parts.part9.questions)}

          <text className="questionType">{examData.parts.part10.questionType}</text>
          {renderQuestions(examData.parts.part10.questions)}

          <text className="questionType">{examData.parts.part11.questionType}</text>
          {renderQuestions(examData.parts.part11.questions)}

          <text className="questionType">{examData.parts.part12.questionType}</text>
          {renderQuestions(examData.parts.part12.questions)}

        </div>
        <div className="sidebar">
          <div className="timer">
            <span>Thời gian còn lại:</span>
            <div className="time:">{<CountdownTimer/>}</div>
          </div>
          <button className="submit-btn">NỘP BÀI</button>
          <div className="question-list question-list-scroll">
            {
            [...Array(50).keys()].map((num) => (
              <div key={num} className="question-item">
                <span>{num + 1}</span>
                <div className="options">
                  {['A', 'B', 'C', 'D'].map((option,i) => (
                    <button  
                    key={option}                   
                    OnClick={() => handleAnswerChange(num+1, i) }
                  >
                    {option}
                    </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TakeExamScreen;


