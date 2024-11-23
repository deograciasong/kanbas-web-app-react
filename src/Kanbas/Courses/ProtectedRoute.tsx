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

import { useSelector, useDispatch } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { fetchEnrollments } from "../Enrollments/client";
import { setEnrollments } from "../Account/reducer";
import { useEffect } from "react";


interface Enrollment {
  _id: string;
  user: string;
  course: string;
}

export default function CourseProtectedRoute({ children }: { children: any }) {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const { currentUser, enrollments }: { currentUser: any; enrollments: Enrollment[] } = useSelector((state: any) => state.accountReducer);
  console.log("enrolled Courses", enrollments)

  const getAllEnrollments = async () => {
    const userEnrollments = await fetchEnrollments(currentUser._id);
    dispatch(setEnrollments(userEnrollments))
  }
  useEffect(() => { getAllEnrollments() }, [currentUser])

  const isEnrolled = enrollments.some(
    (enrollment: { user: any; course: string; }) => enrollment.user === currentUser._id && (enrollment.course == cid)
  );
  if (isEnrolled) {
    return children;
  } else {
    return <Navigate to="/Kanbas/Dashboard" replace />;
  }
}


