// import React from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import Loader from "../components/Loader";
// import Message from "../components/Message";
// import { useGetExamDetailsQuery } from "../slices/examsApiSlice";

// const TakeExamScreen = () => {
//   const navigate = useNavigate();
//   const { id: examId } = useParams();
//   const { data: examData, isLoading, error } = useGetExamDetailsQuery(examId);

//   // const Question = () => {
//   //   const questionElements = [];
//   // for (let i = 0; i < questions.length; i++) {
//   //   questionElements.push(
//   //     <div key={i}>
//   //       <h3>Question {i + 1}</h3>
//   //       <p>{questions[i].question}</p>
//   //       <p>Options: {questions[i].options.join(', ')}</p>
//   //       <p>Correct Option: {questions[i].correctOption}</p>
//   //       <p>Answer Detail: {questions[i].answerDetail}</p>
//   //     </div>
//   //   );
//   // }
  


//   return isLoading ? (
//     <Loader />
//   ) : error ? (
//     <Message variant='danger'>
//       {error?.status} {JSON.stringify(error?.data)}
//     </Message>
//   ) : (
//     <div>
//       <div>
//         <h1>Đề bài</h1>
//       </div>
//       <div>
//         <text>{examData.parts.part1.questionType}</text> <br></br>
//         <text>{examData.parts.part1.questions[0].question}</text>
//         <ul class="">
//           <li>{examData.parts.part1.questions[0].options[0]}</li>
//           <li>{examData.parts.part1.questions[0].options[1]}</li>
//           <li>{examData.parts.part1.questions[0].options[2]}</li>
//           <li>{examData.parts.part1.questions[0].options[3]}</li>
//         </ul>
//         <br></br>
//         <text>{examData.parts.part1.questions[1].question}</text>
//         <ul class="">
//           <li>{examData.parts.part1.questions[1].options[0]}</li>
//           <li>{examData.parts.part1.questions[1].options[1]}</li>
//           <li>{examData.parts.part1.questions[1].options[2]}</li>
//           <li>{examData.parts.part1.questions[1].options[3]}</li>
//         </ul>
//         {/* <text>{questionElements}</text> */}

        
//       </div>
//     </div>

//   );

// };

// export default TakeExamScreen;

import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useGetExamDetailsQuery } from "../slices/examsApiSlice";

const TakeExamScreen = () => {
  const navigate = useNavigate();
  const { id: examId } = useParams();
  const { data: examData, isLoading, error } = useGetExamDetailsQuery(examId);

  return isLoading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>
      {error?.status} {JSON.stringify(error?.data)}
    </Message>
  ) : (
    <>Exam data load successfully</>
  );
};

export default TakeExamScreen;
