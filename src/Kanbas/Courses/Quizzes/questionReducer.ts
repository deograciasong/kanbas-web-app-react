import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  questions: [],
};
const questionSlice = createSlice({
    name: "questions",
    initialState,
    reducers: {
      setQuestion: (state, action) => {
        state.questions = action.payload;
      },  
      addQuestion: (state, { payload: question }) => {
        const newQuestion: any = {
          _id: question.id || new Date().getTime().toString(),
          title: question.title || "",  
          quiz: question.quiz || "",
          points: question.points || 0,
          choices: question.choices || [],
        };
        state.questions = [...state.questions, newQuestion] as any;
      },
      deleteQuestion: (state, { payload: questionId }) => {
        state.questions = state.questions.filter(
          (q: any) => q._id !== questionId);
      },
      updateQuestion: (state, { payload: question }) => {
        state.questions = state.questions.map((q: any) =>
          q._id === question._id ? question : q
        ) as any;
      },
    },
  });
  export const { addQuestion, deleteQuestion, updateQuestion, setQuestion } =
    questionSlice.actions;
  export default questionSlice.reducer;