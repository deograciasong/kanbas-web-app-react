import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import assignmentReducer from "./Courses/Assignments/reducer";
import enrollmentReducer from "./reducer"
import quizReducer from "./Courses/Quizzes/reducer";
import questionReducer from "./Courses/Quizzes/questionReducer";
import resultsReducer from "./Courses/Results/reducer";
const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    assignmentReducer,
    enrollmentReducer,
    quizReducer,
    questionReducer,
    resultsReducer,
  },
});
export default store;