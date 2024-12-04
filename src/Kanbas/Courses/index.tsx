import { Navigate, Route, Routes, useParams } from "react-router";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import PeopleTable from "./People/Table";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Quizzes from "./Quizzes";
import { FaAlignJustify } from "react-icons/fa";
import ProtectedRoute from "./ProtectedRoute";
import { useEffect, useState } from "react";
import * as client from "./client";


export default function Courses({ courses }: { courses: any[]}) {
  const { cid } = useParams();
  const [users, setUsers] = useState<any[]>([]);
  // const course = courses.find((course) => course._id === cid);
  const [course, setCourse] = useState({name: ""});
  useEffect(() => {
    setCourse(courses.find((course) => course._id === cid));
    console.log("course", courses)
  }, [courses]) 


  const findUsersForCourse = async (course: any) => {
    const users = await client.findUsersForCourse(course);
    setUsers(users);
    };

    useEffect(() => {
      findUsersForCourse(cid);
    }, [cid]);



  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course?.name} 
      </h2> 
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="Assignments/:aid" element={<AssignmentEditor />} />
              <Route path="People" element={<PeopleTable users={users}/>} />
              <Route path="Quizzes" element={<Quizzes />} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}
