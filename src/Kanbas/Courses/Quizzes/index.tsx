import { BsGripVertical } from "react-icons/bs";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { VscNotebook } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import * as coursesClient from "../client";
import { setQuiz, addQuiz, updateQuiz, deleteQuiz } from "./reducer";
import { useParams } from "react-router";
import { useEffect, useState } from "react";

export default function Quizzes() {

    const { cid } = useParams();
    // const [quizName, setQuizName] = useState("");
    const { quizzes } = useSelector((state: any) => state.quizReducer);
    const dispatch = useDispatch();

    const fetchQuiz = async () => {
        const Quizzes = await coursesClient.findQuizzesForCourse(cid as string);
        dispatch(setQuiz(Quizzes));
    };
    useEffect(() => {
        fetchQuiz();
    }, []);

    console.log("quizzes", quizzes);
    
    return (
        <div id="wd-quizzes">

            <ul id="wd-quizzes-title" className="list-group rounded-0">
                <li className="wd-quizzes list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-1 fs-2" />
                        <MdOutlineArrowDropDown className="me-1 fs-2" />
                        QUIZZES
                    </div>

                    <ul className="wd-quizz-list list-group rounded-0">
                        {quizzes
                            .map((quiz: any) => (
                                <li className="wd-quiz-list-item list-group-item p-3 ps-1 d-flex align-items-center">
                                    <div className="me-3 d-flex align-items-start">
                                        <BsGripVertical className="me-2 fs-3" />
                                        <VscNotebook className="me-2 fs-3" style={{ color: "green" }} />
                                    </div>
                                    <div style={{ flexGrow: 1 }}>
                                        <div style={{ fontSize: "19px" }}>
                                            {quiz.title}
                                            {/* {currentUser.role === "FACULTY" ? (
                                                <a className="wd-assignment-link"
                                                    href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                                                    {quiz.title}
                                                </a>
                                            ) : (
                                                <span>{quiz.title}</span>
                                            )} */}
                                        </div>
                                        <div style={{ fontSize: "14px" }}>
                                            <span style={{ color: "red" }}>Multiple Modules</span>
                                            {/* <span> | <strong>Not available until</strong> {quiz.startWritten} |</span> */}
                                        </div>
                                        <div style={{ fontSize: "14px" }}>
                                            {/* | <strong>Due</strong> {quiz.dueWritten}| {quiz.points} pts */}
                                        </div>
                                    </div>
                                    <div className="ms-auto">
                                        {/* <HomeworkControlButtons quiz={quiz._id}
                                            assignmentName={quiz.title}
                                            deleteAssignment={(qid) => removeAssignment(qid)} /> */}
                                    </div>
                                </li>
                            ))}
                    </ul>
                </li>
            </ul>
        </div>
    );
}

