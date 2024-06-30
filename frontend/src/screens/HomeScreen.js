import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import "./styles1/homeScreen.css";

const HomeScreen = () => {
  const submitHandler = () => {};

  return (
    <Container className="home-screen-container">
      <Row className="justify-content-center text-center">
        <Col>
          <h2 className="subtitle">Đề thi Tiếng anh THPT Quốc Gia</h2>
        </Col>
      </Row>
      <Row className="justify-content-center text-center">
        <Col>
          <h3 className="highlight">With AI</h3>
        </Col>
      </Row>
      <Row className="justify-content-center text-center">
        <Col>
          <h1>Đề thi Tiếng Anh THPT Quốc Gia</h1>
          <h2>WITH AI</h2>

          <Button
            type='submit'
            variant='danger'
            className='mt-2'
            onClick={submitHandler}
          >
            Làm bài ngay
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeScreen;
