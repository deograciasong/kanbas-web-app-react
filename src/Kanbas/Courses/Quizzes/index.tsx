import { BsGripVertical } from "react-icons/bs";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { VscNotebook } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import * as coursesClient from "../client";
import { setQuiz, addQuiz, updateQuiz, deleteQuiz } from "./reducer";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import AssignmentControlButtons from "../Assignments/AssignmentControlButtons";
import QuizControl from "./QuizzesControl";
import QuizControlButtons from "./QuizControlButtons";
import * as quizClient from "./client";
import { IoEllipsisVertical } from "react-icons/io5";

export default function Quizzes() {

    const { cid } = useParams();
    const [quizName, setQuizName] = useState("");
    const { quizzes } = useSelector((state: any) => state.quizReducer);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const dispatch = useDispatch();

    const fetchQuiz = async () => {
        const Quizzes = await coursesClient.findQuizzesForCourse(cid as string);
        dispatch(setQuiz(Quizzes));
    };
    useEffect(() => {
        fetchQuiz();
    }, []);


    const createQuizForCourse = async () => {
        if (!cid) return;
        const newQuiz = { name: quizName, course: cid };
        const quiz = await coursesClient.createQuizForCourse(cid, newQuiz);
        dispatch(addQuiz(quiz));
    };

    const removeQuiz = async (qid: string) => {
        await quizClient.deleteQuiz(qid);
        console.log("qid", qid);
        dispatch(deleteQuiz(qid));
        console.log("run delete");
    };

    console.log("quizzes", quizzes);

    return (
        <div id="wd-quizzes">
            {currentUser.role === "FACULTY" && (
                <div>
                    <QuizControl setQuizName={setQuizName} quizName={quizName}
                        addQuiz={createQuizForCourse} />
                    <br /><br /><br /><br />
                </div>)}

            <ul id="wd-quizzes-title" className="list-group rounded-0">
                <li className="wd-quizzes list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-1 fs-2" />
                        <MdOutlineArrowDropDown className="me-1 fs-2" />
                        QUIZZES
                        {currentUser.role === "FACULTY" && (
                            <AssignmentControlButtons />)}
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
                                            <a className="wd-assignment-link"
                                                href={`#/Kanbas/Courses/${cid}/Quizzes/Details/${quiz._id}`}>
                                                {quiz.title}
                                            </a>
                                            {/* {currentUser.role === "FACULTY" ? (
                                                <a className="wd-assignment-link"
                                                    href={`#/Kanbas/Courses/${cid}/Quizzes/${quiz._id}`}>
                                                    {quiz.title}
                                                </a>
                                            ) : (
                                                <span>{quiz.title}</span>
                                            )} */}
                                        </div>
                                        <div style={{ fontSize: "12px" }}>
                                            <span> <strong> {quiz.availability} </strong>
                                                |  {quiz.points} pts | {quiz.numberOfQuestions} Questions</span>
                                        </div>
                                    </div>
                                    <div className="ms-auto">
                                        {currentUser.role === "FACULTY" ? (
                                            <QuizControlButtons quizId={quiz._id} quizName={quiz.title}
                                                deleteQuiz={(qid) => removeQuiz(qid)} />
                                        ) : (
                                            <IoEllipsisVertical />)}
                                    </div>
                                </li>
                            ))}
                    </ul>
                </li>
            </ul>
        </div>
    );
}

