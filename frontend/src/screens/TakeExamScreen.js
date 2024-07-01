import { useState } from "react";
import { useParams } from "react-router-dom";
import { Form } from "react-bootstrap";
import Loader from "../components/Loader";
import Message from "../components/Message";
import CountdownTimer from "../components/CountDownTimer";
import { useGetExamDetailsQuery } from "../slices/examsApiSlice";
import "./styles/takeExamScreen.css";

const TakeExamScreen = () => {
  const { id: examId } = useParams();
  const { data: examData, isLoading, error } = useGetExamDetailsQuery(examId);

  const [answers, setAnswers] = useState({});

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
    const updatedAnswers = { ...answers };
    updatedAnswers[questionNum] = option;
    setAnswers(updatedAnswers);
  };

  const submitHandler = (e) => {
    e.preventDefault();
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
              <p className='questionType'>
                {examData.parts[partKey].questionType}
              </p>
              {examData.parts[partKey].passage && (
                <p>{examData.parts[partKey].passage}</p>
              )}
              {renderQuestions(examData.parts[partKey].questions)}
            </div>
          ))}
        </div>
        <div className='sidebar'>
          <div className='timer'>
            <span>Thời gian còn lại:</span>
            <div className='time'>{<CountdownTimer />}</div>
          </div>
          <Form onSubmit={submitHandler}>
            <button type='submit' className='submit-btn'>
              NỘP BÀI
            </button>
            {[...Array(50).keys()].map((num) => (
              <div key={num} className='question-item'>
                <span>{num + 1}</span>
                <div className='options'>
                  {["A", "B", "C", "D"].map((option, i) => (
                    <Form.Check
                      inline
                      label={option}
                      type='radio'
                      name={`question-${num}`}
                      key={i}
                      checked={answers[num] === i}
                      onChange={() => handleAnswerChange(num, i)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </Form>
        </div>
      </div>
    </div>
  );
};

export default TakeExamScreen;
