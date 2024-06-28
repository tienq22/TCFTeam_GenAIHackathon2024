import { EXAMS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const examsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createExam: builder.mutation({
      query: () => ({
        url: EXAMS_URL,
        method: "POST",
      }),
      invalidatesTags: ["Exam"],
    }),
    getExamDetails: builder.query({
      query: (examId) => ({
        url: `${EXAMS_URL}/${examId}`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useCreateExamMutation, useGetExamDetailsQuery } = examsApiSlice;
