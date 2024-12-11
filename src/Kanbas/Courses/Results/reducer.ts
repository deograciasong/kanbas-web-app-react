import { createSlice } from "@reduxjs/toolkit";
// import { assignments } from "../../Database";
const initialState = {
  results: [],
};
const resultSlice = createSlice({
    name: "results",
    initialState,
    reducers: {
      setResult: (state, action) => {
        state.results = action.payload;
      },  
      addResult: (state, { payload: result }) => {
        const newResult: any = {
          _id: result.id || new Date().getTime().toString(),
          user: result.user || "",
            quiz: result.quiz || "",
          points: result.points || 0,
          answers: result.answers || [],
          attempts: result.attempts || 0,
        };
        state.results = [...state.results, newResult] as any;
      },
      deleteResult: (state, { payload: resultId }) => {
        state.results = state.results.filter(
          (r: any) => r._id !== resultId);
      },
      updateResult: (state, { payload: result }) => {
        state.results = state.results.map((r: any) =>
          r._id === result._id ? result : r
        ) as any;
      },
    },
  });
  export const { addResult, deleteResult, updateResult, setResult } =
    resultSlice.actions;
  export default resultSlice.reducer;