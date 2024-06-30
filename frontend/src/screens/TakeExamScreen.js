
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useGetExamDetailsQuery } from "../slices/examsApiSlice";
import './styles/takeExamScreen.css';



const TakeExamScreen = () => {
  const navigate = useNavigate();
  const { id: examId } = useParams();
  const { data: examData, isLoading, error } = useGetExamDetailsQuery(examId);

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

  return isLoading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>
      {error?.status} {JSON.stringify(error?.data)}
    </Message>
  ) : (
    <div className="exam-container">
      <div className="header">
        <h1 className="title">Đề 001</h1>
        <div className="user-info">
          <span className="user-icon">abc</span>
          <button className="logout-btn">THOÁT</button>
        </div>
      </div>
      <div className="exam-content">
        <div className="question-section sidebar">
          <text>{examData.parts.part1.questionType}</text>
          {renderQuestions(examData.parts.part1.questions)}

          <text>{examData.parts.part2.questionType}</text>
          {renderQuestions(examData.parts.part2.questions)}

        <text>{examData.parts.part3.questionType}</text>
        {renderQuestions(examData.parts.part3.questions)}

        <text>{examData.parts.part4.questionType}</text>
        {renderQuestions(examData.parts.part4.questions)}

        <text>{examData.parts.part5.questionType}</text>
        {renderQuestions(examData.parts.part5.questions)}

        <text>{examData.parts.part6.questionType}</text>
        {renderQuestions(examData.parts.part6.questions)}

        <text>{examData.parts.part7.questionType}</text>
        {renderQuestions(examData.parts.part7.questions)}

        <text>{examData.parts.part8.questionType}</text>
        {renderQuestions(examData.parts.part8.questions)}

        <text>{examData.parts.part9.questionType}</text>
        {renderQuestions(examData.parts.part9.questions)}

        <text>{examData.parts.part10.questionType}</text>
        {renderQuestions(examData.parts.part10.questions)}

        <text>{examData.parts.part11.questionType}</text>
        {renderQuestions(examData.parts.part11.questions)}

        <text>{examData.parts.part12.questionType}</text>
        {renderQuestions(examData.parts.part12.questions)}

          
        </div>
        <div className="sidebar">
          <div className="timer">
            <span>Thời gian còn lại:</span>
            <div className="time">59:30</div>
          </div>
          <button className="submit-btn">NỘP BÀI</button>
          <div className="question-list question-list-scroll">
            {[...Array(10).keys()].map((num) => (
              <div key={num} className="question-item">
                <span>{num + 1}</span>
                <div className="options">
                  {['A', 'B', 'C', 'D'].map((option) => (
                    <button key={option}>{option}</button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TakeExamScreen;

