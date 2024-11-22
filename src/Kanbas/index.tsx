import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";
import { useEffect, useState } from "react";
// update this to import the right protected route
import ProtectedRoute from "./Account/ProtectedRoute";
import CourseProtectedRoute from "./Courses/ProtectedRoute"
import Session from "./Account/Session";
import { useSelector } from "react-redux";


export default function Kanbas() {
  const [usersCourses, setUsersCourses] = useState<any[]>([]);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const fetchCourses = async () => {
    try {
      const courses = await userClient.findMyCourses();
      setUsersCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, [currentUser]);


  const [courseToBeAdded, setCourseToBeAdded] = useState<any>({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
  });

  const addNewCourse = async () => {
    const newCourse = await userClient.createCourse(courseToBeAdded);
    setUsersCourses([...usersCourses, newCourse]);
  };
  const deleteCourse = async (courseId: string) => {
    const status = await courseClient.deleteCourse(courseId);
    setUsersCourses(usersCourses.filter((course) => course._id !== courseId));
  };
  const updateCourse = async () => {
    await courseClient.updateCourse(courseToBeAdded);
    setUsersCourses(usersCourses.map((c) => {
      if (c._id === courseToBeAdded._id) {
        return courseToBeAdded;
      } else { return c; }
    }));
  };


  return (
    <Session>
      <div id="wd-kanbas">
        <KanbasNavigation />
        <div className="wd-main-content-offset p-3">
          <Routes>
            <Route path="/" element={<Navigate to="/Kanbas/Account" />} />
            <Route path="Account/*" element={<Account />} />
            <Route path="Dashboard" element={<ProtectedRoute>
              <Dashboard
                course={courseToBeAdded}
                setCourse={setCourseToBeAdded}
                addNewCourse={addNewCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse} /> </ProtectedRoute>} />
            <Route path="Courses/:cid/*" element={<CourseProtectedRoute><Courses courses={usersCourses} /></CourseProtectedRoute>} />
            <Route path="/Calendar" element={<h1>Calendar</h1>} />
            <Route path="/Inbox" element={<h1>Inbox</h1>} />
          </Routes>
        </div>
      </div>
    </Session>
  );
}
