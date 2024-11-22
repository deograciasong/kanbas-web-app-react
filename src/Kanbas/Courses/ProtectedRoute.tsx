// import React from "react";
// import { useSelector } from "react-redux";
// import { Navigate, Outlet, useParams } from "react-router-dom";

// export default function ProtectedRoute({ courseId }: { courseId?: any }) {
//     const { currentUser } = useSelector((state: any) => state.accountReducer);
//     const { cid } = useParams();
//     const enrollments = useSelector((state: any) => state.enrollmentReducer.enrollments);

//     const isEnrolled = enrollments.some(
//         (enrollment: { user: any; course: string; }) => enrollment.user === currentUser._id && (enrollment.course == cid || enrollment.course === courseId)
//     );


//     if (currentUser.role === "STUDENT" && !isEnrolled) {
//         return <Navigate to="/Kanbas/Dashboard" replace />;
//     }

//     return <Outlet />;
// }

import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
export default function CourseProtectedRoute({ children }: { children: any }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { cid } = useParams();
  const enrollments = useSelector((state: any) => state.enrollmentReducer.enrollments);
  console.log("enrolled Courses", enrollments)
  const isEnrolled = enrollments.some(
            (enrollment: { user: any; course: string; }) => enrollment.user === currentUser._id && (enrollment.course == cid)
        );
  if (currentUser.role === "STUDENT" && isEnrolled) {
    return children;
  } else {
    return <Navigate to="/Kanbas/Dashboard" replace  />;
}}
