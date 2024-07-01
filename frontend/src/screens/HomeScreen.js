import { useNavigate } from "react-router-dom";
import { useState } from "react"; // Thêm import useState từ React
import { Button, Container, Row, Col } from 'react-bootstrap';
import { toast } from "react-toastify";
import { useCreateExamMutation } from "../slices/examsApiSlice";
import Loader from '../components/Loader'; // Đảm bảo bạn đã nhập đúng đường dẫn của Loader
import "./styles/homeScreen.css";

const HomeScreen = () => {
  const navigate = useNavigate();
  const [createExam] = useCreateExamMutation();
  const [loading, setLoading] = useState(false); // Thêm state để quản lý trạng thái loading

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true); // Bắt đầu loading khi submit
    try {
      const { examId } = await createExam().unwrap();
      navigate(`/take-exam/${examId}`);
    } catch (error) {
      setLoading(false); // Dừng loading nếu có lỗi
      toast.error(error?.data?.message);
    }
  };

  return (
    <>
      <Row>
        <Col>
          <h1>Đề thi Tiếng Anh THPT Quốc Gia</h1>
          <h2>WITH AI</h2>

          {isLoading ? (
            <Loader />
          ) : (
            <Button
              type='submit'
              variant='danger'
              className='mt-2'
              onClick={submitHandler}
            >
              Làm bài ngay
            </Button>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default HomeScreen;
