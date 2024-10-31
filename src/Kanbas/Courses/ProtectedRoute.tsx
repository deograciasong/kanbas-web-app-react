import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ courseId }: { courseId: any }) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const enrollments = useSelector((state: any) => state.enrollmentReducer.enrollments);

    const isEnrolled = enrollments.some(
        (enrollment: { user: any; course: string; }) => enrollment.user === currentUser._id && enrollment.course === courseId
    );

    if (currentUser.role === "STUDENT" && !isEnrolled) {
        return <Navigate to="/Kanbas/Dashboard" replace />;
    }

    return <Outlet />;
}
