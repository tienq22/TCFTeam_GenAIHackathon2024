import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";
import { useGetExamDetailedAnswersQuery } from "../slices/takeExamApiSlice";
import Message from "../components/Message";
import Loader from "../components/Loader";

const DetailedAnswersScreen = () => {
  const { id: takenId } = useParams();
  const { data, isLoading, error } = useGetExamDetailedAnswersQuery(takenId);

  const [correctAnswers, setCorrectAnswers] = useState({});

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

  const options = ["A", "B", "C", "D"];
  let questionNum = 0;

  useEffect(() => {
    if (!isLoading) {
      const { parts } = data.exam;

      console.log(parts);

      const temp = [];

      for (let i = 1; i <= 12; i++) {
        temp.push(...parts[`part${i}`].questions.map((q) => q.correctOption));
      }

      let updatedCorrectAnswers = { ...correctAnswers };

      temp.forEach((opt, index) => {
        updatedCorrectAnswers[index] = opt;
      });

      setCorrectAnswers(updatedCorrectAnswers);
    }
  }, [isLoading]);

  return isLoading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>
      {error?.status} {JSON.stringify(error?.data)}
    </Message>
  ) : (
    <div className='exam-container'>
      <div className='header'>
        <h1 className='title'>Sửa chi tiết đề {data.exam._id}</h1>
      </div>
      <div className='exam-content'>
        <div className='question-section sidebar'>
          {Object.keys(data.exam.parts).map((partKey) => (
            <div key={partKey}>
              <p className='questionType'>
                {data.exam.parts[partKey].questionType}
              </p>
              {data.exam.parts[partKey].passage && (
                <p>{data.exam.parts[partKey].passage}</p>
              )}
              {renderQuestions(data.exam.parts[partKey].questions)}
            </div>
          ))}
        </div>
        <div className='sidebar'>
          {[...Array(50).keys()].map((num) => (
            <Row key={num} className='question-item'>
              <Col>{num + 1}</Col>

              <Col>
                {data.userAnswers[num] !== undefined &&
                data.userAnswers[num] !== null ? (
                  <Button
                    variant={
                      data.userAnswers[num] === correctAnswers[num]
                        ? "success"
                        : "danger"
                    }
                  >
                    {options[data.userAnswers[num]]}
                  </Button>
                ) : (
                  <Button variant='danger'>
                    {options[correctAnswers[num]]}
                  </Button>
                )}
              </Col>
            </Row>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailedAnswersScreen;
