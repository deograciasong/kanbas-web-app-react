import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import * as quizClient from "./client";
import DetailsControlButtons from "./DetailsControlButtons";
import { useSelector } from "react-redux";

export default function QuizDetails() {
    const { qid } = useParams();
    const navigate = useNavigate();
    const [quiz, setQuiz] = useState<any>(null);
    const {currentUser} = useSelector((state: any) => state.accountReducer);


    const fetchQuiz = async () => {
        const quiz = await quizClient.findQuizById(qid);
        setQuiz(quiz);
    }

    useEffect(() => {
        fetchQuiz();
    }, []);


    if (!quiz) {
        return <div>Quiz not found</div>;
    }

    const handleTakeQuiz = () => {
        navigate(`/Kanbas/Courses/${quiz.course}/Quizzes/${qid}/takeQuiz`);
    };

    return (
        <div className="container">
            {currentUser.role === 'FACULTY' && <DetailsControlButtons />}
            <div className="d-flex justify-content-between align-items-center">
                <h1>{quiz.title}</h1>
                {currentUser.role === 'STUDENT' && (
                    <button className="btn btn-danger" onClick={handleTakeQuiz}>Take Quiz</button>
                )}
            </div>
            <div className="mb-4">
                <div className="row mb-2">
                    <div className="col text-end">
                        <strong>Quiz Type</strong>:
                    </div>
                    <div className="col text-start">
                        {quiz.type}
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col text-end">
                        <strong>Points</strong>:
                    </div>
                    <div className="col text-start">
                        {quiz.points}
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col text-end">
                        <strong>Assignment Group</strong>:
                    </div>
                    <div className="col text-start">
                        {quiz.group}
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col text-end">
                        <strong>Shuffle Answers</strong>:
                    </div>
                    <div className="col text-start">
                        {quiz.shuffleAnswers}
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col text-end">
                        <strong>Time Limit</strong>:
                    </div>
                    <div className="col text-start">
                        {quiz.timeLimit} Minutes
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col text-end">
                        <strong>Multiple Attempts</strong>:
                    </div>
                    <div className="col text-start">
                        {quiz.multipleAttempts}
                    </div>
                </div>
                {quiz.multipleAttempts === "Yes" && (
                    <div className="row mb-2">
                        <div className="col text-end">
                            <strong>How Many Attempts</strong>:
                        </div>
                        <div className="col text-start">
                            {quiz.howManyAttempts}
                        </div>
                    </div>
                )}
                <div className="row mb-2">
                    <div className="col text-end">
                        <strong>Show Correct Answers</strong>:
                    </div>
                    <div className="col text-start">
                        {quiz.showCorrectAnswers}
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col text-end">
                        <strong>Access Code</strong>:
                    </div>
                    <div className="col text-start">
                        {quiz.accessCode}
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col text-end">
                        <strong>One Question at a Time</strong>:
                    </div>
                    <div className="col text-start">
                        {quiz.oneQuestionAtATime}
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col text-end">
                        <strong>Webcam Required</strong>:
                    </div>
                    <div className="col text-start">
                        {quiz.webcamRequired}
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col text-end">
                        <strong>Lock Questions After Answering</strong>:
                    </div>
                    <div className="col text-start">
                        {quiz.lockQuestionsAfterAnswering}
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col text-end">
                        <strong>Due Date</strong>:
                    </div>
                    <div className="col text-start">
                        {quiz.due}
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col text-end">
                        <strong>Available From</strong>:
                    </div>
                    <div className="col text-start">
                        {quiz.start}
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col text-end">
                        <strong>Until</strong>:
                    </div>
                    <div className="col text-start">
                        {quiz.end}
                    </div>
                </div>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Due</th>
                        <th>For</th>
                        <th>Available from</th>
                        <th>Until</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{quiz.due}</td>
                        <td>Everyone</td>
                        <td>{quiz.start}</td>
                        <td>{quiz.end}</td>
                    </tr>
                </tbody>
            </table>
        </div >
    );
}