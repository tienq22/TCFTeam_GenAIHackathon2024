import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import "./styles/homeScreen.css";

const HomeScreen = () => {
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
          <Button className="btn-start">Làm bài ngay</Button>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="image-col">
          <img src="/Giaodientruockhilambai.png" alt="Illustration" className="illustration" />
        </Col>
      </Row>
    </Container>
  );
};

export default HomeScreen;
