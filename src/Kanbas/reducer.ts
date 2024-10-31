import { createSlice } from "@reduxjs/toolkit";
import { enrollments as initialEnrollments } from "./Database";

interface Enrollment {
  _id: string;
  user: string;
  course: string;
}

interface EnrollmentState {
  enrollments: Enrollment[];
}

const initialState: EnrollmentState = {
  enrollments: initialEnrollments,
};

const enrollmentSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    initializeEnrollments: (state, { payload: enrollments }) => {
      state.enrollments = enrollments; 
    },
    addEnrollment: (state, { payload: { user, course } }) => {
      const existingEnrollment = state.enrollments.find(
        (enrollment) => enrollment.user === user && enrollment.course === course
      );
      if (!existingEnrollment) {
        const newEnrollment = {
          _id: new Date().getTime().toString(),
          user,
          course,
        };
        state.enrollments.push(newEnrollment);
      }
    },
    removeEnrollment: (state, { payload: { user, course } }) => {
      state.enrollments = state.enrollments.filter(
        (enrollment) => !(enrollment.user === user && enrollment.course === course)
      );
    },
  },
});

export const { initializeEnrollments, addEnrollment, removeEnrollment } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;
