import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
const initialState = {
  assignments: assignments,
};
const assignmentSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
      addAssignment: (state, { payload: assignment }) => {
        const newAssignment: any = {
          _id: assignment.id || new Date().getTime().toString(),
          title: assignment.title || "",  
          course: assignment.course || "",
          points: assignment.points || 0,
          description: assignment.description || "",
          start: assignment.start || "",
          due: assignment.due || "",
        };
        state.assignments.push(newAssignment);
      },
      deleteAssignment: (state, { payload: assignmentId }) => {
        state.assignments = state.assignments.filter(
          (m: any) => m._id !== assignmentId);
      },
      updateAssignment: (state, { payload: assignment }) => {
        state.assignments = state.assignments.map((m: any) =>
          m._id === assignment._id ? assignment : m
        ) as any;
      },
    },
  });
  export const { addAssignment, deleteAssignment, updateAssignment } =
    assignmentSlice.actions;
  export default assignmentSlice.reducer;