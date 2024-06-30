import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import React, { useState } from 'react';
import { useGetExamDetailsQuery } from "../slices/examsApiSlice";
import { useCreateExamMutation } from "../slices/examsApiSlice";
import { Container, Row, Col, Form, Button, ToggleButton, ToggleButtonGroup, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/ResultExamScreenStyles.css';

const ResultExamScreen = () => {
  const [radioValues, setRadioValues] = useState(Array(10).fill(''));
  const [modalShow, setModalShow] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const {navigate} = useNavigate();
  const [createExam] = useCreateExamMutation();
  const examId = "66802f28930640536fe056e7";
  const { data: examData, isLoading, error } = useGetExamDetailsQuery(examId);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const examId = "667f85aa53a5d01825c0ce73"
        navigate(`/exams/${examId}`);
        toast.success("Exam created successfully");
    } catch (error) {
      toast.error(error?.data?.message);
    }
  };

  const handleRadioChange = (value, index) => {
    const newRadioValues = [...radioValues];
    newRadioValues[index] = value;
    setRadioValues(newRadioValues);
  };

  const handleShowDetails = (index) => {
    setModalContent(`Details for question ${index + 1}`);
    setModalShow(true);
  };
  
const QuestionForm = () => (
  <div className="scrollable">
    <Form>
      {examData/* {[
        examData.parts.part1.questions
      ].map((question, index) => (
        <Row className="mb-3" key={index}>
          <Form.Group as={Col} controlId={`formGridQuestion${index + 1}`}>
            <Form.Label>{question}</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Row>
      ))} */}
    </Form>
  </div>
);

const AnswerTable = ({ radioValues, handleRadioChange, handleShowDetails }) => (
  <div className="scrollable">
    <table className="table mt-3">
      <thead>
        <tr>
          <th>#</th>
          <th>Answer</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: 10 }).map((_, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>
              <ToggleButtonGroup
                type="radio"
                name={`question${index + 1}`}
                value={radioValues[index]}
                onChange={(value) => handleRadioChange(value, index)}
              >
                {examData/* {examData.parts.part1.questions.map((value) => (
                  <ToggleButton
                    key={value}
                    id={`q${index + 1}-${value}`}
                    type="radio"
                    variant={radioValues[index] === value ? 'primary' : 'outline-primary'}
                    value={value}
                  >
                    {value}
                  </ToggleButton>
                ))} */}
              </ToggleButtonGroup>
            </td>
            <td>
              <Button variant="success" onClick={() => handleShowDetails(index)}>
                CHI TIẾT
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

if (isLoading) return <div>Loading...</div>;
// if (error) return <div>Error: {error.message}</div>;
  return (
    <Container>
      <Row>
        <Col md={8}>
          <div className="d-flex justify-content-between align-items-center">
            <h1>ElisAI</h1>
            <Button variant="primary" className="custom-pink" onClick={submitHandler}>
              TẠO ĐỀ MỚI
            </Button>
          </div>
          <h3>Chi tiết đáp án đề ôn luyện số #001</h3>
          <QuestionForm />
        </Col>
        <Col md={4}>
          <h3>ĐÁP ÁN</h3>
          {/* <Button variant="info" className="custom-pink" onClick={() => handleButtonClick(`/exams/retry`)}>
            LÀM LẠI NGAY
          </Button> */}
          <AnswerTable
            radioValues={radioValues}
            handleRadioChange={handleRadioChange}
            handleShowDetails={handleShowDetails}
          />
        </Col>
      </Row>

      <Modal show={modalShow} onHide={() => setModalShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Chi Tiết</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalContent}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ResultExamScreen;
