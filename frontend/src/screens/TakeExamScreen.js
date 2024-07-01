import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useGetExamDetailsQuery } from "../slices/examsApiSlice";
import './styles/takeExamScreen.css';

const TakeExamScreen = () => {
  const navigate = useNavigate();
  const { id: examId } = useParams();
  const { data: examData, isLoading, error } = useGetExamDetailsQuery(examId);

  const [timeLeft, setTimeLeft] = useState(3600); // Set thời gian làm bài là 1 giờ (3600 giây)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime > 0 ? prevTime - 1 : 0);
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  function renderQuestions(questions) {
    return questions.map((question, index) => (
      <div key={index} className="question-item">
        <p>{question.question}</p>
        <ul className="options">
          {question.options.map((option, i) => (
            <li key={i} className="option-item">{option}</li>
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
        <h1 className="title">MÃ ĐỀ THI: E001-2024</h1>
        <div className="user-info">
          <span className="user-icon">User</span>
          <button className="logout-btn">KẾT THÚC</button>
        </div>
      </div>
      <div className="exam-content">
        <div className="question-section">
          <div className="question-scroll">
            {Object.keys(examData.parts).map((partKey) => (
              <div key={partKey}>
                <text className="questionType">{examData.parts[partKey].questionType}</text>
                {renderQuestions(examData.parts[partKey].questions)}
              </div>
            ))}
          </div>
        </div>
        <div className="sidebar">
          <div className="timer">
            <span>Thời gian còn lại:</span>
            <div className="time">{formatTime(timeLeft)}</div>
          </div>
          <button className="submit-btn">NỘP BÀI</button>
          <div className="question-list question-list-scroll">
            {[...Array(10).keys()].map((num) => (
              <div key={num} className="question-item-right">
                <span className="question-number">{num + 1}</span>
                <div className="options-right">
                  {['A', 'B', 'C', 'D'].map((option) => (
                    <button key={option} className="option-button-right">{option}</button>
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
