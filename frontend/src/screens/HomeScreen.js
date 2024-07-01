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
      //const { examId } = await createExam().unwrap();
      const examId = "6681949cd98dfee00f16876f";
      setLoading(false); // Dừng loading sau khi nhận được examId
      if (examId) {
        navigate(`/exams/${examId}`);
        toast.success("Exam created successfully");
      }
    } catch (error) {
      setLoading(false); // Dừng loading nếu có lỗi
      toast.error(error?.data?.message);
    }
  };

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
          <Button className="btn-start" onClick={submitHandler}>Làm bài ngay</Button>
          {loading && <Loader />} {/* Hiển thị Loader khi loading */}
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
