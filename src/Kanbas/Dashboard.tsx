import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllCourses } from "./Courses/client";
import { fetchEnrollments, enrollInCourse, unenrollFromCourse } from "./Enrollments/client";
import { setEnrollments } from "./Account/reducer";

interface Course {
    enrolled: any;
    _id: string;
    name: string;
    description: string;
    image?: string;
}

interface Enrollment {
    _id: string;
    user: string;
    course: string;
}

export default function Dashboard({ courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse, fetchCourses, enrolling, setEnrolling, updateEnrollment
}: {
    courses: Course[];
    course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void;
    fetchCourses: () => void;
    enrolling: boolean;
    setEnrolling: (enrolling: boolean) => void;
    updateEnrollment: (courseId: string, enrolled: boolean) => void;
}) {
    const [allCourses, setAllCourses] = useState<Course[]>([]);
    // const [showAllCourses, setShowAllCourses] = useState(false);
    const { currentUser, enrollments }: { currentUser: any; enrollments: Enrollment[] } = useSelector((state: any) => state.accountReducer);
    const dispatch = useDispatch();

    useEffect(() => { refresh() }, [currentUser])

    const getAllEnrollments = async () => {
        const userEnrollments = await fetchEnrollments(currentUser._id);
        dispatch(setEnrollments(userEnrollments))
    }

    const getAllCourses = async () => {
        const fetchedCourses = await fetchAllCourses();
        setAllCourses(fetchedCourses);
    };

    const handleAddCourse = async () => {
        await addNewCourse()
        await refresh()
    }

    const handleDeleteCourse = async (courseId: string) => {
        await deleteCourse(courseId)
        await refresh()
    }
    const handleUpdateCourse = async () => {
        await updateCourse()
        await refresh()
    }

    const refresh = async () => {
        await getAllCourses()
        await getAllEnrollments()
    }

    console.log("Dashboard", { courses })

    // const handleEnroll = async (courseId: string) => {
    //     await enrollInCourse(currentUser._id, courseId);
    //     await fetchCourses();
    //     await getAllEnrollments();
    // };

    // const handleUnenroll = async (courseId: string) => {
    //     await unenrollFromCourse(currentUser._id, courseId);
    //     await fetchCourses();
    //     dispatch(setEnrollments(enrollments.filter((e) => e.course !== courseId)));
    // };

    // const toggleShowAllCourses = () => setShowAllCourses(!showAllCourses);

    // const filteredCourses = showAllCourses
    //     ? allCourses
    //     : allCourses.filter((course: Course) => {
    //         return enrollments.some((enrollment: Enrollment) =>
    //             enrollment.user === currentUser._id && enrollment.course === course._id
    //         )
    //     })

    // useEffect(() => { refresh() }, [currentUser])

    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard
                <button onClick={() => setEnrolling(!enrolling)} className="float-end btn btn-primary" >
                    {enrolling ? "My Courses" : "All Courses"}
                </button></h1> <hr />
            {currentUser.role === "FACULTY" && (
                <div>
                    <h5>New Course
                        <button className="btn btn-primary float-end"
                            id="wd-add-new-course-click"
                            onClick={handleAddCourse}> Add </button>
                        <button className="btn btn-warning float-end me-2"
                            onClick={handleUpdateCourse} id="wd-update-course-click">
                            Update
                        </button>
                    </h5><br />
                    <input value={course.name} className="form-control mb-2"
                        onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                    <textarea value={course.description} className="form-control"
                        onChange={(e) => setCourse({ ...course, description: e.target.value })} />
                    <hr /></div>)}

            {/* {currentUser.role === "STUDENT" && (
                <h5>
                    <button className="btn btn-primary float-end"
                        id="wd-toggle-courses"
                        onClick={toggleShowAllCourses}>
                        {showAllCourses ? "My Enrollments" : "All Courses"}
                    </button>
                </h5>
            )} */}

            <h2 id="wd-dashboard-published">Published Courses</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="wd-dashboard-course">
                    <div className="row row-cols-1 row-cols-md-5 g-4">
                        {
                            //filteredCourses.map((course: Course) => (
                            courses.map((course: Course) => (
                                <div className="wd-dashboard-course col" style={{ width: "300px" }} key={course._id}>
                                    <div className="card rounded-3 overflow-hidden">
                                        <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                            to={`/Kanbas/Courses/${course._id}/Home`}>
                                            <img src={course.image} width="100%" height={200} />
                                            <div className="card-body">
                                                <h5 className="wd-dashboard-course-title card-title">
                                                    {enrolling && (
                                                        <button onClick={(event) => {
                                                            event.preventDefault();
                                                            updateEnrollment(course._id, !course.enrolled);
                                                        }} className={`btn ${course.enrolled ? "btn-danger" : "btn-success"} float-end`} >
                                                            {course.enrolled ? "Unenroll" : "Enroll"}
                                                        </button>
                                                    )}
                                                    {course.name}
                                                </h5>
                                                <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                                                    {course.description}
                                                </p>
                                                <button className="btn btn-primary"> Go </button>

                                                {currentUser.role === "FACULTY" && (
                                                    <>
                                                        <button onClick={(e) => {
                                                            e.preventDefault()
                                                            handleDeleteCourse(course._id)
                                                        }} className="btn btn-danger float-end"
                                                            id="wd-delete-course-click">
                                                            Delete
                                                        </button>
                                                        <button id="wd-edit-course-click"
                                                            onClick={(event) => {
                                                                event.preventDefault();
                                                                setCourse(course);
                                                            }}
                                                            className="btn btn-warning me-2 float-end">
                                                            Edit
                                                        </button>
                                                    </>
                                                )}
                                                {/* {currentUser.role === "STUDENT" && (
                                                    enrollments.some((enrollment) =>
                                                        enrollment.user === currentUser._id && enrollment.course === course._id
                                                    ) ? (
                                                        <button
                                                            onClick={(event) => {
                                                                event.preventDefault();
                                                                handleUnenroll(course._id);
                                                            }}
                                                            className="btn btn-danger float-end"
                                                        >
                                                            Unenroll
                                                        </button>
                                                    ) : (
                                                        <button
                                                            onClick={(event) => {
                                                                event.preventDefault();
                                                                handleEnroll(course._id);
                                                            }}
                                                            className="btn btn-success float-end"
                                                        >
                                                            Enroll
                                                        </button>
                                                    )
                                                )} */}

                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
