import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import Message from "../components/Message";
import CountdownTimer from "../components/CountDownTimer";
import { useGetExamDetailsQuery } from "../slices/examsApiSlice";
import "./styles/takeExamScreen.css";

const TakeExamScreen = () => {
  const navigate = useNavigate();
  const { id: examId } = useParams();
  const { data: examData, isLoading, error } = useGetExamDetailsQuery(examId);

  const [answers, setAnswers] = useState([]);

  const renderQuestions = (questions) =>
    questions.map((question) => (
      <div key={question._id}>
        <p>{question.question}</p>
        <ul className='options'>
          {question.options.map((option, i) => (
            <li key={i}>{option}</li>
          ))}
        </ul>
      </div>
    ));

  const handleAnswerChange = (questionNum, option) => {
    const updatedAnswers = [...answers];
    updatedAnswers[questionNum - 1] = option;
    setAnswers(updatedAnswers);
  };

  return isLoading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>
      {error?.status} {JSON.stringify(error?.data)}
    </Message>
  ) : !examData ? (
    <Message variant='danger'>Exam not found.</Message>
  ) : (
    <div className='exam-container'>
      <div className='header'>
        <h1 className='title'>Đề bài</h1>
        <div className='user-info'>
          <button className='logout-btn'>THOÁT</button>
        </div>
      </div>
      <div className='exam-content'>
        <div className='question-section sidebar'>
          {Object.keys(examData.parts).map((partKey) => (
            <div key={partKey}>
              <text className='questionType'>
                {examData.parts[partKey].questionType}
              </text>
              {renderQuestions(examData.parts[partKey].questions)}
              {examData.parts[partKey].passage && (
                <text>{examData.parts[partKey].passage}</text>
              )}
            </div>
          ))}
        </div>
        <div className='sidebar'>
          <div className='timer'>
            <span>Thời gian còn lại:</span>
            <div className='time'>{<CountdownTimer />}</div>
          </div>
          <button className='submit-btn'>NỘP BÀI</button>
          {[...Array(50).keys()].map((num) => (
            <div key={num} className='question-item'>
              <span>{num + 1}</span>
              <div className='options'>
                {["A", "B", "C", "D"].map((option, i) => (
                  <button
                    key={option}
                    onClick={() => handleAnswerChange(num + 1, option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TakeExamScreen;
