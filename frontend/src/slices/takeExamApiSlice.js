import { TAKE_EXAM_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const takeExamApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    submitExam: builder.mutation({
      query: (examSubmission) => ({
        url: TAKE_EXAM_URL,
        method: "POST",
        body: { ...examSubmission },
      }),
      invalidatesTags: ["Exam"],
    }),

    getExamScore: builder.query({
      query: (takenId) => ({
        url: `${TAKE_EXAM_URL}/${takenId}`,
      }),
      keepUnusedDataFor: 5,
    }),

    getExamDetailedAnswers: builder.query({
      query: (takenId) => ({
        url: `${TAKE_EXAM_URL}/${takenId}/details`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useCreateExamMutation, useGetExamDetailsQuery } =
  takeExamApiSlice;