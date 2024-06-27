import { Row, Col, Button } from "react-bootstrap";

const HomeScreen = () => {
  const submitHandler = () => {};

  return (
    <>
      <Row>
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
    </>
  );
};

export default HomeScreen;
