import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as quizClient from './client';
import { useDispatch, useSelector } from 'react-redux';
import { setResult } from '../Results/reducer';

export default function Results() {
    const { qid } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [questions, setQuestions] = useState<any[]>([]);
    const [quiz, setQuiz] = useState<any>(null);
    const { results } = useSelector((state: any) => state.resultsReducer);
    const currentUser = useSelector((state: any) => state.accountReducer.currentUser);
    const userId = currentUser?._id;
    const result = results.find((result: any) => result.user === userId);

    useEffect(() => {
        const fetchQuestions = async () => {
            const fetchedQuestions = await quizClient.findQuestionsForQuiz(qid as string);
            setQuestions(fetchedQuestions);
        };
        fetchQuestions();
        getAllResults();
    }, [qid]);

    const fetchQuiz = async () => {
        const quiz = await quizClient.findQuizById(qid);
        setQuiz(quiz);
    };

    useEffect(() => {
        fetchQuiz();
    }, []);

    const handleRetakeQuiz = () => {
        navigate(`/Kanbas/Courses/${quiz.course}/Quizzes/${qid}/takeQuiz`);
    };

    const getAllResults = async () => {
        const userResults = await quizClient.findResultsForQuiz(qid as string);
        dispatch(setResult(userResults));
    };

    if (!quiz || !result || questions.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            <div className="d-flex justify-content-between align-items-center">
                <h1>Results</h1>
                {(currentUser.role === 'FACULTY' || (quiz.multipleAttempts === "Yes" && result.attempts < quiz.allowedAttempts)) && (
                    <button className="btn btn-danger" onClick={handleRetakeQuiz}>Retake Quiz</button>
                )}
            </div>
            <p><strong>Points Earned:</strong> {result.score}</p>
            <p><strong>Total Possible Points:</strong> {quiz.points}</p>
            <div className="mt-4">
                <h2>Your Answers</h2>
                {questions.map((question: any, index: number) => (
                    <div key={index} className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">{question.title}</h5>
                            <p className="card-text"><strong>Question:</strong> <span dangerouslySetInnerHTML={{ __html: question.text }} /></p>
                            <p className="card-text"><strong>Your Answer:</strong> {result.answers[index]}</p>
                            {quiz.showCorrectAnswers === "Yes" && (
                                <p className="card-text"><strong>Correct Answer:</strong> {question.correctAnswer}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}