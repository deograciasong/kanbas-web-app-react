import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";
import { useEffect, useState } from "react";
import ProtectedRoute from "./Account/ProtectedRoute";
import CourseProtectedRoute from "./Courses/ProtectedRoute"
import Session from "./Account/Session";
import { useSelector } from "react-redux";



export default function Kanbas() {
  const [usersCourses, setUsersCourses] = useState<any[]>([]);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [enrolling, setEnrolling] = useState<boolean>(false);

  // const fetchCourses = async () => {
  //   try {
  //     const courses = await userClient.findMyCourses();
  //     setUsersCourses(courses);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // useEffect(() => {
  //   fetchCourses();
  // }, [currentUser]);

  const findCoursesForUser = async () => {
    try {
      const courses = await userClient.findCoursesForUser(currentUser._id);
      console.log("courses:", courses);
      setUsersCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };

  const updateEnrollment = async (courseId: string, enrolled: boolean) => {
    if (enrolled) {
      await userClient.enrollIntoCourse(currentUser._id, courseId);
    } else {
      await userClient.unenrollFromCourse(currentUser._id, courseId);
    }
    setUsersCourses(
      usersCourses.map((course) => {
        if (course._id === courseId) {
          return { ...course, enrolled: enrolled };
        } else {
          return course;
        }
      })
    );
  };

  
  const fetchCourses = async () => {
    try {
      const allCourses = await courseClient.fetchAllCourses();
      const enrolledCourses = await userClient.findCoursesForUser(
        currentUser._id
      );
      console.log("enrolled courses:", enrolledCourses);
      console.log("all courses:", allCourses);
      const courses = allCourses.map((course: any) => {
        if (enrolledCourses.find((c: any) => c._id === course._id)) {
          return { ...course, enrolled: true };
        } else {
          return course;
        }
      });
      setUsersCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    console.log("enrolling:", enrolling);
    if (enrolling) {
      fetchCourses();
    } else {
      findCoursesForUser();
    }
  }, [currentUser, enrolling]);
 


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

  console.log("users courses:", usersCourses);

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
              courses={usersCourses}
                course={courseToBeAdded}
                setCourse={setCourseToBeAdded}
                fetchCourses={fetchCourses}
                addNewCourse={addNewCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse}
                enrolling={enrolling} 
                setEnrolling={setEnrolling}
                updateEnrollment={updateEnrollment}/> </ProtectedRoute>} />
            {/* <Route path="Courses/:cid/*" element={<CourseProtectedRoute><Courses courses={usersCourses} /></CourseProtectedRoute>} /> */}
            <Route path="Courses/:cid/*" element={<Courses courses={usersCourses} />} />
            <Route path="/Calendar" element={<h1>Calendar</h1>} />
            <Route path="/Inbox" element={<h1>Inbox</h1>} />
          </Routes>
        </div>
      </div>
    </Session>
  );
}
