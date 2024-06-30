import { useNavigate } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";
import Loader from "../components/Loader";
import { toast } from "react-toastify";
import { useCreateExamMutation } from "../slices/examsApiSlice";

const HomeScreen = () => {
  const navigate = useNavigate();
  const [createExam, { isLoading }] = useCreateExamMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { examId } = await createExam().unwrap();
      navigate(`/take-exam/${examId}`);
    } catch (error) {
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
    </>
  );
};

export default HomeScreen;
