import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import '../styles/submitScreen.css';

const SubmitScreen = () => {
  return (
    <Container className="submit-screen-container">
      <Row className="justify-content-center text-center">
        <Col>

          <h1 className="subtitle">Đề thi Tiếng anh THPT Quốc Gia</h1>
        </Col>
      </Row>
      <Row className="justify-content-center text-center">
        <Col>
          <h2 className="highlight">With AI</h2>
        </Col>
      </Row>
      <Row className="justify-content-center text-center">
        <Col>
          <Button className="btn-start">Làm bài Ngay</Button>
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

export default SubmitScreen;



/* import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import '../styles/submitScreen.css';

const SubmitScreen = () => {
  return (
    <Container className="submit-screen-container">
      <Row className="justify-content-center text-center">
        <Col>
          <h1 className="title">ElisAI</h1>
        </Col>
      </Row>
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
          <img src="/images/GIAO DIEN TRUOC KHI VAO LAM BAI.PNG" alt="Illustration" className="illustration" />
        </Col>
      </Row>
    </Container>
  );
};

export default SubmitScreen;
*/