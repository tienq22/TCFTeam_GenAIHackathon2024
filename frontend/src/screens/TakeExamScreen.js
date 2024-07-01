<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react";
import { useSelector } from "react-redux";
=======
=======
>>>>>>> 68eea1e ([FE] Update js & css fol HomeScreen, LoginScreen, TakeExamScreen])
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
<<<<<<< HEAD
>>>>>>> f4e8046 (Linh)
=======
=======
import React, { useState, useEffect } from "react";
>>>>>>> b5526bc ([FE] Update js & css fol HomeScreen, LoginScreen, TakeExamScreen])
>>>>>>> 68eea1e ([FE] Update js & css fol HomeScreen, LoginScreen, TakeExamScreen])
=======
//import React from "react";
import React, { useState, useEffect } from 'react';
>>>>>>> 6ceba03 (Updae css)
import { useNavigate, useParams } from "react-router-dom";
import { Form } from "react-bootstrap";
import Loader from "../components/Loader";
import Message from "../components/Message";
import CountdownTimer from "../components/CountDownTimer";
import { toast } from "react-toastify";
import { useGetExamDetailsQuery } from "../slices/examsApiSlice";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { useSubmitExamMutation } from "../slices/takeExamApiSlice";
import "./styles/takeExamScreen.css";
=======
import './styles/takeExamScreen.css';

// function processData(data) {
//   const result = [];
//   for (let i = 0; i < data.length; i++) {
//     const item = data[i];
//     result.push(
//       <tr key={i}>
//         <td>{item.name}</td>
//         <td>{item.age}</td>
//         <td>{item.city}</td>
//       </tr>
//     );
//   }
//   return result;
// }
>>>>>>> f4e8046 (Linh)
=======
>>>>>>> af15e36 ([FE] Update css for top bar of RegisterScreen, LoginScreen & HomeScreen)
=======
=======
import './styles/takeExamScreen.css';
>>>>>>> b5526bc ([FE] Update js & css fol HomeScreen, LoginScreen, TakeExamScreen])
>>>>>>> 68eea1e ([FE] Update js & css fol HomeScreen, LoginScreen, TakeExamScreen])
=======
import './styles/takeExamScreen.css';
import CountdownTimer from '../slices/CounterDownTimer';


>>>>>>> 6ceba03 (Updae css)

const TakeExamScreen = () => {
  const navigate = useNavigate();
  const { id: examId } = useParams();
  const { data: examData, isLoading, error } = useGetExamDetailsQuery(examId);
<<<<<<< HEAD
  const [submitExam, { isLoading: examSubmitLoading }] =
    useSubmitExamMutation();

  const [userAnswers, setUserAnswers] = useState({});
  const { userInfo } = useSelector((state) => state.auth);

  let questionNum = 0;

  const renderQuestions = (questions) =>
    questions.map((question) => (
      <div key={question._id}>
        <span>
          <strong>Question {++questionNum}</strong>:{" "}
          <span dangerouslySetInnerHTML={{ __html: question.question }}></span>
        </span>

        <ul className='options'>
          {question.options.map((option, i) => (
            <li dangerouslySetInnerHTML={{ __html: option }} key={i}></li>
          ))}
        </ul>
      </div>
    ));

  const handleAnswerChange = (questionNum, option) => {
    const updatedAnswers = { ...userAnswers };
    updatedAnswers[questionNum] = option;
    setUserAnswers(updatedAnswers);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { takenId } = await submitExam({
        userId: userInfo._id,
        examId,
        submitDate: new Date(),
        userAnswers,
      }).unwrap();
      toast.success("Đã nộp bài thành công!");
      navigate(`/result/${takenId}`);
    } catch (error) {
      toast.error(error?.data?.message);
    }
  };
=======
  const [answers, setAnswers] = useState(Array(50).fill(null));
>>>>>>> 6ceba03 (Updae css)


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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 68eea1e ([FE] Update js & css fol HomeScreen, LoginScreen, TakeExamScreen])
    <>Exam data load successfully</>
=======
    <div className="exam-container">
      <div className="header">
<<<<<<< HEAD
        <h1 className="title">Đề 001</h1>
        <div className="user-info">
          <span className="user-icon">abc</span>
          <button className="logout-btn">THOÁT</button>
        </div>
      </div>
      <div className="exam-content">
        <div className="col col-half question-section sidebar">
          <h4>{examData.parts.part1.questionType}</h4>
          {examData.parts.part1.questions.map((question, index) => (
            <div key={index}>
              <p>{question.question}</p>
              <ul className="options">
                {question.options.map((option, i) => (
                  <li key={i}>{option}</li>
                ))}
              </ul>
            </div>
          ))}
          <h4>{examData.parts.part2.questionType}</h4>
          {examData.parts.part2.questions.map((question, index) => (
            <div key={index}>
              <p>{question.question}</p>
              <ul className="options">
                {question.options.map((option, i) => (
                  <li key={i}>{option}</li>
                ))}
              </ul>
            </div>
          ))}
          <h4>{examData.parts.part3.questionType}</h4>
          {examData.parts.part3.questions.map((question, index) => (
            <div key={index}>
              <p>{question.question}</p>
              <ul className="options">
                {question.options.map((option, i) => (
                  <li key={i}>{option}</li>
                ))}
              </ul>
            </div>
          ))}
          <h4>{examData.parts.part4.questionType}</h4>
          {examData.parts.part4.questions.map((question, index) => (
            <div key={index}>
              <p>{question.question}</p>
              <ul className="options">
                {question.options.map((option, i) => (
                  <li key={i}>{option}</li>
                ))}
              </ul>
            </div>
          ))}
          
        </div>
        <div className=" col col-half sidebar">
          <div className="timer">
            <span>Thời gian còn lại:</span>
            <div className="time">59:30</div>
=======
        <h1 className="title">MÃ ĐỀ THI: E001-2024</h1>
=======
    <div className="exam-container">
      <div className="header">
        <h1 className="title">Đề bài</h1>
>>>>>>> 6ceba03 (Updae css)
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
<<<<<<< HEAD
            <div className="time">{formatTime(timeLeft)}</div>
>>>>>>> 68eea1e ([FE] Update js & css fol HomeScreen, LoginScreen, TakeExamScreen])
          </div>
          <button className="submit-btn">NỘP BÀI</button>
          <div className="question-list question-list-scroll">
            {[...Array(10).keys()].map((num) => (
<<<<<<< HEAD
              <div key={num} className="question-item">
                <span>{num + 1}</span>
                <div className="options">
                  {['A', 'B', 'C', 'D'].map((option) => (
                    <button key={option}>{option}</button>
=======
              <div key={num} className="question-item-right">
                <span className="question-number">{num + 1}</span>
                <div className="options-right">
                  {['A', 'B', 'C', 'D'].map((option) => (
                    <button key={option} className="option-button-right">{option}</button>
>>>>>>> 68eea1e ([FE] Update js & css fol HomeScreen, LoginScreen, TakeExamScreen])
=======
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
>>>>>>> 6ceba03 (Updae css)
                  ))}
                </div>
              </div>
            ))}
             
          </div>
        </div>
      </div>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f4e8046 (Linh)
=======
    <>Exam data load successfully</>
>>>>>>> af15e36 ([FE] Update css for top bar of RegisterScreen, LoginScreen & HomeScreen)
=======
>>>>>>> b5526bc ([FE] Update js & css fol HomeScreen, LoginScreen, TakeExamScreen])
>>>>>>> 68eea1e ([FE] Update js & css fol HomeScreen, LoginScreen, TakeExamScreen])
=======
>>>>>>> 6ceba03 (Updae css)
  );
};

export default TakeExamScreen;