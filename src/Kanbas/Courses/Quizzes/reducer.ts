import { createSlice } from "@reduxjs/toolkit";
// import { assignments } from "../../Database";
const initialState = {
  quizzes: [],
};
const quizSlice = createSlice({
    name: "quizzes",
    initialState,
    reducers: {
      setQuiz: (state, action) => {
        state.quizzes = action.payload;
      },  
      addQuiz: (state, { payload: quiz }) => {
        const newQuiz: any = {
          _id: quiz.id || new Date().getTime().toString(),
          title: quiz.title || "",  
          course: quiz.course || "",
          points: quiz.points || 0,
          due: quiz.due || "",
          questions: quiz.questions || [],
          numberOfQuestions: quiz.numberOfQuestions || 0,
          availability: quiz.avalability || "",
          score: quiz.score || 0,
        };
        state.quizzes = [...state.quizzes, newQuiz] as any;
      },
      deleteQuiz: (state, { payload: quizId }) => {
        state.quizzes = state.quizzes.filter(
          (q: any) => q._id !== quizId);
      },
      updateQuiz: (state, { payload: quiz }) => {
        state.quizzes = state.quizzes.map((q: any) =>
          q._id === quiz._id ? quiz : q
        ) as any;
      },
    },
  });
  export const { addQuiz, deleteQuiz, updateQuiz, setQuiz } =
    quizSlice.actions;
  export default quizSlice.reducer;