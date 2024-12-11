import { FaChevronDown } from "react-icons/fa";
import { Link, useParams, useNavigate } from 'react-router-dom';
import * as db from "../../Database";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addAssignment, updateAssignment } from "./reducer";
import * as coursesClient from "../client";
import * as assignmentClient from "./client";
import * as quizClient from "./client";
import { addQuiz, updateQuiz } from "./reducer";
// import { group } from "console";
import { Tabs, Tab } from "react-bootstrap";
// import { on } from "events";
import QuestionControl from "./QuestionControl";
import ReactQuill from "react-quill";


export default function QuiZEditor() {
    const { cid, qid } = useParams();
    const { quizzes } = useSelector((state: any) => state.quizReducer);
    const [activeTab, setActiveTab] = useState<string>('questions');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isEditing = quizzes.some((quiz: any) => quiz._id === qid);

    const fetchQuiz = async () => {
        const quiz = await quizClient.findQuizById(qid);
        setQuiz(quiz);
    }

    const initialQuiz = {
        _id: qid,
        title: "",
        availability: "Closed",
        points: "100",
        questions: [],
        instructions: "",
        due: "",
        score: "0",
        start: "",
        end: "",
        type: "Graded Quiz",
        group: "Quizzes",
        course: cid,
        shuffleAnswers: "Yes",
        timeLimit: 20,
        multipleAttempts: "No",
        showCorrectAnswers: "Yes",
        accessCode: "",
        oneQuestionAtATime: "Yes",
        webcamRequired: "No",
        lockQuestionsAfterAnswering: "No",


    }

    const [quiz, setQuiz] = useState(initialQuiz);

    const handleSave = async () => {
        if (isEditing) {
            const updatedQuiz = await quizClient.updateQuiz(quiz);
            dispatch(updateQuiz({ ...updatedQuiz, _id: qid }));
        } else {
            const newQuiz = await coursesClient.createQuizForCourse(cid, quiz);
            dispatch(addQuiz(newQuiz));
        }
        navigate(`/Kanbas/courses/${cid}/Quizzes`);
    };

    useEffect(() => {
        if (isEditing) {
            fetchQuiz();
        }
    }, []);

    return (
        <div className="container">
            <Tabs activeKey={activeTab} onSelect={(k) => setActiveTab(k as string)}>
                <Tab eventKey="details" title="Details">
                    <div id="wd-quizzes-editor" className="container">
                        {/* Quiz Name */}
                        <div className="mb-3 justify-content-end align-items-center">
                            <label htmlFor="wd-name" className="form-label">Quiz Name</label>
                            <input
                                id="wd-name"
                                name="title"
                                value={quiz.title}
                                className="form-control"
                                onChange={(e) => setQuiz((prev) => ({ ...prev, title: e.target.value }))}
                            />
                        </div>

                        {/* Quiz Description */}
                        <div className="form-control mb-3 justify-content-end align-items-center" style={{ height: "auto", padding: "15px", fontSize: "16px" }}>
                            <span>Quiz Instructions</span>
                            <br /><br />
                            <ReactQuill
                            value={quiz.instructions}
                            onChange={(value) => setQuiz((prev) => ({ ...prev, instructions: value }))}
                            />
                        </div>

                        {/* Points */}
                        <div className="row mb-3 justify-content-end align-items-center">
                            <label htmlFor="wd-points" className="col-md-3 form-label text-end">Points</label>
                            <div className="col-md-6">
                                <input
                                    id="wd-points"
                                    name="points"
                                    type="number"
                                    value={quiz.points}
                                    className="form-control"
                                    onChange={(e) => setQuiz((prev) => ({ ...prev, points: e.target.value }))}
                                />
                            </div>
                        </div>

                        {/* Quiz Type */}
                        <div className="container">
                            <div className="row mb-3 justify-content-end align-items-center">
                                <label htmlFor="wd-group" className="col-md-3 form-label text-end">Quiz Type</label>
                                <div className="col-md-6">
                                    <div className="input-group">
                                        <select
                                            id="wd-group"
                                            name="quizType"
                                            value={quiz.type}
                                            className="form-control"
                                            onChange={(e) => setQuiz((prev) => ({ ...prev, type: e.target.value }))}
                                        >
                                            <option value="Graded Quiz">Graded Quiz</option>
                                            <option value="Practice Quiz">Practice Quiz</option>
                                            <option value="Graded Survey">Graded Survey</option>
                                            <option value="Ungraded Survey">Ungraded Survey</option>
                                        </select>
                                        <span className="input-group-text bg-white">
                                            <FaChevronDown style={{ fontSize: "20px", color: "#6c757d" }} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Assignment Group */}
                        <div className="container">
                            <div className="row mb-3 justify-content-end align-items-center">
                                <label htmlFor="wd-group" className="col-md-3 form-label text-end">Assignment Group</label>
                                <div className="col-md-6">
                                    <div className="input-group">
                                        <select
                                            id="wd-group"
                                            name="group"
                                            value={quiz.group}
                                            className="form-control"
                                            onChange={(e) => setQuiz((prev) => ({ ...prev, group: e.target.value }))}
                                        >
                                            <option value="Quizzes">QUIZZES</option>
                                            <option value="Assignments">ASSIGNMENTS</option>
                                            <option value="Exams">EXAMS</option>
                                            <option value="Project">PROJECT</option>
                                        </select>
                                        <span className="input-group-text bg-white">
                                            <FaChevronDown style={{ fontSize: "20px", color: "#6c757d" }} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Shuffle Answers */}
                        <div className="container">
                            <div className="row mb-3 justify-content-end align-items-center">
                                <label htmlFor="wd-group" className="col-md-3 form-label text-end">Shuffle Answers</label>
                                <div className="col-md-6">
                                    <select
                                        id="wd-shuffle-answers"
                                        name="shuffleAnswers"
                                        value={quiz.shuffleAnswers}
                                        className="form-control"
                                        onChange={(e) => setQuiz((prev) => ({ ...prev, shuffleAnswers: e.target.value }))}
                                    >
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Time Limit */}
                        <div className="container">
                            <div className="row mb-3 justify-content-end align-items-center">
                                <label htmlFor="wd-time-limit" className="col-md-3 form-label text-end">Time Limit (Minutes)</label>
                                <div className="col-md-6">
                                    <input
                                        id="wd-time-limit"
                                        name="timeLimit"
                                        type="number"
                                        value={quiz.timeLimit}
                                        className="form-control"
                                        onChange={(e) => setQuiz((prev) => ({ ...prev, timeLimit: Number(e.target.value) }))}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Multiple Attempts */}
                        <div className="container">
                            <div className="row mb-3 justify-content-end align-items-center">
                                <label htmlFor="wd-multiple-attempts" className="col-md-3 form-label text-end">Multiple Attempts</label>
                                <div className="col-md-6">

                                    <select
                                        id="wd-multiple-attempts"
                                        name="multipleAttempts"
                                        value={quiz.multipleAttempts}
                                        className="form-control"
                                        onChange={(e) => setQuiz((prev) => ({ ...prev, multipleAttempts: e.target.value }))}
                                    >
                                        <option value="No">No</option>
                                        <option value="Yes">Yes</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Show Correct Answers */}
                        <div className="container">
                            <div className="row mb-3 justify-content-end align-items-center">
                                <label htmlFor="wd-multiple-attempts" className="col-md-3 form-label text-end">Show Correct Answers</label>
                                <div className="col-md-6">

                                    <select
                                        id="wd-show-correct-answers"
                                        name="showCorrectAnswers"
                                        value={quiz.showCorrectAnswers}
                                        className="form-control"
                                        onChange={(e) => setQuiz((prev) => ({ ...prev, showCorrectAnswers: e.target.value }))}
                                    >
                                        <option value="No">No</option>
                                        <option value="Yes">Yes</option>
                                    </select>
                                </div>
                            </div>
                        </div>


                        {/* Access Code */}
                        <div className="container">
                            <div className="row mb-3 justify-content-end align-items-center">
                                <label htmlFor="wd-show-correct-answers" className="col-md-3 form-label text-end">Access Code</label>
                                <div className="col-md-6">

                                    <input
                                        id="wd-access-code"
                                        name="accessCode"
                                        value={quiz.accessCode}
                                        className="form-control"
                                        onChange={(e) => setQuiz((prev) => ({ ...prev, accessCode: e.target.value }))}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* One Question at a time */}
                        <div className="container">
                            <div className="row mb-3 justify-content-end align-items-center">
                                <label htmlFor="wd-multiple-attempts" className="col-md-3 form-label text-end">One Question at a time</label>
                                <div className="col-md-6">

                                    <select
                                        id="wd-one-question-at-a-time"
                                        name="oneQuestionAtATime"
                                        value={quiz.oneQuestionAtATime}
                                        className="form-control"
                                        onChange={(e) => setQuiz((prev) => ({ ...prev, oneQuestionAtATime: e.target.value }))}
                                    >
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                            </div>
                        </div>


                        {/* Webcam Required */}
                        <div className="container">
                            <div className="row mb-3 justify-content-end align-items-center">
                                <label htmlFor="wd-multiple-attempts" className="col-md-3 form-label text-end">Webcam Required</label>
                                <div className="col-md-6">

                                    <select
                                        id="wd-webcam-required"
                                        name="webcamRequired"
                                        value={quiz.webcamRequired}
                                        className="form-control"
                                        onChange={(e) => setQuiz((prev) => ({ ...prev, webcamRequired: e.target.value }))}
                                    >
                                        <option value="No">No</option>
                                        <option value="Yes">Yes</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Lock Questions after answering */}
                        <div className="container">
                            <div className="row mb-3 justify-content-end align-items-center">
                                <label htmlFor="wd-multiple-attempts" className="col-md-3 form-label text-end">Lock Questions after answering</label>
                                <div className="col-md-6">

                                    <select
                                        id="wd-lock-questions-after-answering"
                                        name="lockQuestionsAfterAnswering"
                                        value={quiz.lockQuestionsAfterAnswering}
                                        className="form-control"
                                        onChange={(e) => setQuiz((prev) => ({ ...prev, lockQuestionsAfterAnswering: e.target.value }))}
                                    >
                                        <option value="No">No</option>
                                        <option value="Yes">Yes</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Due Date, Available From, Until */}
                        <div className="container">
                            <div className="row mb-3 justify-content-end align-items-center">
                                <label htmlFor="wd-due-date" className="col-md-3 form-label text-end">Due Date</label>
                                <div className="col-md-6">
                                    <input
                                        id="wd-due-date"
                                        type="datetime-local"
                                        name="due"
                                        value={quiz.due}
                                        className="form-control"
                                        onChange={(e) => setQuiz((prev) => ({ ...prev, due: e.target.value }))}
                                    />
                                </div>
                            </div>
                            <div className="row mb-3 justify-content-end align-items-center">
                                <label htmlFor="wd-available-from" className="col-md-3 form-label text-end">Available from</label>
                                <div className="col-md-6">
                                    <input
                                        id="wd-available-from"
                                        type="datetime-local"
                                        name="start"
                                        value={quiz.start}
                                        className="form-control"
                                        onChange={(e) => setQuiz((prev) => ({ ...prev, start: e.target.value }))}
                                    />
                                </div>
                            </div>
                            <div className="row mb-3 justify-content-end align-items-center">
                                <label htmlFor="wd-available-until" className="col-md-3 form-label text-end">Until</label>
                                <div className="col-md-6">
                                    <input
                                        id="wd-available-until"
                                        type="datetime-local"
                                        name="end"
                                        value={quiz.end}
                                        className="form-control"
                                        onChange={(e) => setQuiz((prev) => ({ ...prev, end: e.target.value }))}
                                    />
                                </div>
                            </div>
                        </div>


                        {/* Save and Cancel Buttons */}
                        <div className="d-flex justify-content-end mt-3">
                            <Link to={`/Kanbas/courses/${cid}/Quizzes`} className="btn btn-secondary me-2">
                                Cancel
                            </Link>
                            <button onClick={handleSave} className="btn btn-danger me-2">
                                Save
                            </button>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="questions" title="Questions">
                    <div className="mt-3">
                        <QuestionControl/>
                    </div>
                </Tab>
            </Tabs>
        </div>

    );
}
