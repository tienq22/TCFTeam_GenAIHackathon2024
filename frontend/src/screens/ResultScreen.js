import { useNavigate, useParams } from "react-router-dom";
import { useGetExamScoreQuery } from "../slices/takeExamApiSlice";
import Message from "../components/Message";
import Loader from "../components/Loader";

const ResultScreen = () => {
  const navigate = useNavigate();
  const { id: takenId } = useParams();
  const { data, isLoading, error } = useGetExamScoreQuery(takenId);

  const clickHandler = (e) => {
    e.preventDefault();
    navigate(`/result/${takenId}/details`);
  };

  return isLoading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>
      {error?.status} {JSON.stringify(error?.data)}
    </Message>
  ) : (
    <>
      <h1>Chúc mừng bạn đã hoàn thành bài thi!</h1>
      <p>Số câu đúng: {data.rightAnswersCount}</p>
      <p>Số câu sai: {data.wrongAnswersCount}</p>
      <button onClick={clickHandler}>Xem đáp án chi tiết</button>
    </>
  );
};

export default ResultScreen;
