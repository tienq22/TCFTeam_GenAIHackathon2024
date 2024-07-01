import { useNavigate } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";
import Loader from "../components/Loader";
import { toast } from "react-toastify";
import { useCreateExamMutation } from "../slices/examsApiSlice";
import "./styles/homeScreen.css";

const HomeScreen = () => {
  const navigate = useNavigate();
  const [createExam, { isLoading }] = useCreateExamMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { examId } = await createExam().unwrap();
      if (examId) {
        navigate(`/take-exam/${examId}`);
        toast.success("Exam created successfully");
      }
    } catch (error) {
      toast.error(error?.data?.message);
    }
  };

  return (
    <Container className='home-screen-container'>
      <Row className='justify-content-center text-center'>
        <Col>
          <h2 className='subtitle'>Đề thi Tiếng anh THPT Quốc Gia</h2>
        </Col>
      </Row>
      <Row className='justify-content-center text-center'>
        <Col>
          <h3 className='highlight'>With AI</h3>
        </Col>
      </Row>
      <Row className='justify-content-center text-center'>
        <Col>
          {isLoading ? (
            <Loader />
          ) : (
            <Button className='btn-start' onClick={submitHandler}>
              Làm bài ngay
            </Button>
          )}
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col className='image-col'>
          <img
            src='/Giaodientruockhilambai.png'
            alt='Illustration'
            className='illustration'
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HomeScreen;
