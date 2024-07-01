<<<<<<< HEAD
// import React from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import Loader from "../components/Loader";
// import Message from "../components/Message";
// import { useGetExamDetailsQuery } from "../slices/examsApiSlice";

// const TakeExamScreen = () => {
//   const navigate = useNavigate();
//   const { id: examId } = useParams();
//   const { data: examData, isLoading, error } = useGetExamDetailsQuery(examId);

//   // const Question = () => {
//   //   const questionElements = [];
//   // for (let i = 0; i < questions.length; i++) {
//   //   questionElements.push(
//   //     <div key={i}>
//   //       <h3>Question {i + 1}</h3>
//   //       <p>{questions[i].question}</p>
//   //       <p>Options: {questions[i].options.join(', ')}</p>
//   //       <p>Correct Option: {questions[i].correctOption}</p>
//   //       <p>Answer Detail: {questions[i].answerDetail}</p>
//   //     </div>
//   //   );
//   // }
  


//   return isLoading ? (
//     <Loader />
//   ) : error ? (
//     <Message variant='danger'>
//       {error?.status} {JSON.stringify(error?.data)}
//     </Message>
//   ) : (
//     <div>
//       <div>
//         <h1>Đề bài</h1>
//       </div>
//       <div>
//         <text>{examData.parts.part1.questionType}</text> <br></br>
//         <text>{examData.parts.part1.questions[0].question}</text>
//         <ul class="">
//           <li>{examData.parts.part1.questions[0].options[0]}</li>
//           <li>{examData.parts.part1.questions[0].options[1]}</li>
//           <li>{examData.parts.part1.questions[0].options[2]}</li>
//           <li>{examData.parts.part1.questions[0].options[3]}</li>
//         </ul>
//         <br></br>
//         <text>{examData.parts.part1.questions[1].question}</text>
//         <ul class="">
//           <li>{examData.parts.part1.questions[1].options[0]}</li>
//           <li>{examData.parts.part1.questions[1].options[1]}</li>
//           <li>{examData.parts.part1.questions[1].options[2]}</li>
//           <li>{examData.parts.part1.questions[1].options[3]}</li>
//         </ul>
//         {/* <text>{questionElements}</text> */}

        
//       </div>
//     </div>

//   );

// };

// export default TakeExamScreen;

import React from "react";
=======
import React, { useState, useEffect } from "react";
>>>>>>> b5526bc ([FE] Update js & css fol HomeScreen, LoginScreen, TakeExamScreen])
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useGetExamDetailsQuery } from "../slices/examsApiSlice";
<<<<<<< HEAD
=======
import './styles/takeExamScreen.css';
>>>>>>> b5526bc ([FE] Update js & css fol HomeScreen, LoginScreen, TakeExamScreen])

const TakeExamScreen = () => {
  const navigate = useNavigate();
  const { id: examId } = useParams();
  const { data: examData, isLoading, error } = useGetExamDetailsQuery(examId);

<<<<<<< HEAD
=======
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

>>>>>>> b5526bc ([FE] Update js & css fol HomeScreen, LoginScreen, TakeExamScreen])
  return isLoading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>
      {error?.status} {JSON.stringify(error?.data)}
    </Message>
  ) : (
<<<<<<< HEAD
    <>Exam data load successfully</>
=======
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
>>>>>>> b5526bc ([FE] Update js & css fol HomeScreen, LoginScreen, TakeExamScreen])
  );
};

export default TakeExamScreen;
