<<<<<<< HEAD
import { useState } from "react";
import { useSelector } from "react-redux";
=======
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
>>>>>>> f4e8046 (Linh)
import { useNavigate, useParams } from "react-router-dom";
import { Form } from "react-bootstrap";
import Loader from "../components/Loader";
import Message from "../components/Message";
import CountdownTimer from "../components/CountDownTimer";
import { toast } from "react-toastify";
import { useGetExamDetailsQuery } from "../slices/examsApiSlice";
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

const TakeExamScreen = () => {
  const navigate = useNavigate();
  const { id: examId } = useParams();
  const { data: examData, isLoading, error } = useGetExamDetailsQuery(examId);
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
>>>>>>> f4e8046 (Linh)
  );
};


